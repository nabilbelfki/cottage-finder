import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import GetInTouchHero from "@/components/GetInTouch/GetInTouchHero/GetInTouchHero";
import MessageUs from "@/components/GetInTouch/MessageUs/MessageUs";
import OurLocation from "@/components/GetInTouch/OurLocation/OurLocation";

export default function GetInTouchPage() {
    return (
        <main>
            <Header />
            <GetInTouchHero />
            <MessageUs />
            <OurLocation />
            <Footer />
        </main>
    );
}
