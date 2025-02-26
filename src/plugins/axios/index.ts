import Axios from './Axios';

const myAxios = new Axios({
  baseURL: '/api',
  timeout: 10000,
});

export default myAxios;
