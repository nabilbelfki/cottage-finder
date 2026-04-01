"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import CottageMapMarker from '@/public/icons/cottage-map-marker.svg';

export default function Location() {
    return (
        <motion.section 
            className={styles.locationSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className={styles.container}>
                <h2 className={styles.heading}>Location</h2>
                <div className={styles.mapContainer}>
                    <div className={styles.mapPlaceholder}>
                        <div className={styles.marker}>
                            <span className={styles.icon}><CottageMapMarker height={60} width={60} /></span>
                            <span className={styles.label}>Comfy Cottage</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
