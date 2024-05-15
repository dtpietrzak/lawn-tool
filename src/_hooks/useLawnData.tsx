'use client'

import { collection, query, where, getDoc, DocumentReference, and, FirestoreDataConverter, QueryDocumentSnapshot, DocumentData, setDoc, doc, SetOptions, PartialWithFieldValue, updateDoc, addDoc } from 'firebase/firestore'
import { Dispatch, FC, SetStateAction, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import useUserData from './useUserData'
import { SetPartialableStateAction, SetPartialableStateWithId } from '@/app/types'
import { Idi, arrays, objects } from '@/_tools/utils'

export type LawnEventType = 'mow' | 'fert'

export type LawnEventMeta<T extends LawnEventType = LawnEventType> =
  T extends 'mow' ? {
    type: T
    meta: {
      height: number
    }
  }
  :
  T extends 'fert' ? {
    type: T
    meta: {
      amount: number
      amountType: 'lbs/sqft' | 'lbs/acre'
      name: string
      n: number,
      p: number,
      k: number,
    }
  }
  : never

export type LawnEvent<T extends LawnEventType = LawnEventType> = {
  id?: string
  datetime: Date
} & LawnEventMeta<T>

export type Note = {
  id: string
  title: string
  note: string
  order: number
}

export type LawnProperties = {
  name: string
  size: number
  zipcode: string
  mow: number
}

export type NewLawnData = {
  events: Record<string, LawnEvent>
  notes: Record<string, Note>
  properties: LawnProperties
}

export type LawnData = {
  id: string
  owner: string
} & NewLawnData

export const defaultLawnData: LawnData = {
  id: '',
  owner: '',
  events: {},
  notes: {},
  properties: {
    name: '',
    size: 1,
    zipcode: '',
    mow: 3,
  }
}

export type LawnDataContextType = {
  lastMow?: Readonly<LawnEvent<'mow'> & { index: number }> | undefined
  lawnList?: readonly string[]
  lawnData?: Readonly<LawnData[]>
  viewingLawn?: Readonly<LawnData> | undefined
  eventsArray?: Readonly<LawnEvent[]>
  notesArray?: Readonly<Note[]>
  addLawnData: (
    lawn_data: Partial<LawnData>,
  ) => Promise<DocumentReference<DocumentData>>
  /**
  * sets the lawn data locally, like React setState
  * @param lawnData 
  * @returns 
  */
  setLawnData: (
    lawn_data: SetPartialableStateAction<LawnData>,
    idi: Idi,
  ) => void
  /**
  * updates the lawn data in firebase and locally
  * 
  * the local part of the update is done by an internal React setState
  * 
  * so it'll automatically re-render when the local state changes
  * @param lawnData 
  * @returns 
  */
  updateLawnData: (
    lawn_data: Partial<LawnData>,
    id: LawnData['id'],
  ) => Promise<void>

  addNote: (
    note_data: Exclude<Note, 'id'>,
    lawn_id: LawnData['id'],
  ) => Promise<void>
  setNoteData: (
    note_data: Partial<Note>,
    note_id: string,
    lawn_idi: Idi,
  ) => [LawnData, number]
  updateNote: (
    note_data: Partial<Note>,
    note_id: Note['id'],
    lawn_id: LawnData['id'],
  ) => Promise<void>

  addEvent: (
    event_data: Exclude<LawnEvent, 'id'>,
    lawn_id: LawnData['id'],
  ) => Promise<void>
  setEventData: <T extends LawnEventType = LawnEventType>(
    event_data: Partial<LawnEvent<T>>,
    event_id: string,
    lawn_idi: Idi,
  ) => [LawnData, number]
  updateEvent: <T extends LawnEventType = LawnEventType>(
    event_data: Partial<LawnEvent<T>>,
    event_id: string,
    lawn_id: string,
  ) => Promise<void>
  deleteEvent: (
    event_id: string,
    lawn_id: string,
  ) => Promise<void>
}

export const defaultContext: LawnDataContextType = {
  lastMow: undefined,
  lawnList: undefined,
  lawnData: undefined,
  viewingLawn: undefined,
  eventsArray: undefined,
  notesArray: undefined,
  addLawnData: (_) => {
    throw new Error('Attempting addLawnData before it was initialized')
  },
  setLawnData: (_) => {
    throw new Error('Attempting setLawnData before it was initialized')
  },
  updateLawnData: (_) => {
    throw new Error('Attempting updateLawnData before it was initialized')
  },
  addNote: (_) => {
    throw new Error('Attempting addNote before it was initialized')
  },
  setNoteData: (_) => {
    throw new Error('Attempting setNoteData before it was initialized')
  },
  updateNote: (_) => {
    throw new Error('Attempting updateNote before it was initialized')
  },
  addEvent: (_) => {
    throw new Error('Attempting addEvent before it was initialized')
  },
  setEventData: (_) => {
    throw new Error('Attempting setEventData before it was initialized')
  },
  updateEvent: (_) => {
    throw new Error('Attempting updateEvent before it was initialized')
  },
  deleteEvent: (_) => {
    throw new Error('Attempting deleteEvent before it was initialized')
  },
}

export const LawnDataContext = createContext(defaultContext)

export type LawnDataProviderProps = {
  lawnId?: string
  children: React.ReactNode
}

const lawnDataConverter: FirestoreDataConverter<LawnData> = {
  fromFirestore(snapshot, options) {
    return snapshot.data() as LawnData
  },
  toFirestore(modelObject: PartialWithFieldValue<LawnData>) {
    return {
      owner: modelObject.owner ?? '',
      events: modelObject.events ?? {},
      notes: modelObject.notes ?? {},
      properties: modelObject.properties ?? {}
    }
  },
}

export const LawnDataProvider: FC<LawnDataProviderProps> = ({
  lawnId,
  children,
}) => {
  const { id: userId } = useUserData()
  const firestore = useFirestore()
  const lawnsCollection = collection(firestore, 'lawns')
    .withConverter(lawnDataConverter)
  const lawnsQuery = query<LawnData>(
    lawnsCollection, where('owner', '==', userId),
  )

  const { data } = useFirestoreCollectionData<LawnData>(lawnsQuery, {
    idField: 'id',
    initialData: undefined,
  })

  const [lawnData, _setLawnData] = useState<LawnData[] | undefined>(data)
  useEffect(() => { _setLawnData(data as LawnData[]) }, [data])

  const addLawnData = useCallback(async (
    lawn_data: Partial<LawnData>,
  ) => {
    try {
      const docRef = collection(firestore, 'lawns')
      return await addDoc(docRef, lawn_data)
    } catch (err: any) {
      throw new Error(err)
    }
  }, [firestore])

  const setLawnData = useCallback((
    lawn_data: SetPartialableStateAction<LawnData>,
    idi: Idi,
  ) => {
    _setLawnData((prev) => {
      if (!prev) throw new Error('setLawnData was used before lawnData was initialized')

      let [prev_lawn, prev_lawn_i] = arrays.getElement(prev, idi)

      let new_lawn
      if (typeof lawn_data === 'function') {
        new_lawn = lawn_data(prev_lawn)
      } else {
        new_lawn = lawn_data
      }

      prev[prev_lawn_i] = {
        ...prev_lawn,
        ...new_lawn,
      }
      return prev
    })
  }, [])

  const updateLawnData = useCallback(async (
    lawn_data: Partial<LawnData>,
    id: LawnData['id'],
  ) => {
    try {
      // this will update on firebase, which will cause the listener to update "data" which will trigger the useEffect which will set user data locally.
      const docRef = doc(firestore, `lawns/${id}`)
      await updateDoc(docRef, lawn_data)
    } catch (err: any) {
      throw new Error(err)
    }
  }, [firestore])

  const addNote = useCallback(async (
    note_data: Exclude<Note, 'id'>,
    lawn_id: LawnData['id'],
  ) => {
    const newId = doc(firestore, `lawns/${lawn_id}`).id
    const docRef = doc(firestore, `lawns/${lawn_id}`)
    const [prev_lawn] = arrays.getElement(lawnData, lawn_id,
      'addNote'
    )
    const new_lawn = {
      ...prev_lawn,
      notes: {
        [newId]: note_data,
        ...prev_lawn.notes,
      }
    }
    await updateDoc(docRef, new_lawn)
  }, [firestore, lawnData])

  const setNoteData = useCallback((
    note_data: Partial<Note>,
    note_id: string,
    lawn_idi: Idi,
  ): [LawnData, number] => {
    const [prev_lawn, prev_lawn_i] = arrays.getElement(lawnData, lawn_idi,
      'setNoteData'
    )
    const new_lawn = objects.mergeDownTwo(
      prev_lawn, 'notes',
      note_data, note_id,
    )
    setLawnData(new_lawn, prev_lawn_i)
    return [new_lawn, prev_lawn_i]
  }, [lawnData, setLawnData])

  const updateNote = useCallback(async (
    note_data: Partial<Note>,
    note_id: Note['id'],
    lawn_id: LawnData['id'],
  ) => {
    const [new_lawn_data] = setNoteData(
      note_data, note_id, lawn_id
    )
    const docRef = doc(firestore, `lawns/${lawn_id}`)
    await updateDoc(docRef, new_lawn_data)
  }, [firestore, setNoteData])

  const addEvent = useCallback(async (
    event_data: Exclude<LawnEvent, 'id'>,
    lawn_id: LawnData['id'],
  ) => {
    const newId = doc(firestore, `lawns/${lawn_id}`).id
    const docRef = doc(firestore, `lawns/${lawn_id}`)
    const [prev_lawn] = arrays.getElement(lawnData, lawn_id,
      'addEvent'
    )
    const new_lawn = {
      ...prev_lawn,
      events: {
        [newId]: event_data,
        ...prev_lawn.events,
      }
    }
    await updateDoc(docRef, new_lawn)
  }, [firestore, lawnData])

  const setEventData = useCallback(<T extends LawnEventType = LawnEventType>(
    event_data: Partial<LawnEvent<T>>,
    event_id: string,
    lawn_idi: Idi,
  ): [LawnData, number] => {
    const [prev_lawn, prev_lawn_i] = arrays.getElement(lawnData, lawn_idi,
      'setEventData'
    )
    const new_lawn = objects.mergeDownTwo(
      prev_lawn, 'events',
      event_data, event_id,
    )
    setLawnData(new_lawn, prev_lawn_i)
    return [new_lawn, prev_lawn_i]
  }, [lawnData, setLawnData])

  const updateEvent = useCallback(async <
    T extends LawnEventType = LawnEventType
  >(
    event_data: Partial<LawnEvent<T>>,
    event_id: string,
    lawn_id: string,
  ) => {
    const [new_lawn_data] = setEventData(
      event_data, event_id, lawn_id
    )
    const docRef = doc(firestore, `lawns/${lawn_id}`)
    await updateDoc(docRef, new_lawn_data)
  }, [firestore, setEventData])

  const deleteEvent = useCallback(async (event_id: string, lawn_id: string) => {
    const [prev_lawn, prev_lawn_i] = arrays.getElement(lawnData, lawn_id,
      'deleteEvent'
    )
    const new_lawn = { ...prev_lawn }
    delete new_lawn.events[event_id]
    const docRef = doc(firestore, `lawns/${lawn_id}`)
    await updateDoc(docRef, new_lawn)
  }, [firestore, lawnData])

  const lawnDataContext: LawnDataContextType = useMemo(() => {
    const viewingLawn = deriveViewingLawn(lawnData, lawnId)

    const lawnList: Readonly<string[]> | undefined =
      lawnData ? lawnData.map((lawn) => lawn.id) : undefined

    const eventsArray: Readonly<LawnEvent[]> | undefined = viewingLawn ? Object.entries(viewingLawn.events)
      .map(([key, lawnEvent]) => ({
        ...lawnEvent,
        // @ts-expect-error converting firebase's datetime to JS date object
        datetime: new Date(lawnEvent.datetime.seconds * 1000),
        id: key,
      }))
      .sort((a, b) => {
        return (
          a.datetime.getTime() - b.datetime.getTime()
        )
      }) : undefined

    let lastMow: LawnDataContextType['lastMow'] = undefined

    if (eventsArray?.length && eventsArray.length > 0) {
      let _lastMowIndex = 0
      const _lastMowData: LawnEvent<'mow'> | undefined = eventsArray.find(
        (lawnEvent, i) => {
          _lastMowIndex = i
          return lawnEvent.type === 'mow'
        }
      ) as LawnEvent<'mow'>

      if (_lastMowData) {
        lastMow = Object.freeze({ ..._lastMowData, index: _lastMowIndex })
      }
    }

    const notesArray: Readonly<Note[]> | undefined =
      viewingLawn ? Object.entries(viewingLawn.notes)
        .map(([key, note]) => ({
          ...note,
          id: key,
        }))
        .sort((a, b) => {
          return (
            new Date(a.order).getTime() - new Date(b.order).getTime()
          )
        }) : undefined

    return {
      viewingLawn: viewingLawn,
      lastMow: lastMow,
      lawnList: lawnList,
      lawnData: lawnData,

      eventsArray: eventsArray,
      notesArray: notesArray,

      addLawnData: addLawnData,
      setLawnData: setLawnData,
      updateLawnData: updateLawnData,

      addNote: addNote,
      setNoteData: setNoteData,
      updateNote: updateNote,

      addEvent: addEvent,
      setEventData: setEventData,
      updateEvent: updateEvent,
      deleteEvent: deleteEvent,
    }
  }, [addEvent, addLawnData, addNote, deleteEvent, lawnData, lawnId, setEventData, setLawnData, setNoteData, updateEvent, updateLawnData, updateNote])

  console.log(lawnDataContext.lastMow)

  return (
    <LawnDataContext.Provider
      value={lawnDataContext}
    >
      {children}
    </LawnDataContext.Provider>
  )
}

const deriveViewingLawn = (lawnData?: LawnData[], lawnId?: LawnData['id']) => {
  if (!lawnData) return undefined
  if (lawnData.length === 0) return undefined
  if (!lawnId) return undefined
  let viewingLawn = lawnData.find((lawn) => lawn.id === lawnId)
  if (!viewingLawn) return undefined
  return Object.freeze(viewingLawn)
}

export const useLawnData = () => useContext(LawnDataContext)

export default useLawnData