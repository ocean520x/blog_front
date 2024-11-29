import Axios from './Axios';

const myAxios = new Axios({
  baseURL: '/api',
  timeout: 1000,
});

export default myAxios;
