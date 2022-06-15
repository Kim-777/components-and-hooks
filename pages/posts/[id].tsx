import Layout from "../../components/Layouts/BasicLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import type { PostData } from "../index";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import postStyles from "./post.module.less";

type GetStaticProps = {
  params: {
    id: string;
  };
};

type PostProps = {
  postData: PostData;
};

export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
