import { getAuthAxios } from './authAxios';

export const getMyInfo = async () => {
  const accessKey = localStorage.getItem('access');
  const result = await getAuthAxios(accessKey).get('/mypage');
  return result.data;
};
