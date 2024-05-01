import { NextRequest } from "next/server";
import { getWeatherData } from "@/app/api/tools/requests"

export async function GET(
  request: NextRequest,
  params: { params: { zip_code: string } },
) {
  if (!params.params.zip_code) {
    return Response.json(null, {
      status: 400,
      statusText: 'Bad Request - No zip code included'
    })
  }
  if (typeof params.params.zip_code !== 'string') {
    return Response.json(null, {
      status: 400,
      statusText: 'Bad Request - Should be a string'
    })
  }
  if (params.params.zip_code.length !== 5) {
    return Response.json(null, {
      status: 400,
      statusText: 'Bad Request - Should be exactly 5 chars'
    })
  }
  try {
    const weather_data = await getWeatherData(params.params.zip_code)
    if (!weather_data.location) {
      return Response.json(null, {
        status: 404,
        statusText: 'Bad Request - Zip code not found'
      })
    }
    return Response.json({
      data: weather_data
    })
  } catch (error) {
    console.error(error)
    return Response.json(null, {
      status: 500,
      statusText: 'Internal Server Error'
    })
  }
}