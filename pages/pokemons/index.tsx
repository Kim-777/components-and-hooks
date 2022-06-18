import React from "react";
import Pokemon from "../../components/Pokemon";
import { QueryClient, useInfiniteQuery } from "react-query";
import { getPoke } from "../../apis/index";
import { dehydrate } from "react-query";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Pokemons = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "poke",
    ({ pageParam = "" }) => getPoke(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const lastOffset =
          lastPage.results[lastPage.results.length - 1].url.split("/")[6];

        if (lastOffset > 1118) {
          return undefined;
        }

        return lastOffset;
      },
      staleTime: 1000,
    }
  );

  const loadMoreButtonRef = React.useRef<HTMLDivElement | undefined>();

  useIntersectionObserver({
    root: null,
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <>
      <div>hui</div>
      <ul>
        {(data as any).pages.map((page: any) =>
          page.results.map((poke: any) => (
            <li key={poke.name} style={{ padding: "20px", fontWeight: "bold" }}>
              {poke.name}
            </li>
          ))
        )}
      </ul>
      <button onClick={() => fetchNextPage()}>Load More</button>
      <div ref={loadMoreButtonRef as any} />
    </>
  );
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
