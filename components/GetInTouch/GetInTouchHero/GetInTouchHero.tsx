import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

export default function GetInTouchHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.leftGraphics}>
                    <div className={styles.blueCircleGroup}>
                        <div className={styles.blueCircle}>
                            <Image src="/images/get-in-touch/avatar-1.png" alt="Avatar 1" width={80} height={80} className={styles.avatarImage} />
                            <div className={styles.envelopeIconBubble}>
                                <Image src="/icons/get-in-touch/envelop.svg" alt="Envelope" width={16} height={16} />
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.greenCircleGroup}>
                        <div className={styles.greenCircle}>
                            <Image src="/images/get-in-touch/avatar-2.png" alt="Avatar 2" width={160} height={160} className={styles.avatarImage} />
                            <div className={styles.phoneIconBubble}>
                                <Image src="/icons/get-in-touch/phone.svg" alt="Phone" width={20} height={20} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.pinkCircleGroup}>
                        <div className={styles.pinkCircle}>
                            <Image src="/images/get-in-touch/avatar-3.png" alt="Avatar 3" width={100} height={100} className={styles.avatarImage} />
                            <div className={styles.markerIconBubble}>
                                <Image src="/icons/get-in-touch/map-marker.svg" alt="Map Marker" width={16} height={16} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.rightContent}>
                    <h1 className={styles.title}>Get in Touch</h1>
                    <h3 className={styles.subtitle}>Need a Friendly Voice? We're Here for You!</h3>
                    <p className={styles.description}>
                        Sometimes, all you need is a familiar voice to guide you. That's why we're here to help. Feel free to give us a call anytime - we're always ready to assist you.
                    </p>
                    <div className={styles.buttonGroup}>
                        <button className={styles.primaryBtn}>Become a Host</button>
                        <button className={styles.secondaryBtn}>Stay in Cottage</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
