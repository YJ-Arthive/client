import axios from 'axios';

export const signUp = async (inputs) => {
  const result = await axios.post(
    'https://api.arthive.dev/api/v1/users',
    inputs
  );
  // return result.data;
  console.log(result);
};
