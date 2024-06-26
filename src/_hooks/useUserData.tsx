'use client'

import { useAuth as useClerkAuth, useUser as useClerkUser } from '@clerk/nextjs'
import { Dispatch, FC, SetStateAction, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useFirestoreDocData, useAuth as useFirebaseAuth, useDatabase, useDatabaseObjectData, useFirestore } from 'reactfire'
import { signInWithCustomToken, updateEmail } from 'firebase/auth'
import { ref, get, set, update } from 'firebase/database'
import { doc } from 'firebase/firestore'
import { notifications } from '@mantine/notifications'

export type Auth = {
  id: string
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
        .catch(async (reason) => {
          if (JSON.stringify(reason).includes('email')) {
            await firebaseAuth.signOut()
            await clerkAuth.signOut()
          } else {
            console.error(reason)
            notifications.show({
              message: 'An error occurred logging in. Please completely log out and try again.',
              color: 'red',
            })
          }
        })
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
    id: clerkUser.user?.id ?? clerkAuth.userId ?? firebaseAuth.currentUser?.uid ?? '',
    email: clerkUser.user?.primaryEmailAddress?.emailAddress ?? '',
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
  viewingLawn: string | undefined,
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
  userId: string
  auth: Auth
  userDataStatus: ReturnType<typeof useFirestoreDocData>['status']
  userData: UserData
  /**
  * sets the user data locally, like React setState
  * @param userData 
  * @returns 
  */
  setUserData: Dispatch<SetStateAction<UserData>>
  /**
  * updates the user data in firebase and locally
  * 
  * the local part of the update is done by an internal React setState
  * 
  * so it'll automatically re-render when the local state changes
  * @param userData 
  * @returns 
  */
  updateUserData: (userData: Partial<UserData>) => Promise<UserData>
}

const defaultUserData: UserData = {
  viewingLawn: '',
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
  userId: '',
  auth: {
    id: '',
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
    return new Promise((resolve) => resolve(defaultUserData))
  },
  updateUserData: (userData: Partial<UserData>) => {
    console.error('Attempting updateUserData, but user data is not ready yet!')
    return new Promise((resolve) => resolve({
      ...defaultUserData,
      ...userData,
    }))
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

  const [userData, setUserData] = useState<UserData>(data as UserData)

  useEffect(() => {
    setUserData(data as UserData)
  }, [data])

  const updateUserData = async (user_data: Partial<UserData>) => {
    try {
      // this will update on firebase, which will cause the listener to update "data" which will trigger the useEffect which will set user data locally.
      await update(userDataRef, user_data)
      return { ...userData, ...user_data } as UserData
    } catch (err: any) {
      throw new Error(err)
    }
  }

  const value: UserDataContext = {
    userId: auth.firebaseAuth?.currentUser?.uid ?? '',
    auth: auth,
    userDataStatus: status,
    userData: userData,
    setUserData: setUserData,
    updateUserData: updateUserData,
  }

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  )
}

export const useUserData = () => useContext(userDataContext)

export default useUserData