'use client'

import { useAuth as useClerkAuth, useUser as useClerkUser } from '@clerk/nextjs'
import { FC, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useFirestoreDocData, useAuth as useFirebaseAuth, useDatabase, useDatabaseObjectData, useFirestore } from 'reactfire'
import { signInWithCustomToken, updateEmail } from 'firebase/auth'
import { ref, get, set } from 'firebase/database'
import { doc } from 'firebase/firestore'

export type Auth = {
  email: string
  clerkAuth: ReturnType<typeof useClerkAuth> | null
  firebaseAuth: ReturnType<typeof useFirebaseAuth> | null
  signOut: () => Promise<void>
  isLockedAndLoaded: boolean
}

export type UserDataProviderProps = {
  children: React.ReactNode
}

export const UserDataProvider: FC<UserDataProviderProps> = ({
  children,
}) => {
  const clerkAuth = useClerkAuth()
  const clerkUser = useClerkUser()
  const firebaseAuth = useFirebaseAuth()
  const database = useDatabase()

  const primaryEmail = clerkUser.user?.primaryEmailAddress?.emailAddress

  const [isLockedAndLoaded, setIsLockedAndLoaded] = useState<boolean>(Boolean(
    clerkAuth.isLoaded &&
    clerkAuth.isSignedIn &&
    firebaseAuth?.currentUser?.uid
  ))

  const syncAuthWithFirebase = useCallback(async () => {
    const token = await clerkAuth.getToken({ template: 'integration_firebase' })
    const userCredentials = await signInWithCustomToken(firebaseAuth, token || '')

    if (primaryEmail && userCredentials.user.email !== primaryEmail) {
      await updateEmail(userCredentials.user, primaryEmail)
    }

    const databaseRef = ref(database, `users/${userCredentials.user.uid}`)
    const snapshot = await get(databaseRef)
    if (!snapshot.exists()) {
      set(databaseRef, defaultUserData)
    }

    setIsLockedAndLoaded(Boolean(
      clerkAuth.isLoaded &&
      clerkAuth.isSignedIn &&
      firebaseAuth?.currentUser?.uid
    ))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clerkAuth.userId])

  useEffect(() => {
    if (clerkAuth.isLoaded && clerkAuth.isSignedIn) {
      syncAuthWithFirebase()
    }
  }, [clerkAuth.isLoaded, clerkAuth.isSignedIn, syncAuthWithFirebase])

  const auth: Auth = {
    email: clerkUser.user?.primaryEmailAddress?.emailAddress || '',
    clerkAuth: clerkAuth,
    firebaseAuth: firebaseAuth,
    signOut: async () => {
      await clerkAuth.signOut()
      await firebaseAuth.signOut()
    },
    isLockedAndLoaded: isLockedAndLoaded,
  }

  return (
    isLockedAndLoaded ?
      <UserDataLoader auth={auth}>
        {children}
      </UserDataLoader>
      :
      children
  )
}

export type UserData = {
  lastLawnViewed: string | undefined,
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

export type UserDataContext = {
  id: string
  auth: Auth
  userDataStatus: ReturnType<typeof useFirestoreDocData>['status']
  userData: UserData
  setUserData: (userData: UserData) => UserData
  updateUserData: (userData: UserData) => UserData
}

const defaultUserData: UserData = {
  lastLawnViewed: undefined,
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

const defaultUserContext: UserDataContext = {
  id: '',
  auth: {
    email: '',
    clerkAuth: null,
    firebaseAuth: null,
    signOut: () => new Promise((resolve) => {
      console.error('Attempting signOut, but user is not logged in!')
      resolve()
    }),
    isLockedAndLoaded: false,
  },
  userDataStatus: 'loading',
  userData: defaultUserData,
  setUserData: () => {
    console.error('Attempting setUserData, but user data is not ready yet!')
    return defaultUserData
  },
  updateUserData: () => {
    console.error('Attempting updateUserData, but user data is not ready yet!')
    return defaultUserData
  },
}

export const userDataContext = createContext(defaultUserContext)

export type UserDataLoaderProps = {
  auth: Auth,
  children: React.ReactNode,
}

const UserDataLoader: FC<UserDataLoaderProps> = ({
  auth,
  children,
}) => {
  const database = useDatabase()

  const userDataRef = ref(
    database,
    // we ensure this exists before loading this provider
    `users/${auth.firebaseAuth!.currentUser!.uid!}`,
  )

  const { status, data } = useDatabaseObjectData(userDataRef, {
    idField: 'id',
    initialData: defaultUserData,
  });

  const value: UserDataContext = {
    id: auth.firebaseAuth?.currentUser?.uid ?? '',
    auth: auth,
    userDataStatus: status,
    userData: (data as UserData) ?? defaultUserData,
    setUserData: defaultUserContext.setUserData,
    updateUserData: defaultUserContext.updateUserData,
  }

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  )
}

export const useUserData = () => useContext(userDataContext)

export default useUserData