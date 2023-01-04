import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layouts/BasicLayout";
import utilStyles from "../styles/utils.module.css";
import { siteTitle } from "../components/Layouts/BasicLayout";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import ThemeToggleBtn from "../components/btns/ThemeToggleBtn";
import Pagination from "components/pagination";

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
  const [pageNow, setPageNow] = React.useState<number>(1);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ThemeToggleBtn />
      {/* <section className={utilStyles.headingMd}>
        <p>[넥스트 하는 kim-777]</p>
        <Link href="/animal/dogs">강아지 보러가기!</Link>
        <br />
        <Link href="/date">시간이랑 놀러가기!</Link>
        <br />
        <Link href="/map">지도 보러가기!</Link>
        <br />
        <Link href="/code">코드들 보러가기!</Link>
        <br />
        <Link href="/admin">어드민 보러가기!</Link>
        <br />
        <Link href="/pokemons">포켓몬 보러가기!</Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      <section>
        <Pagination
          onChangePage={setPageNow}
          pageNow={pageNow}
          itemsLength={55}
          itemsPerPage={10}
          paginationLength={5}
        />
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
