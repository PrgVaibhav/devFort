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
