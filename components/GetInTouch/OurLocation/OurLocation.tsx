"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export default function OurLocation() {
    // Shared transition for the explosion effect
    const springTransition = { type: "spring" as const, bounce: 0.4, duration: 1.2 };

    return (
        <section className={styles.locationSection}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Location Location Location</h2>
                    <p className={styles.description}>
                        Our office is your office! Come find us in Big Apple, there is no city like New York City.
                        We take pride if where we work and if you ask us we would say we have the best office ever.
                        But instead of us saying it, why don't you come and find out for yourselves.
                    </p>
                    <button className={styles.directionsBtn}>Get Directions</button>
                </div>

                <motion.div
                    className={styles.imageWrap1}
                    initial={{ x: 250, y: 150, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: -12 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-1.jpg" alt="Office Lounge" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap2}
                    initial={{ x: 300, y: 0, rotate: 0, opacity: 1 }}
                    whileInView={{ x: -65, y: 0, rotate: 8 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-2.jpg" alt="Office Overview" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap3}
                    initial={{ x: 250, y: -150, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: -8 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-8.jpg" alt="Office Kitchen" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap4}
                    initial={{ x: -250, y: 150, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: 15 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-5.jpg" alt="Office Cubicles" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap5}
                    initial={{ x: -300, y: 0, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: -15 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-3.jpg" alt="Office Conference Board" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap6}
                    initial={{ x: -250, y: -150, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: 10 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-7.jpg" alt="Office Conference Room" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap7}
                    initial={{ x: 0, y: 200, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: -6 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-4.webp" alt="Office Space 1" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap8}
                    initial={{ x: 0, y: -200, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: 6 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-6.webp" alt="Office Space 2" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap9}
                    initial={{ x: 300, y: 100, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: -18 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-9.jpg" alt="Office Extension 1" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap10}
                    initial={{ x: 250, y: -100, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: 12 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-10.jpg" alt="Office Extension 2" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap11}
                    initial={{ x: 400, y: 200, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: -5 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-11.jpg" alt="Office Extension 3" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap12}
                    initial={{ x: -300, y: 50, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: 18 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-12.jpg" alt="Office Extension 4" fill className={styles.officeImage} />
                </motion.div>

                <motion.div
                    className={styles.imageWrap13}
                    initial={{ x: -250, y: -150, rotate: 0, opacity: 1 }}
                    whileInView={{ x: 0, y: 0, rotate: -10 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={springTransition}
                >
                    <Image src="/images/office-13.jpg" alt="Office Extension 5" fill className={styles.officeImage} />
                </motion.div>
            </div>
        </section>
    );
}
