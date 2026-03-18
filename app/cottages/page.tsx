import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Map from "@/components/Map/Map";
import VisitCities from "@/components/VisitCities/VisitCities";
import TopCottages from "@/components/TopCottages/TopCottages";
import CottageCarousel from "@/components/CottageCarousel/CottageCarousel";
import NewCottages from "@/components/NewCottages/NewCottages";
import Spacer from "@/components/Spacer/Spacer";

export default function CottagesPage() {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY || "";

    return (
        <main>
            <Header />
            <Spacer height={100} width={100} />
            <CottageCarousel />
            <TopCottages />
            <VisitCities />
            <Map apiKey={apiKey} />
            <NewCottages />
            <Footer />
        </main>
    );
}
