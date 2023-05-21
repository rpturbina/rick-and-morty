import { mutate } from 'swr';

import * as React from 'react';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Layout from '@/components/Layout';

import characterApi from '@/apis/characterApi';
import useCharacters from '@/hooks/useCharacters';

const PAGE_SIZE = 42;

const Content = () => {
  const [page, setPage] = React.useState(1);
  // const [characters, setCharacters] = React.useState<Character[]>([]);
  // const [error, setError] = React.useState(null);
  // const [isLoading, setIsLoading] = React.useState(false);

  const { data, isLoading, error, isValidating, mutate, setSize, size } =
    useCharacters(page);

  // React.useEffect(() => {
  //   let active = true;
  //   const fetchCharacters = async (page: number) => {
  //     setIsLoading(true);
  //     try {
  //       const response = await characterApi.getCharacters(page);
  //       if (!active) return;
  //       setCharacters((characters) => [...characters, ...response.results]);
  //       setIsLoading(false);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         setError(error);
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchCharacters(page);

  //   return () => {
  //     active = false;
  //   };
  // }, [page]);

  const characters = data ? [].concat(...data) : [];

  console.log(data);
  console.log(characters);

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  const handleLoadMore = () => {
    // setPage((page) => page + 1);
    // const res = await characterApi.getCharacters(page + 1);
    // setCharacters([...charactersData, ...res.results]);
    setSize(size + 1);
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <Layout>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {characters[0]?.results?.map((character: Character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <Button
        disabled={isLoadingMore || isReachingEnd}
        onClick={handleLoadMore}
        variant={'link'}
        className="mx-auto mt-6 block text-xl"
      >
        Load more
      </Button>
    </Layout>
  );
};

export default Content;
