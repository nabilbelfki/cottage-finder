"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Gallery() {
    return (
        <motion.section 
            className={styles.gallerySection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.mainImageWrapper}>
                        <Image 
                            src="/images/comfy-cottage/comfy-cottage-1.jpg"
                            alt="Cottage main view"
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.sideImages}>
                        <div className={styles.sideImageWrapper}>
                            <Image 
                                src="/images/comfy-cottage/comfy-cottage-2.jpg"
                                alt="Cottage Kitchen"
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.overlayWrapper}>
                            <Image 
                                src="/images/comfy-cottage/comfy-cottage-3.jpg"
                                alt="Cottage Dining"
                                fill
                                className={styles.image}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.overlayText}>+ 72 More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
