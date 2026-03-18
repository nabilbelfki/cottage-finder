import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

export default function OurLocation() {
    return (
        <section className={styles.locationSection}>
            <div className={styles.container}>
                <div className={styles.masonryGrid}>
                    <div className={styles.imageWrap1}>
                        <Image src="/images/office-1.jpg" alt="Office Lounge" fill className={styles.officeImage} />
                    </div>
                    <div className={styles.imageWrap2}>
                        <Image src="/images/office-2.jpg" alt="Office Overview" fill className={styles.officeImage} />
                    </div>
                    <div className={styles.imageWrap3}>
                        <Image src="/images/office-8.jpg" alt="Office Kitchen" fill className={styles.officeImage} />
                    </div>
                    <div className={styles.imageWrap4}>
                        <Image src="/images/office-5.jpg" alt="Office Cubicles" fill className={styles.officeImage} />
                    </div>
                    <div className={styles.imageWrap5}>
                        <Image src="/images/office-3.jpg" alt="Office Conference Board" fill className={styles.officeImage} />
                    </div>
                    <div className={styles.imageWrap6}>
                        <Image src="/images/office-7.jpg" alt="Office Conference Room" fill className={styles.officeImage} />
                    </div>
                </div>

                <div className={styles.rightContent}>
                    <h2 className={styles.title}>Location...<br/>Location...<br/>Location...</h2>
                    <p className={styles.description}>
                        Our office is your office! Come find us in Big Apple, there is no city like New York City.
                        We take pride if where we work and if you ask us we would say we have the best office ever.
                        But instead of us saying it, why don't you come and find out for yourselves.
                    </p>
                    <button className={styles.directionsBtn}>Get Directions</button>
                </div>
            </div>
        </section>
    );
}
