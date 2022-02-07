import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { siteTitle } from "../components/layout";
import Link from "next/link";

const Home: NextPage = () => {
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
      </section>
    </Layout>
  );
};

export default Home;
