import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layouts/BasicLayout";

const Cats: NextPage = () => {
  console.log("cat comp!!!!");
  return (
    <Layout>
      <Head>
        <title>cats</title>
      </Head>
      <div>
        <p>Cats!!</p>
        <Link href="/animal/dogs">
          <a>dog page!</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Cats;
