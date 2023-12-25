import { DateTime } from "luxon";

const API_KEY = '48becce7d7ae4a53a00edd6977633bea';
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType,searchParams) =>{
    const url = new URL(BASE_URL +'/'+ infoType)

    url.search = new URLSearchParams({...searchParams,appid:API_KEY})


    return fetch(url).then((res) => res.json())
};

const formatForcastWeather = (data) => {
    let { city, list } = data;
    const timezone = data.city.timezone;
  
    // Extract daily forecast data
    const daily = list
      .filter((d, index) => index % 8 === 0) // Get data every 24 hours (index divisible by 8)
      .slice(0, 5) // Take the next 5 days
      .map((d) => {
        return {
          title: formateToLocalTime(d.dt, timezone, "ccc"),
          temp: d.main.temp,
          icon: d.weather[0].icon,
        };
      });
  
    // Extract hourly forecast data
    const hourly = list
      .slice(1, 6) 
      .map((d) => {
        return {
          title: formateToLocalTime(d.dt, timezone, "hh:mm a"),
          temp: d.main.temp,
          icon: d.weather[0].icon,
        };
      });
  
    return { timezone, daily, hourly };
  }

const formateCurrentWeather = (data) =>{
    const {
        coord:{lat,lon},
        main:{temp,feels_like,temp_min,temp_max,humidity},name,dt,
        sys:{country,sunrise,sunset},weather,
        wind:{speed}
    } = data

    const {main:details,icon} = weather[0]
    return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed}
}

const getFormatedWeatherData = async (searchParams)=>{
    const formatedCurrentWeather = await getWeatherData('weather',searchParams).then(formateCurrentWeather)

    const {lat,lon} = formatedCurrentWeather

    const formatedForecastWeather = await getWeatherData('forecast',{
        lat,lon,exclude:'current,minutely,alerts',units:searchParams.units,
    }).then(formatForcastWeather)
  
    return {...formatedCurrentWeather,...formatedForecastWeather}
}

const formateToLocalTime = (secs,zone,format="cccc,dd LLL yyyy' | Local time: 'hh:mm a")=>DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const iconUrlFromCode = (code) =>`http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormatedWeatherData;
export {formateToLocalTime,iconUrlFromCode}