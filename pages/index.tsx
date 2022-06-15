import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layouts/layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { siteTitle } from "../components/Layouts/layout";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Script from "next/script";
import axios from "axios";

export type PostData = {
  id: any;
  date: any;
  title: string;
  contentHtml?: any;
};

type HomeProps = {
  allPostsData: PostData[];
};

const Home: NextPage<HomeProps> = ({ allPostsData }) => {
  console.log("index ::::: ");

  React.useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => {
        console.log("response :::: ", response);
      });
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[넥스트 하는 kim-777]</p>
        <Link href="/animal/dogs">
          <a>강아지 보러가기!</a>
        </Link>
        <br />
        <Link href="/date">
          <a>시간이랑 놀러가기!</a>
        </Link>
        <br />
        <Link href="/map">
          <a>지도 보러가기!</a>
        </Link>
        <br />
        <Link href="/code">
          <a>코드들 보러가기!</a>
        </Link>
        <br />
        <Link href="/admin">
          <a>어드민 보러가기!</a>
        </Link>
        <Link href="/pokemons">
          <a>포켓몬 보러가기!</a>
        </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
