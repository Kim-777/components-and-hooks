import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/antd.less";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  console.log("app ::::::::");
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
