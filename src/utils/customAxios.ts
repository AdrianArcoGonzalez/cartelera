import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '6885aad55039a5fc571027565e70250e',
    language: 'es-ES',
  },
});

export default movieDB;
