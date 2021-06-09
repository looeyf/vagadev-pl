import axios from 'axios';

export const myApi = axios.create({
  baseURL: 'http://localhost:3333/'
});

export const api = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
  headers: {
    "x-rapidapi-key": "23ad155296msh2dc944151ff3e8dp15e1bfjsn8fc9bbbd1c30",
	  "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
	  "useQueryString": true
  }
})