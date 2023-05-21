type CardProps = {
  character: Character;
};

const Card = ({ character }: CardProps) => {
  return (
    <div className="w-full max-w-xs rounded-md bg-slate-800 p-4">
      <div>
        <img
          src={character.image}
          alt={character.name}
          className="rounded-sm"
        />
      </div>
      <h3 className="mt-4 text-xl">{character.name}</h3>
      <p className="font-thin tracking-wider">{character.species}</p>
    </div>
  );
};

export default Card;
