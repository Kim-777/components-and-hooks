import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "../styles/antd.less";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  console.log("app ::::::::");
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ydg7e520nj"
      />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
