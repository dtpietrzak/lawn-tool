type Error = {
  error: true,
  response: unknown,
  status: number,
}

export const ezFetchGET = async <T = unknown>(url: string, options?: RequestInit & {
  noaaFeatureFlags?: boolean
}) => {

  if (!options) options = {}

  if (options?.noaaFeatureFlags) {
    options.headers = {
      ...options.headers,
      'Feature-Flags': 'forecast_temperature_qv,forecast_wind_speed_qv',
    }
    delete options.noaaFeatureFlags
  }

  return fetch(url, options).then(async (res) => {
    if (res.status !== 200) {
      const errorResponse = await res?.json()
      console.error(res, errorResponse)
      return {
        error: true,
        response: errorResponse,
        status: res.status
      }
    }
    return res.json()
  }) as Promise<T | Error>
}

export const isFetchError = (
  response: any
): response is {
  error: true;
  response: unknown;
  status: number
} => {
  return response && response.error;
};

// TODO
const errorOut = (code: number,) => {

}