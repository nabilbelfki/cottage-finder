"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

// Story Images
import story1 from "@/public/images/stories/story-1.jpg";
import story2 from "@/public/images/stories/story-2.jpg";
import story3 from "@/public/images/stories/story-3.jpg";
import story4 from "@/public/images/stories/story-4.jpg";
import story5 from "@/public/images/stories/story-5.jpg";
import story6 from "@/public/images/stories/story-6.jpg";

// Avatars from People folder
import avatar1 from "@/public/images/people/person-1.png";
import avatar2 from "@/public/images/people/person-2.png";
import avatar3 from "@/public/images/people/person-3.png";
import avatar4 from "@/public/images/people/person-4.png";
import avatar5 from "@/public/images/people/person-5.png";
import avatar6 from "@/public/images/people/person-6.png";

type Story = {
    id: number;
    image: StaticImageData;
    cottage: string;
    location: string;
    text: string;
    avatar: StaticImageData;
    gridClass: string;
}

const stories: Story[] = [
    { id: 1, image: story1, cottage: "Adorna Cottage", location: "Vancouver, Canada", text: "Wow the air was so fresh, it's crazy! There was a hiking trail right from the backyard that lead to Mount Toubkal and the peak was so beautiful and so clear, it was amazing!", avatar: avatar1, gridClass: "item1" },
    { id: 2, image: story2, cottage: "Tiki Shack Shabara Cottage", location: "Banff, Canada", text: "I am doing a walk across India barefoot and this so far has been my favorite destination to stay at. I rested up well here. They always have fresh homemade Mango Lassi in the fridge, the best!", avatar: avatar2, gridClass: "item2" },
    { id: 3, image: story3, cottage: "Fois Foyage Cottage", location: "Augsburg, Germany", text: "This cottage was so deep in the forest you could easily get lost, but that's exactly what we wanted! It was so quiet and peaceful.", avatar: avatar3, gridClass: "item3" },
    { id: 4, image: story4, cottage: "Sarlette Joahnn Cottage", location: "Kelowna, Canada", text: "I was coming to NOLA for Mardi Gras because its so lively, colorful and fun, plus I live in Atlanta so its not that far from here. This cottage was by far my favorite, not too far from the action, but also quiet and peaceful too.", avatar: avatar4, gridClass: "item4" },
    { id: 5, image: story5, cottage: "Terry Cotton Cottage", location: "Whistler, Canada", text: "You have to try this cottage. The garden was to die for! The have fresh tangerines and you can pick them at any time for a refreshing snack.", avatar: avatar5, gridClass: "item5" },
    { id: 6, image: story6, cottage: "Waleeh Wittery Cottage", location: "Reykjavik, Iceland", text: "I always wanted to visit Iceland and the Northern Lights were mesmerizing from this little, cozy cottage, mostly because it sits perched on a hill.", avatar: avatar6, gridClass: "item6" },
];

function renderStoryCard(story: Story, index: number) {
    return (
        <motion.div 
            key={story.id} 
            className={`${styles.storyCard} ${styles[story.gridClass]}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
        >
            <Image src={story.image} alt={story.cottage} layout="fill" objectFit="cover" className={styles.storyImage} />
            <div className={styles.storyOverlay}>
                <Image src={story.avatar} alt="Author Avatar" width={45} height={45} style={{ borderRadius: "50%" }} />
                <div className={styles.textDetails}>
                    <div className={styles.locationWrapper}>
                        <span className={styles.locationIcon}>📍</span>
                        <span className={styles.authorLocation}>{story.location}</span>
                    </div>
                    <span className={styles.cottageName}>{story.cottage}</span>
                    <span className={styles.storyText}>{story.text}</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function Collage() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Custom 10-column Grid for stories */}

                <div className={styles.left}>
                    <div className={styles.leftTop}>
                        {renderStoryCard(stories[0], 0)}
                        {renderStoryCard(stories[1], 1)}
                    </div>
                    <div className={styles.leftBottom}>
                        {renderStoryCard(stories[3], 2)}
                        {renderStoryCard(stories[4], 3)}
                    </div>
                </div>
                <div className={styles.right}>
                    {renderStoryCard(stories[2], 0)}
                    {renderStoryCard(stories[5], 2)}
                </div>

            </div>
        </section>
    );
}
