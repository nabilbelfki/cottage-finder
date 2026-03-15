"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import avatar1 from "@/public/images/avatar-1.png";
import avatar2 from "@/public/images/avatar-2.png";
import avatar3 from "@/public/images/avatar-3.png";
import avatar4 from "@/public/images/avatar-4.png";
import avatar5 from "@/public/images/avatar-5.png";
import avatar6 from "@/public/images/avatar-6.png";
import avatar7 from "@/public/images/avatar-7.png";
import avatar8 from "@/public/images/avatar-8.png";
import ConnectionIcon from "@/public/icons/connection.svg";

export default function WeLoveOutdoors() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.left}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className={styles.heading}>We Love the Outdoors</h2>
                    <p className={styles.description}>
                        When we founded Cottage Finder in 2016, we were yearning for nature, stuck in a city with no greenery. Our mission became to explore the outdoors, even if it meant traveling far. Cottages offered the perfect escape to the forest and fresh air. Inspired by this, we created our app to help everyone experience the joy of the outdoors.
                    </p>
                    <div className={styles.buttonGroup}>
                        <button className={styles.exploreBtn}>Explore Maps</button>
                        <button className={styles.joinBtn}>Join Cottage</button>
                    </div>
                </motion.div>

                <motion.div 
                    className={styles.right}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    {/* SVG Mesh representing the network */}
                    <div className={styles.networkGraphic}>
                        <ConnectionIcon className={styles.neuronSvg} />

                        {/* Floating Avatars */}
                        <div className={`${styles.avatar} ${styles.av1}`}><Image src={avatar1} alt="Avatar 1" width={100} height={100} /></div>
                        <div className={`${styles.avatar} ${styles.av2}`}><Image src={avatar2} alt="Avatar 2" width={100} height={100} /></div>
                        <div className={`${styles.avatar} ${styles.av3}`}><Image src={avatar3} alt="Avatar 3" width={100} height={100} /></div>
                        <div className={`${styles.avatar} ${styles.av4}`}><Image src={avatar4} alt="Avatar 4" width={100} height={100} /></div>
                        <div className={`${styles.avatar} ${styles.av5}`}><Image src={avatar5} alt="Avatar 5" width={120} height={120} /></div>
                        <div className={`${styles.avatar} ${styles.av6}`}><Image src={avatar6} alt="Avatar 6" width={100} height={100} /></div>
                        <div className={`${styles.avatar} ${styles.av7}`}><Image src={avatar7} alt="Avatar 7" width={100} height={100} /></div>
                        <div className={`${styles.avatar} ${styles.av8}`}><Image src={avatar8} alt="Avatar 8" width={100} height={100} /></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
