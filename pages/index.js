import HomeSection from "@/components/HomeSection";
import SectionTwo from "@/components/SectionTwo";
import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
import Seo from "@/components/Seo";
export default function Home() {
  return (
    <>
      <Seo title="Dev Fort Commmunity" />
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
