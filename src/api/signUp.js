import axios from 'axios';

export const signUp = async (inputs) => {
  const result = await axios.post(
    'https://api.arthive.dev/api/v1/signup',
    inputs
  );
  return result.data;
};
