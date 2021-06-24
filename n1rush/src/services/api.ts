import axios from 'axios';

export const myApi = axios.create({
  baseURL: 'http://localhost:3333/'
});

export const api = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
  headers: {
    "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
	  "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
	  "useQueryString": process.env.USE_QUERY_STRING
  }
})