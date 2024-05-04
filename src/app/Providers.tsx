'use client'

import { LawnDataProvider } from "@/_hooks/useLawnData"
import { UserDataProvider } from "@/_hooks/useUserData"
import { ClerkProvider } from "@clerk/nextjs"
import { FC } from "react"
import { FirebaseAppProvider } from "reactfire"

export type ProvidersProps = {
  children: React.ReactNode
}

const firebaseConfig = {
  apiKey: "AIzaSyAzofD9gEdSR4BMTFCj78vaRalDSPMxUzU",
  authDomain: "lawn-tool.firebaseapp.com",
  projectId: "lawn-tool",
  storageBucket: "lawn-tool.appspot.com",
  messagingSenderId: "942455701409",
  appId: "1:942455701409:web:ffdcdccca2d295e0e995e0"
};

const Providers: FC<ProvidersProps> = ({
  children,
}) => {
  return (
    <ClerkProvider>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <UserDataProvider>
          <LawnDataProvider>
            {children}
          </LawnDataProvider>
        </UserDataProvider>
      </FirebaseAppProvider >
    </ClerkProvider >
  )
}

export default Providers