import Link from "next/link";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { PokemonNames } from "../constants";

import styles from "./Pokemon.module.less";
import Image from "next/image";

const cx = classNames.bind(styles);
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

  return (
    <div className={cx({ wrapper: true })} onClick={handleGoToDetail}>
      {name} {PokemonNames[name]?.ko}
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonNumber}.png`}
        alt="포켓몬 이미지"
        width={100}
        height={100}
        layout="intrinsic"
      />
    </div>
  );
};

export default Pokemon;
