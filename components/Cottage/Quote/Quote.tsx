"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export default function Quote() {
    return (
        <motion.section 
            className={styles.quoteSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className={styles.container}>
                <div className={styles.quoteBox}>
                    <p className={styles.text}>
                        "The perfect cottage experience would be eating cottage cheese in a cottage 😋"
                    </p>
                </div>
            </div>
        </motion.section>
    );
}
