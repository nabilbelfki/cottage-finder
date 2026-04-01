"use client";
import React from 'react';
import { motion } from 'framer-motion';
import BedIcon from "@/public/icons/bed.svg";
import BathtubIcon from "@/public/icons/bathtub.svg";
import styles from './styles.module.css';

export default function Information() {
    return (
        <motion.section 
            className={styles.infoSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className={styles.container}>
                <div className={styles.topRow}>
                    <div className={styles.leftContent}>
                        <h1 className={styles.title}>Comfy Cottage</h1>
                        <div className={styles.metaRow}>
                            <span className={styles.location}>Sunnydale, California</span>
                            <div className={styles.badges}>
                                <div className={styles.badge}>
                                    <span>2</span>
                                    <BedIcon width={16} height={16} className={styles.badgeIcon} />
                                    <span>1</span>
                                    <BathtubIcon width={16} height={16} className={styles.badgeIcon} />
                                </div>
                                <div className={styles.badgeBlue}>
                                    SUPER COTTAGE
                                </div>
                                <div className={styles.badgeYellow}>
                                    <span>4.3</span>
                                    <svg className={styles.starIcon} viewBox="0 0 24 24">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.priceContainer}>
                            <span className={styles.price}>$128</span>
                            <span className={styles.perNight}>/night</span>
                        </div>
                        <p className={styles.minNights}>$512 total for 4 nights</p>
                    </div>
                </div>

                <div className={styles.description}>
                    <p>
                        This is my comfy cottage, if you love comfy cottages and are near Albany, New York come stay here, its cozy and warm, with an amazing handcrafted fireplace out of the finest bricks in all of town, selected with delicacy and care. The scenery is stunning and will leave you speechless. Experience the magically sensation of the space that is watching upon you. The owners here are known to be very friendly and you will enjoy their presence and company. If this is the place for you and you like what you see but aren't sure if you want to book it yet you can always reach out to me if you have any questions.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}
