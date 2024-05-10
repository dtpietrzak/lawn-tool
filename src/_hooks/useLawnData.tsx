'use client'

import { collection, query, where, getDoc, DocumentReference, and, FirestoreDataConverter, QueryDocumentSnapshot, DocumentData, setDoc, doc, SetOptions, PartialWithFieldValue } from 'firebase/firestore'
import { FC, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import useUserData from './useUserData'

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
  id: string
  datetime: Date
} & LawnEventMeta<T>

export type Note = {
  id: string
  title: string
  note: string
  order: number
}

export type LawnData = {
  id: string
  owner: string
  events: Record<string, LawnEvent>
  notes: Record<string, Note>
  properties: {
    name: string
    size: number
    zipcode: string
  }
}

const defaultLawnData: LawnData = {
  id: '',
  owner: '',
  events: {},
  notes: {},
  properties: {
    name: '',
    size: 1,
    zipcode: '',
  }
}

export type LawnDataContextType = {
  lastMow: LawnEvent<'mow'> | undefined
  lawnList: string[]
  lawnData: LawnData[]
  eventsArray: LawnEvent[]
  notesArray: Note[]
  setLawnData: (lawnData: LawnData) => LawnData
  updateLawnData: (lawnData: LawnData) => LawnData
}

export const defaultContext: LawnDataContextType = {
  lastMow: undefined,
  lawnList: [],
  lawnData: [defaultLawnData],
  eventsArray: [],
  notesArray: [],
  setLawnData: (lawnData: LawnData) => lawnData,
  updateLawnData: (lawnData: LawnData) => lawnData,
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
  const { id } = useUserData()
  const firestore = useFirestore()
  const lawnsCollection = collection(firestore, 'lawns')
    .withConverter(lawnDataConverter)
  const lawnsQuery = query<LawnData>(lawnsCollection, where('owner', '==', id))

  const { status, data, error } = useFirestoreCollectionData<LawnData>(lawnsQuery, {
    idField: 'id',
    initialData: [defaultLawnData],
  })

  const lawnDataContext: LawnDataContextType = useMemo(() => {
    if (!data) return defaultContext
    const viewingLawn: LawnData = lawnId ?
      data.find((lawn) => lawn.id === lawnId) ?? data?.[0] ?? defaultLawnData
      :
      data?.[0] ?? defaultLawnData

    const lawnList = data.map((lawn) => lawn.id)
    const eventsArray = Object.entries(viewingLawn.events)
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
      })

    const lastMow = eventsArray
      .filter((lawnEvent) => {
        return lawnEvent.type !== 'mow'
      })?.[0] as LawnEvent<'mow'> ?? undefined

    const notesArray = Object.entries(viewingLawn.notes)
      .map(([key, note]) => ({
        ...note,
        id: key,
      }))
      .sort((a, b) => {
        return (
          new Date(a.order).getTime() - new Date(b.order).getTime()
        )
      })

    return {
      lastMow: lastMow,
      lawnList: lawnList,
      lawnData: data,
      eventsArray: eventsArray,
      notesArray: notesArray,
      setLawnData: (lawnData: LawnData) => lawnData,
      updateLawnData: (lawnData: LawnData) => lawnData,
    }
  }, [data, lawnId])

  return (
    <LawnDataContext.Provider
      value={lawnDataContext}
    >
      {children}
    </LawnDataContext.Provider>
  )
}

export const useLawnData = () => useContext(LawnDataContext)

export default useLawnData