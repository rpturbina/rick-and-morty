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
  const [isLoading, setIsLoading] = React.useState(false);
  const [characters, setCharacters] = React.useState([]);

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
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacters();
    return () => {
      active = false;
    };
  }, []);

  const handleLoadMore = () => {
    const fetchMoreCharacters = async () => {
      setIsLoading(true);
      try {
        const res = await characterApi.getCharacters(page);
        setCharacters((prev) => [...prev, ...res.results]);
        setPage((prev) => prev + 1);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoreCharacters();
  };

  return (
    <Layout>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {characters.map((character: Character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <Button
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
