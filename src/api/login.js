import axios from 'axios';

export const login = async (email, password) => {
  const result = await axios.post('https://api.arthive.dev/api/v1/login', {
    email,
    password,
  });
  return result.data.data;
};
