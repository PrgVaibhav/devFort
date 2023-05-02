import Head from "next/head";
import HomeSection from "@/components/HomeSection";
import SectionTwo from "@/components/SectionTwo";
import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Fort Community</title>
        <meta
          name="description"
          content="
          Dev Fort is a community where you will get access to all the resources for building projects, like Project Ideas, API resources, Images, Icons, and many more things.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devfort.tech" />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Welcome To DevFort" />
        <meta
          property="twitter:description"
          content="Dev Fort is the ultimate destination for web developers seeking the most comprehensive and up-to-date resources to enhance their productivity."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <main>
        <>
          <HomeSection />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </>
      </main>
    </>
  );
}
