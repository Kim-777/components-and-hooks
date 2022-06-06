import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import firebase from "../firebase";

function MyApp({ Component, pageProps }: AppProps) {
  // console.log("MyApp :::");
  // console.log("firebase ::: ", firebase);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ydg7e520nj"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
