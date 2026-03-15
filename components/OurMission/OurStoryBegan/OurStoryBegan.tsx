"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.css";

import HeiroglyphsIcon from "@/public/icons/heiroglyphs.svg";

const timelineData = [
    {
        title: "The Idea Began",
        date: "April 2019",
        description: "It was barely a prototype when we first decided to release our code to our platform. We actually didn't realize that it would take off the way it did."
    },
    {
        title: "Going Public",
        date: "June 2020",
        description: "After countless years of being privately own we finally decided to go public. We couldn’t have done this without the support of all of you. Our stock ticker is COFI and the initial price was evaluated at $71.52."
    },
    {
        title: "Mobile App Launch",
        date: "September 2022",
        description: "We launched our first mobile app. It was a huge milestone for us and we were so excited to share it with the world. We couldn’t have done this without the support of all of you."
    },
    {
        title: "1,000,000 Bookings",
        date: "December 2023",
        description: "We achieved a huge milestone, 1,000,000 cottages booked through our platform. At this time we also had 10,000 cottages listed on our platform. The growth was exponential and we were so excited to share it with the world."
    },
    {
        title: "S&P 500",
        date: "January 2025",
        description: "We now were part of the S&P 500. Finally hitting profits of over 100M. Cottage Finder was now a household name and we were so excited to share it with you guys."
    }
];

export default function OurStoryBegan() {
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Move the background vertically across the section view
    const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section className={styles.section} ref={ref}>
            {/* Background SVG Pattern */}
            <motion.div className={styles.backgroundWrapper} style={{ y: yBg }}>
                <HeiroglyphsIcon
                    className={styles.backgroundImage}
                    preserveAspectRatio="none"
                    width="100%"
                />
            </motion.div>

            <div className={styles.container}>
                <h2 className={styles.heading}>Our Story Began</h2>

                <div className={styles.timelineWrapper}>
                    {/* The continuous horizontal line */}
                    <div className={styles.timelineLine}></div>

                    {/* The timeline nodes */}
                    <div className={styles.timelineNodes}>
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.node} ${index === activeIndex ? styles.activeNode : ""}`}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                {index === activeIndex && (
                                    <div className={styles.storyPopup}>
                                        <div className={styles.storyHeader}>
                                            <h3>{item.title}</h3>
                                            <h6>{item.date}</h6>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
