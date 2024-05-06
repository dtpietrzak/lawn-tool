'use client'

import { LawnDataProvider } from "@/_hooks/useLawnData"
import { UserDataProvider } from "@/_hooks/useUserData"
import { ClerkProvider } from "@clerk/nextjs"
import { FC } from "react"
import { FirestoreProvider, DatabaseProvider, useFirebaseApp } from "reactfire"
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"

export type ProvidersProps = {
  children: React.ReactNode
}

const Providers_2: FC<ProvidersProps> = ({
  children,
}) => {
  const app = useFirebaseApp()

  return (
    <ClerkProvider>
      <DatabaseProvider sdk={getDatabase(app)}>
        <FirestoreProvider sdk={getFirestore(app)}>
          <UserDataProvider>
            <LawnDataProvider>
              {children}
            </LawnDataProvider>
          </UserDataProvider>
        </FirestoreProvider>
      </DatabaseProvider>
    </ClerkProvider >
  )
}

export default Providers_2