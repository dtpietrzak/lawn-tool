import { notifications } from "@mantine/notifications"
import isObject from 'isobject'



interface NestedObject {
  [key: string]: NestedObject | any;
}

export class DeepSetter<T extends NestedObject> {
  obj: T;
  path: string;
  itemsSet: string[] = [];

  constructor(obj: T, path?: string) {
    this.obj = obj
    this.path = path ?? ''
  }

  public get(subPath?: string): any {
    if (!subPath) {
      return this.obj; // If no subPath is provided, return the entire object
    }

    const keyString = (`${this.path ? `${this.path}.` : ''}${subPath}`)
    const keys = keyString.split('.');
    let result = this.obj;

    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        // If any key in the path is missing or not an object, return undefined
        return undefined;
      }
    }

    return result;
  }

  public set(subPath: string, value: any) {
    const keyString = (`${this.path ? `${this.path}.` : ''}${subPath}`)
    const keys = keyString.split('.');
    let target = this.obj;

    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      // Initialize nested object if it doesn't exist
      if (!target[key] || typeof target[key] !== 'object') {
        // @ts-ignore
        target[key] = {};
      }
      target = target[key]; // Update the target for the next iteration
    }

    // Set the value at the deepest nested property
    // @ts-ignore
    target[keys[keys.length - 1]] = value;
  }
}


export const getValidatedZip = (zip_code?: string): string | void => {
  if (zip_code) {
    if (typeof zip_code !== 'string') return
    if (/^\d{5}$/.test(zip_code)) return zip_code
    else return
  }
  if (typeof window === 'undefined') return
  const zipCodeLS = window.localStorage.getItem('default-zipcode')
  if (zipCodeLS) {
    try {
      const parsedZip: string = JSON.parse(zipCodeLS)
      if (!parsedZip) return
      if (typeof parsedZip !== 'string') return
      if (/^\d{5}$/.test(parsedZip)) return parsedZip
      else return
    } catch {
      console.error('zipcode from local storage failed')
      return
    }
  }
}


export const isValidAmount = (amount: number | string) => {
  if (!amount) {
    notifications.show({
      title: 'No amount entered',
      message: 'Please enter an amount',
      color: 'red',
      autoClose: 2000,
    })
    return false
  }
  if (typeof amount === 'string') {
    try {
      amount = parseFloat(amount)
    } catch {
      notifications.show({
        title: 'Invalid amount entered',
        message: 'Please enter a valid number',
        color: 'red',
        autoClose: 2000,
      })
      return false
    }
  }
  if (isNaN(amount)) {
    notifications.show({
      title: 'Invalid amount',
      message: 'Please enter a valid amount',
      color: 'red',
      autoClose: 2500,
    })
    return false
  }
  return true
}


export type Idi = string | number

export type ObjectWithId<T extends {
  id: string
} = { id: string }> = T

export const arrays = {
  getElement<T extends ObjectWithId>(
    array: T[] | undefined,
    idi: string | number | (string | number)[] | undefined,
    appendError?: string,
  ): [T, number] {
    if (!array) {
      throw new Error(`Tried arrays.getElement without an array ${appendError}`)
    }
    if (typeof idi === 'undefined') {
      throw new Error(`Tried arrays.getElement without an identifier ${appendError}`)
    }
    if (!Array.isArray(array)) {
      throw new Error(`Tried arrays.getElement on something that isn\'t an array: ${typeof array} ${appendError}.${idi.toString()}`)
    }

    let index = 0

    switch (typeof idi) {
      case 'string': {
        const item = array.find((item, i) => {
          index = i
          return item.id === idi
        })
        if (!item) throw new Error(`Tried arrays.getElement but item could not be found ${appendError}.${idi.toString()}`)
        console.log(`${appendError}.${idi.toString()} INDEX: ${index}`)
        return [item, index]
      }
      case 'number': {
        index = idi
        return [array[idi], index]
      }
      default: {
        if (Array.isArray(idi)) {
          const bestIdi = ensureOneExists(...idi)
          if (typeof bestIdi === 'number') {
            index = bestIdi
            return [array[bestIdi], index]
          } else if (typeof bestIdi === 'string') {
            const item = array.find((item, i) => {
              index = i
              return item.id === bestIdi
            })
            if (!item) throw new Error(`Tried arrays.getElement but item could not be found ${appendError}.${idi.toString()}`)
            return [item, index]
          }
        }
        throw new Error(`Tried arrays.getElement but identifier is not a string nor a number ${appendError}.${idi.toString()}`)
      }
    }
  },
}


export const objects = {
  mergeDownTwo<T extends Record<string, unknown>>(
    object: T,
    key: keyof T,
    data: Record<string, unknown>,
    id: string,
  ): T {
    if (!isObject(object[key])) {
      throw new Error('object[key] is not an object')
    }
    // @ts-ignore
    if (!object[key]?.[id] || !isObject(object[key]?.[id])) {
      throw new Error('object[key]?.[id] is not an object')
    }

    return {
      ...object,
      [key]: {
        ...(object[key] as Record<string, unknown>),
        [id]: {
          // @ts-ignore
          ...(object[key][id] as Record<string, unknown>),
          ...data,
        }
      }
    }
  },
}

export const ensureOneExists = <T extends unknown = unknown>(
  ...args: T[]
) => {
  let found
  for (let i = 0; i < args.length; i++) {
    if (args?.[i]) {
      found = args[i]
      break
    }
  }
  if (!found) throw new Error('failed to ensureOneExists')
  return found
}