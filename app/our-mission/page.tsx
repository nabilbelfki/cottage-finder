import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WeLoveOutdoors from "@/components/OurMission/WeLoveOutdoors/WeLoveOutdoors";
import WhatYouveShared from "@/components/OurMission/WhatYouveShared/WhatYouveShared";
import Collage from "@/components/OurMission/Collage/Collage";
import OurDream from "@/components/OurMission/OurDream/OurDream";
import CoreValues from "@/components/OurMission/CoreValues/CoreValues";
import OurStoryBegan from "@/components/OurMission/OurStoryBegan/OurStoryBegan";

export const metadata = {
    title: "Our Mission - Cottage Finder",
    description: "Learn about the mission and values behind Cottage Finder.",
};

export default function OurMissionPage() {
    return (
        <main>
            <Header />
            <WeLoveOutdoors />
            <WhatYouveShared />
            <Collage />
            <OurDream />
            <CoreValues />
            <OurStoryBegan />
            <Footer />
        </main>
    );
}
