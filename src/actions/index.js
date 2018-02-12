import Axios from "axios";

const API_KEY = '202b26c03b8f576261de661dae8f0546';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FERCH_WEATHER';

export function fetchWeather (city) {

    const url = `${ROOT_URL}&q=${city},IL`; 
    const request = Axios.get(url);

    console.log("Request: ", request)

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}