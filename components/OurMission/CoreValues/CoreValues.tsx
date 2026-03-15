"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./styles.module.css";

// Assets
import landscape from "@/public/images/landscape.png";
import letterU from "@/public/images/u.png";
import letterS from "@/public/images/s.png";
import letterT from "@/public/images/t.png";
import letterI from "@/public/images/i.png";

export default function CoreValues() {
    const viewportSettings = { once: false, amount: 0.1 };

    // Common variant for letters to slide up and fade in
    const letterVariants: Variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Common variant for indicators to fade in after letters
    const indicatorVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } } // 0.8s delay waits for letters
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Text Content */}
                <motion.div 
                    className={styles.textContent}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.heading}>Core Values</h2>
                    <p className={styles.description}>
                        These are the principles by which we stand by and were built upon. We will never compromise on these and if there ever comes a day that we do, we&apos;re no longer Cottage Finder.
                    </p>
                </motion.div>
            </div>

            {/* 3D Landscape & Letters */}
            <motion.div 
                className={styles.landscapeWrapper}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0,
                            delayChildren: 0.2
                        }
                    }
                }}
            >
                <Image src={landscape} alt="Rolling Hills Landscape" width={2560} height={1000} className={styles.landscapeImage} quality={100} />

                {/* Floating Letters with Indicators and Tooltips. */}

                {/* Letter U - Unity */}
                <div className={`${styles.letterWrapper} ${styles.posU}`}>
                    <motion.img variants={letterVariants} src={letterU.src} alt="U" width={350} height={400} className={styles.letter} />
                    <motion.div variants={indicatorVariants} className={`${styles.indicator} ${styles.indicatorTop} ${styles.indicatorUnity}`}>
                        <div className={styles.pulseCenter}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse1}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse2}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse3}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse4}`}></div>
                    </motion.div>
                    <div className={`${styles.tooltip} ${styles.tooltipUnity}`}>
                        <h4>Unity</h4>
                        <p>We love connecting people because we believe that something magical happens when we come together. We’ve seen it happen countless times and we have made it out mission here at Cottage Finder.</p>
                    </div>
                </div>

                {/* Letter S - Integrity (Content says Service?) */}
                <div className={`${styles.letterWrapper} ${styles.posS}`}>
                    <motion.img variants={letterVariants} src={letterS.src} alt="S" width={350} height={400} className={styles.letter} />
                    <motion.div variants={indicatorVariants} className={`${styles.indicator} ${styles.indicatorTop} ${styles.indicatorIntegrity}`}>
                        <div className={styles.pulseCenter}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse1}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse2}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse3}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse4}`}></div>
                    </motion.div>
                    <div className={`${styles.tooltip} ${styles.tooltipIntegrity}`}>
                        <h4>Service</h4>
                        <p>We truly believe that service makes a better place. Whether it be small acts of kindness or dedication and commitment to others, you will always see us being of service here at Cottage Finder.</p>
                    </div>
                </div>

                {/* Letter T - Service (Content says Trust?) */}
                <div className={`${styles.letterWrapper} ${styles.posT}`}>
                    <motion.img variants={letterVariants} src={letterT.src} alt="T" width={350} height={400} className={styles.letter} />
                    <motion.div variants={indicatorVariants} className={`${styles.indicator} ${styles.indicatorTop} ${styles.indicatorService}`}>
                        <div className={styles.pulseCenter}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse1}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse2}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse3}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse4}`}></div>
                    </motion.div>
                    <div className={`${styles.tooltip} ${styles.tooltipService}`}>
                        <h4>Trust</h4>
                        <p>We know what it feels like to be hesitant about making that next move all too well. That’s why at Cottage Finder we built a foundation of trust and that can be seen in what our loyal customers say about us. You can be certain that you can trust us.</p>
                    </div>
                </div>

                {/* Letter I - Trust (Indicator and Tooltip reversed) (Content says Integrity?) */}
                <div className={`${styles.letterWrapper} ${styles.posI}`}>
                    <motion.img variants={letterVariants} src={letterI.src} alt="I" width={350} height={400} className={styles.letter} />
                    <motion.div variants={indicatorVariants} className={`${styles.indicator} ${styles.indicatorBottom} ${styles.indicatorTrust}`}>
                        <div className={styles.pulseCenter}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse1}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse2}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse3}`}></div>
                        <div className={`${styles.pulseRing} ${styles.pulse4}`}></div>
                    </motion.div>
                    <div className={`${styles.tooltip} ${styles.tooltipTrust}`}>
                        <h4>Integrity</h4>
                        <p>Here at Cottage Finder we stand on what we say. Integrity to us is an integral part of who we are. We make sure that we back up what we say and that we’re consistent in everything we do. That way you’ll always know what to expect.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
