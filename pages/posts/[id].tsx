import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import type { PostData } from "../index";

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
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
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
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
