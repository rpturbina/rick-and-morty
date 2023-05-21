import * as React from 'react';

import characterApi from '@/apis/characterApi';

const useCharacters = () => {
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    let active = true;
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const res = await characterApi.getCharacters(page);
        if (active) {
          setCharacters((prev) => [...prev, ...res.results]);
          setPage((prev) => prev + 1);
        }
      } catch (error) {
        if (error instanceof Error) setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchCharacters();
    return () => {
      active = false;
    };
  }, []);

  const loadMoreCharacters = async () => {
    setIsLoading(true);
    try {
      const res = await characterApi.getCharacters(page);
      setCharacters((prev) => [...prev, ...res.results]);
      setPage((prev) => prev + 1);
    } catch (error) {
      if (error instanceof Error) setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    characters,
    loadMoreCharacters,
  };
};

export default useCharacters;
