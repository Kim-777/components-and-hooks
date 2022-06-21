import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface PokemonProps {
  name: string;
  url: string;
}

const Pokemon: FC<PokemonProps> = ({ name, url }) => {
  const router = useRouter();

  const PokemonNumber = React.useMemo(() => url.split("/")[6], [url]);

  const handleGoToDetail = React.useCallback(() => {
    console.log("handleGoToDetail clicked ! ", PokemonNumber);
    router.push(`/pokemons/${PokemonNumber}`);
  }, [PokemonNumber, router]);

  return <div onClick={handleGoToDetail}>{name}</div>;
};

export default Pokemon;
