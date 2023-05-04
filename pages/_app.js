import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import LoadingScreen from "@/components/Loading";
import Seo from "@/components/Seo";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Seo title="Dev Fort Community" />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      )}
    </>
  );
}
