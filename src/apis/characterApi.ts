import { fetchBase } from '@/apis/baseApi';

interface CharacterAPIResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

const getCharacters = async (pageNumber = 1): Promise<CharacterAPIResponse> => {
  const res = await fetchBase(`/character?page=${pageNumber}`, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('An error occurred while fetching the data');
  }

  const data = (await res.json()) as CharacterAPIResponse;

  return data;
};

export default {
  getCharacters,
};
