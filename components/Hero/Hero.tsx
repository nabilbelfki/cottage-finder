"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import styles from "./styles.module.css";
import PeopleIcon from '@/public/icons/people.svg'

export default function Hero() {
    const [guests, setGuests] = useState(4);
    return (
        <section className={styles.hero} id="hero">
            <Header />
            <div className={styles.heroBackground}></div>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <div className={styles.dome}>


                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            style={{ transformOrigin: "bottom center", display: "flex", justifyContent: "center" }}
                        >
                            <Image
                                src="/images/hero.png"
                                alt="Cottage Finder Hero"
                                width={400}
                                height={400}
                                priority
                                className={styles.heroImage}
                            />
                        </motion.div>

                        <motion.h1 
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                        >
                            Cottage Finder
                        </motion.h1>
                    </div>

                    <motion.div 
                        className={styles.searchBar}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { rotateX: -90, opacity: 0 },
                            visible: { 
                                rotateX: 0, 
                                opacity: 1, 
                                transition: { 
                                    delay: 1.4, 
                                    duration: 0.6, 
                                    type: "spring", 
                                    bounce: 0.4,
                                    when: "beforeChildren",
                                    staggerChildren: 0.1 
                                } 
                            }
                        }}
                        style={{ transformOrigin: "top center" }}
                    >
                        <motion.div className={styles.inputGroup} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                            <input type="text" placeholder="Where? (e.g. Yosemite, Yellowstone)" className={styles.input} />
                        </motion.div>
                        <motion.div className={styles.divider} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}></motion.div>
                        <motion.div className={styles.people} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                            <button disabled={guests === 1} onClick={() => setGuests(guests - 1)}>-</button>
                            <span className={styles.guests}>
                                <PeopleIcon height={21} width={21} />
                                {guests}
                            </span>
                            <button onClick={() => setGuests(guests + 1)}>+</button>
                        </motion.div>
                        <motion.div className={styles.divider} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}></motion.div>
                        <motion.div className={styles.inputGroup} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                            <input type="text" placeholder="When? (July 28th 2026 - August 3rd 2026)" className={styles.input} />
                        </motion.div>
                        <motion.button className={styles.searchButton} variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
