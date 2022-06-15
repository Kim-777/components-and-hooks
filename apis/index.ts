import axios from "axios";

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
