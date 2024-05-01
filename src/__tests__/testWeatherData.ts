import { GetWeatherData } from "@/app/api/tools/requests"

export const testData: GetWeatherData = {
  "noaa": {
    "forecast": {
      "periods": [
        {
          "number": 1,
          "name": "Today",
          "startTime": "2024-04-26T09:00:00-04:00",
          "endTime": "2024-04-26T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 40
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 5.555555555555555
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 57
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 24.14016,
            "minValue": 16.09344
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/sct/rain_showers,40?size=medium",
          "shortForecast": "Mostly Sunny then Chance Rain Showers",
          "detailedForecast": "A chance of rain showers after 3pm. Mostly sunny, with a high near 66. Southeast wind 10 to 15 mph, with gusts as high as 25 mph. Chance of precipitation is 40%."
        },
        {
          "number": 2,
          "name": "Tonight",
          "startTime": "2024-04-26T18:00:00-04:00",
          "endTime": "2024-04-27T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "temperatureTrend": "rising",
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 60
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 86
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/night/tsra,60?size=medium",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": "Rain showers likely before 8pm, then showers and thunderstorms likely between 8pm and 5am, then a chance of showers and thunderstorms. Cloudy. Low around 57, with temperatures rising to around 62 overnight. Southeast wind around 15 mph, with gusts as high as 25 mph. Chance of precipitation is 60%. New rainfall amounts between a tenth and quarter of an inch possible."
        },
        {
          "number": 3,
          "name": "Saturday",
          "startTime": "2024-04-27T06:00:00-04:00",
          "endTime": "2024-04-27T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 25.555555555555557
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 40
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 86
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 32.18688,
            "minValue": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_sct,40/tsra_sct,30?size=medium",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": "A chance of showers and thunderstorms. Mostly cloudy, with a high near 78. South wind 15 to 20 mph, with gusts as high as 35 mph. Chance of precipitation is 40%."
        },
        {
          "number": 4,
          "name": "Saturday Night",
          "startTime": "2024-04-27T18:00:00-04:00",
          "endTime": "2024-04-28T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 30
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 79
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 32.18688,
            "minValue": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,20/tsra_hi,30?size=medium",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": "A slight chance of showers and thunderstorms before 2am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 62. South wind 15 to 20 mph, with gusts as high as 30 mph. Chance of precipitation is 30%."
        },
        {
          "number": 5,
          "name": "Sunday",
          "startTime": "2024-04-28T06:00:00-04:00",
          "endTime": "2024-04-28T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 26.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 40
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 88
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 32.18688,
            "minValue": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,40?size=medium",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": "A chance of showers and thunderstorms before 2pm, then a slight chance of showers and thunderstorms. Partly sunny, with a high near 79. South wind 15 to 20 mph, with gusts as high as 30 mph. Chance of precipitation is 40%."
        },
        {
          "number": 6,
          "name": "Sunday Night",
          "startTime": "2024-04-28T18:00:00-04:00",
          "endTime": "2024-04-29T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 50
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 77
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,30/tsra_hi,50?size=medium",
          "shortForecast": "Slight Chance Showers And Thunderstorms then Chance Showers And Thunderstorms",
          "detailedForecast": "A slight chance of showers and thunderstorms before 8pm, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 62. Chance of precipitation is 50%."
        },
        {
          "number": 7,
          "name": "Monday",
          "startTime": "2024-04-29T06:00:00-04:00",
          "endTime": "2024-04-29T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 70
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 80
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,70?size=medium",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": "A chance of rain showers before 8am, then showers and thunderstorms likely. Mostly cloudy, with a high near 74. Chance of precipitation is 70%."
        },
        {
          "number": 8,
          "name": "Monday Night",
          "startTime": "2024-04-29T18:00:00-04:00",
          "endTime": "2024-04-30T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 12.777777777777779
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 60
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 87
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 32.18688,
            "minValue": 16.09344
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_sct,60/tsra_sct,50?size=medium",
          "shortForecast": "Showers And Thunderstorms Likely then Chance Showers And Thunderstorms",
          "detailedForecast": "Showers and thunderstorms likely before 8pm, then a chance of showers and thunderstorms between 8pm and 2am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 55. Chance of precipitation is 60%."
        },
        {
          "number": 9,
          "name": "Tuesday",
          "startTime": "2024-04-30T06:00:00-04:00",
          "endTime": "2024-04-30T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 30
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 89
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 24.14016,
            "minValue": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,30/tsra_hi,20?size=medium",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": "A chance of showers and thunderstorms before 2pm, then a slight chance of showers and thunderstorms. Mostly sunny, with a high near 74. Chance of precipitation is 30%."
        },
        {
          "number": 10,
          "name": "Tuesday Night",
          "startTime": "2024-04-30T18:00:00-04:00",
          "endTime": "2024-05-01T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 20
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 12.222222222222221
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 24.14016,
            "minValue": 16.09344
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,20?size=medium",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": "A slight chance of showers and thunderstorms. Partly cloudy, with a low around 56. Chance of precipitation is 20%."
        },
        {
          "number": 11,
          "name": "Wednesday",
          "startTime": "2024-05-01T06:00:00-04:00",
          "endTime": "2024-05-01T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 30
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 12.222222222222221
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 24.14016,
            "minValue": 16.09344
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,30?size=medium",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": "A slight chance of showers and thunderstorms before 2pm, then a chance of showers and thunderstorms. Mostly sunny, with a high near 74. Chance of precipitation is 30%."
        },
        {
          "number": 12,
          "name": "Wednesday Night",
          "startTime": "2024-05-01T18:00:00-04:00",
          "endTime": "2024-05-02T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 40
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 82
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 24.14016,
            "minValue": 16.09344
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,40?size=medium",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": "A chance of showers and thunderstorms. Partly cloudy, with a low around 53. Chance of precipitation is 40%."
        },
        {
          "number": 13,
          "name": "Thursday",
          "startTime": "2024-05-02T06:00:00-04:00",
          "endTime": "2024-05-02T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 19.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": null
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 24.14016,
            "minValue": 16.09344
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi?size=medium",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": "A chance of showers and thunderstorms. Mostly sunny, with a high near 67."
        },
        {
          "number": 14,
          "name": "Thursday Night",
          "startTime": "2024-05-02T18:00:00-04:00",
          "endTime": "2024-05-03T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 8.333333333333334
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": null
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 8.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 74
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "maxValue": 24.14016,
            "minValue": 16.09344
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi?size=medium",
          "shortForecast": "Chance Showers And Thunderstorms then Slight Chance Showers And Thunderstorms",
          "detailedForecast": "A chance of showers and thunderstorms before 8pm, then a slight chance of showers and thunderstorms between 8pm and 2am. Partly cloudy, with a low around 47."
        }
      ],
      "updateTime": "2024-04-26T11:31:21+00:00"
    },
    "forecast_hourly": {
      "periods": [
        {
          "number": 1,
          "name": "",
          "startTime": "2024-04-26T09:00:00-04:00",
          "endTime": "2024-04-26T10:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 8.333333333333334
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 0
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 0.5555555555555556
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 57
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
          "shortForecast": "Sunny",
          "detailedForecast": ""
        },
        {
          "number": 2,
          "name": "",
          "startTime": "2024-04-26T10:00:00-04:00",
          "endTime": "2024-04-26T11:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 1
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 1.1111111111111112
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 55
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/skc,1?size=small",
          "shortForecast": "Sunny",
          "detailedForecast": ""
        },
        {
          "number": 3,
          "name": "",
          "startTime": "2024-04-26T11:00:00-04:00",
          "endTime": "2024-04-26T12:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 12.777777777777779
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 1
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 2.2222222222222223
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 49
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/few,1?size=small",
          "shortForecast": "Sunny",
          "detailedForecast": ""
        },
        {
          "number": 4,
          "name": "",
          "startTime": "2024-04-26T12:00:00-04:00",
          "endTime": "2024-04-26T13:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 5
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 2.7777777777777777
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 46
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/few,5?size=small",
          "shortForecast": "Sunny",
          "detailedForecast": ""
        },
        {
          "number": 5,
          "name": "",
          "startTime": "2024-04-26T13:00:00-04:00",
          "endTime": "2024-04-26T14:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 10
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 3.3333333333333335
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 43
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/sct,10?size=small",
          "shortForecast": "Mostly Sunny",
          "detailedForecast": ""
        },
        {
          "number": 6,
          "name": "",
          "startTime": "2024-04-26T14:00:00-04:00",
          "endTime": "2024-04-26T15:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 14
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 3.888888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 40
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/bkn,14?size=small",
          "shortForecast": "Partly Sunny",
          "detailedForecast": ""
        },
        {
          "number": 7,
          "name": "",
          "startTime": "2024-04-26T15:00:00-04:00",
          "endTime": "2024-04-26T16:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 4.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 40
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,21?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 8,
          "name": "",
          "startTime": "2024-04-26T16:00:00-04:00",
          "endTime": "2024-04-26T17:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 29
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 5
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 42
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,29?size=small",
          "shortForecast": "Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 9,
          "name": "",
          "startTime": "2024-04-26T17:00:00-04:00",
          "endTime": "2024-04-26T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 36
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 5.555555555555555
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 43
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,36?size=small",
          "shortForecast": "Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 10,
          "name": "",
          "startTime": "2024-04-26T18:00:00-04:00",
          "endTime": "2024-04-26T19:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 42
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 6.111111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 47
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/night/rain_showers,42?size=small",
          "shortForecast": "Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 11,
          "name": "",
          "startTime": "2024-04-26T19:00:00-04:00",
          "endTime": "2024-04-26T20:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 55
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 7.222222222222222
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 54
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/night/rain_showers,55?size=small",
          "shortForecast": "Rain Showers Likely",
          "detailedForecast": ""
        },
        {
          "number": 12,
          "name": "",
          "startTime": "2024-04-26T20:00:00-04:00",
          "endTime": "2024-04-26T21:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 54
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 7.777777777777778
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 58
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/night/tsra,54?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 13,
          "name": "",
          "startTime": "2024-04-26T21:00:00-04:00",
          "endTime": "2024-04-26T22:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 54
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 8.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 62
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/night/tsra,54?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 14,
          "name": "",
          "startTime": "2024-04-26T22:00:00-04:00",
          "endTime": "2024-04-26T23:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 54
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 68
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/night/tsra,54?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 15,
          "name": "",
          "startTime": "2024-04-26T23:00:00-04:00",
          "endTime": "2024-04-27T00:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 61
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 71
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/night/tsra,61?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 16,
          "name": "",
          "startTime": "2024-04-27T00:00:00-04:00",
          "endTime": "2024-04-27T01:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 61
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 77
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/night/tsra,61?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 17,
          "name": "",
          "startTime": "2024-04-27T01:00:00-04:00",
          "endTime": "2024-04-27T02:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 61
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 82
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra,61?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 18,
          "name": "",
          "startTime": "2024-04-27T02:00:00-04:00",
          "endTime": "2024-04-27T03:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 62
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 12.777777777777779
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra,62?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 19,
          "name": "",
          "startTime": "2024-04-27T03:00:00-04:00",
          "endTime": "2024-04-27T04:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 62
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 86
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra,62?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 20,
          "name": "",
          "startTime": "2024-04-27T04:00:00-04:00",
          "endTime": "2024-04-27T05:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 62
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra,62?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 21,
          "name": "",
          "startTime": "2024-04-27T05:00:00-04:00",
          "endTime": "2024-04-27T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 44
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra,44?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 22,
          "name": "",
          "startTime": "2024-04-27T06:00:00-04:00",
          "endTime": "2024-04-27T07:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 44
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,44?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 23,
          "name": "",
          "startTime": "2024-04-27T07:00:00-04:00",
          "endTime": "2024-04-27T08:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 44
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 86
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,44?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 24,
          "name": "",
          "startTime": "2024-04-27T08:00:00-04:00",
          "endTime": "2024-04-27T09:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 85
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 25,
          "name": "",
          "startTime": "2024-04-27T09:00:00-04:00",
          "endTime": "2024-04-27T10:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 85
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 26,
          "name": "",
          "startTime": "2024-04-27T10:00:00-04:00",
          "endTime": "2024-04-27T11:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 82
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 27,
          "name": "",
          "startTime": "2024-04-27T11:00:00-04:00",
          "endTime": "2024-04-27T12:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20.555555555555557
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 77
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 28,
          "name": "",
          "startTime": "2024-04-27T12:00:00-04:00",
          "endTime": "2024-04-27T13:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20.555555555555557
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 77
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_sct,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 29,
          "name": "",
          "startTime": "2024-04-27T13:00:00-04:00",
          "endTime": "2024-04-27T14:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 73
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_sct,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 30,
          "name": "",
          "startTime": "2024-04-27T14:00:00-04:00",
          "endTime": "2024-04-27T15:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 67
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 31,
          "name": "",
          "startTime": "2024-04-27T15:00:00-04:00",
          "endTime": "2024-04-27T16:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 64
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 32,
          "name": "",
          "startTime": "2024-04-27T16:00:00-04:00",
          "endTime": "2024-04-27T17:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 24.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 64
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 33,
          "name": "",
          "startTime": "2024-04-27T17:00:00-04:00",
          "endTime": "2024-04-27T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 25
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 62
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 34,
          "name": "",
          "startTime": "2024-04-27T18:00:00-04:00",
          "endTime": "2024-04-27T19:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 24.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 64
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 35,
          "name": "",
          "startTime": "2024-04-27T19:00:00-04:00",
          "endTime": "2024-04-27T20:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 64
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 36,
          "name": "",
          "startTime": "2024-04-27T20:00:00-04:00",
          "endTime": "2024-04-27T21:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 67
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,17?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 37,
          "name": "",
          "startTime": "2024-04-27T21:00:00-04:00",
          "endTime": "2024-04-27T22:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 68
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,17?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 38,
          "name": "",
          "startTime": "2024-04-27T22:00:00-04:00",
          "endTime": "2024-04-27T23:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 72
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,17?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 39,
          "name": "",
          "startTime": "2024-04-27T23:00:00-04:00",
          "endTime": "2024-04-28T00:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20.555555555555557
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 74
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,17?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 40,
          "name": "",
          "startTime": "2024-04-28T00:00:00-04:00",
          "endTime": "2024-04-28T01:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 73
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,17?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 41,
          "name": "",
          "startTime": "2024-04-28T01:00:00-04:00",
          "endTime": "2024-04-28T02:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 19.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 75
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,17?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 42,
          "name": "",
          "startTime": "2024-04-28T02:00:00-04:00",
          "endTime": "2024-04-28T03:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 74
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_sct,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 43,
          "name": "",
          "startTime": "2024-04-28T03:00:00-04:00",
          "endTime": "2024-04-28T04:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 76
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_sct,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 44,
          "name": "",
          "startTime": "2024-04-28T04:00:00-04:00",
          "endTime": "2024-04-28T05:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 78
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_sct,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 45,
          "name": "",
          "startTime": "2024-04-28T05:00:00-04:00",
          "endTime": "2024-04-28T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 79
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 46,
          "name": "",
          "startTime": "2024-04-28T06:00:00-04:00",
          "endTime": "2024-04-28T07:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 81
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 47,
          "name": "",
          "startTime": "2024-04-28T07:00:00-04:00",
          "endTime": "2024-04-28T08:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 86
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 48,
          "name": "",
          "startTime": "2024-04-28T08:00:00-04:00",
          "endTime": "2024-04-28T09:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 36
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 88
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,36?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 49,
          "name": "",
          "startTime": "2024-04-28T09:00:00-04:00",
          "endTime": "2024-04-28T10:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 36
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 80
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_sct,36?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 50,
          "name": "",
          "startTime": "2024-04-28T10:00:00-04:00",
          "endTime": "2024-04-28T11:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 36
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 74
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_sct,36?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 51,
          "name": "",
          "startTime": "2024-04-28T11:00:00-04:00",
          "endTime": "2024-04-28T12:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 36
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 68
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_sct,36?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 52,
          "name": "",
          "startTime": "2024-04-28T12:00:00-04:00",
          "endTime": "2024-04-28T13:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 36
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 63
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,36?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 53,
          "name": "",
          "startTime": "2024-04-28T13:00:00-04:00",
          "endTime": "2024-04-28T14:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 36
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 59
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,36?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 54,
          "name": "",
          "startTime": "2024-04-28T14:00:00-04:00",
          "endTime": "2024-04-28T15:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 24.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 55
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 55,
          "name": "",
          "startTime": "2024-04-28T15:00:00-04:00",
          "endTime": "2024-04-28T16:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 25
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 53
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 56,
          "name": "",
          "startTime": "2024-04-28T16:00:00-04:00",
          "endTime": "2024-04-28T17:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 25.555555555555557
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 50
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 57,
          "name": "",
          "startTime": "2024-04-28T17:00:00-04:00",
          "endTime": "2024-04-28T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 26.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 49
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 58,
          "name": "",
          "startTime": "2024-04-28T18:00:00-04:00",
          "endTime": "2024-04-28T19:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 25.555555555555557
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 49
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 59,
          "name": "",
          "startTime": "2024-04-28T19:00:00-04:00",
          "endTime": "2024-04-28T20:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 25
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 50
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 60,
          "name": "",
          "startTime": "2024-04-28T20:00:00-04:00",
          "endTime": "2024-04-28T21:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 24.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 25
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 50
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,25?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 61,
          "name": "",
          "startTime": "2024-04-28T21:00:00-04:00",
          "endTime": "2024-04-28T22:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 25
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 54
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,25?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 62,
          "name": "",
          "startTime": "2024-04-28T22:00:00-04:00",
          "endTime": "2024-04-28T23:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 25
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 57
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,25?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 63,
          "name": "",
          "startTime": "2024-04-28T23:00:00-04:00",
          "endTime": "2024-04-29T00:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 25
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 61
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,25?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 64,
          "name": "",
          "startTime": "2024-04-29T00:00:00-04:00",
          "endTime": "2024-04-29T01:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20.555555555555557
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 25
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 63
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,25?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 65,
          "name": "",
          "startTime": "2024-04-29T01:00:00-04:00",
          "endTime": "2024-04-29T02:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 25
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 65
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,25?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 66,
          "name": "",
          "startTime": "2024-04-29T02:00:00-04:00",
          "endTime": "2024-04-29T03:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 19.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 52
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 68
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,52?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 67,
          "name": "",
          "startTime": "2024-04-29T03:00:00-04:00",
          "endTime": "2024-04-29T04:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 52
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 70
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,52?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 68,
          "name": "",
          "startTime": "2024-04-29T04:00:00-04:00",
          "endTime": "2024-04-29T05:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 52
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 75
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra_sct,52?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 69,
          "name": "",
          "startTime": "2024-04-29T05:00:00-04:00",
          "endTime": "2024-04-29T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 52
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 77
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/rain_showers,52?size=small",
          "shortForecast": "Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 70,
          "name": "",
          "startTime": "2024-04-29T06:00:00-04:00",
          "endTime": "2024-04-29T07:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 52
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 77
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,52?size=small",
          "shortForecast": "Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 71,
          "name": "",
          "startTime": "2024-04-29T07:00:00-04:00",
          "endTime": "2024-04-29T08:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 52
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 80
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,52?size=small",
          "shortForecast": "Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 72,
          "name": "",
          "startTime": "2024-04-29T08:00:00-04:00",
          "endTime": "2024-04-29T09:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 69
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 80
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,69?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 73,
          "name": "",
          "startTime": "2024-04-29T09:00:00-04:00",
          "endTime": "2024-04-29T10:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 69
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 77
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,69?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 74,
          "name": "",
          "startTime": "2024-04-29T10:00:00-04:00",
          "endTime": "2024-04-29T11:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 69
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 75
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,69?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 75,
          "name": "",
          "startTime": "2024-04-29T11:00:00-04:00",
          "endTime": "2024-04-29T12:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 19.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 69
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 73
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,69?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 76,
          "name": "",
          "startTime": "2024-04-29T12:00:00-04:00",
          "endTime": "2024-04-29T13:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 69
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 70
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,69?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 77,
          "name": "",
          "startTime": "2024-04-29T13:00:00-04:00",
          "endTime": "2024-04-29T14:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20.555555555555557
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 69
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 67
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,69?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 78,
          "name": "",
          "startTime": "2024-04-29T14:00:00-04:00",
          "endTime": "2024-04-29T15:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 63
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 64
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,63?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 79,
          "name": "",
          "startTime": "2024-04-29T15:00:00-04:00",
          "endTime": "2024-04-29T16:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 63
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 62
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,63?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 80,
          "name": "",
          "startTime": "2024-04-29T16:00:00-04:00",
          "endTime": "2024-04-29T17:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 63
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 60
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra,63?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 81,
          "name": "",
          "startTime": "2024-04-29T17:00:00-04:00",
          "endTime": "2024-04-29T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 63
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 58
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/tsra_sct,63?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 82,
          "name": "",
          "startTime": "2024-04-29T18:00:00-04:00",
          "endTime": "2024-04-29T19:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 63
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 58
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 56.32704
          },
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/tsra,63?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 83,
          "name": "",
          "startTime": "2024-04-29T19:00:00-04:00",
          "endTime": "2024-04-29T20:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 63
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 61
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra,63?size=small",
          "shortForecast": "Showers And Thunderstorms Likely",
          "detailedForecast": ""
        },
        {
          "number": 84,
          "name": "",
          "startTime": "2024-04-29T20:00:00-04:00",
          "endTime": "2024-04-29T21:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 48
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 61
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra,48?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 85,
          "name": "",
          "startTime": "2024-04-29T21:00:00-04:00",
          "endTime": "2024-04-29T22:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 48
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 65
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra,48?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 86,
          "name": "",
          "startTime": "2024-04-29T22:00:00-04:00",
          "endTime": "2024-04-29T23:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 48
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 73
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra,48?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 87,
          "name": "",
          "startTime": "2024-04-29T23:00:00-04:00",
          "endTime": "2024-04-30T00:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 48
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 78
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 32.18688
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 48.28032
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra,48?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 88,
          "name": "",
          "startTime": "2024-04-30T00:00:00-04:00",
          "endTime": "2024-04-30T01:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 48
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 82
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra,48?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 89,
          "name": "",
          "startTime": "2024-04-30T01:00:00-04:00",
          "endTime": "2024-04-30T02:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 48
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 86
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_sct,48?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 90,
          "name": "",
          "startTime": "2024-04-30T02:00:00-04:00",
          "endTime": "2024-04-30T03:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 30
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 87
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_sct,30?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 91,
          "name": "",
          "startTime": "2024-04-30T03:00:00-04:00",
          "endTime": "2024-04-30T04:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 30
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 12.777777777777779
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 86
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_sct,30?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 92,
          "name": "",
          "startTime": "2024-04-30T04:00:00-04:00",
          "endTime": "2024-04-30T05:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 30
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 12.222222222222221
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 86
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_sct,30?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 93,
          "name": "",
          "startTime": "2024-04-30T05:00:00-04:00",
          "endTime": "2024-04-30T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 30
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 85
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_sct,30?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 94,
          "name": "",
          "startTime": "2024-04-30T06:00:00-04:00",
          "endTime": "2024-04-30T07:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 30
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 87
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,30?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 95,
          "name": "",
          "startTime": "2024-04-30T07:00:00-04:00",
          "endTime": "2024-04-30T08:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 30
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 88
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,30?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 96,
          "name": "",
          "startTime": "2024-04-30T08:00:00-04:00",
          "endTime": "2024-04-30T09:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 16
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 89
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,16?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 97,
          "name": "",
          "startTime": "2024-04-30T09:00:00-04:00",
          "endTime": "2024-04-30T10:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 16
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 80
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,16?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 98,
          "name": "",
          "startTime": "2024-04-30T10:00:00-04:00",
          "endTime": "2024-04-30T11:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 16
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 72
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,16?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 99,
          "name": "",
          "startTime": "2024-04-30T11:00:00-04:00",
          "endTime": "2024-04-30T12:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 16
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 65
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,16?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 100,
          "name": "",
          "startTime": "2024-04-30T12:00:00-04:00",
          "endTime": "2024-04-30T13:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 19.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 16
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 61
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,16?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 101,
          "name": "",
          "startTime": "2024-04-30T13:00:00-04:00",
          "endTime": "2024-04-30T14:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20.555555555555557
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 16
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 55
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,16?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 102,
          "name": "",
          "startTime": "2024-04-30T14:00:00-04:00",
          "endTime": "2024-04-30T15:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 52
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 103,
          "name": "",
          "startTime": "2024-04-30T15:00:00-04:00",
          "endTime": "2024-04-30T16:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 50
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 104,
          "name": "",
          "startTime": "2024-04-30T16:00:00-04:00",
          "endTime": "2024-04-30T17:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 48
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 105,
          "name": "",
          "startTime": "2024-04-30T17:00:00-04:00",
          "endTime": "2024-04-30T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 47
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 106,
          "name": "",
          "startTime": "2024-04-30T18:00:00-04:00",
          "endTime": "2024-04-30T19:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 49
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 107,
          "name": "",
          "startTime": "2024-04-30T19:00:00-04:00",
          "endTime": "2024-04-30T20:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 15
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 51
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,15?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 108,
          "name": "",
          "startTime": "2024-04-30T20:00:00-04:00",
          "endTime": "2024-04-30T21:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 13
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 53
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/few,13?size=small",
          "shortForecast": "Mostly Clear",
          "detailedForecast": ""
        },
        {
          "number": 109,
          "name": "",
          "startTime": "2024-04-30T21:00:00-04:00",
          "endTime": "2024-04-30T22:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 13
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 57
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/few,13?size=small",
          "shortForecast": "Mostly Clear",
          "detailedForecast": ""
        },
        {
          "number": 110,
          "name": "",
          "startTime": "2024-04-30T22:00:00-04:00",
          "endTime": "2024-04-30T23:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 13
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 64
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/sct,13?size=small",
          "shortForecast": "Partly Cloudy",
          "detailedForecast": ""
        },
        {
          "number": 111,
          "name": "",
          "startTime": "2024-04-30T23:00:00-04:00",
          "endTime": "2024-05-01T00:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 13
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 70
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/sct,13?size=small",
          "shortForecast": "Partly Cloudy",
          "detailedForecast": ""
        },
        {
          "number": 112,
          "name": "",
          "startTime": "2024-05-01T00:00:00-04:00",
          "endTime": "2024-05-01T01:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 13
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 72
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/sct,13?size=small",
          "shortForecast": "Partly Cloudy",
          "detailedForecast": ""
        },
        {
          "number": 113,
          "name": "",
          "startTime": "2024-05-01T01:00:00-04:00",
          "endTime": "2024-05-01T02:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 13
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 75
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/sct,13?size=small",
          "shortForecast": "Partly Cloudy",
          "detailedForecast": ""
        },
        {
          "number": 114,
          "name": "",
          "startTime": "2024-05-01T02:00:00-04:00",
          "endTime": "2024-05-01T03:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 78
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 115,
          "name": "",
          "startTime": "2024-05-01T03:00:00-04:00",
          "endTime": "2024-05-01T04:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 78
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 116,
          "name": "",
          "startTime": "2024-05-01T04:00:00-04:00",
          "endTime": "2024-05-01T05:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 12.222222222222221
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 82
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 117,
          "name": "",
          "startTime": "2024-05-01T05:00:00-04:00",
          "endTime": "2024-05-01T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 12.222222222222221
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 118,
          "name": "",
          "startTime": "2024-05-01T06:00:00-04:00",
          "endTime": "2024-05-01T07:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 12.222222222222221
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 119,
          "name": "",
          "startTime": "2024-05-01T07:00:00-04:00",
          "endTime": "2024-05-01T08:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 21
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 80
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,21?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 120,
          "name": "",
          "startTime": "2024-05-01T08:00:00-04:00",
          "endTime": "2024-05-01T09:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 80
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,17?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 121,
          "name": "",
          "startTime": "2024-05-01T09:00:00-04:00",
          "endTime": "2024-05-01T10:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.666666666666666
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 74
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,17?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 122,
          "name": "",
          "startTime": "2024-05-01T10:00:00-04:00",
          "endTime": "2024-05-01T11:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 66
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,17?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 123,
          "name": "",
          "startTime": "2024-05-01T11:00:00-04:00",
          "endTime": "2024-05-01T12:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 11.11111111111111
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 61
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,17?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 124,
          "name": "",
          "startTime": "2024-05-01T12:00:00-04:00",
          "endTime": "2024-05-01T13:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10.555555555555555
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 55
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,17?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 125,
          "name": "",
          "startTime": "2024-05-01T13:00:00-04:00",
          "endTime": "2024-05-01T14:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 17
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10.555555555555555
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 51
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/rain_showers,17?size=small",
          "shortForecast": "Slight Chance Rain Showers",
          "detailedForecast": ""
        },
        {
          "number": 126,
          "name": "",
          "startTime": "2024-05-01T14:00:00-04:00",
          "endTime": "2024-05-01T15:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 47
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 127,
          "name": "",
          "startTime": "2024-05-01T15:00:00-04:00",
          "endTime": "2024-05-01T16:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 44
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 128,
          "name": "",
          "startTime": "2024-05-01T16:00:00-04:00",
          "endTime": "2024-05-01T17:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 43
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 129,
          "name": "",
          "startTime": "2024-05-01T17:00:00-04:00",
          "endTime": "2024-05-01T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 23.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 42
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 130,
          "name": "",
          "startTime": "2024-05-01T18:00:00-04:00",
          "endTime": "2024-05-01T19:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 22.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 44
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 131,
          "name": "",
          "startTime": "2024-05-01T19:00:00-04:00",
          "endTime": "2024-05-01T20:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 21.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 33
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 48
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,33?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 132,
          "name": "",
          "startTime": "2024-05-01T20:00:00-04:00",
          "endTime": "2024-05-01T21:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 20.555555555555557
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 38
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 50
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,38?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 133,
          "name": "",
          "startTime": "2024-05-01T21:00:00-04:00",
          "endTime": "2024-05-01T22:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 19.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 38
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 55
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,38?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 134,
          "name": "",
          "startTime": "2024-05-01T22:00:00-04:00",
          "endTime": "2024-05-01T23:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 38
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 57
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,38?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 135,
          "name": "",
          "startTime": "2024-05-01T23:00:00-04:00",
          "endTime": "2024-05-02T00:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 38
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 62
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,38?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 136,
          "name": "",
          "startTime": "2024-05-02T00:00:00-04:00",
          "endTime": "2024-05-02T01:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 38
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 65
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,38?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 137,
          "name": "",
          "startTime": "2024-05-02T01:00:00-04:00",
          "endTime": "2024-05-02T02:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15.555555555555555
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 38
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 67
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,38?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 138,
          "name": "",
          "startTime": "2024-05-02T02:00:00-04:00",
          "endTime": "2024-05-02T03:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 39
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 69
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,39?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 139,
          "name": "",
          "startTime": "2024-05-02T03:00:00-04:00",
          "endTime": "2024-05-02T04:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 14.444444444444445
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 39
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 72
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,39?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 140,
          "name": "",
          "startTime": "2024-05-02T04:00:00-04:00",
          "endTime": "2024-05-02T05:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 13.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 39
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 78
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,39?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 141,
          "name": "",
          "startTime": "2024-05-02T05:00:00-04:00",
          "endTime": "2024-05-02T06:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 12.777777777777779
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 39
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 82
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,39?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 142,
          "name": "",
          "startTime": "2024-05-02T06:00:00-04:00",
          "endTime": "2024-05-02T07:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 12.777777777777779
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 39
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 16.09344
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,39?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 143,
          "name": "",
          "startTime": "2024-05-02T07:00:00-04:00",
          "endTime": "2024-05-02T08:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 12.777777777777779
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 39
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 81
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "W",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,39?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 144,
          "name": "",
          "startTime": "2024-05-02T08:00:00-04:00",
          "endTime": "2024-05-02T09:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 12.222222222222221
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 83
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 145,
          "name": "",
          "startTime": "2024-05-02T09:00:00-04:00",
          "endTime": "2024-05-02T10:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 13.333333333333334
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 76
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 146,
          "name": "",
          "startTime": "2024-05-02T10:00:00-04:00",
          "endTime": "2024-05-02T11:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 15
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 73
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 147,
          "name": "",
          "startTime": "2024-05-02T11:00:00-04:00",
          "endTime": "2024-05-02T12:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.11111111111111
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 67
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 148,
          "name": "",
          "startTime": "2024-05-02T12:00:00-04:00",
          "endTime": "2024-05-02T13:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 10
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 64
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 149,
          "name": "",
          "startTime": "2024-05-02T13:00:00-04:00",
          "endTime": "2024-05-02T14:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.22222222222222
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 59
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 150,
          "name": "",
          "startTime": "2024-05-02T14:00:00-04:00",
          "endTime": "2024-05-02T15:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 57
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 151,
          "name": "",
          "startTime": "2024-05-02T15:00:00-04:00",
          "endTime": "2024-05-02T16:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 9.444444444444445
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 56
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 152,
          "name": "",
          "startTime": "2024-05-02T16:00:00-04:00",
          "endTime": "2024-05-02T17:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.88888888888889
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 8.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 52
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 153,
          "name": "",
          "startTime": "2024-05-02T17:00:00-04:00",
          "endTime": "2024-05-02T18:00:00-04:00",
          "isDaytime": true,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 19.444444444444443
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 8.88888888888889
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 51
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/day/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 154,
          "name": "",
          "startTime": "2024-05-02T18:00:00-04:00",
          "endTime": "2024-05-02T19:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 18.333333333333332
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 8.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 52
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "N",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 155,
          "name": "",
          "startTime": "2024-05-02T19:00:00-04:00",
          "endTime": "2024-05-02T20:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 17.77777777777778
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 32
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 8.333333333333334
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 55
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 40.2336
          },
          "windDirection": "N",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,32?size=small",
          "shortForecast": "Chance Showers And Thunderstorms",
          "detailedForecast": ""
        },
        {
          "number": 156,
          "name": "",
          "startTime": "2024-05-02T20:00:00-04:00",
          "endTime": "2024-05-02T21:00:00-04:00",
          "isDaytime": false,
          "temperature": {
            "unitCode": "wmoUnit:degC",
            "value": 16.666666666666668
          },
          "temperatureTrend": null,
          "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": 19
          },
          "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 7.777777777777778
          },
          "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 55
          },
          "windSpeed": {
            "unitCode": "wmoUnit:km_h-1",
            "value": 24.14016
          },
          "windGust": null,
          "windDirection": "N",
          "icon": "https://api.weather.gov/icons/land/night/tsra_hi,19?size=small",
          "shortForecast": "Slight Chance Showers And Thunderstorms",
          "detailedForecast": ""
        }
      ],
      "updateTime": "2024-04-26T11:31:21+00:00"
    },
    "forecast_grid_data": {
      "apparentTemperature": {
        "uom": "wmoUnit:degC",
        "values": [
          {
            "validTime": "2024-04-26T05:00:00+00:00/PT1H",
            "value": 1.6666666666666667
          },
          {
            "validTime": "2024-04-26T06:00:00+00:00/PT1H",
            "value": 2.2222222222222223
          },
          {
            "validTime": "2024-04-26T07:00:00+00:00/PT1H",
            "value": 1.6666666666666667
          },
          {
            "validTime": "2024-04-26T08:00:00+00:00/PT1H",
            "value": 1.1111111111111112
          },
          {
            "validTime": "2024-04-26T09:00:00+00:00/PT1H",
            "value": 0
          },
          {
            "validTime": "2024-04-26T10:00:00+00:00/PT1H",
            "value": -1.1111111111111112
          },
          {
            "validTime": "2024-04-26T11:00:00+00:00/PT1H",
            "value": 1.1111111111111112
          },
          {
            "validTime": "2024-04-26T12:00:00+00:00/PT1H",
            "value": 3.3333333333333335
          },
          {
            "validTime": "2024-04-26T13:00:00+00:00/PT1H",
            "value": 5
          },
          {
            "validTime": "2024-04-26T14:00:00+00:00/PT1H",
            "value": 6.666666666666667
          },
          {
            "validTime": "2024-04-26T15:00:00+00:00/PT1H",
            "value": 12.777777777777779
          },
          {
            "validTime": "2024-04-26T16:00:00+00:00/PT1H",
            "value": 13.88888888888889
          },
          {
            "validTime": "2024-04-26T17:00:00+00:00/PT1H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-04-26T18:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-04-26T19:00:00+00:00/PT3H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-26T22:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-04-26T23:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-04-27T00:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-04-27T01:00:00+00:00/PT2H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-04-27T03:00:00+00:00/PT2H",
            "value": 15
          },
          {
            "validTime": "2024-04-27T05:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-04-27T06:00:00+00:00/PT2H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-04-27T08:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-04-27T09:00:00+00:00/PT4H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-04-27T13:00:00+00:00/PT1H",
            "value": 17.22222222222222
          },
          {
            "validTime": "2024-04-27T14:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-27T15:00:00+00:00/PT2H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-04-27T17:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-04-27T18:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-27T19:00:00+00:00/PT1H",
            "value": 23.88888888888889
          },
          {
            "validTime": "2024-04-27T20:00:00+00:00/PT1H",
            "value": 24.444444444444443
          },
          {
            "validTime": "2024-04-27T21:00:00+00:00/PT1H",
            "value": 25
          },
          {
            "validTime": "2024-04-27T22:00:00+00:00/PT1H",
            "value": 24.444444444444443
          },
          {
            "validTime": "2024-04-27T23:00:00+00:00/PT1H",
            "value": 23.88888888888889
          },
          {
            "validTime": "2024-04-28T00:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-28T01:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-28T02:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-04-28T03:00:00+00:00/PT1H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-04-28T04:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-04-28T05:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-04-28T06:00:00+00:00/PT2H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-28T08:00:00+00:00/PT2H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-28T10:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-04-28T11:00:00+00:00/PT2H",
            "value": 17.22222222222222
          },
          {
            "validTime": "2024-04-28T13:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-28T14:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-04-28T15:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-04-28T16:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-28T17:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-28T18:00:00+00:00/PT1H",
            "value": 24.444444444444443
          },
          {
            "validTime": "2024-04-28T19:00:00+00:00/PT1H",
            "value": 25
          },
          {
            "validTime": "2024-04-28T20:00:00+00:00/PT1H",
            "value": 25.555555555555557
          },
          {
            "validTime": "2024-04-28T21:00:00+00:00/PT1H",
            "value": 26.11111111111111
          },
          {
            "validTime": "2024-04-28T22:00:00+00:00/PT1H",
            "value": 25.555555555555557
          },
          {
            "validTime": "2024-04-28T23:00:00+00:00/PT1H",
            "value": 25
          },
          {
            "validTime": "2024-04-29T00:00:00+00:00/PT1H",
            "value": 24.444444444444443
          },
          {
            "validTime": "2024-04-29T01:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-29T02:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-29T03:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-04-29T04:00:00+00:00/PT1H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-04-29T05:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-04-29T06:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-04-29T07:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-29T08:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-29T09:00:00+00:00/PT4H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-04-29T13:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-29T14:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-29T15:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-04-29T16:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-04-29T17:00:00+00:00/PT1H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-04-29T18:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-04-29T19:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-29T20:00:00+00:00/PT1H",
            "value": 22.77777777777778
          },
          {
            "validTime": "2024-04-29T21:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-29T22:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-29T23:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-04-30T00:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-04-30T01:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-04-30T02:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-30T03:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-04-30T04:00:00+00:00/PT1H",
            "value": 17.22222222222222
          },
          {
            "validTime": "2024-04-30T05:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-04-30T06:00:00+00:00/PT1H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-04-30T07:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-04-30T08:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-04-30T09:00:00+00:00/PT3H",
            "value": 13.88888888888889
          },
          {
            "validTime": "2024-04-30T12:00:00+00:00/PT1H",
            "value": 13.333333333333334
          },
          {
            "validTime": "2024-04-30T13:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-04-30T14:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-04-30T15:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-30T16:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-04-30T17:00:00+00:00/PT1H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-04-30T18:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-04-30T19:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-30T20:00:00+00:00/PT1H",
            "value": 22.77777777777778
          },
          {
            "validTime": "2024-04-30T21:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-30T22:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-30T23:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-05-01T00:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-05-01T01:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-05-01T02:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-05-01T03:00:00+00:00/PT1H",
            "value": 17.22222222222222
          },
          {
            "validTime": "2024-05-01T04:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-05-01T05:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-05-01T06:00:00+00:00/PT2H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-05-01T08:00:00+00:00/PT5H",
            "value": 15
          },
          {
            "validTime": "2024-05-01T13:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-05-01T14:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-05-01T15:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-05-01T16:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-05-01T17:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-05-01T18:00:00+00:00/PT2H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-05-01T20:00:00+00:00/PT1H",
            "value": 22.77777777777778
          },
          {
            "validTime": "2024-05-01T21:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-05-01T22:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-05-01T23:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-05-02T00:00:00+00:00/PT1H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-05-02T01:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-05-02T02:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-05-02T03:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-05-02T04:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-05-02T05:00:00+00:00/PT1H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-05-02T06:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-05-02T07:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-05-02T08:00:00+00:00/PT1H",
            "value": 13.88888888888889
          },
          {
            "validTime": "2024-05-02T09:00:00+00:00/PT3H",
            "value": 12.777777777777779
          },
          {
            "validTime": "2024-05-02T12:00:00+00:00/PT1H",
            "value": 12.222222222222221
          },
          {
            "validTime": "2024-05-02T13:00:00+00:00/PT1H",
            "value": 13.333333333333334
          },
          {
            "validTime": "2024-05-02T14:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-05-02T15:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-05-02T16:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-05-02T17:00:00+00:00/PT1H",
            "value": 17.22222222222222
          },
          {
            "validTime": "2024-05-02T18:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-05-02T19:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-05-02T20:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-05-02T21:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-05-02T22:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-05-02T23:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-05-03T00:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-05-03T01:00:00+00:00/PT1H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-05-03T02:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-05-03T03:00:00+00:00/PT1H",
            "value": 13.333333333333334
          },
          {
            "validTime": "2024-05-03T04:00:00+00:00/PT1H",
            "value": 12.777777777777779
          },
          {
            "validTime": "2024-05-03T05:00:00+00:00/PT1H",
            "value": 12.222222222222221
          },
          {
            "validTime": "2024-05-03T06:00:00+00:00/PT1H",
            "value": 11.666666666666666
          },
          {
            "validTime": "2024-05-03T07:00:00+00:00/PT1H",
            "value": 11.11111111111111
          },
          {
            "validTime": "2024-05-03T08:00:00+00:00/PT1H",
            "value": 10.555555555555555
          },
          {
            "validTime": "2024-05-03T09:00:00+00:00/PT1H",
            "value": 7.777777777777778
          },
          {
            "validTime": "2024-05-03T10:00:00+00:00/PT1H",
            "value": 7.222222222222222
          },
          {
            "validTime": "2024-05-03T11:00:00+00:00/PT1H",
            "value": 6.666666666666667
          },
          {
            "validTime": "2024-05-03T12:00:00+00:00/PT1H",
            "value": 6.111111111111111
          },
          {
            "validTime": "2024-05-03T13:00:00+00:00/PT1H",
            "value": 7.777777777777778
          },
          {
            "validTime": "2024-05-03T14:00:00+00:00/PT1H",
            "value": 11.666666666666666
          },
          {
            "validTime": "2024-05-03T15:00:00+00:00/PT1H",
            "value": 13.333333333333334
          },
          {
            "validTime": "2024-05-03T16:00:00+00:00/PT1H",
            "value": 13.88888888888889
          },
          {
            "validTime": "2024-05-03T17:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-05-03T18:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-05-03T19:00:00+00:00/PT2H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-05-03T21:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-05-03T22:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-05-03T23:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-05-04T00:00:00+00:00/PT1H",
            "value": 13.88888888888889
          }
        ]
      },
      "maxTemperature": {
        "uom": "wmoUnit:degC",
        "values": [
          {
            "validTime": "2024-04-26T12:00:00+00:00/PT13H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-27T12:00:00+00:00/PT13H",
            "value": 25.555555555555557
          },
          {
            "validTime": "2024-04-28T12:00:00+00:00/PT13H",
            "value": 26.11111111111111
          },
          {
            "validTime": "2024-04-29T12:00:00+00:00/PT13H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-30T12:00:00+00:00/PT13H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-05-01T12:00:00+00:00/PT13H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-05-02T12:00:00+00:00/PT13H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-05-03T12:00:00+00:00/PT13H",
            "value": 16.11111111111111
          }
        ]
      },
      "minTemperature": {
        "uom": "wmoUnit:degC",
        "values": [
          {
            "validTime": "2024-04-26T05:00:00+00:00/PT9H",
            "value": 2.7777777777777777
          },
          {
            "validTime": "2024-04-27T00:00:00+00:00/PT14H",
            "value": 13.88888888888889
          },
          {
            "validTime": "2024-04-28T00:00:00+00:00/PT14H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-04-29T00:00:00+00:00/PT14H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-04-30T00:00:00+00:00/PT14H",
            "value": 12.777777777777779
          },
          {
            "validTime": "2024-05-01T00:00:00+00:00/PT14H",
            "value": 13.333333333333334
          },
          {
            "validTime": "2024-05-02T00:00:00+00:00/PT14H",
            "value": 11.666666666666666
          },
          {
            "validTime": "2024-05-03T00:00:00+00:00/PT14H",
            "value": 8.333333333333334
          },
          {
            "validTime": "2024-05-04T00:00:00+00:00/PT11H",
            "value": 6.111111111111111
          }
        ]
      },
      "quantitativePrecipitation": {
        "uom": "wmoUnit:mm",
        "values": [
          {
            "validTime": "2024-04-26T05:00:00+00:00/PT1H",
            "value": 0
          },
          {
            "validTime": "2024-04-26T06:00:00+00:00/PT6H",
            "value": 0
          },
          {
            "validTime": "2024-04-26T12:00:00+00:00/PT6H",
            "value": 0
          },
          {
            "validTime": "2024-04-26T18:00:00+00:00/PT6H",
            "value": 1.778
          },
          {
            "validTime": "2024-04-27T00:00:00+00:00/PT6H",
            "value": 2.54
          },
          {
            "validTime": "2024-04-27T06:00:00+00:00/PT6H",
            "value": 2.032
          },
          {
            "validTime": "2024-04-27T12:00:00+00:00/PT6H",
            "value": 0.254
          },
          {
            "validTime": "2024-04-27T18:00:00+00:00/PT6H",
            "value": 0.254
          },
          {
            "validTime": "2024-04-28T00:00:00+00:00/PT6H",
            "value": 0
          },
          {
            "validTime": "2024-04-28T06:00:00+00:00/PT6H",
            "value": 0.508
          },
          {
            "validTime": "2024-04-28T12:00:00+00:00/PT6H",
            "value": 0.508
          },
          {
            "validTime": "2024-04-28T18:00:00+00:00/PT6H",
            "value": 0
          },
          {
            "validTime": "2024-04-29T00:00:00+00:00/PT6H",
            "value": 0
          },
          {
            "validTime": "2024-04-29T06:00:00+00:00/PT6H",
            "value": 1.524
          }
        ]
      },
      "relativeHumidity": {
        "uom": "wmoUnit:percent",
        "values": [
          {
            "validTime": "2024-04-26T05:00:00+00:00/PT1H",
            "value": 59
          },
          {
            "validTime": "2024-04-26T06:00:00+00:00/PT1H",
            "value": 62
          },
          {
            "validTime": "2024-04-26T07:00:00+00:00/PT1H",
            "value": 64
          },
          {
            "validTime": "2024-04-26T08:00:00+00:00/PT3H",
            "value": 70
          },
          {
            "validTime": "2024-04-26T11:00:00+00:00/PT1H",
            "value": 65
          },
          {
            "validTime": "2024-04-26T12:00:00+00:00/PT1H",
            "value": 61
          },
          {
            "validTime": "2024-04-26T13:00:00+00:00/PT1H",
            "value": 57
          },
          {
            "validTime": "2024-04-26T14:00:00+00:00/PT1H",
            "value": 55
          },
          {
            "validTime": "2024-04-26T15:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-04-26T16:00:00+00:00/PT1H",
            "value": 46
          },
          {
            "validTime": "2024-04-26T17:00:00+00:00/PT1H",
            "value": 43
          },
          {
            "validTime": "2024-04-26T18:00:00+00:00/PT2H",
            "value": 40
          },
          {
            "validTime": "2024-04-26T20:00:00+00:00/PT1H",
            "value": 42
          },
          {
            "validTime": "2024-04-26T21:00:00+00:00/PT1H",
            "value": 43
          },
          {
            "validTime": "2024-04-26T22:00:00+00:00/PT1H",
            "value": 47
          },
          {
            "validTime": "2024-04-26T23:00:00+00:00/PT1H",
            "value": 54
          },
          {
            "validTime": "2024-04-27T00:00:00+00:00/PT1H",
            "value": 58
          },
          {
            "validTime": "2024-04-27T01:00:00+00:00/PT1H",
            "value": 62
          },
          {
            "validTime": "2024-04-27T02:00:00+00:00/PT1H",
            "value": 68
          },
          {
            "validTime": "2024-04-27T03:00:00+00:00/PT1H",
            "value": 71
          },
          {
            "validTime": "2024-04-27T04:00:00+00:00/PT1H",
            "value": 77
          },
          {
            "validTime": "2024-04-27T05:00:00+00:00/PT1H",
            "value": 82
          },
          {
            "validTime": "2024-04-27T06:00:00+00:00/PT1H",
            "value": 83
          },
          {
            "validTime": "2024-04-27T07:00:00+00:00/PT1H",
            "value": 86
          },
          {
            "validTime": "2024-04-27T08:00:00+00:00/PT3H",
            "value": 83
          },
          {
            "validTime": "2024-04-27T11:00:00+00:00/PT1H",
            "value": 86
          },
          {
            "validTime": "2024-04-27T12:00:00+00:00/PT2H",
            "value": 85
          },
          {
            "validTime": "2024-04-27T14:00:00+00:00/PT1H",
            "value": 82
          },
          {
            "validTime": "2024-04-27T15:00:00+00:00/PT2H",
            "value": 77
          },
          {
            "validTime": "2024-04-27T17:00:00+00:00/PT1H",
            "value": 73
          },
          {
            "validTime": "2024-04-27T18:00:00+00:00/PT1H",
            "value": 67
          },
          {
            "validTime": "2024-04-27T19:00:00+00:00/PT2H",
            "value": 64
          },
          {
            "validTime": "2024-04-27T21:00:00+00:00/PT1H",
            "value": 62
          },
          {
            "validTime": "2024-04-27T22:00:00+00:00/PT2H",
            "value": 64
          },
          {
            "validTime": "2024-04-28T00:00:00+00:00/PT1H",
            "value": 67
          },
          {
            "validTime": "2024-04-28T01:00:00+00:00/PT1H",
            "value": 68
          },
          {
            "validTime": "2024-04-28T02:00:00+00:00/PT1H",
            "value": 72
          },
          {
            "validTime": "2024-04-28T03:00:00+00:00/PT1H",
            "value": 74
          },
          {
            "validTime": "2024-04-28T04:00:00+00:00/PT1H",
            "value": 73
          },
          {
            "validTime": "2024-04-28T05:00:00+00:00/PT1H",
            "value": 75
          },
          {
            "validTime": "2024-04-28T06:00:00+00:00/PT1H",
            "value": 74
          },
          {
            "validTime": "2024-04-28T07:00:00+00:00/PT1H",
            "value": 76
          },
          {
            "validTime": "2024-04-28T08:00:00+00:00/PT1H",
            "value": 78
          },
          {
            "validTime": "2024-04-28T09:00:00+00:00/PT1H",
            "value": 79
          },
          {
            "validTime": "2024-04-28T10:00:00+00:00/PT1H",
            "value": 81
          },
          {
            "validTime": "2024-04-28T11:00:00+00:00/PT1H",
            "value": 86
          },
          {
            "validTime": "2024-04-28T12:00:00+00:00/PT1H",
            "value": 88
          },
          {
            "validTime": "2024-04-28T13:00:00+00:00/PT1H",
            "value": 80
          },
          {
            "validTime": "2024-04-28T14:00:00+00:00/PT1H",
            "value": 74
          },
          {
            "validTime": "2024-04-28T15:00:00+00:00/PT1H",
            "value": 68
          },
          {
            "validTime": "2024-04-28T16:00:00+00:00/PT1H",
            "value": 63
          },
          {
            "validTime": "2024-04-28T17:00:00+00:00/PT1H",
            "value": 59
          },
          {
            "validTime": "2024-04-28T18:00:00+00:00/PT1H",
            "value": 55
          },
          {
            "validTime": "2024-04-28T19:00:00+00:00/PT1H",
            "value": 53
          },
          {
            "validTime": "2024-04-28T20:00:00+00:00/PT1H",
            "value": 50
          },
          {
            "validTime": "2024-04-28T21:00:00+00:00/PT2H",
            "value": 49
          },
          {
            "validTime": "2024-04-28T23:00:00+00:00/PT2H",
            "value": 50
          },
          {
            "validTime": "2024-04-29T01:00:00+00:00/PT1H",
            "value": 54
          },
          {
            "validTime": "2024-04-29T02:00:00+00:00/PT1H",
            "value": 57
          },
          {
            "validTime": "2024-04-29T03:00:00+00:00/PT1H",
            "value": 61
          },
          {
            "validTime": "2024-04-29T04:00:00+00:00/PT1H",
            "value": 63
          },
          {
            "validTime": "2024-04-29T05:00:00+00:00/PT1H",
            "value": 65
          },
          {
            "validTime": "2024-04-29T06:00:00+00:00/PT1H",
            "value": 68
          },
          {
            "validTime": "2024-04-29T07:00:00+00:00/PT1H",
            "value": 70
          },
          {
            "validTime": "2024-04-29T08:00:00+00:00/PT1H",
            "value": 75
          },
          {
            "validTime": "2024-04-29T09:00:00+00:00/PT2H",
            "value": 77
          },
          {
            "validTime": "2024-04-29T11:00:00+00:00/PT2H",
            "value": 80
          },
          {
            "validTime": "2024-04-29T13:00:00+00:00/PT1H",
            "value": 77
          },
          {
            "validTime": "2024-04-29T14:00:00+00:00/PT1H",
            "value": 75
          },
          {
            "validTime": "2024-04-29T15:00:00+00:00/PT1H",
            "value": 73
          },
          {
            "validTime": "2024-04-29T16:00:00+00:00/PT1H",
            "value": 70
          },
          {
            "validTime": "2024-04-29T17:00:00+00:00/PT1H",
            "value": 67
          },
          {
            "validTime": "2024-04-29T18:00:00+00:00/PT1H",
            "value": 64
          },
          {
            "validTime": "2024-04-29T19:00:00+00:00/PT1H",
            "value": 62
          },
          {
            "validTime": "2024-04-29T20:00:00+00:00/PT1H",
            "value": 60
          },
          {
            "validTime": "2024-04-29T21:00:00+00:00/PT2H",
            "value": 58
          },
          {
            "validTime": "2024-04-29T23:00:00+00:00/PT2H",
            "value": 61
          },
          {
            "validTime": "2024-04-30T01:00:00+00:00/PT1H",
            "value": 65
          },
          {
            "validTime": "2024-04-30T02:00:00+00:00/PT1H",
            "value": 73
          },
          {
            "validTime": "2024-04-30T03:00:00+00:00/PT1H",
            "value": 78
          },
          {
            "validTime": "2024-04-30T04:00:00+00:00/PT1H",
            "value": 82
          },
          {
            "validTime": "2024-04-30T05:00:00+00:00/PT1H",
            "value": 86
          },
          {
            "validTime": "2024-04-30T06:00:00+00:00/PT1H",
            "value": 87
          },
          {
            "validTime": "2024-04-30T07:00:00+00:00/PT2H",
            "value": 86
          },
          {
            "validTime": "2024-04-30T09:00:00+00:00/PT1H",
            "value": 85
          },
          {
            "validTime": "2024-04-30T10:00:00+00:00/PT1H",
            "value": 87
          },
          {
            "validTime": "2024-04-30T11:00:00+00:00/PT1H",
            "value": 88
          },
          {
            "validTime": "2024-04-30T12:00:00+00:00/PT1H",
            "value": 89
          },
          {
            "validTime": "2024-04-30T13:00:00+00:00/PT1H",
            "value": 80
          },
          {
            "validTime": "2024-04-30T14:00:00+00:00/PT1H",
            "value": 72
          },
          {
            "validTime": "2024-04-30T15:00:00+00:00/PT1H",
            "value": 65
          },
          {
            "validTime": "2024-04-30T16:00:00+00:00/PT1H",
            "value": 61
          },
          {
            "validTime": "2024-04-30T17:00:00+00:00/PT1H",
            "value": 55
          },
          {
            "validTime": "2024-04-30T18:00:00+00:00/PT1H",
            "value": 52
          },
          {
            "validTime": "2024-04-30T19:00:00+00:00/PT1H",
            "value": 50
          },
          {
            "validTime": "2024-04-30T20:00:00+00:00/PT1H",
            "value": 48
          },
          {
            "validTime": "2024-04-30T21:00:00+00:00/PT1H",
            "value": 47
          },
          {
            "validTime": "2024-04-30T22:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-04-30T23:00:00+00:00/PT1H",
            "value": 51
          },
          {
            "validTime": "2024-05-01T00:00:00+00:00/PT1H",
            "value": 53
          },
          {
            "validTime": "2024-05-01T01:00:00+00:00/PT1H",
            "value": 57
          },
          {
            "validTime": "2024-05-01T02:00:00+00:00/PT1H",
            "value": 64
          },
          {
            "validTime": "2024-05-01T03:00:00+00:00/PT1H",
            "value": 70
          },
          {
            "validTime": "2024-05-01T04:00:00+00:00/PT1H",
            "value": 72
          },
          {
            "validTime": "2024-05-01T05:00:00+00:00/PT1H",
            "value": 75
          },
          {
            "validTime": "2024-05-01T06:00:00+00:00/PT2H",
            "value": 78
          },
          {
            "validTime": "2024-05-01T08:00:00+00:00/PT1H",
            "value": 82
          },
          {
            "validTime": "2024-05-01T09:00:00+00:00/PT2H",
            "value": 83
          },
          {
            "validTime": "2024-05-01T11:00:00+00:00/PT2H",
            "value": 80
          },
          {
            "validTime": "2024-05-01T13:00:00+00:00/PT1H",
            "value": 74
          },
          {
            "validTime": "2024-05-01T14:00:00+00:00/PT1H",
            "value": 66
          },
          {
            "validTime": "2024-05-01T15:00:00+00:00/PT1H",
            "value": 61
          },
          {
            "validTime": "2024-05-01T16:00:00+00:00/PT1H",
            "value": 55
          },
          {
            "validTime": "2024-05-01T17:00:00+00:00/PT1H",
            "value": 51
          },
          {
            "validTime": "2024-05-01T18:00:00+00:00/PT1H",
            "value": 47
          },
          {
            "validTime": "2024-05-01T19:00:00+00:00/PT1H",
            "value": 44
          },
          {
            "validTime": "2024-05-01T20:00:00+00:00/PT1H",
            "value": 43
          },
          {
            "validTime": "2024-05-01T21:00:00+00:00/PT1H",
            "value": 42
          },
          {
            "validTime": "2024-05-01T22:00:00+00:00/PT1H",
            "value": 44
          },
          {
            "validTime": "2024-05-01T23:00:00+00:00/PT1H",
            "value": 48
          },
          {
            "validTime": "2024-05-02T00:00:00+00:00/PT1H",
            "value": 50
          },
          {
            "validTime": "2024-05-02T01:00:00+00:00/PT1H",
            "value": 55
          },
          {
            "validTime": "2024-05-02T02:00:00+00:00/PT1H",
            "value": 57
          },
          {
            "validTime": "2024-05-02T03:00:00+00:00/PT1H",
            "value": 62
          },
          {
            "validTime": "2024-05-02T04:00:00+00:00/PT1H",
            "value": 65
          },
          {
            "validTime": "2024-05-02T05:00:00+00:00/PT1H",
            "value": 67
          },
          {
            "validTime": "2024-05-02T06:00:00+00:00/PT1H",
            "value": 69
          },
          {
            "validTime": "2024-05-02T07:00:00+00:00/PT1H",
            "value": 72
          },
          {
            "validTime": "2024-05-02T08:00:00+00:00/PT1H",
            "value": 78
          },
          {
            "validTime": "2024-05-02T09:00:00+00:00/PT1H",
            "value": 82
          },
          {
            "validTime": "2024-05-02T10:00:00+00:00/PT1H",
            "value": 83
          },
          {
            "validTime": "2024-05-02T11:00:00+00:00/PT1H",
            "value": 81
          },
          {
            "validTime": "2024-05-02T12:00:00+00:00/PT1H",
            "value": 83
          },
          {
            "validTime": "2024-05-02T13:00:00+00:00/PT1H",
            "value": 76
          },
          {
            "validTime": "2024-05-02T14:00:00+00:00/PT1H",
            "value": 73
          },
          {
            "validTime": "2024-05-02T15:00:00+00:00/PT1H",
            "value": 67
          },
          {
            "validTime": "2024-05-02T16:00:00+00:00/PT1H",
            "value": 64
          },
          {
            "validTime": "2024-05-02T17:00:00+00:00/PT1H",
            "value": 59
          },
          {
            "validTime": "2024-05-02T18:00:00+00:00/PT1H",
            "value": 57
          },
          {
            "validTime": "2024-05-02T19:00:00+00:00/PT1H",
            "value": 56
          },
          {
            "validTime": "2024-05-02T20:00:00+00:00/PT1H",
            "value": 52
          },
          {
            "validTime": "2024-05-02T21:00:00+00:00/PT1H",
            "value": 51
          },
          {
            "validTime": "2024-05-02T22:00:00+00:00/PT1H",
            "value": 52
          },
          {
            "validTime": "2024-05-02T23:00:00+00:00/PT2H",
            "value": 55
          },
          {
            "validTime": "2024-05-03T01:00:00+00:00/PT1H",
            "value": 57
          },
          {
            "validTime": "2024-05-03T02:00:00+00:00/PT1H",
            "value": 62
          },
          {
            "validTime": "2024-05-03T03:00:00+00:00/PT1H",
            "value": 64
          },
          {
            "validTime": "2024-05-03T04:00:00+00:00/PT1H",
            "value": 66
          },
          {
            "validTime": "2024-05-03T05:00:00+00:00/PT1H",
            "value": 69
          },
          {
            "validTime": "2024-05-03T06:00:00+00:00/PT2H",
            "value": 71
          },
          {
            "validTime": "2024-05-03T08:00:00+00:00/PT1H",
            "value": 74
          },
          {
            "validTime": "2024-05-03T09:00:00+00:00/PT1H",
            "value": 73
          },
          {
            "validTime": "2024-05-03T10:00:00+00:00/PT1H",
            "value": 75
          },
          {
            "validTime": "2024-05-03T11:00:00+00:00/PT1H",
            "value": 74
          },
          {
            "validTime": "2024-05-03T12:00:00+00:00/PT1H",
            "value": 76
          },
          {
            "validTime": "2024-05-03T13:00:00+00:00/PT1H",
            "value": 69
          },
          {
            "validTime": "2024-05-03T14:00:00+00:00/PT1H",
            "value": 63
          },
          {
            "validTime": "2024-05-03T15:00:00+00:00/PT1H",
            "value": 57
          },
          {
            "validTime": "2024-05-03T16:00:00+00:00/PT1H",
            "value": 55
          },
          {
            "validTime": "2024-05-03T17:00:00+00:00/PT1H",
            "value": 51
          },
          {
            "validTime": "2024-05-03T18:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-05-03T19:00:00+00:00/PT1H",
            "value": 48
          },
          {
            "validTime": "2024-05-03T20:00:00+00:00/PT2H",
            "value": 45
          },
          {
            "validTime": "2024-05-03T22:00:00+00:00/PT1H",
            "value": 47
          },
          {
            "validTime": "2024-05-03T23:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-05-04T00:00:00+00:00/PT1H",
            "value": 51
          }
        ]
      },
      "skyCover": {
        "uom": "wmoUnit:percent",
        "values": [
          {
            "validTime": "2024-04-26T05:00:00+00:00/PT1H",
            "value": 5
          },
          {
            "validTime": "2024-04-26T06:00:00+00:00/PT1H",
            "value": 1
          },
          {
            "validTime": "2024-04-26T07:00:00+00:00/PT1H",
            "value": 2
          },
          {
            "validTime": "2024-04-26T08:00:00+00:00/PT1H",
            "value": 3
          },
          {
            "validTime": "2024-04-26T09:00:00+00:00/PT1H",
            "value": 4
          },
          {
            "validTime": "2024-04-26T10:00:00+00:00/PT2H",
            "value": 3
          },
          {
            "validTime": "2024-04-26T12:00:00+00:00/PT1H",
            "value": 2
          },
          {
            "validTime": "2024-04-26T13:00:00+00:00/PT1H",
            "value": 4
          },
          {
            "validTime": "2024-04-26T14:00:00+00:00/PT1H",
            "value": 5
          },
          {
            "validTime": "2024-04-26T15:00:00+00:00/PT1H",
            "value": 7
          },
          {
            "validTime": "2024-04-26T16:00:00+00:00/PT1H",
            "value": 24
          },
          {
            "validTime": "2024-04-26T17:00:00+00:00/PT1H",
            "value": 41
          },
          {
            "validTime": "2024-04-26T18:00:00+00:00/PT1H",
            "value": 58
          },
          {
            "validTime": "2024-04-26T19:00:00+00:00/PT1H",
            "value": 68
          },
          {
            "validTime": "2024-04-26T20:00:00+00:00/PT1H",
            "value": 77
          },
          {
            "validTime": "2024-04-26T21:00:00+00:00/PT1H",
            "value": 87
          },
          {
            "validTime": "2024-04-26T22:00:00+00:00/PT1H",
            "value": 89
          },
          {
            "validTime": "2024-04-26T23:00:00+00:00/PT1H",
            "value": 91
          },
          {
            "validTime": "2024-04-27T00:00:00+00:00/PT1H",
            "value": 93
          },
          {
            "validTime": "2024-04-27T01:00:00+00:00/PT1H",
            "value": 91
          },
          {
            "validTime": "2024-04-27T02:00:00+00:00/PT1H",
            "value": 90
          },
          {
            "validTime": "2024-04-27T03:00:00+00:00/PT2H",
            "value": 89
          },
          {
            "validTime": "2024-04-27T05:00:00+00:00/PT2H",
            "value": 88
          },
          {
            "validTime": "2024-04-27T07:00:00+00:00/PT2H",
            "value": 89
          },
          {
            "validTime": "2024-04-27T09:00:00+00:00/PT1H",
            "value": 90
          },
          {
            "validTime": "2024-04-27T10:00:00+00:00/PT1H",
            "value": 88
          },
          {
            "validTime": "2024-04-27T11:00:00+00:00/PT1H",
            "value": 85
          },
          {
            "validTime": "2024-04-27T12:00:00+00:00/PT1H",
            "value": 83
          },
          {
            "validTime": "2024-04-27T13:00:00+00:00/PT1H",
            "value": 81
          },
          {
            "validTime": "2024-04-27T14:00:00+00:00/PT1H",
            "value": 79
          },
          {
            "validTime": "2024-04-27T15:00:00+00:00/PT1H",
            "value": 78
          },
          {
            "validTime": "2024-04-27T16:00:00+00:00/PT1H",
            "value": 70
          },
          {
            "validTime": "2024-04-27T17:00:00+00:00/PT1H",
            "value": 63
          },
          {
            "validTime": "2024-04-27T18:00:00+00:00/PT1H",
            "value": 55
          },
          {
            "validTime": "2024-04-27T19:00:00+00:00/PT1H",
            "value": 56
          },
          {
            "validTime": "2024-04-27T20:00:00+00:00/PT1H",
            "value": 58
          },
          {
            "validTime": "2024-04-27T21:00:00+00:00/PT1H",
            "value": 59
          },
          {
            "validTime": "2024-04-27T22:00:00+00:00/PT1H",
            "value": 54
          },
          {
            "validTime": "2024-04-27T23:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-04-28T00:00:00+00:00/PT2H",
            "value": 45
          },
          {
            "validTime": "2024-04-28T02:00:00+00:00/PT2H",
            "value": 44
          },
          {
            "validTime": "2024-04-28T04:00:00+00:00/PT1H",
            "value": 51
          },
          {
            "validTime": "2024-04-28T05:00:00+00:00/PT1H",
            "value": 58
          },
          {
            "validTime": "2024-04-28T06:00:00+00:00/PT1H",
            "value": 65
          },
          {
            "validTime": "2024-04-28T07:00:00+00:00/PT1H",
            "value": 68
          },
          {
            "validTime": "2024-04-28T08:00:00+00:00/PT1H",
            "value": 72
          },
          {
            "validTime": "2024-04-28T09:00:00+00:00/PT1H",
            "value": 75
          },
          {
            "validTime": "2024-04-28T10:00:00+00:00/PT2H",
            "value": 76
          },
          {
            "validTime": "2024-04-28T12:00:00+00:00/PT1H",
            "value": 77
          },
          {
            "validTime": "2024-04-28T13:00:00+00:00/PT1H",
            "value": 71
          },
          {
            "validTime": "2024-04-28T14:00:00+00:00/PT1H",
            "value": 66
          },
          {
            "validTime": "2024-04-28T15:00:00+00:00/PT1H",
            "value": 60
          },
          {
            "validTime": "2024-04-28T16:00:00+00:00/PT1H",
            "value": 59
          },
          {
            "validTime": "2024-04-28T17:00:00+00:00/PT1H",
            "value": 57
          },
          {
            "validTime": "2024-04-28T18:00:00+00:00/PT1H",
            "value": 56
          },
          {
            "validTime": "2024-04-28T19:00:00+00:00/PT1H",
            "value": 48
          },
          {
            "validTime": "2024-04-28T20:00:00+00:00/PT1H",
            "value": 41
          },
          {
            "validTime": "2024-04-28T21:00:00+00:00/PT1H",
            "value": 33
          },
          {
            "validTime": "2024-04-28T22:00:00+00:00/PT1H",
            "value": 41
          },
          {
            "validTime": "2024-04-28T23:00:00+00:00/PT1H",
            "value": 48
          },
          {
            "validTime": "2024-04-29T00:00:00+00:00/PT1H",
            "value": 56
          },
          {
            "validTime": "2024-04-29T01:00:00+00:00/PT1H",
            "value": 53
          },
          {
            "validTime": "2024-04-29T02:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-04-29T03:00:00+00:00/PT1H",
            "value": 46
          },
          {
            "validTime": "2024-04-29T04:00:00+00:00/PT1H",
            "value": 48
          },
          {
            "validTime": "2024-04-29T05:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-04-29T06:00:00+00:00/PT1H",
            "value": 51
          },
          {
            "validTime": "2024-04-29T07:00:00+00:00/PT1H",
            "value": 58
          },
          {
            "validTime": "2024-04-29T08:00:00+00:00/PT1H",
            "value": 64
          },
          {
            "validTime": "2024-04-29T09:00:00+00:00/PT1H",
            "value": 71
          },
          {
            "validTime": "2024-04-29T10:00:00+00:00/PT1H",
            "value": 75
          },
          {
            "validTime": "2024-04-29T11:00:00+00:00/PT1H",
            "value": 79
          },
          {
            "validTime": "2024-04-29T12:00:00+00:00/PT1H",
            "value": 83
          },
          {
            "validTime": "2024-04-29T13:00:00+00:00/PT2H",
            "value": 82
          },
          {
            "validTime": "2024-04-29T15:00:00+00:00/PT1H",
            "value": 81
          },
          {
            "validTime": "2024-04-29T16:00:00+00:00/PT1H",
            "value": 83
          },
          {
            "validTime": "2024-04-29T17:00:00+00:00/PT1H",
            "value": 84
          },
          {
            "validTime": "2024-04-29T18:00:00+00:00/PT1H",
            "value": 86
          },
          {
            "validTime": "2024-04-29T19:00:00+00:00/PT1H",
            "value": 81
          },
          {
            "validTime": "2024-04-29T20:00:00+00:00/PT1H",
            "value": 76
          },
          {
            "validTime": "2024-04-29T21:00:00+00:00/PT1H",
            "value": 71
          },
          {
            "validTime": "2024-04-29T22:00:00+00:00/PT1H",
            "value": 76
          },
          {
            "validTime": "2024-04-29T23:00:00+00:00/PT1H",
            "value": 80
          },
          {
            "validTime": "2024-04-30T00:00:00+00:00/PT4H",
            "value": 85
          },
          {
            "validTime": "2024-04-30T04:00:00+00:00/PT1H",
            "value": 78
          },
          {
            "validTime": "2024-04-30T05:00:00+00:00/PT1H",
            "value": 72
          },
          {
            "validTime": "2024-04-30T06:00:00+00:00/PT1H",
            "value": 65
          },
          {
            "validTime": "2024-04-30T07:00:00+00:00/PT2H",
            "value": 64
          },
          {
            "validTime": "2024-04-30T09:00:00+00:00/PT1H",
            "value": 63
          },
          {
            "validTime": "2024-04-30T10:00:00+00:00/PT1H",
            "value": 58
          },
          {
            "validTime": "2024-04-30T11:00:00+00:00/PT1H",
            "value": 54
          },
          {
            "validTime": "2024-04-30T12:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-04-30T13:00:00+00:00/PT1H",
            "value": 45
          },
          {
            "validTime": "2024-04-30T14:00:00+00:00/PT1H",
            "value": 40
          },
          {
            "validTime": "2024-04-30T15:00:00+00:00/PT1H",
            "value": 36
          },
          {
            "validTime": "2024-04-30T16:00:00+00:00/PT1H",
            "value": 34
          },
          {
            "validTime": "2024-04-30T17:00:00+00:00/PT1H",
            "value": 32
          },
          {
            "validTime": "2024-04-30T18:00:00+00:00/PT1H",
            "value": 30
          },
          {
            "validTime": "2024-04-30T19:00:00+00:00/PT1H",
            "value": 26
          },
          {
            "validTime": "2024-04-30T20:00:00+00:00/PT1H",
            "value": 22
          },
          {
            "validTime": "2024-04-30T21:00:00+00:00/PT1H",
            "value": 18
          },
          {
            "validTime": "2024-04-30T22:00:00+00:00/PT2H",
            "value": 17
          },
          {
            "validTime": "2024-05-01T00:00:00+00:00/PT1H",
            "value": 16
          },
          {
            "validTime": "2024-05-01T01:00:00+00:00/PT1H",
            "value": 23
          },
          {
            "validTime": "2024-05-01T02:00:00+00:00/PT1H",
            "value": 30
          },
          {
            "validTime": "2024-05-01T03:00:00+00:00/PT1H",
            "value": 37
          },
          {
            "validTime": "2024-05-01T04:00:00+00:00/PT1H",
            "value": 39
          },
          {
            "validTime": "2024-05-01T05:00:00+00:00/PT1H",
            "value": 40
          },
          {
            "validTime": "2024-05-01T06:00:00+00:00/PT1H",
            "value": 42
          },
          {
            "validTime": "2024-05-01T07:00:00+00:00/PT1H",
            "value": 46
          },
          {
            "validTime": "2024-05-01T08:00:00+00:00/PT1H",
            "value": 50
          },
          {
            "validTime": "2024-05-01T09:00:00+00:00/PT1H",
            "value": 54
          },
          {
            "validTime": "2024-05-01T10:00:00+00:00/PT1H",
            "value": 50
          },
          {
            "validTime": "2024-05-01T11:00:00+00:00/PT1H",
            "value": 45
          },
          {
            "validTime": "2024-05-01T12:00:00+00:00/PT1H",
            "value": 41
          },
          {
            "validTime": "2024-05-01T13:00:00+00:00/PT2H",
            "value": 42
          },
          {
            "validTime": "2024-05-01T15:00:00+00:00/PT1H",
            "value": 43
          },
          {
            "validTime": "2024-05-01T16:00:00+00:00/PT1H",
            "value": 39
          },
          {
            "validTime": "2024-05-01T17:00:00+00:00/PT1H",
            "value": 35
          },
          {
            "validTime": "2024-05-01T18:00:00+00:00/PT2H",
            "value": 31
          },
          {
            "validTime": "2024-05-01T20:00:00+00:00/PT2H",
            "value": 32
          },
          {
            "validTime": "2024-05-01T22:00:00+00:00/PT1H",
            "value": 36
          },
          {
            "validTime": "2024-05-01T23:00:00+00:00/PT1H",
            "value": 40
          },
          {
            "validTime": "2024-05-02T00:00:00+00:00/PT1H",
            "value": 44
          },
          {
            "validTime": "2024-05-02T01:00:00+00:00/PT1H",
            "value": 46
          },
          {
            "validTime": "2024-05-02T02:00:00+00:00/PT1H",
            "value": 47
          },
          {
            "validTime": "2024-05-02T03:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-05-02T04:00:00+00:00/PT1H",
            "value": 48
          },
          {
            "validTime": "2024-05-02T05:00:00+00:00/PT1H",
            "value": 46
          },
          {
            "validTime": "2024-05-02T06:00:00+00:00/PT1H",
            "value": 45
          },
          {
            "validTime": "2024-05-02T07:00:00+00:00/PT1H",
            "value": 47
          },
          {
            "validTime": "2024-05-02T08:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-05-02T09:00:00+00:00/PT1H",
            "value": 51
          },
          {
            "validTime": "2024-05-02T10:00:00+00:00/PT1H",
            "value": 52
          },
          {
            "validTime": "2024-05-02T11:00:00+00:00/PT1H",
            "value": 53
          },
          {
            "validTime": "2024-05-02T12:00:00+00:00/PT1H",
            "value": 54
          },
          {
            "validTime": "2024-05-02T13:00:00+00:00/PT1H",
            "value": 52
          },
          {
            "validTime": "2024-05-02T14:00:00+00:00/PT1H",
            "value": 49
          },
          {
            "validTime": "2024-05-02T15:00:00+00:00/PT4H",
            "value": 47
          },
          {
            "validTime": "2024-05-02T19:00:00+00:00/PT1H",
            "value": 45
          },
          {
            "validTime": "2024-05-02T20:00:00+00:00/PT1H",
            "value": 42
          },
          {
            "validTime": "2024-05-02T21:00:00+00:00/PT1H",
            "value": 40
          },
          {
            "validTime": "2024-05-02T22:00:00+00:00/PT1H",
            "value": 42
          },
          {
            "validTime": "2024-05-02T23:00:00+00:00/PT1H",
            "value": 44
          },
          {
            "validTime": "2024-05-03T00:00:00+00:00/PT1H",
            "value": 46
          },
          {
            "validTime": "2024-05-03T01:00:00+00:00/PT1H",
            "value": 44
          },
          {
            "validTime": "2024-05-03T02:00:00+00:00/PT1H",
            "value": 43
          },
          {
            "validTime": "2024-05-03T03:00:00+00:00/PT1H",
            "value": 41
          },
          {
            "validTime": "2024-05-03T04:00:00+00:00/PT1H",
            "value": 39
          },
          {
            "validTime": "2024-05-03T05:00:00+00:00/PT1H",
            "value": 37
          },
          {
            "validTime": "2024-05-03T06:00:00+00:00/PT1H",
            "value": 35
          },
          {
            "validTime": "2024-05-03T07:00:00+00:00/PT1H",
            "value": 34
          },
          {
            "validTime": "2024-05-03T08:00:00+00:00/PT1H",
            "value": 33
          },
          {
            "validTime": "2024-05-03T09:00:00+00:00/PT1H",
            "value": 32
          },
          {
            "validTime": "2024-05-03T10:00:00+00:00/PT1H",
            "value": 30
          },
          {
            "validTime": "2024-05-03T11:00:00+00:00/PT1H",
            "value": 29
          },
          {
            "validTime": "2024-05-03T12:00:00+00:00/PT1H",
            "value": 27
          },
          {
            "validTime": "2024-05-03T13:00:00+00:00/PT1H",
            "value": 29
          },
          {
            "validTime": "2024-05-03T14:00:00+00:00/PT1H",
            "value": 31
          },
          {
            "validTime": "2024-05-03T15:00:00+00:00/PT1H",
            "value": 33
          },
          {
            "validTime": "2024-05-03T16:00:00+00:00/PT1H",
            "value": 32
          },
          {
            "validTime": "2024-05-03T17:00:00+00:00/PT1H",
            "value": 31
          },
          {
            "validTime": "2024-05-03T18:00:00+00:00/PT1H",
            "value": 30
          },
          {
            "validTime": "2024-05-03T19:00:00+00:00/PT1H",
            "value": 27
          },
          {
            "validTime": "2024-05-03T20:00:00+00:00/PT1H",
            "value": 25
          },
          {
            "validTime": "2024-05-03T21:00:00+00:00/PT2H",
            "value": 22
          },
          {
            "validTime": "2024-05-03T23:00:00+00:00/PT2H",
            "value": 23
          }
        ]
      },
      "temperature": {
        "uom": "wmoUnit:degC",
        "values": [
          {
            "validTime": "2024-04-26T05:00:00+00:00/PT2H",
            "value": 5
          },
          {
            "validTime": "2024-04-26T07:00:00+00:00/PT2H",
            "value": 4.444444444444445
          },
          {
            "validTime": "2024-04-26T09:00:00+00:00/PT1H",
            "value": 3.3333333333333335
          },
          {
            "validTime": "2024-04-26T10:00:00+00:00/PT1H",
            "value": 2.7777777777777777
          },
          {
            "validTime": "2024-04-26T11:00:00+00:00/PT1H",
            "value": 4.444444444444445
          },
          {
            "validTime": "2024-04-26T12:00:00+00:00/PT1H",
            "value": 6.666666666666667
          },
          {
            "validTime": "2024-04-26T13:00:00+00:00/PT1H",
            "value": 8.333333333333334
          },
          {
            "validTime": "2024-04-26T14:00:00+00:00/PT1H",
            "value": 10
          },
          {
            "validTime": "2024-04-26T15:00:00+00:00/PT1H",
            "value": 12.777777777777779
          },
          {
            "validTime": "2024-04-26T16:00:00+00:00/PT1H",
            "value": 13.88888888888889
          },
          {
            "validTime": "2024-04-26T17:00:00+00:00/PT1H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-04-26T18:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-04-26T19:00:00+00:00/PT3H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-26T22:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-04-26T23:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-04-27T00:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-04-27T01:00:00+00:00/PT2H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-04-27T03:00:00+00:00/PT2H",
            "value": 15
          },
          {
            "validTime": "2024-04-27T05:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-04-27T06:00:00+00:00/PT2H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-04-27T08:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-04-27T09:00:00+00:00/PT4H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-04-27T13:00:00+00:00/PT1H",
            "value": 17.22222222222222
          },
          {
            "validTime": "2024-04-27T14:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-27T15:00:00+00:00/PT2H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-04-27T17:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-04-27T18:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-27T19:00:00+00:00/PT1H",
            "value": 23.88888888888889
          },
          {
            "validTime": "2024-04-27T20:00:00+00:00/PT1H",
            "value": 24.444444444444443
          },
          {
            "validTime": "2024-04-27T21:00:00+00:00/PT1H",
            "value": 25
          },
          {
            "validTime": "2024-04-27T22:00:00+00:00/PT1H",
            "value": 24.444444444444443
          },
          {
            "validTime": "2024-04-27T23:00:00+00:00/PT1H",
            "value": 23.88888888888889
          },
          {
            "validTime": "2024-04-28T00:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-28T01:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-28T02:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-04-28T03:00:00+00:00/PT1H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-04-28T04:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-04-28T05:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-04-28T06:00:00+00:00/PT2H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-28T08:00:00+00:00/PT2H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-28T10:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-04-28T11:00:00+00:00/PT2H",
            "value": 17.22222222222222
          },
          {
            "validTime": "2024-04-28T13:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-28T14:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-04-28T15:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-04-28T16:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-28T17:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-28T18:00:00+00:00/PT1H",
            "value": 24.444444444444443
          },
          {
            "validTime": "2024-04-28T19:00:00+00:00/PT1H",
            "value": 25
          },
          {
            "validTime": "2024-04-28T20:00:00+00:00/PT1H",
            "value": 25.555555555555557
          },
          {
            "validTime": "2024-04-28T21:00:00+00:00/PT1H",
            "value": 26.11111111111111
          },
          {
            "validTime": "2024-04-28T22:00:00+00:00/PT1H",
            "value": 25.555555555555557
          },
          {
            "validTime": "2024-04-28T23:00:00+00:00/PT1H",
            "value": 25
          },
          {
            "validTime": "2024-04-29T00:00:00+00:00/PT1H",
            "value": 24.444444444444443
          },
          {
            "validTime": "2024-04-29T01:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-29T02:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-29T03:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-04-29T04:00:00+00:00/PT1H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-04-29T05:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-04-29T06:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-04-29T07:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-29T08:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-29T09:00:00+00:00/PT4H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-04-29T13:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-29T14:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-29T15:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-04-29T16:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-04-29T17:00:00+00:00/PT1H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-04-29T18:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-04-29T19:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-29T20:00:00+00:00/PT1H",
            "value": 22.77777777777778
          },
          {
            "validTime": "2024-04-29T21:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-29T22:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-29T23:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-04-30T00:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-04-30T01:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-04-30T02:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-04-30T03:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-04-30T04:00:00+00:00/PT1H",
            "value": 17.22222222222222
          },
          {
            "validTime": "2024-04-30T05:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-04-30T06:00:00+00:00/PT1H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-04-30T07:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-04-30T08:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-04-30T09:00:00+00:00/PT3H",
            "value": 13.88888888888889
          },
          {
            "validTime": "2024-04-30T12:00:00+00:00/PT1H",
            "value": 13.333333333333334
          },
          {
            "validTime": "2024-04-30T13:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-04-30T14:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-04-30T15:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-04-30T16:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-04-30T17:00:00+00:00/PT1H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-04-30T18:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-04-30T19:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-30T20:00:00+00:00/PT1H",
            "value": 22.77777777777778
          },
          {
            "validTime": "2024-04-30T21:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-04-30T22:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-04-30T23:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-05-01T00:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-05-01T01:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-05-01T02:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-05-01T03:00:00+00:00/PT1H",
            "value": 17.22222222222222
          },
          {
            "validTime": "2024-05-01T04:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-05-01T05:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-05-01T06:00:00+00:00/PT2H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-05-01T08:00:00+00:00/PT5H",
            "value": 15
          },
          {
            "validTime": "2024-05-01T13:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-05-01T14:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-05-01T15:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-05-01T16:00:00+00:00/PT1H",
            "value": 20
          },
          {
            "validTime": "2024-05-01T17:00:00+00:00/PT1H",
            "value": 21.11111111111111
          },
          {
            "validTime": "2024-05-01T18:00:00+00:00/PT2H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-05-01T20:00:00+00:00/PT1H",
            "value": 22.77777777777778
          },
          {
            "validTime": "2024-05-01T21:00:00+00:00/PT1H",
            "value": 23.333333333333332
          },
          {
            "validTime": "2024-05-01T22:00:00+00:00/PT1H",
            "value": 22.22222222222222
          },
          {
            "validTime": "2024-05-01T23:00:00+00:00/PT1H",
            "value": 21.666666666666668
          },
          {
            "validTime": "2024-05-02T00:00:00+00:00/PT1H",
            "value": 20.555555555555557
          },
          {
            "validTime": "2024-05-02T01:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-05-02T02:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-05-02T03:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-05-02T04:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-05-02T05:00:00+00:00/PT1H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-05-02T06:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-05-02T07:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-05-02T08:00:00+00:00/PT1H",
            "value": 13.88888888888889
          },
          {
            "validTime": "2024-05-02T09:00:00+00:00/PT3H",
            "value": 12.777777777777779
          },
          {
            "validTime": "2024-05-02T12:00:00+00:00/PT1H",
            "value": 12.222222222222221
          },
          {
            "validTime": "2024-05-02T13:00:00+00:00/PT1H",
            "value": 13.333333333333334
          },
          {
            "validTime": "2024-05-02T14:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-05-02T15:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-05-02T16:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-05-02T17:00:00+00:00/PT1H",
            "value": 17.22222222222222
          },
          {
            "validTime": "2024-05-02T18:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-05-02T19:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-05-02T20:00:00+00:00/PT1H",
            "value": 18.88888888888889
          },
          {
            "validTime": "2024-05-02T21:00:00+00:00/PT1H",
            "value": 19.444444444444443
          },
          {
            "validTime": "2024-05-02T22:00:00+00:00/PT1H",
            "value": 18.333333333333332
          },
          {
            "validTime": "2024-05-02T23:00:00+00:00/PT1H",
            "value": 17.77777777777778
          },
          {
            "validTime": "2024-05-03T00:00:00+00:00/PT1H",
            "value": 16.666666666666668
          },
          {
            "validTime": "2024-05-03T01:00:00+00:00/PT1H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-05-03T02:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-05-03T03:00:00+00:00/PT1H",
            "value": 13.333333333333334
          },
          {
            "validTime": "2024-05-03T04:00:00+00:00/PT1H",
            "value": 12.777777777777779
          },
          {
            "validTime": "2024-05-03T05:00:00+00:00/PT1H",
            "value": 12.222222222222221
          },
          {
            "validTime": "2024-05-03T06:00:00+00:00/PT1H",
            "value": 11.666666666666666
          },
          {
            "validTime": "2024-05-03T07:00:00+00:00/PT1H",
            "value": 11.11111111111111
          },
          {
            "validTime": "2024-05-03T08:00:00+00:00/PT1H",
            "value": 10.555555555555555
          },
          {
            "validTime": "2024-05-03T09:00:00+00:00/PT2H",
            "value": 10
          },
          {
            "validTime": "2024-05-03T11:00:00+00:00/PT1H",
            "value": 9.444444444444445
          },
          {
            "validTime": "2024-05-03T12:00:00+00:00/PT1H",
            "value": 8.88888888888889
          },
          {
            "validTime": "2024-05-03T13:00:00+00:00/PT1H",
            "value": 10.555555555555555
          },
          {
            "validTime": "2024-05-03T14:00:00+00:00/PT1H",
            "value": 11.666666666666666
          },
          {
            "validTime": "2024-05-03T15:00:00+00:00/PT1H",
            "value": 13.333333333333334
          },
          {
            "validTime": "2024-05-03T16:00:00+00:00/PT1H",
            "value": 13.88888888888889
          },
          {
            "validTime": "2024-05-03T17:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-05-03T18:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-05-03T19:00:00+00:00/PT2H",
            "value": 15.555555555555555
          },
          {
            "validTime": "2024-05-03T21:00:00+00:00/PT1H",
            "value": 16.11111111111111
          },
          {
            "validTime": "2024-05-03T22:00:00+00:00/PT1H",
            "value": 15
          },
          {
            "validTime": "2024-05-03T23:00:00+00:00/PT1H",
            "value": 14.444444444444445
          },
          {
            "validTime": "2024-05-04T00:00:00+00:00/PT1H",
            "value": 13.88888888888889
          }
        ]
      },
      "windSpeed": {
        "uom": "wmoUnit:km_h-1",
        "values": [
          {
            "validTime": "2024-04-26T05:00:00+00:00/PT1H",
            "value": 14.816
          },
          {
            "validTime": "2024-04-26T06:00:00+00:00/PT2H",
            "value": 12.964
          },
          {
            "validTime": "2024-04-26T08:00:00+00:00/PT4H",
            "value": 14.816
          },
          {
            "validTime": "2024-04-26T12:00:00+00:00/PT1H",
            "value": 16.668
          },
          {
            "validTime": "2024-04-26T13:00:00+00:00/PT1H",
            "value": 18.52
          },
          {
            "validTime": "2024-04-26T14:00:00+00:00/PT1H",
            "value": 22.224
          },
          {
            "validTime": "2024-04-26T15:00:00+00:00/PT1H",
            "value": 24.076
          },
          {
            "validTime": "2024-04-26T16:00:00+00:00/PT1H",
            "value": 25.928
          },
          {
            "validTime": "2024-04-26T17:00:00+00:00/PT6H",
            "value": 27.78
          },
          {
            "validTime": "2024-04-26T23:00:00+00:00/PT6H",
            "value": 25.928
          },
          {
            "validTime": "2024-04-27T05:00:00+00:00/PT3H",
            "value": 27.78
          },
          {
            "validTime": "2024-04-27T08:00:00+00:00/PT4H",
            "value": 25.928
          },
          {
            "validTime": "2024-04-27T12:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-04-27T13:00:00+00:00/PT2H",
            "value": 29.632
          },
          {
            "validTime": "2024-04-27T15:00:00+00:00/PT1H",
            "value": 31.484
          },
          {
            "validTime": "2024-04-27T16:00:00+00:00/PT1H",
            "value": 33.336
          },
          {
            "validTime": "2024-04-27T17:00:00+00:00/PT2H",
            "value": 35.188
          },
          {
            "validTime": "2024-04-27T19:00:00+00:00/PT1H",
            "value": 33.336
          },
          {
            "validTime": "2024-04-27T20:00:00+00:00/PT1H",
            "value": 31.484
          },
          {
            "validTime": "2024-04-27T21:00:00+00:00/PT1H",
            "value": 29.632
          },
          {
            "validTime": "2024-04-27T22:00:00+00:00/PT4H",
            "value": 27.78
          },
          {
            "validTime": "2024-04-28T02:00:00+00:00/PT7H",
            "value": 29.632
          },
          {
            "validTime": "2024-04-28T09:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-04-28T10:00:00+00:00/PT1H",
            "value": 25.928
          },
          {
            "validTime": "2024-04-28T11:00:00+00:00/PT1H",
            "value": 24.076
          },
          {
            "validTime": "2024-04-28T12:00:00+00:00/PT1H",
            "value": 22.224
          },
          {
            "validTime": "2024-04-28T13:00:00+00:00/PT1H",
            "value": 24.076
          },
          {
            "validTime": "2024-04-28T14:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-04-28T15:00:00+00:00/PT1H",
            "value": 29.632
          },
          {
            "validTime": "2024-04-28T16:00:00+00:00/PT7H",
            "value": 31.484
          },
          {
            "validTime": "2024-04-28T23:00:00+00:00/PT5H",
            "value": 29.632
          },
          {
            "validTime": "2024-04-29T04:00:00+00:00/PT2H",
            "value": 31.484
          },
          {
            "validTime": "2024-04-29T06:00:00+00:00/PT1H",
            "value": 33.336
          },
          {
            "validTime": "2024-04-29T07:00:00+00:00/PT3H",
            "value": 35.188
          },
          {
            "validTime": "2024-04-29T10:00:00+00:00/PT1H",
            "value": 33.336
          },
          {
            "validTime": "2024-04-29T11:00:00+00:00/PT1H",
            "value": 31.484
          },
          {
            "validTime": "2024-04-29T12:00:00+00:00/PT1H",
            "value": 29.632
          },
          {
            "validTime": "2024-04-29T13:00:00+00:00/PT1H",
            "value": 31.484
          },
          {
            "validTime": "2024-04-29T14:00:00+00:00/PT1H",
            "value": 33.336
          },
          {
            "validTime": "2024-04-29T15:00:00+00:00/PT7H",
            "value": 35.188
          },
          {
            "validTime": "2024-04-29T22:00:00+00:00/PT2H",
            "value": 33.336
          },
          {
            "validTime": "2024-04-30T00:00:00+00:00/PT3H",
            "value": 31.484
          },
          {
            "validTime": "2024-04-30T03:00:00+00:00/PT1H",
            "value": 29.632
          },
          {
            "validTime": "2024-04-30T04:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-04-30T05:00:00+00:00/PT1H",
            "value": 24.076
          },
          {
            "validTime": "2024-04-30T06:00:00+00:00/PT1H",
            "value": 22.224
          },
          {
            "validTime": "2024-04-30T07:00:00+00:00/PT1H",
            "value": 20.372
          },
          {
            "validTime": "2024-04-30T08:00:00+00:00/PT1H",
            "value": 18.52
          },
          {
            "validTime": "2024-04-30T09:00:00+00:00/PT1H",
            "value": 16.668
          },
          {
            "validTime": "2024-04-30T10:00:00+00:00/PT1H",
            "value": 14.816
          },
          {
            "validTime": "2024-04-30T11:00:00+00:00/PT3H",
            "value": 12.964
          },
          {
            "validTime": "2024-04-30T14:00:00+00:00/PT1H",
            "value": 14.816
          },
          {
            "validTime": "2024-04-30T15:00:00+00:00/PT1H",
            "value": 16.668
          },
          {
            "validTime": "2024-04-30T16:00:00+00:00/PT2H",
            "value": 18.52
          },
          {
            "validTime": "2024-04-30T18:00:00+00:00/PT1H",
            "value": 20.372
          },
          {
            "validTime": "2024-04-30T19:00:00+00:00/PT3H",
            "value": 22.224
          },
          {
            "validTime": "2024-04-30T22:00:00+00:00/PT1H",
            "value": 20.372
          },
          {
            "validTime": "2024-04-30T23:00:00+00:00/PT1H",
            "value": 18.52
          },
          {
            "validTime": "2024-05-01T00:00:00+00:00/PT3H",
            "value": 16.668
          },
          {
            "validTime": "2024-05-01T03:00:00+00:00/PT1H",
            "value": 18.52
          },
          {
            "validTime": "2024-05-01T04:00:00+00:00/PT2H",
            "value": 20.372
          },
          {
            "validTime": "2024-05-01T06:00:00+00:00/PT4H",
            "value": 22.224
          },
          {
            "validTime": "2024-05-01T10:00:00+00:00/PT1H",
            "value": 20.372
          },
          {
            "validTime": "2024-05-01T11:00:00+00:00/PT3H",
            "value": 18.52
          },
          {
            "validTime": "2024-05-01T14:00:00+00:00/PT1H",
            "value": 20.372
          },
          {
            "validTime": "2024-05-01T15:00:00+00:00/PT2H",
            "value": 22.224
          },
          {
            "validTime": "2024-05-01T17:00:00+00:00/PT5H",
            "value": 24.076
          },
          {
            "validTime": "2024-05-01T22:00:00+00:00/PT2H",
            "value": 22.224
          },
          {
            "validTime": "2024-05-02T00:00:00+00:00/PT2H",
            "value": 20.372
          },
          {
            "validTime": "2024-05-02T02:00:00+00:00/PT3H",
            "value": 18.52
          },
          {
            "validTime": "2024-05-02T05:00:00+00:00/PT3H",
            "value": 16.668
          },
          {
            "validTime": "2024-05-02T08:00:00+00:00/PT3H",
            "value": 18.52
          },
          {
            "validTime": "2024-05-02T11:00:00+00:00/PT2H",
            "value": 20.372
          },
          {
            "validTime": "2024-05-02T13:00:00+00:00/PT2H",
            "value": 22.224
          },
          {
            "validTime": "2024-05-02T15:00:00+00:00/PT8H",
            "value": 24.076
          },
          {
            "validTime": "2024-05-02T23:00:00+00:00/PT2H",
            "value": 22.224
          },
          {
            "validTime": "2024-05-03T01:00:00+00:00/PT2H",
            "value": 20.372
          },
          {
            "validTime": "2024-05-03T03:00:00+00:00/PT1H",
            "value": 18.52
          },
          {
            "validTime": "2024-05-03T04:00:00+00:00/PT5H",
            "value": 16.668
          },
          {
            "validTime": "2024-05-03T09:00:00+00:00/PT1H",
            "value": 18.52
          },
          {
            "validTime": "2024-05-03T10:00:00+00:00/PT2H",
            "value": 20.372
          },
          {
            "validTime": "2024-05-03T12:00:00+00:00/PT2H",
            "value": 22.224
          },
          {
            "validTime": "2024-05-03T14:00:00+00:00/PT3H",
            "value": 24.076
          },
          {
            "validTime": "2024-05-03T17:00:00+00:00/PT6H",
            "value": 25.928
          },
          {
            "validTime": "2024-05-03T23:00:00+00:00/PT1H",
            "value": 24.076
          },
          {
            "validTime": "2024-05-04T00:00:00+00:00/PT1H",
            "value": 22.224
          }
        ]
      },
      "windGust": {
        "uom": "wmoUnit:km_h-1",
        "values": [
          {
            "validTime": "2024-04-26T05:00:00+00:00/PT1H",
            "value": 20.372
          },
          {
            "validTime": "2024-04-26T06:00:00+00:00/PT2H",
            "value": 18.52
          },
          {
            "validTime": "2024-04-26T08:00:00+00:00/PT3H",
            "value": 20.372
          },
          {
            "validTime": "2024-04-26T11:00:00+00:00/PT1H",
            "value": 22.224
          },
          {
            "validTime": "2024-04-26T12:00:00+00:00/PT1H",
            "value": 24.076
          },
          {
            "validTime": "2024-04-26T13:00:00+00:00/PT1H",
            "value": 25.928
          },
          {
            "validTime": "2024-04-26T14:00:00+00:00/PT1H",
            "value": 29.632
          },
          {
            "validTime": "2024-04-26T15:00:00+00:00/PT1H",
            "value": 33.336
          },
          {
            "validTime": "2024-04-26T16:00:00+00:00/PT2H",
            "value": 37.04
          },
          {
            "validTime": "2024-04-26T18:00:00+00:00/PT5H",
            "value": 38.892
          },
          {
            "validTime": "2024-04-26T23:00:00+00:00/PT2H",
            "value": 37.04
          },
          {
            "validTime": "2024-04-27T01:00:00+00:00/PT2H",
            "value": 35.188
          },
          {
            "validTime": "2024-04-27T03:00:00+00:00/PT2H",
            "value": 37.04
          },
          {
            "validTime": "2024-04-27T05:00:00+00:00/PT3H",
            "value": 38.892
          },
          {
            "validTime": "2024-04-27T08:00:00+00:00/PT4H",
            "value": 37.04
          },
          {
            "validTime": "2024-04-27T12:00:00+00:00/PT1H",
            "value": 38.892
          },
          {
            "validTime": "2024-04-27T13:00:00+00:00/PT1H",
            "value": 40.744
          },
          {
            "validTime": "2024-04-27T14:00:00+00:00/PT1H",
            "value": 42.596
          },
          {
            "validTime": "2024-04-27T15:00:00+00:00/PT1H",
            "value": 44.448
          },
          {
            "validTime": "2024-04-27T16:00:00+00:00/PT1H",
            "value": 46.3
          },
          {
            "validTime": "2024-04-27T17:00:00+00:00/PT1H",
            "value": 48.152
          },
          {
            "validTime": "2024-04-27T18:00:00+00:00/PT1H",
            "value": 50.004
          },
          {
            "validTime": "2024-04-27T19:00:00+00:00/PT1H",
            "value": 48.152
          },
          {
            "validTime": "2024-04-27T20:00:00+00:00/PT1H",
            "value": 44.448
          },
          {
            "validTime": "2024-04-27T21:00:00+00:00/PT1H",
            "value": 40.744
          },
          {
            "validTime": "2024-04-27T22:00:00+00:00/PT1H",
            "value": 38.892
          },
          {
            "validTime": "2024-04-27T23:00:00+00:00/PT1H",
            "value": 37.04
          },
          {
            "validTime": "2024-04-28T00:00:00+00:00/PT1H",
            "value": 42.596
          },
          {
            "validTime": "2024-04-28T01:00:00+00:00/PT1H",
            "value": 44.448
          },
          {
            "validTime": "2024-04-28T02:00:00+00:00/PT5H",
            "value": 46.3
          },
          {
            "validTime": "2024-04-28T07:00:00+00:00/PT1H",
            "value": 44.448
          },
          {
            "validTime": "2024-04-28T08:00:00+00:00/PT1H",
            "value": 42.596
          },
          {
            "validTime": "2024-04-28T09:00:00+00:00/PT1H",
            "value": 40.744
          },
          {
            "validTime": "2024-04-28T10:00:00+00:00/PT1H",
            "value": 38.892
          },
          {
            "validTime": "2024-04-28T11:00:00+00:00/PT2H",
            "value": 35.188
          },
          {
            "validTime": "2024-04-28T13:00:00+00:00/PT1H",
            "value": 37.04
          },
          {
            "validTime": "2024-04-28T14:00:00+00:00/PT1H",
            "value": 40.744
          },
          {
            "validTime": "2024-04-28T15:00:00+00:00/PT1H",
            "value": 44.448
          },
          {
            "validTime": "2024-04-28T16:00:00+00:00/PT1H",
            "value": 46.3
          },
          {
            "validTime": "2024-04-28T17:00:00+00:00/PT5H",
            "value": 48.152
          },
          {
            "validTime": "2024-04-28T22:00:00+00:00/PT1H",
            "value": 46.3
          },
          {
            "validTime": "2024-04-28T23:00:00+00:00/PT1H",
            "value": 44.448
          },
          {
            "validTime": "2024-04-29T00:00:00+00:00/PT3H",
            "value": 42.596
          },
          {
            "validTime": "2024-04-29T03:00:00+00:00/PT1H",
            "value": 44.448
          },
          {
            "validTime": "2024-04-29T04:00:00+00:00/PT2H",
            "value": 46.3
          },
          {
            "validTime": "2024-04-29T06:00:00+00:00/PT1H",
            "value": 48.152
          },
          {
            "validTime": "2024-04-29T07:00:00+00:00/PT3H",
            "value": 50.004
          },
          {
            "validTime": "2024-04-29T10:00:00+00:00/PT1H",
            "value": 48.152
          },
          {
            "validTime": "2024-04-29T11:00:00+00:00/PT2H",
            "value": 46.3
          },
          {
            "validTime": "2024-04-29T13:00:00+00:00/PT1H",
            "value": 48.152
          },
          {
            "validTime": "2024-04-29T14:00:00+00:00/PT1H",
            "value": 51.856
          },
          {
            "validTime": "2024-04-29T15:00:00+00:00/PT1H",
            "value": 53.708
          },
          {
            "validTime": "2024-04-29T16:00:00+00:00/PT4H",
            "value": 55.56
          },
          {
            "validTime": "2024-04-29T20:00:00+00:00/PT1H",
            "value": 53.708
          },
          {
            "validTime": "2024-04-29T21:00:00+00:00/PT1H",
            "value": 51.856
          },
          {
            "validTime": "2024-04-29T22:00:00+00:00/PT1H",
            "value": 50.004
          },
          {
            "validTime": "2024-04-29T23:00:00+00:00/PT1H",
            "value": 48.152
          },
          {
            "validTime": "2024-04-30T00:00:00+00:00/PT1H",
            "value": 46.3
          },
          {
            "validTime": "2024-04-30T01:00:00+00:00/PT2H",
            "value": 44.448
          },
          {
            "validTime": "2024-04-30T03:00:00+00:00/PT1H",
            "value": 42.596
          },
          {
            "validTime": "2024-04-30T04:00:00+00:00/PT1H",
            "value": 40.744
          },
          {
            "validTime": "2024-04-30T05:00:00+00:00/PT1H",
            "value": 37.04
          },
          {
            "validTime": "2024-04-30T06:00:00+00:00/PT1H",
            "value": 35.188
          },
          {
            "validTime": "2024-04-30T07:00:00+00:00/PT1H",
            "value": 33.336
          },
          {
            "validTime": "2024-04-30T08:00:00+00:00/PT1H",
            "value": 29.632
          },
          {
            "validTime": "2024-04-30T09:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-04-30T10:00:00+00:00/PT1H",
            "value": 24.076
          },
          {
            "validTime": "2024-04-30T11:00:00+00:00/PT1H",
            "value": 22.224
          },
          {
            "validTime": "2024-04-30T12:00:00+00:00/PT2H",
            "value": 20.372
          },
          {
            "validTime": "2024-04-30T14:00:00+00:00/PT1H",
            "value": 24.076
          },
          {
            "validTime": "2024-04-30T15:00:00+00:00/PT1H",
            "value": 25.928
          },
          {
            "validTime": "2024-04-30T16:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-04-30T17:00:00+00:00/PT1H",
            "value": 29.632
          },
          {
            "validTime": "2024-04-30T18:00:00+00:00/PT4H",
            "value": 31.484
          },
          {
            "validTime": "2024-04-30T22:00:00+00:00/PT2H",
            "value": 29.632
          },
          {
            "validTime": "2024-05-01T00:00:00+00:00/PT3H",
            "value": 27.78
          },
          {
            "validTime": "2024-05-01T03:00:00+00:00/PT1H",
            "value": 29.632
          },
          {
            "validTime": "2024-05-01T04:00:00+00:00/PT2H",
            "value": 31.484
          },
          {
            "validTime": "2024-05-01T06:00:00+00:00/PT4H",
            "value": 33.336
          },
          {
            "validTime": "2024-05-01T10:00:00+00:00/PT1H",
            "value": 31.484
          },
          {
            "validTime": "2024-05-01T11:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-05-01T12:00:00+00:00/PT1H",
            "value": 25.928
          },
          {
            "validTime": "2024-05-01T13:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-05-01T14:00:00+00:00/PT1H",
            "value": 29.632
          },
          {
            "validTime": "2024-05-01T15:00:00+00:00/PT1H",
            "value": 31.484
          },
          {
            "validTime": "2024-05-01T16:00:00+00:00/PT2H",
            "value": 33.336
          },
          {
            "validTime": "2024-05-01T18:00:00+00:00/PT1H",
            "value": 35.188
          },
          {
            "validTime": "2024-05-01T19:00:00+00:00/PT3H",
            "value": 37.04
          },
          {
            "validTime": "2024-05-01T22:00:00+00:00/PT1H",
            "value": 35.188
          },
          {
            "validTime": "2024-05-01T23:00:00+00:00/PT1H",
            "value": 33.336
          },
          {
            "validTime": "2024-05-02T00:00:00+00:00/PT2H",
            "value": 31.484
          },
          {
            "validTime": "2024-05-02T02:00:00+00:00/PT2H",
            "value": 29.632
          },
          {
            "validTime": "2024-05-02T04:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-05-02T05:00:00+00:00/PT1H",
            "value": 25.928
          },
          {
            "validTime": "2024-05-02T06:00:00+00:00/PT2H",
            "value": 24.076
          },
          {
            "validTime": "2024-05-02T08:00:00+00:00/PT1H",
            "value": 25.928
          },
          {
            "validTime": "2024-05-02T09:00:00+00:00/PT2H",
            "value": 27.78
          },
          {
            "validTime": "2024-05-02T11:00:00+00:00/PT2H",
            "value": 29.632
          },
          {
            "validTime": "2024-05-02T13:00:00+00:00/PT1H",
            "value": 31.484
          },
          {
            "validTime": "2024-05-02T14:00:00+00:00/PT1H",
            "value": 33.336
          },
          {
            "validTime": "2024-05-02T15:00:00+00:00/PT7H",
            "value": 35.188
          },
          {
            "validTime": "2024-05-02T22:00:00+00:00/PT2H",
            "value": 33.336
          },
          {
            "validTime": "2024-05-03T00:00:00+00:00/PT1H",
            "value": 31.484
          },
          {
            "validTime": "2024-05-03T01:00:00+00:00/PT2H",
            "value": 29.632
          },
          {
            "validTime": "2024-05-03T03:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-05-03T04:00:00+00:00/PT1H",
            "value": 25.928
          },
          {
            "validTime": "2024-05-03T05:00:00+00:00/PT2H",
            "value": 24.076
          },
          {
            "validTime": "2024-05-03T07:00:00+00:00/PT1H",
            "value": 25.928
          },
          {
            "validTime": "2024-05-03T08:00:00+00:00/PT1H",
            "value": 27.78
          },
          {
            "validTime": "2024-05-03T09:00:00+00:00/PT1H",
            "value": 29.632
          },
          {
            "validTime": "2024-05-03T10:00:00+00:00/PT2H",
            "value": 31.484
          },
          {
            "validTime": "2024-05-03T12:00:00+00:00/PT1H",
            "value": 33.336
          },
          {
            "validTime": "2024-05-03T13:00:00+00:00/PT2H",
            "value": 35.188
          },
          {
            "validTime": "2024-05-03T15:00:00+00:00/PT2H",
            "value": 37.04
          },
          {
            "validTime": "2024-05-03T17:00:00+00:00/PT6H",
            "value": 38.892
          },
          {
            "validTime": "2024-05-03T23:00:00+00:00/PT1H",
            "value": 37.04
          },
          {
            "validTime": "2024-05-04T00:00:00+00:00/PT1H",
            "value": 35.188
          }
        ]
      },
      "windDirection": {
        "uom": "wmoUnit:degree_(angle)",
        "values": [
          {
            "validTime": "2024-04-26T05:00:00+00:00/PT1H",
            "value": 120
          },
          {
            "validTime": "2024-04-26T06:00:00+00:00/PT3H",
            "value": 110
          },
          {
            "validTime": "2024-04-26T09:00:00+00:00/PT2H",
            "value": 100
          },
          {
            "validTime": "2024-04-26T11:00:00+00:00/PT2H",
            "value": 110
          },
          {
            "validTime": "2024-04-26T13:00:00+00:00/PT1H",
            "value": 120
          },
          {
            "validTime": "2024-04-26T14:00:00+00:00/PT3H",
            "value": 130
          },
          {
            "validTime": "2024-04-26T17:00:00+00:00/PT7H",
            "value": 140
          },
          {
            "validTime": "2024-04-27T00:00:00+00:00/PT1H",
            "value": 130
          },
          {
            "validTime": "2024-04-27T01:00:00+00:00/PT3H",
            "value": 140
          },
          {
            "validTime": "2024-04-27T04:00:00+00:00/PT1H",
            "value": 150
          },
          {
            "validTime": "2024-04-27T05:00:00+00:00/PT1H",
            "value": 160
          },
          {
            "validTime": "2024-04-27T06:00:00+00:00/PT2H",
            "value": 170
          },
          {
            "validTime": "2024-04-27T08:00:00+00:00/PT3H",
            "value": 180
          },
          {
            "validTime": "2024-04-27T11:00:00+00:00/PT3H",
            "value": 190
          },
          {
            "validTime": "2024-04-27T14:00:00+00:00/PT3H",
            "value": 200
          },
          {
            "validTime": "2024-04-27T17:00:00+00:00/PT6H",
            "value": 210
          },
          {
            "validTime": "2024-04-27T23:00:00+00:00/PT3H",
            "value": 200
          },
          {
            "validTime": "2024-04-28T02:00:00+00:00/PT3H",
            "value": 190
          },
          {
            "validTime": "2024-04-28T05:00:00+00:00/PT6H",
            "value": 200
          },
          {
            "validTime": "2024-04-28T11:00:00+00:00/PT3H",
            "value": 190
          },
          {
            "validTime": "2024-04-28T14:00:00+00:00/PT6H",
            "value": 200
          },
          {
            "validTime": "2024-04-28T20:00:00+00:00/PT6H",
            "value": 190
          },
          {
            "validTime": "2024-04-29T02:00:00+00:00/PT6H",
            "value": 180
          },
          {
            "validTime": "2024-04-29T08:00:00+00:00/PT9H",
            "value": 190
          },
          {
            "validTime": "2024-04-29T17:00:00+00:00/PT6H",
            "value": 200
          },
          {
            "validTime": "2024-04-29T23:00:00+00:00/PT6H",
            "value": 210
          },
          {
            "validTime": "2024-04-30T05:00:00+00:00/PT2H",
            "value": 220
          },
          {
            "validTime": "2024-04-30T07:00:00+00:00/PT1H",
            "value": 230
          },
          {
            "validTime": "2024-04-30T08:00:00+00:00/PT3H",
            "value": 240
          },
          {
            "validTime": "2024-04-30T11:00:00+00:00/PT6H",
            "value": 230
          },
          {
            "validTime": "2024-04-30T17:00:00+00:00/PT3H",
            "value": 240
          },
          {
            "validTime": "2024-04-30T20:00:00+00:00/PT3H",
            "value": 230
          },
          {
            "validTime": "2024-04-30T23:00:00+00:00/PT1H",
            "value": 220
          },
          {
            "validTime": "2024-05-01T00:00:00+00:00/PT2H",
            "value": 210
          },
          {
            "validTime": "2024-05-01T02:00:00+00:00/PT1H",
            "value": 200
          },
          {
            "validTime": "2024-05-01T03:00:00+00:00/PT1H",
            "value": 190
          },
          {
            "validTime": "2024-05-01T04:00:00+00:00/PT1H",
            "value": 200
          },
          {
            "validTime": "2024-05-01T05:00:00+00:00/PT3H",
            "value": 210
          },
          {
            "validTime": "2024-05-01T08:00:00+00:00/PT2H",
            "value": 220
          },
          {
            "validTime": "2024-05-01T10:00:00+00:00/PT1H",
            "value": 230
          },
          {
            "validTime": "2024-05-01T11:00:00+00:00/PT1H",
            "value": 240
          },
          {
            "validTime": "2024-05-01T12:00:00+00:00/PT2H",
            "value": 250
          },
          {
            "validTime": "2024-05-01T14:00:00+00:00/PT2H",
            "value": 260
          },
          {
            "validTime": "2024-05-01T16:00:00+00:00/PT1H",
            "value": 270
          },
          {
            "validTime": "2024-05-01T17:00:00+00:00/PT5H",
            "value": 280
          },
          {
            "validTime": "2024-05-01T22:00:00+00:00/PT1H",
            "value": 290
          },
          {
            "validTime": "2024-05-01T23:00:00+00:00/PT2H",
            "value": 300
          },
          {
            "validTime": "2024-05-02T01:00:00+00:00/PT1H",
            "value": 290
          },
          {
            "validTime": "2024-05-02T02:00:00+00:00/PT1H",
            "value": 270
          },
          {
            "validTime": "2024-05-02T03:00:00+00:00/PT2H",
            "value": 260
          },
          {
            "validTime": "2024-05-02T05:00:00+00:00/PT1H",
            "value": 250
          },
          {
            "validTime": "2024-05-02T06:00:00+00:00/PT4H",
            "value": 240
          },
          {
            "validTime": "2024-05-02T10:00:00+00:00/PT1H",
            "value": 260
          },
          {
            "validTime": "2024-05-02T11:00:00+00:00/PT1H",
            "value": 290
          },
          {
            "validTime": "2024-05-02T12:00:00+00:00/PT1H",
            "value": 310
          },
          {
            "validTime": "2024-05-02T13:00:00+00:00/PT1H",
            "value": 320
          },
          {
            "validTime": "2024-05-02T14:00:00+00:00/PT3H",
            "value": 330
          },
          {
            "validTime": "2024-05-02T17:00:00+00:00/PT3H",
            "value": 320
          },
          {
            "validTime": "2024-05-02T20:00:00+00:00/PT2H",
            "value": 330
          },
          {
            "validTime": "2024-05-02T22:00:00+00:00/PT1H",
            "value": 340
          },
          {
            "validTime": "2024-05-02T23:00:00+00:00/PT3H",
            "value": 350
          },
          {
            "validTime": "2024-05-03T02:00:00+00:00/PT2H",
            "value": 0
          },
          {
            "validTime": "2024-05-03T04:00:00+00:00/PT1H",
            "value": 350
          },
          {
            "validTime": "2024-05-03T05:00:00+00:00/PT1H",
            "value": 320
          },
          {
            "validTime": "2024-05-03T06:00:00+00:00/PT5H",
            "value": 300
          },
          {
            "validTime": "2024-05-03T11:00:00+00:00/PT3H",
            "value": 310
          },
          {
            "validTime": "2024-05-03T14:00:00+00:00/PT6H",
            "value": 320
          },
          {
            "validTime": "2024-05-03T20:00:00+00:00/PT2H",
            "value": 330
          },
          {
            "validTime": "2024-05-03T22:00:00+00:00/PT1H",
            "value": 340
          },
          {
            "validTime": "2024-05-03T23:00:00+00:00/PT1H",
            "value": 350
          },
          {
            "validTime": "2024-05-04T00:00:00+00:00/PT1H",
            "value": 0
          }
        ]
      }
    }
  },
  "tomorrowIo": {
    "forecast": {
      "timelines": {
        "minutely": [
          {
            "time": "2024-04-22T00:53:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1,
              "dewPoint": -6,
              "freezingRainIntensity": 0,
              "humidity": 35,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.53,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 8.63,
              "temperatureApparent": 8.63,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 61.19,
              "windGust": 1.13,
              "windSpeed": 0.69
            }
          },
          {
            "time": "2024-04-22T00:54:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1,
              "dewPoint": -5.85,
              "freezingRainIntensity": 0,
              "humidity": 35.83,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.52,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 8.54,
              "temperatureApparent": 8.54,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 61.19,
              "windGust": 1.03,
              "windSpeed": 0.8
            }
          },
          {
            "time": "2024-04-22T00:55:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1,
              "dewPoint": -5.7,
              "freezingRainIntensity": 0,
              "humidity": 36.67,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.51,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 8.46,
              "temperatureApparent": 8.46,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 61.19,
              "windGust": 0.94,
              "windSpeed": 0.91
            }
          },
          {
            "time": "2024-04-22T00:56:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1,
              "dewPoint": -5.55,
              "freezingRainIntensity": 0,
              "humidity": 37.5,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.5,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 8.38,
              "temperatureApparent": 8.38,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 61.19,
              "windGust": 1.22,
              "windSpeed": 1.02
            }
          },
          {
            "time": "2024-04-22T00:57:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1,
              "dewPoint": -5.4,
              "freezingRainIntensity": 0,
              "humidity": 38.33,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.49,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 8.3,
              "temperatureApparent": 8.3,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.35,
              "windSpeed": 1.13
            }
          },
          {
            "time": "2024-04-22T00:58:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1,
              "dewPoint": -5.26,
              "freezingRainIntensity": 0,
              "humidity": 39.16,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.48,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 8.22,
              "temperatureApparent": 8.22,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.49,
              "windSpeed": 1.24
            }
          },
          {
            "time": "2024-04-22T00:59:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1,
              "dewPoint": -5.11,
              "freezingRainIntensity": 0,
              "humidity": 40,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.46,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 8.14,
              "temperatureApparent": 8.14,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.62,
              "windSpeed": 1.35
            }
          },
          {
            "time": "2024-04-22T01:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 40.83,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.45,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 8.06,
              "temperatureApparent": 8.06,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.75,
              "windSpeed": 1.46
            }
          },
          {
            "time": "2024-04-22T01:01:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.98,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 40.91,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.46,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 8.04,
              "temperatureApparent": 8.04,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.75,
              "windSpeed": 1.46
            }
          },
          {
            "time": "2024-04-22T01:02:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.97,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 40.98,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.47,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 8.01,
              "temperatureApparent": 8.01,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.76,
              "windSpeed": 1.46
            }
          },
          {
            "time": "2024-04-22T01:03:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.95,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.06,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.47,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.98,
              "temperatureApparent": 7.98,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.76,
              "windSpeed": 1.47
            }
          },
          {
            "time": "2024-04-22T01:04:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.93,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.13,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.48,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.96,
              "temperatureApparent": 7.96,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.76,
              "windSpeed": 1.47
            }
          },
          {
            "time": "2024-04-22T01:05:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.92,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.21,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.49,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.93,
              "temperatureApparent": 7.93,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.76,
              "windSpeed": 1.47
            }
          },
          {
            "time": "2024-04-22T01:06:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.9,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.28,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.49,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.9,
              "temperatureApparent": 7.9,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.77,
              "windSpeed": 1.47
            }
          },
          {
            "time": "2024-04-22T01:07:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.88,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.36,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.5,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.88,
              "temperatureApparent": 7.88,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.77,
              "windSpeed": 1.47
            }
          },
          {
            "time": "2024-04-22T01:08:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.87,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.43,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.51,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.85,
              "temperatureApparent": 7.85,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.77,
              "windSpeed": 1.48
            }
          },
          {
            "time": "2024-04-22T01:09:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.85,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.51,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.52,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.82,
              "temperatureApparent": 7.82,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.77,
              "windSpeed": 1.48
            }
          },
          {
            "time": "2024-04-22T01:10:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.83,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.58,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.52,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.79,
              "temperatureApparent": 7.79,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.78,
              "windSpeed": 1.48
            }
          },
          {
            "time": "2024-04-22T01:11:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.82,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.66,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.53,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.77,
              "temperatureApparent": 7.77,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.78,
              "windSpeed": 1.48
            }
          },
          {
            "time": "2024-04-22T01:12:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.8,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.73,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.54,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.74,
              "temperatureApparent": 7.74,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.78,
              "windSpeed": 1.48
            }
          },
          {
            "time": "2024-04-22T01:13:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.78,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.81,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.54,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.71,
              "temperatureApparent": 7.71,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.78,
              "windSpeed": 1.49
            }
          },
          {
            "time": "2024-04-22T01:14:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.77,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.88,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.55,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.69,
              "temperatureApparent": 7.69,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.78,
              "windSpeed": 1.49
            }
          },
          {
            "time": "2024-04-22T01:15:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.75,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 41.96,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.56,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.66,
              "temperatureApparent": 7.66,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.79,
              "windSpeed": 1.49
            }
          },
          {
            "time": "2024-04-22T01:16:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.73,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.04,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.57,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.63,
              "temperatureApparent": 7.63,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.79,
              "windSpeed": 1.49
            }
          },
          {
            "time": "2024-04-22T01:17:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.72,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.11,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.57,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.61,
              "temperatureApparent": 7.61,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.79,
              "windSpeed": 1.49
            }
          },
          {
            "time": "2024-04-22T01:18:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.7,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.19,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.58,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.58,
              "temperatureApparent": 7.58,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.79,
              "windSpeed": 1.5
            }
          },
          {
            "time": "2024-04-22T01:19:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.68,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.26,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.59,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.55,
              "temperatureApparent": 7.55,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.8,
              "windSpeed": 1.5
            }
          },
          {
            "time": "2024-04-22T01:20:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.67,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.34,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.59,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.53,
              "temperatureApparent": 7.53,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.8,
              "windSpeed": 1.5
            }
          },
          {
            "time": "2024-04-22T01:21:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.65,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.41,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.6,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.5,
              "temperatureApparent": 7.5,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.8,
              "windSpeed": 1.5
            }
          },
          {
            "time": "2024-04-22T01:22:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.63,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.49,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.61,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.47,
              "temperatureApparent": 7.47,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.8,
              "windSpeed": 1.5
            }
          },
          {
            "time": "2024-04-22T01:23:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.62,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.56,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.61,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.44,
              "temperatureApparent": 7.44,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.81,
              "windSpeed": 1.5
            }
          },
          {
            "time": "2024-04-22T01:24:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.6,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.64,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.62,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.42,
              "temperatureApparent": 7.42,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.81,
              "windSpeed": 1.51
            }
          },
          {
            "time": "2024-04-22T01:25:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.58,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.71,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.63,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.39,
              "temperatureApparent": 7.39,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.81,
              "windSpeed": 1.51
            }
          },
          {
            "time": "2024-04-22T01:26:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.57,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.79,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.64,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.36,
              "temperatureApparent": 7.36,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.81,
              "windSpeed": 1.51
            }
          },
          {
            "time": "2024-04-22T01:27:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.55,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.86,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.64,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.34,
              "temperatureApparent": 7.34,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.82,
              "windSpeed": 1.51
            }
          },
          {
            "time": "2024-04-22T01:28:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.53,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 42.94,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.65,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.31,
              "temperatureApparent": 7.31,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.82,
              "windSpeed": 1.51
            }
          },
          {
            "time": "2024-04-22T01:29:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.52,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.01,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.66,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.28,
              "temperatureApparent": 7.28,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.82,
              "windSpeed": 1.52
            }
          },
          {
            "time": "2024-04-22T01:30:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.5,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.09,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.66,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.26,
              "temperatureApparent": 7.26,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.82,
              "windSpeed": 1.52
            }
          },
          {
            "time": "2024-04-22T01:31:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.48,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.17,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.67,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.23,
              "temperatureApparent": 7.23,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.82,
              "windSpeed": 1.52
            }
          },
          {
            "time": "2024-04-22T01:32:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.47,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.24,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.68,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.2,
              "temperatureApparent": 7.2,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.83,
              "windSpeed": 1.52
            }
          },
          {
            "time": "2024-04-22T01:33:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.45,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.32,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.69,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.18,
              "temperatureApparent": 7.18,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.83,
              "windSpeed": 1.52
            }
          },
          {
            "time": "2024-04-22T01:34:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.43,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.39,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.69,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.15,
              "temperatureApparent": 7.15,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.83,
              "windSpeed": 1.53
            }
          },
          {
            "time": "2024-04-22T01:35:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.42,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.47,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.7,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.12,
              "temperatureApparent": 7.12,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.83,
              "windSpeed": 1.53
            }
          },
          {
            "time": "2024-04-22T01:36:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.4,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.54,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.71,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.1,
              "temperatureApparent": 7.1,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.84,
              "windSpeed": 1.53
            }
          },
          {
            "time": "2024-04-22T01:37:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.38,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.62,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.71,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.07,
              "temperatureApparent": 7.07,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.84,
              "windSpeed": 1.53
            }
          },
          {
            "time": "2024-04-22T01:38:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.37,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.69,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.72,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.04,
              "temperatureApparent": 7.04,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.84,
              "windSpeed": 1.53
            }
          },
          {
            "time": "2024-04-22T01:39:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.35,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.77,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.73,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 7.01,
              "temperatureApparent": 7.01,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.84,
              "windSpeed": 1.54
            }
          },
          {
            "time": "2024-04-22T01:40:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.33,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.84,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.73,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.99,
              "temperatureApparent": 6.99,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.85,
              "windSpeed": 1.54
            }
          },
          {
            "time": "2024-04-22T01:41:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.32,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.92,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.74,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.96,
              "temperatureApparent": 6.96,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.85,
              "windSpeed": 1.54
            }
          },
          {
            "time": "2024-04-22T01:42:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.3,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 43.99,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.75,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.93,
              "temperatureApparent": 6.93,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.85,
              "windSpeed": 1.54
            }
          },
          {
            "time": "2024-04-22T01:43:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.28,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 44.07,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.76,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.91,
              "temperatureApparent": 6.91,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.85,
              "windSpeed": 1.54
            }
          },
          {
            "time": "2024-04-22T01:44:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.27,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 44.14,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.76,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.88,
              "temperatureApparent": 6.88,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.85,
              "windSpeed": 1.55
            }
          },
          {
            "time": "2024-04-22T01:45:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.25,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 44.22,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.77,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.85,
              "temperatureApparent": 6.85,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.86,
              "windSpeed": 1.55
            }
          },
          {
            "time": "2024-04-22T01:46:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.23,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 44.3,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.78,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.83,
              "temperatureApparent": 6.83,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.86,
              "windSpeed": 1.55
            }
          },
          {
            "time": "2024-04-22T01:47:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.22,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 44.37,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.78,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.8,
              "temperatureApparent": 6.8,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.86,
              "windSpeed": 1.55
            }
          },
          {
            "time": "2024-04-22T01:48:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.2,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 44.45,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.79,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.77,
              "temperatureApparent": 6.77,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.86,
              "windSpeed": 1.55
            }
          },
          {
            "time": "2024-04-22T01:49:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.18,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 44.52,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.8,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.75,
              "temperatureApparent": 6.75,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.87,
              "windSpeed": 1.56
            }
          },
          {
            "time": "2024-04-22T01:50:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.17,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 44.6,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.81,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.72,
              "temperatureApparent": 6.72,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.87,
              "windSpeed": 1.56
            }
          },
          {
            "time": "2024-04-22T01:51:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.15,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 44.67,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.81,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.69,
              "temperatureApparent": 6.69,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.87,
              "windSpeed": 1.56
            }
          },
          {
            "time": "2024-04-22T01:52:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.13,
              "dewPoint": -4.96,
              "freezingRainIntensity": 0,
              "humidity": 44.75,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.82,
              "rainIntensity": 0,
              "sleetIntensity": 0,
              "snowIntensity": 0,
              "temperature": 6.66,
              "temperatureApparent": 6.66,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.87,
              "windSpeed": 1.56
            }
          }
        ],
        "hourly": [
          {
            "time": "2024-04-22T00:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -6.69,
              "evapotranspiration": 0.04,
              "freezingRainIntensity": 0,
              "humidity": 31,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 990.14,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 9.81,
              "temperatureApparent": 9.81,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 349.81,
              "windGust": 5.19,
              "windSpeed": 2.31
            }
          },
          {
            "time": "2024-04-22T01:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1,
              "dewPoint": -4.96,
              "evapotranspiration": 0.028,
              "freezingRainIntensity": 0,
              "humidity": 40.83,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.45,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 8.06,
              "temperatureApparent": 8.06,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 29.45,
              "windGust": 1.75,
              "windSpeed": 1.46
            }
          },
          {
            "time": "2024-04-22T02:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -4.95,
              "evapotranspiration": 0.023,
              "freezingRainIntensity": 0,
              "humidity": 45.35,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.88,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 6.45,
              "temperatureApparent": 6.45,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 64.18,
              "windGust": 1.89,
              "windSpeed": 1.58
            }
          },
          {
            "time": "2024-04-22T03:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -4.91,
              "evapotranspiration": 0.028,
              "freezingRainIntensity": 0,
              "humidity": 48.75,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.69,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 5.41,
              "temperatureApparent": 5.41,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 132.34,
              "windGust": 2.37,
              "windSpeed": 1.98
            }
          },
          {
            "time": "2024-04-22T04:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -5.23,
              "evapotranspiration": 0.043,
              "freezingRainIntensity": 0,
              "humidity": 48.68,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.57,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 5.13,
              "temperatureApparent": 5.13,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 185.42,
              "windGust": 3.33,
              "windSpeed": 2.33
            }
          },
          {
            "time": "2024-04-22T05:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -4.61,
              "evapotranspiration": 0.044,
              "freezingRainIntensity": 0,
              "humidity": 55.38,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.22,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 3.79,
              "temperatureApparent": 1.51,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 178.5,
              "windGust": 4.82,
              "windSpeed": 2.44
            }
          },
          {
            "time": "2024-04-22T06:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -4.06,
              "evapotranspiration": 0.04,
              "freezingRainIntensity": 0,
              "humidity": 59.18,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 988.77,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 3.36,
              "temperatureApparent": 0.72,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 193.3,
              "windGust": 6.5,
              "windSpeed": 2.75
            }
          },
          {
            "time": "2024-04-22T07:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -2.74,
              "evapotranspiration": 0.037,
              "freezingRainIntensity": 0,
              "humidity": 64.53,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.09,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 3.45,
              "temperatureApparent": 0.72,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 197.11,
              "windGust": 7.16,
              "windSpeed": 2.89
            }
          },
          {
            "time": "2024-04-22T08:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -3.08,
              "evapotranspiration": 0.032,
              "freezingRainIntensity": 0,
              "humidity": 65.84,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 988.46,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 2.83,
              "temperatureApparent": -0.24,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 204.37,
              "windGust": 7.3,
              "windSpeed": 3.15
            }
          },
          {
            "time": "2024-04-22T09:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -2.59,
              "evapotranspiration": 0.031,
              "freezingRainIntensity": 0,
              "humidity": 69,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 988.6,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 2.66,
              "temperatureApparent": -0.46,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 211.16,
              "windGust": 7.37,
              "windSpeed": 3.16
            }
          },
          {
            "time": "2024-04-22T10:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.02,
              "dewPoint": -2.23,
              "evapotranspiration": 0.031,
              "freezingRainIntensity": 0,
              "humidity": 71.29,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 988.81,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 2.54,
              "temperatureApparent": -0.6,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 219.79,
              "windGust": 7.81,
              "windSpeed": 3.17
            }
          },
          {
            "time": "2024-04-22T11:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -2.05,
              "evapotranspiration": 0.029,
              "freezingRainIntensity": 0,
              "humidity": 73.23,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 988.92,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 2.33,
              "temperatureApparent": -0.72,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 223.97,
              "windGust": 6.13,
              "windSpeed": 3.01
            }
          },
          {
            "time": "2024-04-22T12:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.03,
              "dewPoint": -1.48,
              "evapotranspiration": 0.043,
              "freezingRainIntensity": 0,
              "humidity": 70.5,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.07,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 3.49,
              "temperatureApparent": 0.72,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 225.38,
              "windGust": 5.57,
              "windSpeed": 2.95
            }
          },
          {
            "time": "2024-04-22T13:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -0.28,
              "evapotranspiration": 0.081,
              "freezingRainIntensity": 0,
              "humidity": 62.98,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.41,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 6.45,
              "temperatureApparent": 6.45,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 230.34,
              "windGust": 8.54,
              "windSpeed": 3.35
            }
          },
          {
            "time": "2024-04-22T14:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": 1.01,
              "evapotranspiration": 0.185,
              "freezingRainIntensity": 0,
              "humidity": 58.4,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.53,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 8.98,
              "temperatureApparent": 8.98,
              "uvHealthConcern": 0,
              "uvIndex": 1,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 225.73,
              "windGust": 7.84,
              "windSpeed": 3.58
            }
          },
          {
            "time": "2024-04-22T15:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": 1.78,
              "evapotranspiration": 0.296,
              "freezingRainIntensity": 0,
              "humidity": 51.3,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.2,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 11.77,
              "temperatureApparent": 11.77,
              "uvHealthConcern": 1,
              "uvIndex": 3,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 217.93,
              "windGust": 7.13,
              "windSpeed": 4.3
            }
          },
          {
            "time": "2024-04-22T16:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": 1.45,
              "evapotranspiration": 0.397,
              "freezingRainIntensity": 0,
              "humidity": 44.03,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 988.88,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 13.75,
              "temperatureApparent": 13.75,
              "uvHealthConcern": 1,
              "uvIndex": 4,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 217.86,
              "windGust": 8.41,
              "windSpeed": 5.3
            }
          },
          {
            "time": "2024-04-22T17:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 23.38,
              "dewPoint": -0.73,
              "evapotranspiration": 0.458,
              "freezingRainIntensity": 0,
              "humidity": 34.25,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 988.53,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 15.28,
              "temperatureApparent": 15.28,
              "uvHealthConcern": 2,
              "uvIndex": 5,
              "visibility": 16,
              "weatherCode": 1100,
              "windDirection": 222.38,
              "windGust": 7.75,
              "windSpeed": 5.77
            }
          },
          {
            "time": "2024-04-22T18:00:00Z",
            "values": {
              "cloudBase": 0.99,
              "cloudCeiling": null,
              "cloudCover": 100,
              "dewPoint": -2.03,
              "evapotranspiration": 0.487,
              "freezingRainIntensity": 0,
              "humidity": 29.19,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 987.7,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 16.34,
              "temperatureApparent": 16.34,
              "uvHealthConcern": 2,
              "uvIndex": 5,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 222.15,
              "windGust": 8.01,
              "windSpeed": 6.24
            }
          },
          {
            "time": "2024-04-22T19:00:00Z",
            "values": {
              "cloudBase": 0.54,
              "cloudCeiling": null,
              "cloudCover": 100,
              "dewPoint": -2.58,
              "evapotranspiration": 0.47,
              "freezingRainIntensity": 0,
              "humidity": 26.71,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 987.03,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 17.13,
              "temperatureApparent": 17.13,
              "uvHealthConcern": 1,
              "uvIndex": 4,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 221.94,
              "windGust": 9.07,
              "windSpeed": 6.65
            }
          },
          {
            "time": "2024-04-22T20:00:00Z",
            "values": {
              "cloudBase": 0.54,
              "cloudCeiling": 8.77,
              "cloudCover": 100,
              "dewPoint": -3.01,
              "evapotranspiration": 0.446,
              "freezingRainIntensity": 0,
              "humidity": 24.9,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 986.48,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 17.78,
              "temperatureApparent": 17.78,
              "uvHealthConcern": 1,
              "uvIndex": 3,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 219.8,
              "windGust": 9.12,
              "windSpeed": 6.93
            }
          },
          {
            "time": "2024-04-22T21:00:00Z",
            "values": {
              "cloudBase": 8.04,
              "cloudCeiling": 7.83,
              "cloudCover": 100,
              "dewPoint": -3.32,
              "evapotranspiration": 0.383,
              "freezingRainIntensity": 0,
              "humidity": 24.26,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 985.59,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 17.87,
              "temperatureApparent": 17.87,
              "uvHealthConcern": 1,
              "uvIndex": 2,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 218.07,
              "windGust": 10.16,
              "windSpeed": 7.31
            }
          },
          {
            "time": "2024-04-22T22:00:00Z",
            "values": {
              "cloudBase": 7.23,
              "cloudCeiling": 7.06,
              "cloudCover": 100,
              "dewPoint": -3.48,
              "evapotranspiration": 0.3,
              "freezingRainIntensity": 0,
              "humidity": 24.54,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 984.63,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 17.54,
              "temperatureApparent": 17.54,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 214.44,
              "windGust": 11.53,
              "windSpeed": 7.5
            }
          },
          {
            "time": "2024-04-22T23:00:00Z",
            "values": {
              "cloudBase": 6.69,
              "cloudCeiling": 6.52,
              "cloudCover": 100,
              "dewPoint": -3.09,
              "evapotranspiration": 0.195,
              "freezingRainIntensity": 0,
              "humidity": 26.16,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 983.99,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 17.04,
              "temperatureApparent": 17.04,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 207.45,
              "windGust": 11.57,
              "windSpeed": 7.27
            }
          },
          {
            "time": "2024-04-23T00:00:00Z",
            "values": {
              "cloudBase": 6.69,
              "cloudCeiling": 6.51,
              "cloudCover": 100,
              "dewPoint": -1.97,
              "evapotranspiration": 0.117,
              "freezingRainIntensity": 0,
              "humidity": 32.57,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 983.85,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 14.97,
              "temperatureApparent": 14.97,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 199.96,
              "windGust": 11.71,
              "windSpeed": 6.34
            }
          },
          {
            "time": "2024-04-23T01:00:00Z",
            "values": {
              "cloudBase": 6.12,
              "cloudCeiling": 6.01,
              "cloudCover": 100,
              "dewPoint": -1.7,
              "evapotranspiration": 0.121,
              "freezingRainIntensity": 0,
              "humidity": 36.7,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 983.58,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 13.36,
              "temperatureApparent": 13.36,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 196.8,
              "windGust": 8.99,
              "windSpeed": 5.73
            }
          },
          {
            "time": "2024-04-23T02:00:00Z",
            "values": {
              "cloudBase": 5.52,
              "cloudCeiling": 5.8,
              "cloudCover": 100,
              "dewPoint": -1.32,
              "evapotranspiration": 0.111,
              "freezingRainIntensity": 0,
              "humidity": 40.19,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 983.54,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 12.36,
              "temperatureApparent": 12.36,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 197.18,
              "windGust": 9.9,
              "windSpeed": 5.59
            }
          },
          {
            "time": "2024-04-23T03:00:00Z",
            "values": {
              "cloudBase": 5.52,
              "cloudCeiling": 6.49,
              "cloudCover": 100,
              "dewPoint": -1.16,
              "evapotranspiration": 0.11,
              "freezingRainIntensity": 0,
              "humidity": 42.34,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 983.11,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 11.7,
              "temperatureApparent": 11.7,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 198.47,
              "windGust": 10.43,
              "windSpeed": 5.9
            }
          },
          {
            "time": "2024-04-23T04:00:00Z",
            "values": {
              "cloudBase": 4.74,
              "cloudCeiling": 5.04,
              "cloudCover": 100,
              "dewPoint": -0.89,
              "evapotranspiration": 0.114,
              "freezingRainIntensity": 0,
              "humidity": 43.84,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 982.9,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 11.43,
              "temperatureApparent": 11.43,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 198.9,
              "windGust": 9.89,
              "windSpeed": 6.07
            }
          },
          {
            "time": "2024-04-23T05:00:00Z",
            "values": {
              "cloudBase": 3.71,
              "cloudCeiling": 3.51,
              "cloudCover": 100,
              "dewPoint": -0.56,
              "evapotranspiration": 0.118,
              "freezingRainIntensity": 0,
              "humidity": 45.78,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 982.21,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 11.11,
              "temperatureApparent": 11.11,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 198.03,
              "windGust": 11.67,
              "windSpeed": 6.38
            }
          },
          {
            "time": "2024-04-23T06:00:00Z",
            "values": {
              "cloudBase": 3.22,
              "cloudCeiling": null,
              "cloudCover": 100,
              "dewPoint": -0.26,
              "evapotranspiration": 0.125,
              "freezingRainIntensity": 0,
              "humidity": 46.79,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 981.68,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 11.08,
              "temperatureApparent": 11.08,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 198.58,
              "windGust": 12.4,
              "windSpeed": 6.73
            }
          },
          {
            "time": "2024-04-23T07:00:00Z",
            "values": {
              "cloudBase": 3.73,
              "cloudCeiling": null,
              "cloudCover": 100,
              "dewPoint": -0.14,
              "evapotranspiration": 0.116,
              "freezingRainIntensity": 0,
              "humidity": 48.05,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 981.1,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 10.81,
              "temperatureApparent": 10.81,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 199.44,
              "windGust": 13.49,
              "windSpeed": 7.22
            }
          },
          {
            "time": "2024-04-23T08:00:00Z",
            "values": {
              "cloudBase": 4.3,
              "cloudCeiling": 9.92,
              "cloudCover": 100,
              "dewPoint": -0.18,
              "evapotranspiration": 0.078,
              "freezingRainIntensity": 0,
              "humidity": 47.89,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 980.48,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 10.83,
              "temperatureApparent": 10.83,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 201.49,
              "windGust": 16.61,
              "windSpeed": 7.55
            }
          },
          {
            "time": "2024-04-23T09:00:00Z",
            "values": {
              "cloudBase": 2.37,
              "cloudCeiling": 2.22,
              "cloudCover": 100,
              "dewPoint": -0.2,
              "evapotranspiration": 0.069,
              "freezingRainIntensity": 0,
              "humidity": 47.44,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 979.68,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 10.96,
              "temperatureApparent": 10.96,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 201.65,
              "windGust": 15.68,
              "windSpeed": 7.68
            }
          },
          {
            "time": "2024-04-23T10:00:00Z",
            "values": {
              "cloudBase": 2.37,
              "cloudCeiling": 2.23,
              "cloudCover": 100,
              "dewPoint": -0.23,
              "evapotranspiration": 0.079,
              "freezingRainIntensity": 0,
              "humidity": 48.14,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 978.72,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 10.73,
              "temperatureApparent": 10.73,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 203.42,
              "windGust": 16.42,
              "windSpeed": 7.91
            }
          },
          {
            "time": "2024-04-23T11:00:00Z",
            "values": {
              "cloudBase": 2.38,
              "cloudCeiling": 2.22,
              "cloudCover": 100,
              "dewPoint": 0.16,
              "evapotranspiration": 0.09,
              "freezingRainIntensity": 0,
              "humidity": 49.44,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 978.89,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 10.77,
              "temperatureApparent": 10.77,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 206.58,
              "windGust": 14.88,
              "windSpeed": 7.34
            }
          },
          {
            "time": "2024-04-23T12:00:00Z",
            "values": {
              "cloudBase": 2.37,
              "cloudCeiling": 2.22,
              "cloudCover": 100,
              "dewPoint": 0.63,
              "evapotranspiration": 0.098,
              "freezingRainIntensity": 0,
              "humidity": 50.61,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 979.3,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 10.92,
              "temperatureApparent": 10.92,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 208.71,
              "windGust": 18.03,
              "windSpeed": 7.55
            }
          },
          {
            "time": "2024-04-23T13:00:00Z",
            "values": {
              "cloudBase": 1.98,
              "cloudCeiling": 1.87,
              "cloudCover": 100,
              "dewPoint": 1.22,
              "evapotranspiration": 0.1,
              "freezingRainIntensity": 0,
              "humidity": 52.39,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 980.14,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0.36,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 11.04,
              "temperatureApparent": 11.04,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 217.52,
              "windGust": 16.72,
              "windSpeed": 7.57
            }
          },
          {
            "time": "2024-04-23T14:00:00Z",
            "values": {
              "cloudBase": 1.26,
              "cloudCeiling": 8.59,
              "cloudCover": 100,
              "dewPoint": 2.82,
              "evapotranspiration": 0.108,
              "freezingRainIntensity": 0,
              "humidity": 63.19,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 50,
              "pressureSurfaceLevel": 979.61,
              "rainAccumulation": 0.82,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0.36,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 9.78,
              "temperatureApparent": 9.78,
              "uvHealthConcern": 0,
              "uvIndex": 1,
              "visibility": 16,
              "weatherCode": 4000,
              "windDirection": 219.97,
              "windGust": 15.03,
              "windSpeed": 6.85
            }
          },
          {
            "time": "2024-04-23T15:00:00Z",
            "values": {
              "cloudBase": 1.98,
              "cloudCeiling": 2.1,
              "cloudCover": 100,
              "dewPoint": 4.17,
              "evapotranspiration": 0.144,
              "freezingRainIntensity": 0,
              "humidity": 62.07,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 979.18,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 11.47,
              "temperatureApparent": 11.47,
              "uvHealthConcern": 0,
              "uvIndex": 1,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 216.02,
              "windGust": 13.38,
              "windSpeed": 6.78
            }
          },
          {
            "time": "2024-04-23T16:00:00Z",
            "values": {
              "cloudBase": 1.69,
              "cloudCeiling": 1.87,
              "cloudCover": 100,
              "dewPoint": 5.23,
              "evapotranspiration": 0.164,
              "freezingRainIntensity": 0,
              "humidity": 60.94,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 979.05,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowDepth": 0,
              "snowIntensity": 0,
              "temperature": 12.9,
              "temperatureApparent": 12.9,
              "uvHealthConcern": 1,
              "uvIndex": 2,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 216.51,
              "windGust": 12.83,
              "windSpeed": 6.79
            }
          },
          {
            "time": "2024-04-23T17:00:00Z",
            "values": {
              "cloudBase": 4.79,
              "cloudCeiling": 5.07,
              "cloudCover": 100,
              "dewPoint": 8.16,
              "evapotranspiration": 0.196,
              "freezingRainIntensity": 0,
              "humidity": 66.08,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 981.44,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0.01,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 14.41,
              "temperatureApparent": 14.41,
              "uvHealthConcern": 1,
              "uvIndex": 3,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 218.57,
              "windGust": 12.87,
              "windSpeed": 6.16
            }
          },
          {
            "time": "2024-04-23T18:00:00Z",
            "values": {
              "cloudBase": 4.52,
              "cloudCeiling": 4.79,
              "cloudCover": 100,
              "dewPoint": 8.37,
              "evapotranspiration": 0.189,
              "freezingRainIntensity": 0,
              "humidity": 67.34,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 20,
              "pressureSurfaceLevel": 981.18,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0.01,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 14.34,
              "temperatureApparent": 14.34,
              "uvHealthConcern": 1,
              "uvIndex": 4,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 218.49,
              "windGust": 13.13,
              "windSpeed": 6.36
            }
          },
          {
            "time": "2024-04-23T19:00:00Z",
            "values": {
              "cloudBase": 4.63,
              "cloudCeiling": 4.79,
              "cloudCover": 100,
              "dewPoint": 8.63,
              "evapotranspiration": 0.131,
              "freezingRainIntensity": 0,
              "humidity": 70.6,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 980.62,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 13.88,
              "temperatureApparent": 13.88,
              "uvHealthConcern": 1,
              "uvIndex": 4,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 217.48,
              "windGust": 11.6,
              "windSpeed": 5.64
            }
          },
          {
            "time": "2024-04-23T20:00:00Z",
            "values": {
              "cloudBase": 3.65,
              "cloudCeiling": 4.88,
              "cloudCover": 100,
              "dewPoint": 9.21,
              "evapotranspiration": 0.217,
              "freezingRainIntensity": 0,
              "humidity": 68.47,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 980.75,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 14.96,
              "temperatureApparent": 14.96,
              "uvHealthConcern": 1,
              "uvIndex": 3,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 224.32,
              "windGust": 12.75,
              "windSpeed": 6.11
            }
          },
          {
            "time": "2024-04-23T21:00:00Z",
            "values": {
              "cloudBase": 2.61,
              "cloudCeiling": 4.72,
              "cloudCover": 83.59,
              "dewPoint": 9.5,
              "evapotranspiration": 0.187,
              "freezingRainIntensity": 0,
              "humidity": 68.67,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 980.6,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 15.22,
              "temperatureApparent": 15.22,
              "uvHealthConcern": 0,
              "uvIndex": 1,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 232.32,
              "windGust": 12.01,
              "windSpeed": 5.76
            }
          },
          {
            "time": "2024-04-23T22:00:00Z",
            "values": {
              "cloudBase": 0.95,
              "cloudCeiling": 4.23,
              "cloudCover": 96.09,
              "dewPoint": 8.86,
              "evapotranspiration": 0.194,
              "freezingRainIntensity": 0,
              "humidity": 66.1,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 980.74,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 15.14,
              "temperatureApparent": 15.14,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 234.1,
              "windGust": 12.94,
              "windSpeed": 6.25
            }
          },
          {
            "time": "2024-04-23T23:00:00Z",
            "values": {
              "cloudBase": 3,
              "cloudCeiling": null,
              "cloudCover": 48.44,
              "dewPoint": 8.19,
              "evapotranspiration": 0.08,
              "freezingRainIntensity": 0,
              "humidity": 69.52,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 981.06,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 13.66,
              "temperatureApparent": 13.66,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1101,
              "windDirection": 220.65,
              "windGust": 12.22,
              "windSpeed": 6.15
            }
          },
          {
            "time": "2024-04-24T00:00:00Z",
            "values": {
              "cloudBase": 3.98,
              "cloudCeiling": 5.42,
              "cloudCover": 97.66,
              "dewPoint": 7.59,
              "evapotranspiration": 0.076,
              "freezingRainIntensity": 0,
              "humidity": 69.26,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 981.53,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0.01,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 13.09,
              "temperatureApparent": 13.09,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 241.16,
              "windGust": 11.4,
              "windSpeed": 5.83
            }
          },
          {
            "time": "2024-04-24T01:00:00Z",
            "values": {
              "cloudBase": 0.98,
              "cloudCeiling": null,
              "cloudCover": 42.97,
              "dewPoint": 8.22,
              "evapotranspiration": 0.032,
              "freezingRainIntensity": 0,
              "humidity": 86.67,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 10,
              "pressureSurfaceLevel": 982.71,
              "rainAccumulation": 2.94,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0.01,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 10.34,
              "temperatureApparent": 10.34,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 14.78,
              "weatherCode": 1101,
              "windDirection": 269.57,
              "windGust": 6.84,
              "windSpeed": 3.92
            }
          },
          {
            "time": "2024-04-24T02:00:00Z",
            "values": {
              "cloudBase": 1.62,
              "cloudCeiling": null,
              "cloudCover": 28.13,
              "dewPoint": 8.23,
              "evapotranspiration": 0.02,
              "freezingRainIntensity": 0,
              "humidity": 90.56,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 983.32,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 9.7,
              "temperatureApparent": 9.7,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1100,
              "windDirection": 274.09,
              "windGust": 6.19,
              "windSpeed": 3.52
            }
          },
          {
            "time": "2024-04-24T03:00:00Z",
            "values": {
              "cloudBase": 1.42,
              "cloudCeiling": null,
              "cloudCover": 19.53,
              "dewPoint": 6.45,
              "evapotranspiration": 0.03,
              "freezingRainIntensity": 0,
              "humidity": 84.68,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 984.18,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 8.89,
              "temperatureApparent": 8.89,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1100,
              "windDirection": 296.46,
              "windGust": 8.07,
              "windSpeed": 4.46
            }
          },
          {
            "time": "2024-04-24T04:00:00Z",
            "values": {
              "cloudBase": 0.78,
              "cloudCeiling": null,
              "cloudCover": 25,
              "dewPoint": 5.69,
              "evapotranspiration": 0.029,
              "freezingRainIntensity": 0,
              "humidity": 85.68,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 985.14,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 7.94,
              "temperatureApparent": 7.94,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1100,
              "windDirection": 325.36,
              "windGust": 10.44,
              "windSpeed": 5.5
            }
          },
          {
            "time": "2024-04-24T05:00:00Z",
            "values": {
              "cloudBase": 0.2,
              "cloudCeiling": null,
              "cloudCover": 84.38,
              "dewPoint": 4.18,
              "evapotranspiration": 0.017,
              "freezingRainIntensity": 0,
              "humidity": 92.04,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 986.25,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 5.37,
              "temperatureApparent": 5.37,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 344.94,
              "windGust": 10.71,
              "windSpeed": 5.55
            }
          },
          {
            "time": "2024-04-24T06:00:00Z",
            "values": {
              "cloudBase": 0.23,
              "cloudCeiling": 0.77,
              "cloudCover": 100,
              "dewPoint": 3.03,
              "evapotranspiration": 0.018,
              "freezingRainIntensity": 0,
              "humidity": 90.17,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 987.38,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 4.5,
              "temperatureApparent": 4.5,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 349.04,
              "windGust": 9.57,
              "windSpeed": 4.9
            }
          },
          {
            "time": "2024-04-24T07:00:00Z",
            "values": {
              "cloudBase": 0.29,
              "cloudCeiling": 0.39,
              "cloudCover": 100,
              "dewPoint": 2.06,
              "evapotranspiration": 0.023,
              "freezingRainIntensity": 0,
              "humidity": 86.41,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 988.25,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 4.12,
              "temperatureApparent": 0.1,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 346.73,
              "windGust": 10.85,
              "windSpeed": 5.25
            }
          },
          {
            "time": "2024-04-24T08:00:00Z",
            "values": {
              "cloudBase": 0.34,
              "cloudCeiling": 0.37,
              "cloudCover": 100,
              "dewPoint": 0.93,
              "evapotranspiration": 0.028,
              "freezingRainIntensity": 0,
              "humidity": 83.3,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.13,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 3.49,
              "temperatureApparent": -0.93,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 344.45,
              "windGust": 11.7,
              "windSpeed": 5.75
            }
          },
          {
            "time": "2024-04-24T09:00:00Z",
            "values": {
              "cloudBase": 0.38,
              "cloudCeiling": 0.42,
              "cloudCover": 100,
              "dewPoint": 0.19,
              "evapotranspiration": 0.032,
              "freezingRainIntensity": 0,
              "humidity": 80.66,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.83,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 3.19,
              "temperatureApparent": -1.49,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 344.95,
              "windGust": 12.29,
              "windSpeed": 6.16
            }
          },
          {
            "time": "2024-04-24T10:00:00Z",
            "values": {
              "cloudBase": 0.47,
              "cloudCeiling": 0.54,
              "cloudCover": 100,
              "dewPoint": -0.56,
              "evapotranspiration": 0.037,
              "freezingRainIntensity": 0,
              "humidity": 76.89,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 990.54,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 3.1,
              "temperatureApparent": -1.7,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 344.1,
              "windGust": 12.65,
              "windSpeed": 6.37
            }
          },
          {
            "time": "2024-04-24T11:00:00Z",
            "values": {
              "cloudBase": 0.58,
              "cloudCeiling": 0.61,
              "cloudCover": 100,
              "dewPoint": -0.96,
              "evapotranspiration": 0.045,
              "freezingRainIntensity": 0,
              "humidity": 72.05,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 991.26,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 3.6,
              "temperatureApparent": -0.97,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 346.49,
              "windGust": 12.28,
              "windSpeed": 6.16
            }
          },
          {
            "time": "2024-04-24T12:00:00Z",
            "values": {
              "cloudBase": 0.52,
              "cloudCeiling": 0.68,
              "cloudCover": 98.44,
              "dewPoint": -0.58,
              "evapotranspiration": 0.05,
              "freezingRainIntensity": 0,
              "humidity": 72.92,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 992.13,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 3.82,
              "temperatureApparent": -0.69,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 349.79,
              "windGust": 12.25,
              "windSpeed": 6.16
            }
          },
          {
            "time": "2024-04-24T13:00:00Z",
            "values": {
              "cloudBase": 0.51,
              "cloudCeiling": 0.61,
              "cloudCover": 89.84,
              "dewPoint": 0.03,
              "evapotranspiration": 0.058,
              "freezingRainIntensity": 0,
              "humidity": 72.4,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 993.03,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 4.56,
              "temperatureApparent": 4.56,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 356.28,
              "windGust": 11.95,
              "windSpeed": 5.88
            }
          },
          {
            "time": "2024-04-24T14:00:00Z",
            "values": {
              "cloudBase": 0.61,
              "cloudCeiling": 0.94,
              "cloudCover": 90.63,
              "dewPoint": 0.39,
              "evapotranspiration": 0.11,
              "freezingRainIntensity": 0,
              "humidity": 68.34,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 993.79,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 5.77,
              "temperatureApparent": 5.77,
              "uvHealthConcern": 0,
              "uvIndex": 1,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 358.9,
              "windGust": 11.02,
              "windSpeed": 5.15
            }
          },
          {
            "time": "2024-04-24T15:00:00Z",
            "values": {
              "cloudBase": 0.7,
              "cloudCeiling": 0.97,
              "cloudCover": 88.28,
              "dewPoint": 0.39,
              "evapotranspiration": 0.172,
              "freezingRainIntensity": 0,
              "humidity": 63.24,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 994.57,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 6.89,
              "temperatureApparent": 6.89,
              "uvHealthConcern": 1,
              "uvIndex": 2,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 358.6,
              "windGust": 10.47,
              "windSpeed": 4.66
            }
          },
          {
            "time": "2024-04-24T16:00:00Z",
            "values": {
              "cloudBase": 0.8,
              "cloudCeiling": 0.85,
              "cloudCover": 75,
              "dewPoint": 0.77,
              "evapotranspiration": 0.236,
              "freezingRainIntensity": 0,
              "humidity": 60.43,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 995.45,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 7.96,
              "temperatureApparent": 7.96,
              "uvHealthConcern": 1,
              "uvIndex": 4,
              "visibility": 16,
              "weatherCode": 1001,
              "windDirection": 0.71,
              "windGust": 10.03,
              "windSpeed": 4.32
            }
          },
          {
            "time": "2024-04-24T17:00:00Z",
            "values": {
              "cloudBase": 0.87,
              "cloudCeiling": 1.11,
              "cloudCover": 72.66,
              "dewPoint": 0.86,
              "evapotranspiration": 0.281,
              "freezingRainIntensity": 0,
              "humidity": 56.37,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 995.94,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 9.08,
              "temperatureApparent": 9.08,
              "uvHealthConcern": 2,
              "uvIndex": 5,
              "visibility": 16,
              "weatherCode": 1102,
              "windDirection": 2.39,
              "windGust": 9.34,
              "windSpeed": 3.85
            }
          },
          {
            "time": "2024-04-24T18:00:00Z",
            "values": {
              "cloudBase": 0.91,
              "cloudCeiling": null,
              "cloudCover": 42.97,
              "dewPoint": 1.17,
              "evapotranspiration": 0.334,
              "freezingRainIntensity": 0,
              "humidity": 56.22,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 996.28,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 9.45,
              "temperatureApparent": 9.45,
              "uvHealthConcern": 2,
              "uvIndex": 5,
              "visibility": 16,
              "weatherCode": 1101,
              "windDirection": 353.18,
              "windGust": 9.41,
              "windSpeed": 3.71
            }
          },
          {
            "time": "2024-04-24T19:00:00Z",
            "values": {
              "cloudBase": 0.78,
              "cloudCeiling": null,
              "cloudCover": 31.25,
              "dewPoint": 1.68,
              "evapotranspiration": 0.364,
              "freezingRainIntensity": 0,
              "humidity": 58.52,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 996.42,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 9.4,
              "temperatureApparent": 9.4,
              "uvHealthConcern": 1,
              "uvIndex": 4,
              "visibility": 16,
              "weatherCode": 1100,
              "windDirection": 346.13,
              "windGust": 9.45,
              "windSpeed": 3.73
            }
          },
          {
            "time": "2024-04-24T20:00:00Z",
            "values": {
              "cloudBase": 0.87,
              "cloudCeiling": null,
              "cloudCover": 15.63,
              "dewPoint": 1.23,
              "evapotranspiration": 0.323,
              "freezingRainIntensity": 0,
              "humidity": 58.65,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 996.68,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 8.89,
              "temperatureApparent": 8.89,
              "uvHealthConcern": 1,
              "uvIndex": 3,
              "visibility": 16,
              "weatherCode": 1100,
              "windDirection": 342.51,
              "windGust": 9.2,
              "windSpeed": 3.67
            }
          },
          {
            "time": "2024-04-24T21:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.78,
              "dewPoint": 0.44,
              "evapotranspiration": 0.276,
              "freezingRainIntensity": 0,
              "humidity": 57.34,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 996.34,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 8.38,
              "temperatureApparent": 8.38,
              "uvHealthConcern": 1,
              "uvIndex": 2,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 342.95,
              "windGust": 9.14,
              "windSpeed": 3.78
            }
          },
          {
            "time": "2024-04-24T22:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -0.19,
              "evapotranspiration": 0.209,
              "freezingRainIntensity": 0,
              "humidity": 57.79,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 996.27,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 7.59,
              "temperatureApparent": 7.59,
              "uvHealthConcern": 0,
              "uvIndex": 1,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 346.98,
              "windGust": 9.04,
              "windSpeed": 3.94
            }
          },
          {
            "time": "2024-04-24T23:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -0.62,
              "evapotranspiration": 0.13,
              "freezingRainIntensity": 0,
              "humidity": 60.99,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 996.13,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 6.35,
              "temperatureApparent": 6.35,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 353.07,
              "windGust": 8.06,
              "windSpeed": 3.72
            }
          },
          {
            "time": "2024-04-25T00:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -0.45,
              "evapotranspiration": 0.049,
              "freezingRainIntensity": 0,
              "humidity": 67.13,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 996.09,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 5.15,
              "temperatureApparent": 5.15,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 353.57,
              "windGust": 6.32,
              "windSpeed": 3.26
            }
          },
          {
            "time": "2024-04-25T01:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": -0.24,
              "evapotranspiration": 0.031,
              "freezingRainIntensity": 0,
              "humidity": 77.11,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 996.31,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 3.38,
              "temperatureApparent": 0.59,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16,
              "weatherCode": 1000,
              "windDirection": 359.14,
              "windGust": 5.36,
              "windSpeed": 2.94
            }
          },
          {
            "time": "2024-04-25T02:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0.38,
              "dewPoint": 0.1,
              "evapotranspiration": 0.02,
              "freezingRainIntensity": 0,
              "humidity": 83.29,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 997.04,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 2.65,
              "temperatureApparent": -0.04,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 16.68,
              "weatherCode": 1000,
              "windDirection": 9.51,
              "windGust": 4.71,
              "windSpeed": 2.64
            }
          },
          {
            "time": "2024-04-25T03:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1.09,
              "dewPoint": -0.19,
              "evapotranspiration": 0.018,
              "freezingRainIntensity": 0,
              "humidity": 84.28,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 997.56,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 2.19,
              "temperatureApparent": -0.33,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 17.36,
              "weatherCode": 1000,
              "windDirection": 19.49,
              "windGust": 4.1,
              "windSpeed": 2.38
            }
          },
          {
            "time": "2024-04-25T04:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 4.13,
              "dewPoint": -0.77,
              "evapotranspiration": 0.018,
              "freezingRainIntensity": 0,
              "humidity": 82.66,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 997.7,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 1.86,
              "temperatureApparent": -0.75,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 18.03,
              "weatherCode": 1000,
              "windDirection": 26.66,
              "windGust": 3.96,
              "windSpeed": 2.41
            }
          },
          {
            "time": "2024-04-25T05:00:00Z",
            "values": {
              "cloudBase": 2.36,
              "cloudCeiling": null,
              "cloudCover": 11.48,
              "dewPoint": -1.54,
              "evapotranspiration": 0.019,
              "freezingRainIntensity": 0,
              "humidity": 83.45,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 998.15,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 0.95,
              "temperatureApparent": -1.88,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 22.78,
              "weatherCode": 1000,
              "windDirection": 34.03,
              "windGust": 4.53,
              "windSpeed": 2.46
            }
          },
          {
            "time": "2024-04-25T06:00:00Z",
            "values": {
              "cloudBase": 4.91,
              "cloudCeiling": null,
              "cloudCover": 26.44,
              "dewPoint": -1.97,
              "evapotranspiration": 0.018,
              "freezingRainIntensity": 0,
              "humidity": 80.5,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 998.17,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 1.01,
              "temperatureApparent": -1.38,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 19.39,
              "weatherCode": 1100,
              "windDirection": 50.36,
              "windGust": 3.03,
              "windSpeed": 2.08
            }
          },
          {
            "time": "2024-04-25T07:00:00Z",
            "values": {
              "cloudBase": 6.94,
              "cloudCeiling": 4.63,
              "cloudCover": 90.23,
              "dewPoint": -2.13,
              "evapotranspiration": 0.019,
              "freezingRainIntensity": 0,
              "humidity": 79.89,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 998.01,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 0.95,
              "temperatureApparent": -1.6,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 20.07,
              "weatherCode": 1001,
              "windDirection": 73.21,
              "windGust": 3.21,
              "windSpeed": 2.2
            }
          },
          {
            "time": "2024-04-25T08:00:00Z",
            "values": {
              "cloudBase": 6.77,
              "cloudCeiling": 3.88,
              "cloudCover": 99.35,
              "dewPoint": -2.3,
              "evapotranspiration": 0.02,
              "freezingRainIntensity": 0,
              "humidity": 77.85,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 998.09,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 1.13,
              "temperatureApparent": -1.36,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 20.75,
              "weatherCode": 1001,
              "windDirection": 96.86,
              "windGust": 3.15,
              "windSpeed": 2.18
            }
          },
          {
            "time": "2024-04-25T09:00:00Z",
            "values": {
              "cloudBase": 6.64,
              "cloudCeiling": 5.42,
              "cloudCover": 99.74,
              "dewPoint": -2.61,
              "evapotranspiration": 0.023,
              "freezingRainIntensity": 0,
              "humidity": 75.37,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 998.22,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 1.27,
              "temperatureApparent": -1.44,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 21.42,
              "weatherCode": 1001,
              "windDirection": 110.48,
              "windGust": 3.75,
              "windSpeed": 2.4
            }
          },
          {
            "time": "2024-04-25T10:00:00Z",
            "values": {
              "cloudBase": 6.55,
              "cloudCeiling": 5.03,
              "cloudCover": 83.79,
              "dewPoint": -3.25,
              "evapotranspiration": 0.025,
              "freezingRainIntensity": 0,
              "humidity": 72.77,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 998.33,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 1.09,
              "temperatureApparent": -1.79,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 22.1,
              "weatherCode": 1001,
              "windDirection": 122.77,
              "windGust": 4.08,
              "windSpeed": 2.54
            }
          },
          {
            "time": "2024-04-25T11:00:00Z",
            "values": {
              "cloudBase": 6.39,
              "cloudCeiling": 4.48,
              "cloudCover": 86.46,
              "dewPoint": -3.56,
              "evapotranspiration": 0.027,
              "freezingRainIntensity": 0,
              "humidity": 71.7,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 998.53,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 0.98,
              "temperatureApparent": -2.1,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 22.78,
              "weatherCode": 1001,
              "windDirection": 114.03,
              "windGust": 4.8,
              "windSpeed": 2.72
            }
          },
          {
            "time": "2024-04-25T12:00:00Z",
            "values": {
              "cloudBase": 6.28,
              "cloudCeiling": 4.33,
              "cloudCover": 92.38,
              "dewPoint": -2.43,
              "evapotranspiration": 0.038,
              "freezingRainIntensity": 0,
              "humidity": 71.88,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 998.87,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 2.12,
              "temperatureApparent": -0.67,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 23.46,
              "weatherCode": 1001,
              "windDirection": 117.67,
              "windGust": 5.83,
              "windSpeed": 2.64
            }
          },
          {
            "time": "2024-04-25T13:00:00Z",
            "values": {
              "cloudBase": 6.02,
              "cloudCeiling": null,
              "cloudCover": 59.62,
              "dewPoint": -1.45,
              "evapotranspiration": 0.087,
              "freezingRainIntensity": 0,
              "humidity": 64.68,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 999.1,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 4.64,
              "temperatureApparent": 4.64,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1101,
              "windDirection": 128.19,
              "windGust": 5.42,
              "windSpeed": 3.62
            }
          },
          {
            "time": "2024-04-25T14:00:00Z",
            "values": {
              "cloudBase": 6.09,
              "cloudCeiling": null,
              "cloudCover": 40.56,
              "dewPoint": -0.88,
              "evapotranspiration": 0.175,
              "freezingRainIntensity": 0,
              "humidity": 58.29,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 999.16,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 6.74,
              "temperatureApparent": 6.74,
              "uvHealthConcern": 1,
              "uvIndex": 2,
              "visibility": 24.13,
              "weatherCode": 1101,
              "windDirection": 128.81,
              "windGust": 4.97,
              "windSpeed": 3.73
            }
          },
          {
            "time": "2024-04-25T15:00:00Z",
            "values": {
              "cloudBase": 6.11,
              "cloudCeiling": null,
              "cloudCover": 32.73,
              "dewPoint": -0.62,
              "evapotranspiration": 0.265,
              "freezingRainIntensity": 0,
              "humidity": 52.72,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 998.97,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 8.48,
              "temperatureApparent": 8.48,
              "uvHealthConcern": 1,
              "uvIndex": 3,
              "visibility": 24.14,
              "weatherCode": 1100,
              "windDirection": 134.62,
              "windGust": 4.69,
              "windSpeed": 3.9
            }
          },
          {
            "time": "2024-04-25T16:00:00Z",
            "values": {
              "cloudBase": 6.12,
              "cloudCeiling": null,
              "cloudCover": 24.51,
              "dewPoint": -0.37,
              "evapotranspiration": 0.348,
              "freezingRainIntensity": 0,
              "humidity": 48.53,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 998.73,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 9.99,
              "temperatureApparent": 9.99,
              "uvHealthConcern": 2,
              "uvIndex": 5,
              "visibility": 24.14,
              "weatherCode": 1100,
              "windDirection": 142.01,
              "windGust": 4.18,
              "windSpeed": 3.67
            }
          },
          {
            "time": "2024-04-25T17:00:00Z",
            "values": {
              "cloudBase": 6.12,
              "cloudCeiling": null,
              "cloudCover": 19.63,
              "dewPoint": -0.07,
              "evapotranspiration": 0.409,
              "freezingRainIntensity": 0,
              "humidity": 45.47,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 997.92,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 11.29,
              "temperatureApparent": 11.29,
              "uvHealthConcern": 2,
              "uvIndex": 6,
              "visibility": 24.14,
              "weatherCode": 1100,
              "windDirection": 141.72,
              "windGust": 4.37,
              "windSpeed": 3.93
            }
          },
          {
            "time": "2024-04-25T18:00:00Z",
            "values": {
              "cloudBase": 6.13,
              "cloudCeiling": null,
              "cloudCover": 17.23,
              "dewPoint": 0.28,
              "evapotranspiration": 0.444,
              "freezingRainIntensity": 0,
              "humidity": 43.38,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 997.07,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 12.39,
              "temperatureApparent": 12.39,
              "uvHealthConcern": 2,
              "uvIndex": 6,
              "visibility": 24.14,
              "weatherCode": 1100,
              "windDirection": 143,
              "windGust": 4.65,
              "windSpeed": 4.22
            }
          },
          {
            "time": "2024-04-25T19:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 20.55,
              "dewPoint": 0.57,
              "evapotranspiration": 0.458,
              "freezingRainIntensity": 0,
              "humidity": 41.78,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 996.83,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 13.28,
              "temperatureApparent": 13.28,
              "uvHealthConcern": 2,
              "uvIndex": 5,
              "visibility": 24.14,
              "weatherCode": 1100,
              "windDirection": 155.12,
              "windGust": 3.93,
              "windSpeed": 3.53
            }
          },
          {
            "time": "2024-04-25T20:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 32.46,
              "dewPoint": 0.76,
              "evapotranspiration": 0.434,
              "freezingRainIntensity": 0,
              "humidity": 40.78,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 996.21,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 13.86,
              "temperatureApparent": 13.86,
              "uvHealthConcern": 1,
              "uvIndex": 4,
              "visibility": 24.14,
              "weatherCode": 1100,
              "windDirection": 157.54,
              "windGust": 3.32,
              "windSpeed": 3.02
            }
          },
          {
            "time": "2024-04-25T21:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 23.87,
              "dewPoint": 1.03,
              "evapotranspiration": 0.376,
              "freezingRainIntensity": 0,
              "humidity": 40.77,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 995.43,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 14.16,
              "temperatureApparent": 14.16,
              "uvHealthConcern": 1,
              "uvIndex": 2,
              "visibility": 24.14,
              "weatherCode": 1100,
              "windDirection": 144.28,
              "windGust": 3.18,
              "windSpeed": 2.94
            }
          },
          {
            "time": "2024-04-25T22:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 19.26,
              "dewPoint": 1.22,
              "evapotranspiration": 0.291,
              "freezingRainIntensity": 0,
              "humidity": 41.86,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 994.92,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 13.97,
              "temperatureApparent": 13.97,
              "uvHealthConcern": 0,
              "uvIndex": 1,
              "visibility": 24.13,
              "weatherCode": 1100,
              "windDirection": 127.03,
              "windGust": 3.24,
              "windSpeed": 3.15
            }
          },
          {
            "time": "2024-04-25T23:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 16.89,
              "dewPoint": 2.99,
              "evapotranspiration": 0.186,
              "freezingRainIntensity": 0,
              "humidity": 49.99,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 994.59,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 13.19,
              "temperatureApparent": 13.19,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1100,
              "windDirection": 116.28,
              "windGust": 4.31,
              "windSpeed": 3.55
            }
          },
          {
            "time": "2024-04-26T00:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 18.59,
              "dewPoint": 3.46,
              "evapotranspiration": 0.073,
              "freezingRainIntensity": 0,
              "humidity": 61.28,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 994.4,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 10.6,
              "temperatureApparent": 10.6,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1100,
              "windDirection": 113.82,
              "windGust": 6.64,
              "windSpeed": 3.56
            }
          },
          {
            "time": "2024-04-26T01:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 6.79,
              "dewPoint": 2.15,
              "evapotranspiration": 0.058,
              "freezingRainIntensity": 0,
              "humidity": 64.61,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 994.54,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 8.44,
              "temperatureApparent": 8.44,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.13,
              "weatherCode": 1000,
              "windDirection": 119.07,
              "windGust": 7.66,
              "windSpeed": 3.63
            }
          },
          {
            "time": "2024-04-26T02:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 3.4,
              "dewPoint": 1.67,
              "evapotranspiration": 0.048,
              "freezingRainIntensity": 0,
              "humidity": 66.69,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 995.04,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 7.46,
              "temperatureApparent": 7.46,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.13,
              "weatherCode": 1000,
              "windDirection": 125.67,
              "windGust": 8.69,
              "windSpeed": 3.55
            }
          },
          {
            "time": "2024-04-26T03:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 2.27,
              "dewPoint": 1.17,
              "evapotranspiration": 0.045,
              "freezingRainIntensity": 0,
              "humidity": 67.53,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 995.12,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 6.76,
              "temperatureApparent": 6.76,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1000,
              "windDirection": 121.67,
              "windGust": 9.23,
              "windSpeed": 3.55
            }
          },
          {
            "time": "2024-04-26T04:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1.65,
              "dewPoint": 0.85,
              "evapotranspiration": 0.043,
              "freezingRainIntensity": 0,
              "humidity": 68.81,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 994.49,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 6.15,
              "temperatureApparent": 6.15,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1000,
              "windDirection": 121.4,
              "windGust": 9.6,
              "windSpeed": 3.68
            }
          },
          {
            "time": "2024-04-26T05:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1.36,
              "dewPoint": 0.55,
              "evapotranspiration": 0.044,
              "freezingRainIntensity": 0,
              "humidity": 69.09,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 993.91,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 5.78,
              "temperatureApparent": 5.78,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1000,
              "windDirection": 122.47,
              "windGust": 10.85,
              "windSpeed": 3.94
            }
          },
          {
            "time": "2024-04-26T06:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 1.12,
              "dewPoint": 0.65,
              "evapotranspiration": 0.044,
              "freezingRainIntensity": 0,
              "humidity": 69.86,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 993.67,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 5.72,
              "temperatureApparent": 5.72,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1000,
              "windDirection": 126.89,
              "windGust": 11.9,
              "windSpeed": 4.11
            }
          },
          {
            "time": "2024-04-26T07:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": 1.31,
              "evapotranspiration": 0.039,
              "freezingRainIntensity": 0,
              "humidity": 74.25,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 992.84,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 5.53,
              "temperatureApparent": 5.53,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1000,
              "windDirection": 121.06,
              "windGust": 11.58,
              "windSpeed": 4.36
            }
          },
          {
            "time": "2024-04-26T08:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 0,
              "dewPoint": 1.89,
              "evapotranspiration": 0.031,
              "freezingRainIntensity": 0,
              "humidity": 79.53,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 992.52,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 5.14,
              "temperatureApparent": 5.14,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1000,
              "windDirection": 123.55,
              "windGust": 11.23,
              "windSpeed": 4.2
            }
          },
          {
            "time": "2024-04-26T09:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 2.74,
              "dewPoint": 2.16,
              "evapotranspiration": 0.027,
              "freezingRainIntensity": 0,
              "humidity": 82.21,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 992.47,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 4.94,
              "temperatureApparent": 4.94,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1000,
              "windDirection": 127.74,
              "windGust": 11.36,
              "windSpeed": 4.11
            }
          },
          {
            "time": "2024-04-26T10:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 26.03,
              "dewPoint": 2.23,
              "evapotranspiration": 0.027,
              "freezingRainIntensity": 0,
              "humidity": 83.09,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 992.34,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 4.86,
              "temperatureApparent": 4.86,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.13,
              "weatherCode": 1100,
              "windDirection": 126.45,
              "windGust": 11.61,
              "windSpeed": 4.36
            }
          },
          {
            "time": "2024-04-26T11:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 40.84,
              "dewPoint": 2.29,
              "evapotranspiration": 0.029,
              "freezingRainIntensity": 0,
              "humidity": 82.26,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 992.09,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 5.06,
              "temperatureApparent": 5.06,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1101,
              "windDirection": 128.76,
              "windGust": 12.17,
              "windSpeed": 4.59
            }
          },
          {
            "time": "2024-04-26T12:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 50.66,
              "dewPoint": 2.98,
              "evapotranspiration": 0.046,
              "freezingRainIntensity": 0,
              "humidity": 79.47,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 992.06,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 6.27,
              "temperatureApparent": 6.27,
              "uvHealthConcern": 0,
              "uvIndex": 0,
              "visibility": 24.14,
              "weatherCode": 1101,
              "windDirection": 130.97,
              "windGust": 13.21,
              "windSpeed": 5.25
            }
          },
          {
            "time": "2024-04-26T13:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 100,
              "dewPoint": 4.13,
              "evapotranspiration": 0.07,
              "freezingRainIntensity": 0,
              "humidity": 74.79,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 991.33,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 8.34,
              "temperatureApparent": 8.34,
              "visibility": 24.13,
              "weatherCode": 1001,
              "windDirection": 131.42,
              "windGust": 13.76,
              "windSpeed": 6.07
            }
          },
          {
            "time": "2024-04-26T14:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 100,
              "dewPoint": 4.71,
              "evapotranspiration": 0.15,
              "freezingRainIntensity": 0,
              "humidity": 66.78,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 991.26,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 10.63,
              "temperatureApparent": 10.63,
              "visibility": 24.13,
              "weatherCode": 1001,
              "windDirection": 143.19,
              "windGust": 12.76,
              "windSpeed": 6.98
            }
          },
          {
            "time": "2024-04-26T15:00:00Z",
            "values": {
              "cloudBase": null,
              "cloudCeiling": null,
              "cloudCover": 100,
              "dewPoint": 5.54,
              "evapotranspiration": 0.193,
              "freezingRainIntensity": 0,
              "humidity": 62.99,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 990.27,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 12.39,
              "temperatureApparent": 12.39,
              "visibility": 24.14,
              "weatherCode": 1001,
              "windDirection": 144,
              "windGust": 11.67,
              "windSpeed": 7.14
            }
          },
          {
            "time": "2024-04-26T16:00:00Z",
            "values": {
              "cloudBase": 4.5,
              "cloudCeiling": null,
              "cloudCover": 100,
              "dewPoint": 6.31,
              "evapotranspiration": 0.255,
              "freezingRainIntensity": 0,
              "humidity": 58.66,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 989.04,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 14.3,
              "temperatureApparent": 14.3,
              "visibility": 24.13,
              "weatherCode": 1001,
              "windDirection": 144.45,
              "windGust": 11.74,
              "windSpeed": 7.59
            }
          },
          {
            "time": "2024-04-26T17:00:00Z",
            "values": {
              "cloudBase": 2.1,
              "cloudCeiling": 3.02,
              "cloudCover": 100,
              "dewPoint": 7.3,
              "evapotranspiration": 0.154,
              "freezingRainIntensity": 0,
              "humidity": 62.07,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 988.5,
              "rainAccumulation": 0,
              "rainAccumulationLwe": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 14.48,
              "temperatureApparent": 14.48,
              "visibility": 24.14,
              "weatherCode": 1001,
              "windDirection": 146.34,
              "windGust": 12.62,
              "windSpeed": 6.86
            }
          },
          {
            "time": "2024-04-26T18:00:00Z",
            "values": {
              "cloudBase": 2.03,
              "cloudCeiling": 4.08,
              "cloudCover": 100,
              "dewPoint": 7.92,
              "evapotranspiration": 0.118,
              "freezingRainIntensity": 0,
              "humidity": 64.01,
              "iceAccumulation": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 987.57,
              "rainAccumulation": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowIntensity": 0,
              "temperature": 14.65,
              "temperatureApparent": 14.65,
              "visibility": 24.13,
              "weatherCode": 1001,
              "windDirection": 147.01,
              "windGust": 12.97,
              "windSpeed": 6.7
            }
          },
          {
            "time": "2024-04-26T19:00:00Z",
            "values": {
              "cloudBase": 2.03,
              "cloudCeiling": 4.08,
              "cloudCover": 100,
              "dewPoint": 8.9,
              "evapotranspiration": 0.087,
              "freezingRainIntensity": 0,
              "humidity": 73.53,
              "iceAccumulation": 0,
              "precipitationProbability": 0,
              "pressureSurfaceLevel": 986.82,
              "rainAccumulation": 0,
              "rainIntensity": 0,
              "sleetAccumulation": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowIntensity": 0,
              "temperature": 13.78,
              "temperatureApparent": 13.78,
              "visibility": 17.97,
              "weatherCode": 1001,
              "windDirection": 147.01,
              "windGust": 14.14,
              "windSpeed": 7.23
            }
          },
          {
            "time": "2024-04-26T20:00:00Z",
            "values": {
              "cloudBase": 0.41,
              "cloudCeiling": 1.88,
              "cloudCover": 100,
              "dewPoint": 9.89,
              "evapotranspiration": 0.056,
              "freezingRainIntensity": 0,
              "humidity": 83.05,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 65,
              "pressureSurfaceLevel": 986.07,
              "rainAccumulation": 5.54,
              "rainAccumulationLwe": 2.03,
              "rainIntensity": 2.03,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 12.91,
              "temperatureApparent": 12.91,
              "visibility": 11.81,
              "weatherCode": 4200,
              "windDirection": 141.14,
              "windGust": 15.3,
              "windSpeed": 7.76
            }
          },
          {
            "time": "2024-04-26T21:00:00Z",
            "values": {
              "cloudBase": 0.41,
              "cloudCeiling": 1.88,
              "cloudCover": 100,
              "dewPoint": 10.88,
              "evapotranspiration": 0.025,
              "freezingRainIntensity": 0,
              "humidity": 92.57,
              "iceAccumulation": 0,
              "precipitationProbability": 65,
              "pressureSurfaceLevel": 985.32,
              "rainAccumulation": 5.54,
              "rainIntensity": 2.03,
              "sleetAccumulation": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowIntensity": 0,
              "temperature": 12.05,
              "temperatureApparent": 12.05,
              "visibility": 5.64,
              "weatherCode": 4200,
              "windDirection": 141.14,
              "windGust": 16.47,
              "windSpeed": 8.29
            }
          },
          {
            "time": "2024-04-26T22:00:00Z",
            "values": {
              "cloudBase": 0.41,
              "cloudCeiling": 1.88,
              "cloudCover": 100,
              "dewPoint": 11.75,
              "evapotranspiration": 0.024,
              "freezingRainIntensity": 0,
              "humidity": 93.73,
              "iceAccumulation": 0,
              "precipitationProbability": 65,
              "pressureSurfaceLevel": 984.51,
              "rainAccumulation": 5.54,
              "rainIntensity": 2.03,
              "sleetAccumulation": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowIntensity": 0,
              "temperature": 12.73,
              "temperatureApparent": 12.73,
              "visibility": 11.81,
              "weatherCode": 4200,
              "windDirection": 141.14,
              "windGust": 16.9,
              "windSpeed": 8.4
            }
          },
          {
            "time": "2024-04-26T23:00:00Z",
            "values": {
              "cloudBase": 0.19,
              "cloudCeiling": 1.94,
              "cloudCover": 100,
              "dewPoint": 12.61,
              "evapotranspiration": 0.022,
              "freezingRainIntensity": 0,
              "humidity": 94.89,
              "iceAccumulation": 0,
              "iceAccumulationLwe": 0,
              "precipitationProbability": 85,
              "pressureSurfaceLevel": 983.7,
              "rainAccumulation": 6.99,
              "rainAccumulationLwe": 2.19,
              "rainIntensity": 2.19,
              "sleetAccumulation": 0,
              "sleetAccumulationLwe": 0,
              "sleetIntensity": 0,
              "snowAccumulation": 0,
              "snowAccumulationLwe": 0,
              "snowIntensity": 0,
              "temperature": 13.41,
              "temperatureApparent": 13.41,
              "visibility": 17.97,
              "weatherCode": 4200,
              "windDirection": 152.54,
              "windGust": 17.32,
              "windSpeed": 8.52
            }
          }
        ],
        "daily": [
          {
            "time": "2024-04-21T11:00:00Z",
            "values": {
              "cloudBaseAvg": 0.14,
              "cloudBaseMax": 1.1,
              "cloudBaseMin": 0,
              "cloudCeilingAvg": 0.04,
              "cloudCeilingMax": 0.99,
              "cloudCeilingMin": 0,
              "cloudCoverAvg": 5.48,
              "cloudCoverMax": 57,
              "cloudCoverMin": 0,
              "dewPointAvg": -4.87,
              "dewPointMax": -2.23,
              "dewPointMin": -8.38,
              "evapotranspirationAvg": 0.152,
              "evapotranspirationMax": 0.408,
              "evapotranspirationMin": 0.023,
              "evapotranspirationSum": 3.503,
              "freezingRainIntensityAvg": 0,
              "freezingRainIntensityMax": 0,
              "freezingRainIntensityMin": 0,
              "humidityAvg": 46.82,
              "humidityMax": 71.29,
              "humidityMin": 26,
              "iceAccumulationAvg": 0,
              "iceAccumulationLweAvg": 0,
              "iceAccumulationLweMax": 0,
              "iceAccumulationLweMin": 0,
              "iceAccumulationLweSum": 0,
              "iceAccumulationMax": 0,
              "iceAccumulationMin": 0,
              "iceAccumulationSum": 0,
              "moonriseTime": "2024-04-21T22:30:56Z",
              "moonsetTime": "2024-04-21T10:01:57Z",
              "precipitationProbabilityAvg": 0,
              "precipitationProbabilityMax": 0,
              "precipitationProbabilityMin": 0,
              "pressureSurfaceLevelAvg": 990.33,
              "pressureSurfaceLevelMax": 992.71,
              "pressureSurfaceLevelMin": 988.46,
              "rainAccumulationAvg": 0,
              "rainAccumulationLweAvg": 0,
              "rainAccumulationLweMax": 0,
              "rainAccumulationLweMin": 0,
              "rainAccumulationMax": 0,
              "rainAccumulationMin": 0,
              "rainAccumulationSum": 0,
              "rainIntensityAvg": 0,
              "rainIntensityMax": 0,
              "rainIntensityMin": 0,
              "sleetAccumulationAvg": 0,
              "sleetAccumulationLweAvg": 0,
              "sleetAccumulationLweMax": 0,
              "sleetAccumulationLweMin": 0,
              "sleetAccumulationLweSum": 0,
              "sleetAccumulationMax": 0,
              "sleetAccumulationMin": 0,
              "sleetIntensityAvg": 0,
              "sleetIntensityMax": 0,
              "sleetIntensityMin": 0,
              "snowAccumulationAvg": 0,
              "snowAccumulationLweAvg": 0,
              "snowAccumulationLweMax": 0,
              "snowAccumulationLweMin": 0,
              "snowAccumulationLweSum": 0,
              "snowAccumulationMax": 0,
              "snowAccumulationMin": 0,
              "snowAccumulationSum": 0,
              "snowDepthAvg": 0,
              "snowDepthMax": 0,
              "snowDepthMin": 0,
              "snowDepthSum": 0,
              "snowIntensityAvg": 0,
              "snowIntensityMax": 0,
              "snowIntensityMin": 0,
              "sunriseTime": "2024-04-21T10:58:00Z",
              "sunsetTime": "2024-04-22T00:31:00Z",
              "temperatureApparentAvg": 5.72,
              "temperatureApparentMax": 11.81,
              "temperatureApparentMin": -0.6,
              "temperatureAvg": 6.63,
              "temperatureMax": 11.81,
              "temperatureMin": 2.5,
              "uvHealthConcernAvg": 0,
              "uvHealthConcernMax": 1,
              "uvHealthConcernMin": 0,
              "uvIndexAvg": 1,
              "uvIndexMax": 4,
              "uvIndexMin": 0,
              "visibilityAvg": 16,
              "visibilityMax": 16,
              "visibilityMin": 16,
              "weatherCodeMax": 1000,
              "weatherCodeMin": 1000,
              "windDirectionAvg": 245.71,
              "windGustAvg": 5.89,
              "windGustMax": 8.63,
              "windGustMin": 1.75,
              "windSpeedAvg": 3.38,
              "windSpeedMax": 6.31,
              "windSpeedMin": 1.46
            }
          },
          {
            "time": "2024-04-22T11:00:00Z",
            "values": {
              "cloudBaseAvg": 3.14,
              "cloudBaseMax": 8.04,
              "cloudBaseMin": 0,
              "cloudCeilingAvg": 3.39,
              "cloudCeilingMax": 9.92,
              "cloudCeilingMin": 0,
              "cloudCoverAvg": 74.93,
              "cloudCoverMax": 100,
              "cloudCoverMin": 0,
              "dewPointAvg": -1.06,
              "dewPointMax": 1.78,
              "dewPointMin": -3.48,
              "evapotranspirationAvg": 0.213,
              "evapotranspirationMax": 0.487,
              "evapotranspirationMin": 0.043,
              "evapotranspirationSum": 4.899,
              "freezingRainIntensityAvg": 0,
              "freezingRainIntensityMax": 0,
              "freezingRainIntensityMin": 0,
              "humidityAvg": 41.61,
              "humidityMax": 70.5,
              "humidityMin": 24.26,
              "iceAccumulationAvg": 0,
              "iceAccumulationLweAvg": 0,
              "iceAccumulationLweMax": 0,
              "iceAccumulationLweMin": 0,
              "iceAccumulationLweSum": 0,
              "iceAccumulationMax": 0,
              "iceAccumulationMin": 0,
              "iceAccumulationSum": 0,
              "moonriseTime": "2024-04-22T23:32:10Z",
              "moonsetTime": "2024-04-22T10:18:33Z",
              "precipitationProbabilityAvg": 0,
              "precipitationProbabilityMax": 0,
              "precipitationProbabilityMin": 0,
              "pressureSurfaceLevelAvg": 984.82,
              "pressureSurfaceLevelMax": 989.53,
              "pressureSurfaceLevelMin": 978.72,
              "rainAccumulationAvg": 0,
              "rainAccumulationLweAvg": 0,
              "rainAccumulationLweMax": 0,
              "rainAccumulationLweMin": 0,
              "rainAccumulationMax": 0,
              "rainAccumulationMin": 0,
              "rainAccumulationSum": 0,
              "rainIntensityAvg": 0,
              "rainIntensityMax": 0,
              "rainIntensityMin": 0,
              "sleetAccumulationAvg": 0,
              "sleetAccumulationLweAvg": 0,
              "sleetAccumulationLweMax": 0,
              "sleetAccumulationLweMin": 0,
              "sleetAccumulationLweSum": 0,
              "sleetAccumulationMax": 0,
              "sleetAccumulationMin": 0,
              "sleetIntensityAvg": 0,
              "sleetIntensityMax": 0,
              "sleetIntensityMin": 0,
              "snowAccumulationAvg": 0,
              "snowAccumulationLweAvg": 0,
              "snowAccumulationLweMax": 0,
              "snowAccumulationLweMin": 0,
              "snowAccumulationLweSum": 0,
              "snowAccumulationMax": 0,
              "snowAccumulationMin": 0,
              "snowAccumulationSum": 0,
              "snowDepthAvg": 0,
              "snowDepthMax": 0,
              "snowDepthMin": 0,
              "snowDepthSum": 0,
              "snowIntensityAvg": 0,
              "snowIntensityMax": 0,
              "snowIntensityMin": 0,
              "sunriseTime": "2024-04-22T10:57:00Z",
              "sunsetTime": "2024-04-23T00:32:00Z",
              "temperatureApparentAvg": 12.61,
              "temperatureApparentMax": 17.87,
              "temperatureApparentMin": 0.72,
              "temperatureAvg": 12.73,
              "temperatureMax": 17.87,
              "temperatureMin": 3.49,
              "uvHealthConcernAvg": 0,
              "uvHealthConcernMax": 2,
              "uvHealthConcernMin": 0,
              "uvIndexAvg": 1,
              "uvIndexMax": 5,
              "uvIndexMin": 0,
              "visibilityAvg": 16,
              "visibilityMax": 16,
              "visibilityMin": 16,
              "weatherCodeMax": 1001,
              "weatherCodeMin": 1001,
              "windDirectionAvg": 210.32,
              "windGustAvg": 10.52,
              "windGustMax": 16.61,
              "windGustMin": 5.57,
              "windSpeedAvg": 6.1,
              "windSpeedMax": 7.91,
              "windSpeedMin": 2.95
            }
          },
          {
            "time": "2024-04-23T11:00:00Z",
            "values": {
              "cloudBaseAvg": 1.92,
              "cloudBaseMax": 4.79,
              "cloudBaseMin": 0.2,
              "cloudCeilingAvg": 2.31,
              "cloudCeilingMax": 8.59,
              "cloudCeilingMin": 0,
              "cloudCoverAvg": 83.73,
              "cloudCoverMax": 100,
              "cloudCoverMin": 19.53,
              "dewPointAvg": 5.26,
              "dewPointMax": 9.5,
              "dewPointMin": -0.56,
              "evapotranspirationAvg": 0.093,
              "evapotranspirationMax": 0.217,
              "evapotranspirationMin": 0.017,
              "evapotranspirationSum": 2.15,
              "freezingRainIntensityAvg": 0,
              "freezingRainIntensityMax": 0,
              "freezingRainIntensityMin": 0,
              "humidityAvg": 73.58,
              "humidityMax": 92.04,
              "humidityMin": 50.61,
              "iceAccumulationAvg": 0,
              "iceAccumulationLweAvg": 0,
              "iceAccumulationLweMax": 0,
              "iceAccumulationLweMin": 0,
              "iceAccumulationLweSum": 0,
              "iceAccumulationMax": 0,
              "iceAccumulationMin": 0,
              "iceAccumulationSum": 0,
              "moonriseTime": null,
              "moonsetTime": "2024-04-23T10:37:52Z",
              "precipitationProbabilityAvg": 3.5,
              "precipitationProbabilityMax": 50,
              "precipitationProbabilityMin": 0,
              "pressureSurfaceLevelAvg": 983.13,
              "pressureSurfaceLevelMax": 990.54,
              "pressureSurfaceLevelMin": 979.05,
              "rainAccumulationAvg": 0.16,
              "rainAccumulationLweAvg": 0.02,
              "rainAccumulationLweMax": 0.36,
              "rainAccumulationLweMin": 0,
              "rainAccumulationMax": 2.94,
              "rainAccumulationMin": 0,
              "rainAccumulationSum": 3.75,
              "rainIntensityAvg": 0.02,
              "rainIntensityMax": 0.36,
              "rainIntensityMin": 0,
              "sleetAccumulationAvg": 0,
              "sleetAccumulationLweAvg": 0,
              "sleetAccumulationLweMax": 0,
              "sleetAccumulationLweMin": 0,
              "sleetAccumulationLweSum": 0,
              "sleetAccumulationMax": 0,
              "sleetAccumulationMin": 0,
              "sleetIntensityAvg": 0,
              "sleetIntensityMax": 0,
              "sleetIntensityMin": 0,
              "snowAccumulationAvg": 0,
              "snowAccumulationLweAvg": 0,
              "snowAccumulationLweMax": 0,
              "snowAccumulationLweMin": 0,
              "snowAccumulationLweSum": 0,
              "snowAccumulationMax": 0,
              "snowAccumulationMin": 0,
              "snowAccumulationSum": 0,
              "snowDepthAvg": 0,
              "snowDepthMax": 0,
              "snowDepthMin": 0,
              "snowDepthSum": 0,
              "snowIntensityAvg": 0,
              "snowIntensityMax": 0,
              "snowIntensityMin": 0,
              "sunriseTime": "2024-04-23T10:56:00Z",
              "sunsetTime": "2024-04-24T00:33:00Z",
              "temperatureApparentAvg": 9.28,
              "temperatureApparentMax": 15.22,
              "temperatureApparentMin": -1.7,
              "temperatureAvg": 10.06,
              "temperatureMax": 15.22,
              "temperatureMin": 3.1,
              "uvHealthConcernAvg": 0,
              "uvHealthConcernMax": 1,
              "uvHealthConcernMin": 0,
              "uvIndexAvg": 1,
              "uvIndexMax": 4,
              "uvIndexMin": 0,
              "visibilityAvg": 15.95,
              "visibilityMax": 16,
              "visibilityMin": 14.78,
              "weatherCodeMax": 1001,
              "weatherCodeMin": 1001,
              "windDirectionAvg": 266.33,
              "windGustAvg": 11.92,
              "windGustMax": 18.03,
              "windGustMin": 6.19,
              "windSpeedAvg": 5.88,
              "windSpeedMax": 7.57,
              "windSpeedMin": 3.52
            }
          },
          {
            "time": "2024-04-24T11:00:00Z",
            "values": {
              "cloudBaseAvg": 1.77,
              "cloudBaseMax": 6.94,
              "cloudBaseMin": 0,
              "cloudCeilingAvg": 1.05,
              "cloudCeilingMax": 5.42,
              "cloudCeilingMin": 0,
              "cloudCoverAvg": 44.44,
              "cloudCoverMax": 99.74,
              "cloudCoverMin": 0,
              "dewPointAvg": -0.42,
              "dewPointMax": 1.68,
              "dewPointMin": -3.25,
              "evapotranspirationAvg": 0.122,
              "evapotranspirationMax": 0.364,
              "evapotranspirationMin": 0.018,
              "evapotranspirationSum": 2.803,
              "freezingRainIntensityAvg": 0,
              "freezingRainIntensityMax": 0,
              "freezingRainIntensityMin": 0,
              "humidityAvg": 69.89,
              "humidityMax": 84.28,
              "humidityMin": 56.22,
              "iceAccumulationAvg": 0,
              "iceAccumulationLweAvg": 0,
              "iceAccumulationLweMax": 0,
              "iceAccumulationLweMin": 0,
              "iceAccumulationLweSum": 0,
              "iceAccumulationMax": 0,
              "iceAccumulationMin": 0,
              "iceAccumulationSum": 0,
              "moonriseTime": "2024-04-24T00:35:46Z",
              "moonsetTime": "2024-04-24T11:00:19Z",
              "precipitationProbabilityAvg": 0,
              "precipitationProbabilityMax": 0,
              "precipitationProbabilityMin": 0,
              "pressureSurfaceLevelAvg": 996.38,
              "pressureSurfaceLevelMax": 998.33,
              "pressureSurfaceLevelMin": 992.13,
              "rainAccumulationAvg": 0,
              "rainAccumulationLweAvg": 0,
              "rainAccumulationLweMax": 0,
              "rainAccumulationLweMin": 0,
              "rainAccumulationMax": 0,
              "rainAccumulationMin": 0,
              "rainAccumulationSum": 0,
              "rainIntensityAvg": 0,
              "rainIntensityMax": 0,
              "rainIntensityMin": 0,
              "sleetAccumulationAvg": 0,
              "sleetAccumulationLweAvg": 0,
              "sleetAccumulationLweMax": 0,
              "sleetAccumulationLweMin": 0,
              "sleetAccumulationLweSum": 0,
              "sleetAccumulationMax": 0,
              "sleetAccumulationMin": 0,
              "sleetIntensityAvg": 0,
              "sleetIntensityMax": 0,
              "sleetIntensityMin": 0,
              "snowAccumulationAvg": 0,
              "snowAccumulationLweAvg": 0,
              "snowAccumulationLweMax": 0,
              "snowAccumulationLweMin": 0,
              "snowAccumulationLweSum": 0,
              "snowAccumulationMax": 0,
              "snowAccumulationMin": 0,
              "snowAccumulationSum": 0,
              "snowIntensityAvg": 0,
              "snowIntensityMax": 0,
              "snowIntensityMin": 0,
              "sunriseTime": "2024-04-24T10:55:00Z",
              "sunsetTime": "2024-04-25T00:34:00Z",
              "temperatureApparentAvg": 3.43,
              "temperatureApparentMax": 9.45,
              "temperatureApparentMin": -1.88,
              "temperatureAvg": 4.77,
              "temperatureMax": 9.45,
              "temperatureMin": 0.95,
              "uvHealthConcernAvg": 0,
              "uvHealthConcernMax": 2,
              "uvHealthConcernMin": 0,
              "uvIndexAvg": 1,
              "uvIndexMax": 5,
              "uvIndexMin": 0,
              "visibilityAvg": 17.5,
              "visibilityMax": 22.78,
              "visibilityMin": 16,
              "weatherCodeMax": 1001,
              "weatherCodeMin": 1000,
              "windDirectionAvg": 207.29,
              "windGustAvg": 7.2,
              "windGustMax": 12.25,
              "windGustMin": 3.03,
              "windSpeedAvg": 3.48,
              "windSpeedMax": 6.16,
              "windSpeedMin": 2.08
            }
          },
          {
            "time": "2024-04-25T11:00:00Z",
            "values": {
              "cloudBaseAvg": 1.86,
              "cloudBaseMax": 6.28,
              "cloudBaseMin": 0,
              "cloudCeilingAvg": 0.19,
              "cloudCeilingMax": 4.33,
              "cloudCeilingMin": 0,
              "cloudCoverAvg": 20.16,
              "cloudCoverMax": 92.38,
              "cloudCoverMin": 0,
              "dewPointAvg": 0.83,
              "dewPointMax": 3.46,
              "dewPointMin": -2.43,
              "evapotranspirationAvg": 0.173,
              "evapotranspirationMax": 0.458,
              "evapotranspirationMin": 0.027,
              "evapotranspirationSum": 3.99,
              "freezingRainIntensityAvg": 0,
              "freezingRainIntensityMax": 0,
              "freezingRainIntensityMin": 0,
              "humidityAvg": 60.31,
              "humidityMax": 83.09,
              "humidityMin": 40.77,
              "iceAccumulationAvg": 0,
              "iceAccumulationLweAvg": 0,
              "iceAccumulationLweMax": 0,
              "iceAccumulationLweMin": 0,
              "iceAccumulationLweSum": 0,
              "iceAccumulationMax": 0,
              "iceAccumulationMin": 0,
              "iceAccumulationSum": 0,
              "moonriseTime": "2024-04-25T01:41:55Z",
              "moonsetTime": "2024-04-25T11:25:50Z",
              "precipitationProbabilityAvg": 0,
              "precipitationProbabilityMax": 0,
              "precipitationProbabilityMin": 0,
              "pressureSurfaceLevelAvg": 995.61,
              "pressureSurfaceLevelMax": 999.16,
              "pressureSurfaceLevelMin": 992.34,
              "rainAccumulationAvg": 0,
              "rainAccumulationLweAvg": 0,
              "rainAccumulationLweMax": 0,
              "rainAccumulationLweMin": 0,
              "rainAccumulationMax": 0,
              "rainAccumulationMin": 0,
              "rainAccumulationSum": 0,
              "rainIntensityAvg": 0,
              "rainIntensityMax": 0,
              "rainIntensityMin": 0,
              "sleetAccumulationAvg": 0,
              "sleetAccumulationLweAvg": 0,
              "sleetAccumulationLweMax": 0,
              "sleetAccumulationLweMin": 0,
              "sleetAccumulationLweSum": 0,
              "sleetAccumulationMax": 0,
              "sleetAccumulationMin": 0,
              "sleetIntensityAvg": 0,
              "sleetIntensityMax": 0,
              "sleetIntensityMin": 0,
              "snowAccumulationAvg": 0,
              "snowAccumulationLweAvg": 0,
              "snowAccumulationLweMax": 0,
              "snowAccumulationLweMin": 0,
              "snowAccumulationLweSum": 0,
              "snowAccumulationMax": 0,
              "snowAccumulationMin": 0,
              "snowAccumulationSum": 0,
              "snowIntensityAvg": 0,
              "snowIntensityMax": 0,
              "snowIntensityMin": 0,
              "sunriseTime": "2024-04-25T10:53:00Z",
              "sunsetTime": "2024-04-26T00:35:00Z",
              "temperatureApparentAvg": 8.38,
              "temperatureApparentMax": 14.16,
              "temperatureApparentMin": -0.67,
              "temperatureAvg": 8.5,
              "temperatureMax": 14.16,
              "temperatureMin": 2.12,
              "uvHealthConcernAvg": 1,
              "uvHealthConcernMax": 2,
              "uvHealthConcernMin": 0,
              "uvIndexAvg": 1,
              "uvIndexMax": 6,
              "uvIndexMin": 0,
              "visibilityAvg": 24.11,
              "visibilityMax": 24.14,
              "visibilityMin": 23.46,
              "weatherCodeMax": 1100,
              "weatherCodeMin": 1100,
              "windDirectionAvg": 129.83,
              "windGustAvg": 7.06,
              "windGustMax": 11.9,
              "windGustMin": 3.18,
              "windSpeedAvg": 3.69,
              "windSpeedMax": 4.36,
              "windSpeedMin": 2.64
            }
          },
          {
            "time": "2024-04-26T11:00:00Z",
            "values": {
              "cloudBaseAvg": 0.94,
              "cloudBaseMax": 4.5,
              "cloudBaseMin": 0,
              "cloudCeilingAvg": 1.59,
              "cloudCeilingMax": 4.08,
              "cloudCeilingMin": 0,
              "cloudCoverAvg": 96.2,
              "cloudCoverMax": 100,
              "cloudCoverMin": 50.66,
              "dewPointAvg": 8.18,
              "dewPointMax": 13.48,
              "dewPointMin": 2.98,
              "evapotranspirationAvg": 0.094,
              "evapotranspirationMax": 0.255,
              "evapotranspirationMin": 0.021,
              "evapotranspirationSum": 1.221,
              "freezingRainIntensityAvg": 0,
              "freezingRainIntensityMax": 0,
              "freezingRainIntensityMin": 0,
              "humidityAvg": 77.12,
              "humidityMax": 96.05,
              "humidityMin": 58.66,
              "iceAccumulationAvg": 0,
              "iceAccumulationLweAvg": 0,
              "iceAccumulationLweMax": 0,
              "iceAccumulationLweMin": 0,
              "iceAccumulationLweSum": 0,
              "iceAccumulationMax": 0,
              "iceAccumulationMin": 0,
              "iceAccumulationSum": 0,
              "moonriseTime": "2024-04-26T02:50:00Z",
              "moonsetTime": "2024-04-26T12:00:24Z",
              "precipitationProbabilityAvg": 28.1,
              "precipitationProbabilityMax": 85,
              "precipitationProbabilityMin": 0,
              "pressureSurfaceLevelAvg": 987.64,
              "pressureSurfaceLevelMax": 992.06,
              "pressureSurfaceLevelMin": 982.89,
              "rainAccumulationAvg": 2.36,
              "rainAccumulationLweAvg": 0.32,
              "rainAccumulationLweMax": 2.19,
              "rainAccumulationLweMin": 0,
              "rainAccumulationMax": 6.99,
              "rainAccumulationMin": 0,
              "rainAccumulationSum": 30.62,
              "rainIntensityAvg": 0.81,
              "rainIntensityMax": 2.19,
              "rainIntensityMin": 0,
              "sleetAccumulationAvg": 0,
              "sleetAccumulationLweAvg": 0,
              "sleetAccumulationLweMax": 0,
              "sleetAccumulationLweMin": 0,
              "sleetAccumulationLweSum": 0,
              "sleetAccumulationMax": 0,
              "sleetAccumulationMin": 0,
              "sleetIntensityAvg": 0,
              "sleetIntensityMax": 0,
              "sleetIntensityMin": 0,
              "snowAccumulationAvg": 0,
              "snowAccumulationLweAvg": 0,
              "snowAccumulationLweMax": 0,
              "snowAccumulationLweMin": 0,
              "snowAccumulationLweSum": 0,
              "snowAccumulationMax": 0,
              "snowAccumulationMin": 0,
              "snowAccumulationSum": 0,
              "snowIntensityAvg": 0,
              "snowIntensityMax": 0,
              "snowIntensityMin": 0,
              "sunriseTime": "2024-04-26T10:52:00Z",
              "sunsetTime": "2024-04-27T00:36:00Z",
              "temperatureApparentAvg": 12.31,
              "temperatureApparentMax": 14.65,
              "temperatureApparentMin": 6.27,
              "temperatureAvg": 12.31,
              "temperatureMax": 14.65,
              "temperatureMin": 6.27,
              "uvHealthConcernAvg": 0,
              "uvHealthConcernMax": 0,
              "uvHealthConcernMin": 0,
              "uvIndexAvg": 0,
              "uvIndexMax": 0,
              "uvIndexMin": 0,
              "visibilityAvg": 19.87,
              "visibilityMax": 24.14,
              "visibilityMin": 5.64,
              "weatherCodeMax": 4200,
              "weatherCodeMin": 4200,
              "windDirectionAvg": 143.3,
              "windGustAvg": 14.35,
              "windGustMax": 17.75,
              "windGustMin": 11.67,
              "windSpeedAvg": 7.34,
              "windSpeedMax": 8.64,
              "windSpeedMin": 5.25
            }
          }
        ]
      },
      "location": {
        "lat": 41.60943603515625,
        "lon": -86.72462463378906,
        "name": "46350, La Porte, LaPorte County, Indiana, United States",
        "type": "postcode"
      }
    }
  }
}
