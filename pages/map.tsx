import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import Layout from "../components/Layouts/layout";

const MapPage: NextPage = () => {
  return (
    <>
      <Script id="show-banner" strategy="lazyOnload">
        {`const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };
      new naver.maps.Map("map", mapOptions);
      console.log('maps ::: ', naver.maps.Map)
      `}
      </Script>
      <Layout>
        <div id="map" style={{ width: "100%", height: "400px" }}></div>
      </Layout>
    </>
  );
};

export default MapPage;
