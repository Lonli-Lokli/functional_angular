export interface CityStationWeather {
  relativeHumidity: number;
  partOfDay: string;
  longitude: number;
  timezone: string;
  lastObservationTime: string;
  countryCode: string;
  cloudCoverage: number;
  estimatedSolarRadiation: number;
  stateCode: string;
  cityName: string;
  windSpeed: number;
  windDirection: string;
  seaLevelPressure: number;
  visibility: number;
  sunset: string;
  directNormalSolarIrradiance: number;
  dewPoint: number;
  snowfall: number;
  uvIndex: number;
  liquidEquivalentPrecipitationRate: number;
  sunriseTime: string;
  airQualityIndex: number;
  latitude: number;
  icon?: WeatherIcon;
  datetime: string;
  temperature: number;
  station: string;
  feelLikeTemperature: number;
}

export interface WeatherIcon {
  icon: string;
  code: number;
  description: string;
}
