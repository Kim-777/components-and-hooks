import React from "react";
import Pokemon from "../../components/Pokemon";
import { QueryClient } from "react-query";
import { getPoke } from "../../apis/index";
import { dehydrate } from "react-query";

const Pokemons = () => {
  return <Pokemon />;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery("poke", () => getPoke(), {
    staleTime: 1000,
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Pokemons;
