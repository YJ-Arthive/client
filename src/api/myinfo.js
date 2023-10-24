import axios from 'axios';
import { getNewRefreshToken } from './refresh';

export const getMyInfo = async () => {
  const access = localStorage.getItem('access');
  try {
    const result = axios.get('https://api.arthive.dev/api/v1/myinfo', {
      headers: {
        Authorization: access,
      },
    });
    return result.data;
  } catch (e) {
    if (e.response.statue == 401) {
      // 토큰이 만료된 경우
      const { accessToken, refreshToken } = await getNewRefreshToken();
      e.config.headers.Authorization = accessToken;
      localStorage.setItem('access', accessToken); // 새로 setItem
      localStorage.setItem('refreshToken', refreshToken);
      return (await axios.get(e.config.url, e.config)).data;
    }
  }
};
