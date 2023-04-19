import Head from "next/head";
import HomePage from "./home";
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
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
