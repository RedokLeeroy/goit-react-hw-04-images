import axios from 'axios';
axios.defaults.baseURL = `https://pixabay.com/api/`;
const API_KEY = '28342095-bdb3373d4270e11a929e663ef';
export const Service = (page, queue) => {
  return axios.get('', {
    params: {
      key: API_KEY,
      q: queue,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
};
