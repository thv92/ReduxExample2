import axios from 'axios';

const API_KEY = '16ddac26f2fa99960ef8ee10b0e14555';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//Action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url); //GET request | returns a Promise
  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
