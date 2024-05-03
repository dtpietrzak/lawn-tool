'use client'

import { FC, createContext, useContext } from 'react'

export type UserData = {
  id: string,
  tabOptions: {
    forecast: {
      temps: boolean,
      date: boolean,
      growth: boolean,
      rainChance: boolean,
      descriptions: boolean,
    }
  }
}

const defaultUserData: UserData = {
  id: '',
  tabOptions: {
    forecast: {
      temps: true,
      date: true,
      growth: true,
      rainChance: true,
      descriptions: true,
    }
  }
}

export const defaultContext = {
  userData: defaultUserData,
  setUserData: (userData: UserData) => userData,
  updateUserData: (userData: UserData) => userData,
}

export const UserDataContext = createContext(defaultContext)

export type UserDataProviderProps = {
  children: React.ReactNode
}

export const UserDataProvider: FC<UserDataProviderProps> = ({
  children,
}) => {


  return (
    <UserDataContext.Provider value={defaultContext}>
      {children}
    </UserDataContext.Provider>
  )
}

export const useUserData = () => useContext(UserDataContext)

export default useUserData