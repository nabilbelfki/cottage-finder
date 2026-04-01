import React from 'react';
import styles from './styles.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Gallery from '@/components/Cottage/Gallery/Gallery';
import Information from '@/components/Cottage/Information/Information';
import Amenities from '@/components/Cottage/Amenities/Amenities';
import AboutHost from '@/components/Cottage/AboutHost/AboutHost';
import HouseRules from '@/components/Cottage/HouseRules/HouseRules';
import Quote from '@/components/Cottage/Quote/Quote';
import Location from '@/components/Cottage/Location/Location';
import Reviews from '@/components/Cottage/Reviews/Reviews';
import Spacer from '@/components/Spacer/Spacer';

export const metadata = {
    title: 'Comfy Cottage | Cottage Finder',
    description: 'Book your stay at the amazing Comfy Cottage',
};

export default function CottagePage() {
    return (
        <main>
            <Header />
            <Spacer height={100} width={100} />
            <Gallery />
            <Information />
            <Amenities />
            <div className={styles.twoColumnsContainer}>
                <div className={styles.column}>
                    <AboutHost />
                </div>
                <div className={styles.column}>
                    <HouseRules />
                </div>
            </div>
            <Quote />
            <Location />
            <Reviews />
            <Spacer height={100} width={100} />
            <Footer />
        </main>
    );
}
