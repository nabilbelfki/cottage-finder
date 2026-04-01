"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.css';

const reviewsData = [
    {
        id: 1,
        name: "Vikram Patel",
        role: "Cottage Enthusiast",
        avatar: "/images/review/vikram-patel.jpg",
        date: "Stayed in August 2023",
        stars: 5,
        text: "Had a great time staying at Jhene's Comfy Cottage. It was such a welcoming experience. My housemates and I stayed for 3 nights and are down to go back as soon as we can! The best part about the cottage was how much wildlife visits all times of the day. You never felt far out and alone, they were always making an appearance... there was something about it."
    },
    {
        id: 2,
        name: "Jhene Alia",
        role: "Cottage Enthusiast",
        avatar: "/images/review/jhene-alia.jpg",
        date: "Stayed in August 2022",
        stars: 5,
        text: "Had a great time staying at Jhene's Comfy Cottage. It was such a welcoming experience. My housemates and I stayed for 3 nights and are down to go back as soon as we can! The best part about the cottage was how much wildlife visits all times of the day. You never felt far out and alone, they were always making an appearance... there was something about it."
    },
    {
        id: 3,
        name: "Enrique Rodriguez",
        role: "Cottage Enthusiast",
        avatar: "/images/review/enrique-rodriguez.jpg",
        date: "Stayed in August 2022",
        stars: 4,
        text: "I was stoked when I saw this offer cause where we live, there aren't all woods. It gives you the feel usually are way out in nature. Me and my girl and 3 kids were excited. The whole week we spent outside while we were baking crazy cakes on the fire with strawberries thrown this mix. The kids loved it and you know I will return for her next year."
    }
];

export default function Reviews() {
    return (
        <motion.section 
            className={styles.reviewsSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className={styles.container}>
                <h2 className={styles.heading}>Reviews</h2>
                <div className={styles.reviewsList}>
                    {reviewsData.map(review => (
                        <div key={review.id} className={styles.reviewCard}>
                            <div className={styles.reviewHeader}>
                                <div className={styles.reviewerInfo}>
                                    <div className={styles.avatarWrapper}>
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            fill
                                            className={styles.avatar}
                                        />
                                    </div>
                                    <div className={styles.reviewerDetails}>
                                        <h4 className={styles.reviewerName}>{review.name}</h4>
                                        <p className={styles.reviewerRole}>{review.role}</p>
                                    </div>
                                </div>
                                <div className={styles.reviewMeta}>
                                    <p className={styles.reviewDate}>{review.date}</p>
                                    <div className={styles.stars}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} className={i < review.stars ? styles.starFilled : styles.starEmpty}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className={styles.reviewText}>{review.text}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.loadMoreWrapper}>
                    <button className={styles.loadMoreBtn}>Load More</button>
                </div>
            </div>
        </motion.section>
    );
}
