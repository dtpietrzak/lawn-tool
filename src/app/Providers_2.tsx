'use client'

import { LawnDataProvider } from "@/_hooks/useLawnData"
import { UserDataProvider } from "@/_hooks/useUserData"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from '@clerk/themes';
import { FC } from "react"
import { FirestoreProvider, DatabaseProvider, useFirebaseApp, AuthProvider, useInitFirestore } from "reactfire"
import { enableIndexedDbPersistence, getFirestore, initializeFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth"

export type ProvidersProps = {
  children: React.ReactNode
}

const Providers_2: FC<ProvidersProps> = ({
  children,
}) => {
  const firebaseApp = useFirebaseApp()

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <AuthProvider sdk={getAuth(firebaseApp)}>
        <DatabaseProvider sdk={getDatabase(firebaseApp)}>
          <FirestoreProvider sdk={getFirestore(firebaseApp)}>
            <UserDataProvider>
              <LawnDataProvider>
                {children}
              </LawnDataProvider>
            </UserDataProvider>
          </FirestoreProvider>
        </DatabaseProvider>
      </AuthProvider>
    </ClerkProvider >
  )
}

export default Providers_2