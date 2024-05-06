'use client'

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

const Providers_1: FC<ProvidersProps> = ({
  children,
}) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      {children}
    </FirebaseAppProvider >
  )
}

export default Providers_1