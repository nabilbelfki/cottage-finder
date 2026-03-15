"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

// Assets
import ipad from "@/public/images/ipad.png";
import firepit from "@/public/images/firepit.png";
import butterfly from "@/public/images/butterfly.png";
import sun from "@/public/images/sun.png";
import cloud from "@/public/images/cloud.png";
import squirrel from "@/public/images/squirrel.png";
import cabin from "@/public/images/cabin.png";
import tree from "@/public/images/tree.png";
import rainbow from "@/public/images/rainbow.png";
import fish from "@/public/images/fish.png";
import sunflower from "@/public/images/sunflower.png";
import mountains from "@/public/images/mountains.png";
import bird from "@/public/images/bird.png";
import worm from "@/public/images/worm.png";
import kittie from "@/public/images/kittie.png";
import strawberry from "@/public/images/strawberry.png";

export default function OurDream() {
    // Shared viewport settings to ensure consistent re-triggering
    // We use a low amount (5%) so the lower icons trigger simultaneously with the higher ones
    const viewportSettings = { once: false, amount: 0.05, margin: "0px 0px -100px 0px" };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 
                  Wrap all decorations in a single parent motion container.
                  This ensures the parent triggers once (when 5% visible),
                  and orchestrates all children simultaneously 1 second later. 
                */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0, 
                                delayChildren: 1.0 // Wait 1s for iPad to finish
                            }
                        }
                    }}
                >
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.tree}`}><Image src={tree} alt="Tree" width={230} height={230} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.rainbow}`}><Image src={rainbow} alt="Rainbow" width={150} height={150} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.fish}`}><Image src={fish} alt="Fish" width={180} height={180} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.sunflower}`}><Image src={sunflower} alt="Sunflower" width={180} height={180} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.mountains}`}><Image src={mountains} alt="Mountains" width={250} height={120} /></motion.div>

                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.firepit}`}><Image src={firepit} alt="Firepit" width={240} height={240} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.butterfly}`}><Image src={butterfly} alt="Butterfly" width={180} height={180} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.sun}`}><Image src={sun} alt="Sun" width={180} height={180} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.cloud}`}><Image src={cloud} alt="Cloud" width={230} height={230} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.squirrel}`}><Image src={squirrel} alt="Squirrel" width={240} height={240} /></motion.div>

                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.strawberry}`}><Image src={strawberry} alt="Strawberry" width={100} height={100} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.cabin}`}><Image src={cabin} alt="Cabin" width={333} height={333} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.bird}`}><Image src={bird} alt="Bird" width={240} height={240} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.worm}`}><Image src={worm} alt="Worm" width={140} height={140} /></motion.div>
                    <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } } }} className={`${styles.deco} ${styles.kittie}`}><Image src={kittie} alt="Kittie" width={250} height={250} /></motion.div>
                </motion.div>

                {/* Main iPad - Slides Up */}
                <motion.div
                    initial={{ opacity: 0, y: 150, x: "-50%" }}
                    whileInView={{ opacity: 1, y: 0, x: "-50%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={viewportSettings}
                    className={styles.ipadWrapper}
                >
                    <Image src={ipad} alt="Cottage Finder on iPad" width={1000} height={550} className={styles.ipadImage} quality={100} />
                </motion.div>

                {/* Content Headings - Slides Down */}
                <motion.div 
                    className={styles.content}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={viewportSettings}
                >
                    <h2 className={styles.heading}>Our Dream</h2>
                    <p className={styles.subtitle}>Get everybody outside in nature.</p>
                </motion.div>
            </div>
        </section>
    );
}
