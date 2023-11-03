import axios from 'axios';

export const requestSignup = async (inputs) => {
  const result = await axios.post(
    'https://api.arthive.dev/api/v1/users',
    inputs
  );
  // return result.data;
  console.log(result);
};

export const requestLogin = async (email, password) => {
  const result = await axios.post('https://api.arthive.dev/api/v1/login', {
    email,
    password,
  });
  return result.data.data;
};

// export const requestLogout = async () => {
// }

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem('access');
  const refreshToken = localStorage.getItem('refresh');
  const result = await axios.post(
    'https://api.arthive.dev/api/v1/refresh',
    {
      refreshToken,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return result.data;
};

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
