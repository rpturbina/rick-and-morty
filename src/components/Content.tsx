import Button from '@/components/Button';
import CharacterList from '@/components/CharacterList';
import CharacterListSkeleton from '@/components/CharacterListSkeleton';
import Layout from '@/components/Layout';
import Spinner from '@/components/Spinner';

import useCharacters from '@/hooks/useCharacters';

const Content = () => {
  const { isLoading, characters, loadMoreCharacters } = useCharacters();

  const handleLoadMore = () => {
    void loadMoreCharacters();
  };

  return (
    <Layout>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {isLoading && characters.length === 0 ? (
          <CharacterListSkeleton />
        ) : (
          <CharacterList characters={characters} />
        )}
      </div>
      <div className="flex items-center justify-center">
        <Button
          onClick={handleLoadMore}
          variant={'link'}
          className="mx-auto mt-6 inline-flex gap-2 text-xl"
          disabled={isLoading}
        >
          Load more {isLoading && <Spinner />}
        </Button>
      </div>
    </Layout>
  );
};

export default Content;
