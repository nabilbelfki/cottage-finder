"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export default function AboutHost() {
    const retriggerAnimation = false;

    return (
        <section className={styles.aboutHostSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>About Host</h2>
                <div className={styles.cardContainer}>
                    <motion.div 
                        className={styles.flipInner}
                        initial={{ rotateX: -180 }}
                        whileInView={{ rotateX: 0 }}
                        viewport={{ once: !retriggerAnimation, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
                    >
                        <div className={styles.cardBack}></div>
                        <div className={styles.cardFront}>
                            <div className={styles.header}>
                        <div className={styles.hostInfo}>
                            <div className={styles.avatarWrapper}>
                                <Image
                                    src="/images/review/jhene-alia.jpg"
                                    alt="Host Avatar"
                                    fill
                                    className={styles.avatar}
                                />
                            </div>
                            <div className={styles.hostText}>
                                <h3 className={styles.hostName}>Jhene Alia</h3>
                                <p className={styles.hostRole}>Superhost</p>
                            </div>
                        </div>
                        <div className={styles.joinedText}>Joined 7 years ago</div>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Hey there, I'm Jhene! 👋 I'm a cottage enthusiast and your go-to host for unforgettable getaways! ✨ I love sharing my cozy slice of paradise with fellow adventurers. When I'm not busy making sure your stay is top-notch, you can find me hiking 🥾, stargazing 🔭, or whipping up delicious treats in the kitchen 🍳. I'm all about creating magical moments and spreading good vibes. Can't wait to welcome you to my cottage! ❤️
                        </p>
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.primaryBtn}>Visit Profile</button>
                        <button className={styles.secondaryBtn}>Send Message</button>
                    </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
