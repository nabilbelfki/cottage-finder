"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const carouselCottages = [
    {
        id: 1,
        title: "Jim Jungle Getaway",
        location: "Bangkok, Thailand",
        image: "cottage-carousel/cottage-1.jpg",
        avatar: "top-cottages/jim.avif",
        beds: 2,
        baths: 1,
        rating: 4.3,
        price: 321
    },
    {
        id: 2,
        title: "Duncan's Dreamy Cottage",
        location: "Orlando, Florida",
        image: "cottage-carousel/cottage-2.jpg",
        avatar: "top-cottages/duncan.avif",
        beds: 3,
        baths: 2,
        rating: 4.8,
        price: 250
    },
    {
        id: 3,
        title: "Karen's Cozy Cottage",
        location: "Denver, Colorado",
        image: "cottage-carousel/cottage-3.jpg",
        avatar: "top-cottages/karen.avif",
        beds: 1,
        baths: 1,
        rating: 4.9,
        price: 180
    },
    {
        id: 4,
        title: "Martina's Modern Cottage",
        location: "Austin, Texas",
        image: "cottage-carousel/cottage-4.jpg",
        avatar: "top-cottages/martina.avif",
        beds: 4,
        baths: 3,
        rating: 5.0,
        price: 450
    },
    {
        id: 5,
        title: "Eugene's Elegant Cottage",
        location: "Atlanta, Georgia",
        image: "cottage-carousel/cottage-5.jpg",
        avatar: "top-cottages/eugene.avif",
        beds: 2,
        baths: 2,
        rating: 4.7,
        price: 210
    },
    {
        id: 6,
        title: "Jamal's Jazzy Cottage",
        location: "Miami, Florida",
        image: "cottage-carousel/cottage-6.jpg",
        avatar: "top-cottages/jamal.jpg",
        beds: 3,
        baths: 2,
        rating: 4.9,
        price: 320
    },
    {
        id: 7,
        title: "Cindy's Cabin Cottage",
        location: "Washington, USA",
        image: "cottage-carousel/cottage-7.jpg",
        avatar: "top-cottages/cindy.jpg",
        beds: 2,
        baths: 1,
        rating: 4.6,
        price: 260
    }
];

export default function CottageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselCottages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const getOffsetValue = (index: number) => {
        const offset = (index - currentIndex + carouselCottages.length) % carouselCottages.length;
        if (offset > carouselCottages.length / 2) {
            return offset - carouselCottages.length;
        }
        return offset;
    };

    const handleDragEnd = (event: any, info: any) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -50 || velocity < -500) {
            setCurrentIndex((prev) => (prev + 1) % carouselCottages.length);
        } else if (offset > 50 || velocity > 500) {
            setCurrentIndex((prev) => (prev - 1 + carouselCottages.length) % carouselCottages.length);
        }
    };

    return (
        <section className={styles.carouselSection}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Explore New Destinations</h2>
                <p className={styles.subHeading}>Find some of the coolest destinations you've never traveled before</p>
            </div>

            <div
                className={styles.carouselContainer}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {carouselCottages.map((cottage, index) => {
                    const offset = getOffsetValue(index);
                    const isActive = offset === 0;

                    let zIndex = 5 - Math.abs(offset);
                    let scale = 1 - Math.abs(offset) * 0.15;
                    let xOffset = offset * 40; // 40% offset per step

                    return (
                        <motion.div
                            key={cottage.id}
                            className={styles.cardWrapper}
                            initial={false}
                            animate={{
                                zIndex: zIndex,
                                scale: scale,
                                x: `${xOffset}%`,
                                filter: isActive ? "brightness(1) blur(0px)" : "brightness(0.7) blur(0.5px)"
                            }}
                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                            onClick={() => setCurrentIndex(index)}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.05}
                            onDragEnd={handleDragEnd}
                            style={{ cursor: isActive ? 'grab' : 'pointer' }}
                        >
                            <div className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={`/images/${cottage.image}`}
                                        alt={cottage.title}
                                        fill
                                        priority
                                        className={styles.cottageImage}
                                    />
                                </div>
                                <div className={`${styles.cardOverlay} ${isActive ? styles.overlayActive : styles.overlayHidden}`}>
                                    <div className={styles.overlayContent}>
                                        <div className={styles.detailsLeft}>
                                            <Image
                                                src={`/images/${cottage.avatar}`}
                                                alt="Host"
                                                width={48}
                                                height={48}
                                                priority
                                                className={styles.avatar}
                                            />
                                            <div className={styles.textDetails}>
                                                <h3 className={styles.title}>{cottage.title}</h3>
                                                <div className={styles.locationRow}>
                                                    <span className={styles.location}>{cottage.location}</span>
                                                    <div className={styles.badges}>
                                                        <span className={styles.badge}>{cottage.beds} <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M20 9.5V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V9.5M4 9.5C2.89543 9.5 2 10.3954 2 11.5V17C2 17.5523 2.44772 18 3 18H21C21.5523 18 22 17.5523 22 17V11.5C22 10.3954 21.1046 9.5 20 9.5M4 9.5H20M6 14H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> {cottage.baths} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10C4 6.68629 6.68629 4 10 4V4C13.3137 4 16 6.68629 16 10V14C16 17.3137 13.3137 20 10 20V20C6.68629 20 4 17.3137 4 14V10Z" stroke="white" strokeWidth="2" /><path d="M16 10H20C21.1046 10 22 10.8954 22 12V14C22 15.1046 21.1046 16 20 16H16" stroke="white" strokeWidth="2" /></svg></span>
                                                        <span className={styles.badgeRating}>{cottage.rating} <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.priceWrap}>
                                            <span className={styles.priceText}>${cottage.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
