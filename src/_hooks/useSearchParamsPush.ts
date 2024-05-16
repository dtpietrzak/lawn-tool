'use client'

import { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";

export function pushState(url?: string) {
  window.history.pushState(undefined, "", url);
  // Dispatch a custom event after pushState
  const pushStateEvent = new CustomEvent('pushstate', {
    detail: { url }
  });
  window.dispatchEvent(pushStateEvent);
}

const useSearchParamsPush = () => {
  const nextSearchParams = useSearchParams()
  const [searchParams, setSearchParams] = useState(new URLSearchParams(nextSearchParams))

  const handleUrlChange = useCallback(() => {
    setSearchParams(new URLSearchParams(window.location.search))
  }, [])

  useEffect(() => {
    window.addEventListener('pushstate', handleUrlChange);
    return () => {
      window.removeEventListener('pushstate', handleUrlChange);
    };
  }, [handleUrlChange]);

  return {
    searchParams,
    pushState: pushState,
  }
}

export default useSearchParamsPush