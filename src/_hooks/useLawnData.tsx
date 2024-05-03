'use client'

import { FC, createContext, useContext } from 'react'

export type LawnData = {
  id: string
  height: number,
}

const defaultLawnData: LawnData = {
  id: '',
  height: 0,
}

export const defaultContext = {
  lawnData: defaultLawnData,
  setLawnData: (lawnData: LawnData) => lawnData,
  updateLawnData: (lawnData: LawnData) => lawnData,
}

export const LawnDataContext = createContext(defaultContext)

export type LawnDataProviderProps = {
  children: React.ReactNode
}

export const LawnDataProvider: FC<LawnDataProviderProps> = ({
  children,
}) => {


  return (
    <LawnDataContext.Provider value={defaultContext}>
      {children}
    </LawnDataContext.Provider>
  )
}

export const useLawnData = () => useContext(LawnDataContext)

export default useLawnData