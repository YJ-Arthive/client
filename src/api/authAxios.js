import axios from 'axios';
import { getNewRefreshToken } from './refresh';

export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    baseURL: 'https://api.arthive.dev/api/v1/',
    headers: {
      Authorization: token,
    },
  });
  authAxios.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response.status === 401) {
        // 토큰이 만료된 경우 새로 받아오기
        const { accessToken, refreshToken } = await getNewRefreshToken();
        error.config.headers.Authorization = accessToken;
        localStorage.setItem('access', accessToken); // 새로 setItem
        localStorage.setItem('refreshToken', refreshToken);
        return (await axios.get(error.config.url, error.config)).data;
      }
    }
  );
  return authAxios;
};
