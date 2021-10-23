import axios from 'axios';

export const jokeURL = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/'
});

export const webhook = axios.create({
  baseURL: 'https://webhook.site/999e9ad7-10ee-40f8-b257-b329a9cb8023'
});
