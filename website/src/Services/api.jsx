import axios from 'axios';

const {url, prefix, dev} = {
  url: 'https://api.vincenzofdg.com.br',
  dev: 'http://localhost:3000',
  prefix: "/main"
}

const api = axios.create({
  // baseURL: url + prefix,
  baseURL: dev + prefix,
});

export default api;