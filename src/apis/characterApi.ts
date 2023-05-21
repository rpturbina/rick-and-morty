import { fetchBase } from '@/apis/baseApi';

const getCharacters = async (pageNumber = 1) => {
  const res = await fetchBase(`/character?page=${pageNumber}`, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('An error occurred while fetching the data');
  }

  return res.json();
};

export default {
  getCharacters,
};
