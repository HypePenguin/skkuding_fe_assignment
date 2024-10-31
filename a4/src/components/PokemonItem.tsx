import { data, pokeInfo } from '../pokemon_data'

interface PokemonItemProps {
  index: number;
};

function PokemonItem({ index } : PokemonItemProps) {
  const pokeData : pokeInfo = data[index]

  return (
    <>
      
    </>
  )
}

export default PokemonItem;