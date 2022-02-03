import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Dogs: NextPage = () => {
  return (
    <>
      <Head>
        <title>dogs</title>
      </Head>
      <div>
        <p>dogs!</p>
        <p>wal!!!</p>
        <Image
          src="/images/among.jpeg"
          height={144}
          width={144}
          alt="amongus"
        />
      </div>
    </>
  );
};

export default Dogs;
