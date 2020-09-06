import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
});

const publicApikey = '90e17fde7775fb9540eda39cb8f4e158';

api.interceptors.request.use(config => {
  const newConfig = { ...config };

  if (newConfig.params) newConfig.params.apikey = publicApikey;
  else newConfig.params = { apikey: publicApikey };

  return newConfig;
});

export const fetchList = (
  url: string,
  limit = 10,
  offset = 0,
  search = '',
): Promise<AxiosResponse> =>
  api.get(url, {
    params: {
      limit,
      offset,
      ...(search && { nameStartsWith: search }),
    },
  });

export default api;
