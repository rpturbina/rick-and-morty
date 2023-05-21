import useSWRInfinite from 'swr/infinite';

import characterApi from '@/apis/characterApi';

const useCharacters = (pageNumber: number) => {
  const { data, mutate, size, setSize, isLoading, isValidating, error } =
    useSWRInfinite(
      (pageNumber) => `/character?page=${pageNumber}`,
      () => characterApi.getCharacters(pageNumber)
    );

  return {
    data,
    mutate,
    size,
    setSize,
    isLoading,
    isValidating,
    error,
  };
};

export default useCharacters;
