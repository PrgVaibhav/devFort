import Head from "next/head";

const Seo = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={
            description ??
            "Dev Fort is a community where you will get access to all the resources for building projects, like Project Ideas, API resources, Images, Icons, and many more things."
          }
        />
        <meta name="author" content="Dev Fort" />
        <meta name="keywords" content="Dev Fort, DevFort, DevFort.tech" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            description ??
            "Dev Fort is a community where you will get access to all the resources for building projects, like Project Ideas, API resources, Images, Icons, and many more things."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devfort.tech" />
        <meta property="og:image" content="/devfort.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
    </>
  );
};

export default Seo;
