"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import SmileyIcon from "@/public/icons/smiley-face.svg";
import RulerIcon from "@/public/icons/ruler.svg";
import PinkScribbleIcon from "@/public/icons/scribble.svg";
import WhiteScribbleIcon from "@/public/icons/scribble-2.svg";
import HashtagIcon from "@/public/icons/hashtag.svg";
import BlueBurstIcon from "@/public/icons/electric-outline.svg";
import YellowHomeIcon from "@/public/icons/house-drawing.svg";
import LoveScribbleIcon from "@/public/icons/love-scribble.svg";

export default function PeopleSayAboutUs() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="people-say-about-us"
            className={`${styles.testimonialSection} ${isVisible ? styles.animate : ""}`}
        >
            {/* Absolute Decorations */}

            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={`${styles.decoSmiley} ${styles.fadeInIcon}`}><SmileyIcon /></div>
                    <div className={`${styles.decoRuler} ${styles.fadeInIcon}`}><RulerIcon height={700} width={200} /></div>
                    <div className={`${styles.decoPinkScribble} ${styles.fadeInIcon}`}><PinkScribbleIcon /></div>
                    <Image
                        className={styles.slideLeft}
                        height={750}
                        width={470}
                        src='/images/comments-screen.png'
                        alt="An image of a phone screen with users comments in it."
                    />
                </div>
                <div className={styles.right}>
                    <div className={`${styles.decoHashtag} ${styles.fadeInIcon}`}><HashtagIcon /></div>
                    <div className={`${styles.decoWhiteScribble} ${styles.fadeInIcon}`}><WhiteScribbleIcon /></div>
                    <div className={`${styles.decoYellowHome} ${styles.fadeInIcon}`}><YellowHomeIcon /></div>
                    <div className={`${styles.decoBlueBurst} ${styles.fadeInIcon}`}><BlueBurstIcon /></div>
                    <div className={`${styles.textContent} ${styles.slideRight}`}>
                        <div className={styles.headerGroup}>
                            <h2 className={styles.heading}>
                                This is What People<br />are Saying About Us
                            </h2>
                        </div>

                        <div className={styles.paragraphWrapper}>
                            <p className={styles.description}>
                                Every comment that we get warms<br />
                                our hearts. We <span className={styles.crossedOut}>like<span className={`${styles.decoLove} ${styles.fadeInIcon}`}><LoveScribbleIcon /></span></span> hearing what all<br />
                                of you have to say about your<br />
                                experiences with Cottage Finders.<br />
                                All the stories and pictures you<br />
                                share drive us to keep striving for<br />
                                excellence and making sure that we<br />
                                do the best we can.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
