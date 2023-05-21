// const characters = [
//   {
//     id: 21,
//     name: 'Aqua Morty',
//     status: 'unknown',
//     species: 'Humanoid',
//     type: 'Fish-Person',
//     gender: 'Male',
//     origin: {
//       name: 'unknown',
//       url: '',
//     },
//     location: {
//       name: 'Citadel of Ricks',
//       url: 'https://rickandmortyapi.com/api/location/3',
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
//     episode: [
//       'https://rickandmortyapi.com/api/episode/10',
//       'https://rickandmortyapi.com/api/episode/22',
//     ],
//     url: 'https://rickandmortyapi.com/api/character/21',
//     created: '2017-11-04T22:39:48.055Z',
//   },
// ];

type CardProps = {
  character: Character;
};

const Card = ({ character }: CardProps) => {
  return (
    <div className="w-full max-w-xs rounded-md bg-slate-800 p-4 ">
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
