'use client'

import { useUser } from '@clerk/nextjs'
import { FC, createContext, useContext } from 'react'

export type UserData = {
  tabOptions: {
    forecast: {
      temps: boolean
      date: boolean
      growth: boolean
      rainChance: boolean
      descriptions: boolean
    }
  }
}

export type UserContext = {
  id: string
  auth: ReturnType<typeof useUser>
  userData: UserData
  setUserData: (userData: UserData) => UserData
  updateUserData: (userData: UserData) => UserData
}

const defaultUserData: UserData = {
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

const defaultUserContext: UserContext = {
  id: '',
  auth: {
    isLoaded: false,
    isSignedIn: undefined,
    user: undefined,
  },
  userData: defaultUserData,
  setUserData: () => defaultUserData,
  updateUserData: () => defaultUserData,
}

export const UserDataContext = createContext(defaultUserContext)

export type UserDataProviderProps = {
  children: React.ReactNode
}

export const UserDataProvider: FC<UserDataProviderProps> = ({
  children,
}) => {
  const auth = useUser()

  const value: UserContext = {
    id: auth.user ? auth.user.id : '',
    auth: auth,
    userData: defaultUserData,
    setUserData: defaultUserContext.setUserData,
    updateUserData: defaultUserContext.updateUserData,
  }

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  )
}

export const useUserData = () => useContext(UserDataContext)

export default useUserData