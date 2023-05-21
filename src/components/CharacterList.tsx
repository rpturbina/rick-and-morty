import Card from '@/components/Card';

type CharacterListProps = {
  characters: Character[];
};

const CharacterList = ({ characters }: CharacterListProps) => {
  if (characters.length === 0) {
    return <h2>Character not found {':('}</h2>;
  }

  return (
    <>
      {characters.map((character: Character) => (
        <Card key={character.id} character={character} />
      ))}
    </>
  );
};

export default CharacterList;
