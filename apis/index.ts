import axios from "axios";

// async는 호출 시 자동으로 promise return 합니다.
export const getPoke = async (offset: number = 0) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
  );

  console.log("data in getPoke :::: ", data);

  return data;
};

export const specialUri = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/38");
  console.log("data :::: ", data);
};

export const getPokemonImgById = async (id = 1) => {
  const { data } = await axios.get(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  );

  return data;
};

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png pokemon image
