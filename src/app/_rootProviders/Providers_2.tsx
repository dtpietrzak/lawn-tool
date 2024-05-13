'use client'

import { UserDataProvider } from "@/_hooks/useUserData"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from '@clerk/themes';
import { FC } from "react"
import { FirestoreProvider, DatabaseProvider, useFirebaseApp, AuthProvider } from "reactfire"
import { getFirestore } from "firebase/firestore"
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
              {children}
            </UserDataProvider>
          </FirestoreProvider>
        </DatabaseProvider>
      </AuthProvider>
    </ClerkProvider >
  )
}

export default Providers_2