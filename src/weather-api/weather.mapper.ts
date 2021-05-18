import { CityStationWeather } from '../typings/weather.model';
import { identity } from 'rxjs';
import { Datum } from './weather.model';

function isCityWeatherContract(source: unknown): source is Datum {
  return typeof source === 'object' && source !== null && 'station' in source;
}

export const cityStationContractToDomainMapper = (source: unknown) =>
  isCityWeatherContract(source)
    ? identity<CityStationWeather>({
        airQualityIndex: source.aqi,
        cityName: source.city_name,
        cloudCoverage: source.clouds,
        countryCode: source.country_code,
        datetime: source.datetime,
        dewPoint: source.dewpt,
        directNormalSolarIrradiance: source.dni,
        estimatedSolarRadiation: source.solar_rad,
        feelLikeTemperature: source.app_temp,
        icon: source.weather,
        lastObservationTime: source.ob_time,
        latitude: source.lat,
        liquidEquivalentPrecipitationRate: source.precip,
        longitude: source.lon,
        partOfDay: source.pod,
        relativeHumidity: source.rh,
        seaLevelPressure: source.slp,
        snowfall: source.snow,
        stateCode: source.state_code,
        station: source.station,
        sunriseTime: source.sunrise,
        sunset: source.sunset,
        temperature: source.temp,
        timezone: source.timezone,
        uvIndex: source.uv,
        visibility: source.vis,
        windDirection: source.wind_cdir_full,
        windSpeed: source.wind_spd
      })
    : identity<CityStationWeather>({
        airQualityIndex: 0,
        cityName: 'Error Parsing source',
        cloudCoverage: 0,
        countryCode: 'Error Parsing source',
        datetime: 'Error Parsing source',
        dewPoint: 0,
        directNormalSolarIrradiance: 0,
        estimatedSolarRadiation: 0,
        feelLikeTemperature: 0,
        lastObservationTime: 'Error Parsing source',
        latitude: 0,
        liquidEquivalentPrecipitationRate: 0,
        longitude: 0,
        partOfDay: 'Error Parsing source',
        relativeHumidity: 0,
        seaLevelPressure: 0,
        snowfall: 0,
        stateCode: 'Error Parsing source',
        station: 'Error Parsing source',
        sunriseTime: 'Error Parsing source',
        sunset: 'Error Parsing source',
        temperature: 0,
        timezone: 'Error Parsing source',
        uvIndex: 0,
        visibility: 0,
        windDirection: 'Error Parsing source',
        windSpeed: 0
      });
