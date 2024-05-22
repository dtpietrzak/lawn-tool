'use client'

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useRouter } from "next/navigation"
import { useCallback, useEffect } from "react"

const isDev = typeof window !== 'undefined' ?? window.location.href.includes('localhost')

export type RouteGuardReturns =
  | string
  | { route: string, options: NavigateOptions }
  | undefined
  | void

export const useRouteGuard = (
  routeGuard:
    | (() => RouteGuardReturns)
    | (() => Promise<RouteGuardReturns>),
  dependencies: unknown[],
  debugId: string,
) => {
  const router = useRouter()

  const routeGuardFunction = useCallback(async () => {
    const shouldRedirect = await routeGuard()
    if (shouldRedirect) {
      if (typeof shouldRedirect === 'string') {
        if (isDev) console.log(
          `routeGaurd ${debugId} routing to: ${shouldRedirect}`
        )
        router.push(shouldRedirect)
      } else {
        if (isDev) console.log(
          `routeGaurd ${debugId} routing to: ${shouldRedirect.route}`
        )
        router.push(shouldRedirect.route, shouldRedirect.options)
      }
    }
  }, [debugId, routeGuard, router])

  useEffect(() => {
    routeGuardFunction()
  }, [...dependencies, routeGuardFunction])
}

export default useRouteGuard