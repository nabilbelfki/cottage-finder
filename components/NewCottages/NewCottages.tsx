"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.css";

// 18 cottages split into 3 pages of 6
const newCottages = [
    { id: 1, title: "Cottage of England", location: "Evergreen, Wales", price: 35, image: "new-cottages/cottage-1.jpg" },
    { id: 2, title: "Oxborough Cottage", location: "Georgefield, Ohio", price: 137, image: "new-cottages/cottage-2.jpg" },
    { id: 3, title: "Yellowstone Cottage", location: "Yellowstone, California", price: 88, image: "new-cottages/cottage-3.jpg" },
    { id: 4, title: "Talahasi Tent", location: "Hillsborough, New Hampshire", price: 128, image: "new-cottages/cottage-4.jpg" },
    { id: 5, title: "Comfy Cottage", location: "Sunnydale, California", price: 128, image: "new-cottages/cottage-5.jpg" },
    { id: 6, title: "Rustic Retreat", location: "Boulder, Colorado", price: 128, image: "new-cottages/cottage-6.jpg" },
    { id: 7, title: "Lakeview Cabin", location: "Tahoe, Nevada", price: 215, image: "new-cottages/cottage-7.jpg" },
    { id: 8, title: "Mountain High", location: "Aspen, Colorado", price: 350, image: "new-cottages/cottage-8.jpg" },
    { id: 9, title: "Pine Needles Hideout", location: "Portland, Oregon", price: 95, image: "new-cottages/cottage-9.jpg" },
    { id: 10, title: "Seaside Sanctuary", location: "Malibu, California", price: 450, image: "new-cottages/cottage-10.jpg" },
    { id: 11, title: "River Run", location: "Bend, Oregon", price: 175, image: "new-cottages/cottage-11.jpg" },
    { id: 12, title: "Desert Oasis", location: "Scottsdale, Arizona", price: 290, image: "new-cottages/cottage-12.jpg" },
    { id: 13, title: "Forest Fern", location: "Seattle, Washington", price: 110, image: "new-cottages/cottage-13.jpg" },
    { id: 14, title: "Snowy Peak Lodge", location: "Park City, Utah", price: 500, image: "new-cottages/cottage-14.jpg" },
    { id: 15, title: "Sunny Sands", location: "Miami, Florida", price: 310, image: "new-cottages/cottage-15.jpg" },
    { id: 16, title: "Country Charm", location: "Nashville, Tennessee", price: 145, image: "new-cottages/cottage-16.jpg" },
    { id: 17, title: "Historic Haven", location: "Charleston, South Carolina", price: 220, image: "new-cottages/cottage-17.jpg" },
    { id: 18, title: "Modern Manor", location: "Austin, Texas", price: 380, image: "new-cottages/cottage-18.jpg" }
];

const ITEMS_PER_PAGE = 6;

export default function NewCottages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const totalPages = Math.ceil(newCottages.length / ITEMS_PER_PAGE);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, totalPages]);

    const paginatedCottages = newCottages.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );

    const slideVariants = {
        enter: {
            x: "-100%",
            opacity: 0
        },
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "tween" as const, ease: [0.32, 0.72, 0, 1] as [number, number, number, number], duration: 0.8 },
                opacity: { duration: 0.8 }
            }
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: {
                x: { type: "tween" as const, ease: [0.32, 0.72, 0, 1] as [number, number, number, number], duration: 0.8 },
                opacity: { duration: 0.8 }
            }
        }
    };

    return (
        <section className={styles.newCottagesSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>See What's New</h2>
                    <p className={styles.subHeading}>Check out what's out there from our newest hosts.</p>
                </div>

                <div
                    className={styles.sliderContainer}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                            key={currentPage}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className={styles.grid}
                        >
                            {paginatedCottages.map((cottage) => (
                                <Link href="/cottage" key={cottage.id} className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={`/images/${cottage.image}`}
                                            alt={cottage.title}
                                            fill
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <div className={styles.textLeft}>
                                            <h3 className={styles.title}>{cottage.title}</h3>
                                            <p className={styles.location}>{cottage.location}</p>
                                        </div>
                                        <div className={styles.priceRight}>
                                            <span className={styles.price}>${cottage.price}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className={styles.pagination}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentPage ? styles.activeDot : ''}`}
                            onClick={() => setCurrentPage(index)}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
