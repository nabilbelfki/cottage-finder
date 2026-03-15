import Hero from "@/components/Hero/Hero";
import Cottages from "@/components/Cottages/Cottages";
import PeopleSayAboutUs from "@/components/PeopleSayAboutUs/PeopleSayAboutUs";
import Amenities from "@/components/Amenities/Amenities";
import WeLoveNature from "@/components/WeLoveNature/WeLoveNature";
import CottageAndBookedCounters from "@/components/CottageAndBookedCounters/CottageAndBookedCounters";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cottages />
      <PeopleSayAboutUs />
      <Amenities />
      <WeLoveNature />
      <CottageAndBookedCounters />
      <GetInTouch />
      <Footer />
    </main>
  );
}
