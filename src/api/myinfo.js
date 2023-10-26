import { getAuthAxios } from './authAxios';

export const getMyInfo = async () => {
  const access = localStorage.getItem('access');
  const authAxios = getAuthAxios(access);
  const result = await authAxios.get('/mypage');
  return result.data;
};
