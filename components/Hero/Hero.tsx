"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../Header/Header";
import styles from "./styles.module.css";
import PeopleIcon from '@/public/icons/people.svg'

export default function Hero() {
    const [guests, setGuests] = useState(4);
    return (
        <section className={styles.hero}>
            <Header />
            <div className={styles.heroBackground}></div>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <div className={styles.dome}>


                        <Image
                            src="/images/hero.png"
                            alt="Cottage Finder Hero"
                            width={400}
                            height={400}
                            priority
                            className={styles.heroImage}
                        />

                        <h1 className={styles.title}>Cottage Finder</h1>
                    </div>

                    <div className={styles.searchBar}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Where? (e.g. Yosemite, Yellowstone)" className={styles.input} />
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.people}>
                            <button disabled={guests === 1} onClick={() => setGuests(guests - 1)}>-</button>
                            <span className={styles.guests}>
                                <PeopleIcon height={21} width={21} />
                                {guests}
                            </span>
                            <button onClick={() => setGuests(guests + 1)}>+</button>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="When? (July 28th 2026 - August 3rd 2026)" className={styles.input} />
                        </div>
                        <button className={styles.searchButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
}
