import axios from 'axios';

export const requester = axios.create({
  baseURL: 'https://r0up0kec01.execute-api.ap-northeast-2.amazonaws.com/live',
  // baseURL: 'http://localhost:3000/live',
});
