import React from "react";
import { useRouter } from "next/router";
import { useQueries, useQuery } from "react-query";
import { getPokemonImgById } from "../../apis";

const Detail = () => {
  const router = useRouter();
  // const { data } = useQuery(["pokemon", router.query.id], () => );

  return <div>detail</div>;
};

export default Detail;
