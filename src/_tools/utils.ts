import { notifications } from "@mantine/notifications"



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
    amount = parseFloat(amount)
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