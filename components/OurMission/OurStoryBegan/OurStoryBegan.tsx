"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.css";

import HeiroglyphsIcon from "@/public/icons/heiroglyphs.svg";

const timelineData = [
    {
        title: "The Idea",
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
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Move the background vertically across the section view
    const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section className={styles.section} ref={ref} id="our-story-began">
            {/* Background SVG Pattern */}
            <motion.div className={styles.backgroundWrapper} style={{ y: yBg }}>
                <HeiroglyphsIcon
                    className={styles.backgroundImage}
                    preserveAspectRatio="none"
                    width="100%"
                />
            </motion.div>

            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ delay: 3.5, duration: 0.8 }}
                >
                    Our Story Began
                </motion.h2>

                <motion.div
                    className={styles.timelineWrapper}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    onViewportEnter={() => setActiveIndex(null)}
                >
                    {/* The continuous horizontal line */}
                    <motion.div
                        className={styles.timelineLineWrapper}
                        style={{ marginLeft: "15px", width: "calc(100% - 15px)" }}
                        variants={{
                            hidden: { x: "150%", y: "-50%" },
                            visible: {
                                x: "0%",
                                y: "-50%",
                                transition: { duration: 3, ease: "linear" }
                            }
                        }}
                    >
                        <div className={styles.timelineLine}></div>
                        <div className={styles.timelineLineTail}></div>
                    </motion.div>

                    {/* The timeline nodes */}
                    <div className={styles.timelineNodes}>
                        {timelineData.map((item, index) => {
                            const parsedDates = timelineData.map(d => new Date(d.date).getTime());
                            const minDate = Math.min(...parsedDates);
                            const maxDate = Math.max(...parsedDates);
                            const time = new Date(item.date).getTime();
                            const percentage = ((time - minDate) / (maxDate - minDate)) * 100;

                            // Line travels from 150% to 0% over 3s.
                            // It hits 100% at 1s, and 0% at 3s.
                            // Therefore node hit delay is relative to percentage location
                            const delay = 1 + (1 - percentage / 100) * 2;

                            return (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { scale: 0, opacity: 0 },
                                        visible: {
                                            scale: 1,
                                            opacity: 1,
                                            transition: { duration: 0.5, delay: delay, type: "spring", stiffness: 200 }
                                        }
                                    }}
                                    className={`${styles.node} ${index === activeIndex ? styles.activeNode : ""}`}
                                    style={{ left: `${percentage}%` }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onAnimationComplete={() => {
                                        // Once the first (leftmost) node finishes animating, open its popup
                                        if (index === 0) {
                                            setActiveIndex(0);
                                        }
                                    }}
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
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
