import React from "react";
import Pokemon from "../../components/Pokemon";
import { QueryClient, useInfiniteQuery, useQueries } from "react-query";
import { getPoke } from "../../apis/index";
import { dehydrate } from "react-query";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useTest from "../../hooks/testhook";
import Link from "next/link";

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

  const [num, setNum] = React.useState<number>(0);
  const [test, setTest] = useTest(num);

  const loadMoreButtonRef = React.useRef<HTMLDivElement | undefined>();

  useIntersectionObserver({
    root: null,
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  // console.log("number in test :::: ", test);

  return (
    <>
      <Link href="/pokemons/1">
        <a>고투 디테일</a>
      </Link>
      <ul>
        {(data as any).pages.map((page: any) =>
          page.results.map((poke: any) => (
            <li key={poke.name} style={{ padding: "20px", fontWeight: "bold" }}>
              {poke.name}
            </li>
          ))
        )}
      </ul>
      <button
        onClick={() => {
          setNum((prev) => prev + 1);
          fetchNextPage();
        }}
      >
        Load More
      </button>
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
