"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import HeartIcon from "@/public/icons/heart.svg";

export default function WeLoveNature() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    return (
        <section className={styles.weLoveNatureSection}>
            <div className={styles.backgroundWrapper}>
                <video
                    ref={videoRef}
                    src="/videos/sunflower.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.backgroundVideo}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>

                        We
                        <span className={styles.loveBox}>
                            <HeartIcon width={16} height={16} className={styles.heartIconSmall} color={"#FF8989"} />
                            <HeartIcon width={32} height={32} className={styles.heartIcon} color={"#FF8989"} />
                            Love
                        </span>
                        Nature
                    </h2>
                    <p className={styles.description}>
                        There’s nothing better than going outside
                        and smelling the fresh air or soaking up in the sunshine. We love it so much that we made it out mission to get as many people as possible out into nature.
                    </p>
                    <div className={styles.actions}>
                        <button className={styles.outlineBtn}>Read More</button>
                        <button className={styles.primaryBtn}>Find Cottages</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
