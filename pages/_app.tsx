import React from "react";
import "../styles/globals.css";
import type { AppProps, AppContext, AppInitialProps } from "next/app";
import { Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/antd.less";
import { NextComponentType } from "next";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const qyeryClientRef = React.useRef<QueryClient>();

  if (!qyeryClientRef.current) {
    qyeryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={qyeryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  console.log(
    "나는 서버에서 찍히는게 맞을 거 같은데?? 왜냐면 여기 펑션은 서버에 있으니까 말이지!"
  );

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
