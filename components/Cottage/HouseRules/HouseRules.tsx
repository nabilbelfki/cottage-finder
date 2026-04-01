"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export default function HouseRules() {
    const retriggerAnimation = false;

    return (
        <section className={styles.rulesSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>House Rules</h2>
                <div className={styles.cardContainer}>
                    <motion.div 
                        className={styles.flipInner}
                        initial={{ rotateX: -180 }}
                        whileInView={{ rotateX: 0 }}
                        viewport={{ once: !retriggerAnimation, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                    >
                        <div className={styles.cardBack}></div>
                        <div className={styles.cardFront}>
                            <div className={styles.contentWrapper}>
                        <div className={styles.scrollableContent}>
                            <p>Welcome to Tranquil Haven Cottage! To ensure a pleasant stay for everyone, please take a moment to review our house rules. Failure to comply may result in additional fees or eviction.</p>
                            <ul className={styles.list}>
                                <li>Quiet hours are from 10 PM to 8 AM.</li>
                                <li>No smoking inside the cottage. A fee of $250 will be applied for violations.</li>
                                <li>Pets are welcome, but please clean up after them. An extra cleaning fee of $100 will be charged if necessary.</li>
                                <li>No parties or events allowed. Violators will be asked to leave immediately.</li>
                                <li>Please conserve water and electricity. Excessive usage may result in additional charges.</li>
                                <li>Check-out is at 11 AM. Late check-outs will be charged at $50/hour.</li>
                            </ul>
                        </div>
                        <div className={styles.fadeOverlay}></div>
                    </div>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.btn}>View Rules</button>
                        </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
