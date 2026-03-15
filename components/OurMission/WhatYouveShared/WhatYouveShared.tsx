"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import paperPlane from "@/public/images/paper-plane.png";
import megaphone from "@/public/images/megaphone.png";
import envelop from "@/public/images/envelop.png";
import pencil from "@/public/images/pencil.png";

export default function WhatYouveShared() {
    const headingText = "What You've Shared".split("");
    const descText = "We love hearing about all the wonderful stories that you all have shared during your stay at some of the places hosted on Cottage Finder. Keep them coming our way!".split(" ");

    return (
        <section className={styles.section} id="what-youve-shared">
            {/* Lined Paper Background pseudo elements are handled in CSS */}
            <div className={styles.redLines}></div>
            <div className={styles.hole1}></div>
            <div className={styles.hole2}></div>

            <div className={styles.container}>
                <motion.div 
                    className={styles.topContent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* Floating Stationery */}
                    <motion.div 
                        className={`${styles.deco} ${styles.paperPlane}`}
                        variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 3.2, duration: 0.6, type: "spring" } } }}
                    >
                        <Image src={paperPlane} alt="Paper Plane" width={200} height={200} />
                    </motion.div>
                    <motion.div 
                        className={`${styles.deco} ${styles.megaphone}`}
                        variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 3.4, duration: 0.6, type: "spring" } } }}
                    >
                        <Image src={megaphone} alt="Megaphone" width={200} height={200} />
                    </motion.div>
                    <motion.div 
                        className={`${styles.deco} ${styles.envelop}`}
                        variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 3.6, duration: 0.6, type: "spring" } } }}
                    >
                        <Image src={envelop} alt="Envelope" width={200} height={200} />
                    </motion.div>
                    <motion.div 
                        className={`${styles.deco} ${styles.pencil}`}
                        variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 3.8, duration: 0.6, type: "spring" } } }}
                    >
                        <Image src={pencil} alt="Pencil" width={200} height={200} />
                    </motion.div>

                    {/* Heading Typewriter - Staggers characters */}
                    <motion.h2 
                        className={styles.heading}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                        }}
                    >
                        {headingText.map((char, i) => (
                            <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2>

                    {/* Description Typewriter - Staggers words */}
                    <motion.p 
                        className={styles.description}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { delayChildren: 1.0, staggerChildren: 0.05 } }
                        }}
                    >
                        {descText.map((word, i) => (
                            <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} style={{ display: "inline-block", marginRight: "8px" }}>
                                {word}
                            </motion.span>
                        ))}
                    </motion.p>

                    <motion.div 
                        className={styles.buttonGroup}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { delay: 2.8, duration: 0.5 } }
                        }}
                    >
                        <button className={styles.exploreBtn}>Share Your Story</button>
                        <button className={styles.joinBtn}>Learn More</button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
