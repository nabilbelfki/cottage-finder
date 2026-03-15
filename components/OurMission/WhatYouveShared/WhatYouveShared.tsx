import Image from "next/image";
import styles from "./styles.module.css";
import paperPlane from "@/public/images/paper-plane.png";
import megaphone from "@/public/images/megaphone.png";
import envelop from "@/public/images/envelop.png";
import pencil from "@/public/images/pencil.png";

export default function WhatYouveShared() {
    return (
        <section className={styles.section}>
            {/* Lined Paper Background pseudo elements are handled in CSS */}
            <div className={styles.redLines}></div>
            <div className={styles.hole1}></div>
            <div className={styles.hole2}></div>

            <div className={styles.container}>
                <div className={styles.topContent}>
                    {/* Floating Stationery */}
                    <div className={`${styles.deco} ${styles.paperPlane}`}><Image src={paperPlane} alt="Paper Plane" width={200} height={200} /></div>
                    <div className={`${styles.deco} ${styles.megaphone}`}><Image src={megaphone} alt="Megaphone" width={200} height={200} /></div>
                    <div className={`${styles.deco} ${styles.envelop}`}><Image src={envelop} alt="Envelope" width={200} height={200} /></div>
                    <div className={`${styles.deco} ${styles.pencil}`}><Image src={pencil} alt="Pencil" width={200} height={200} /></div>

                    <h2 className={styles.heading}>What You&apos;ve Shared</h2>
                    <p className={styles.description}>We love hearing about all the wonderful stories that you all have shared
                        during your stay at some of the places hosted on Cottage Finder. Keep them coming our way!
                    </p>

                    <div className={styles.buttonGroup}>
                        <button className={styles.exploreBtn}>Share Your Story</button>
                        <button className={styles.joinBtn}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
