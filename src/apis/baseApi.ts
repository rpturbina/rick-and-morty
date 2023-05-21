export const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchBase = async (url: string, options: RequestInit = {}) => {
  const uri = API_BASE_URL + url;
  return fetch(uri, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  });
};
