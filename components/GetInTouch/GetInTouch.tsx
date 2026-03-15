import Image from "next/image";
import styles from "./styles.module.css";

export default function GetInTouch() {
    return (
        <section className={styles.getInTouchSection}>
            <div className={styles.container}>

                {/* Decorative Floating Elements */}
                <div className={styles.floatingElements}>
                    <div className={`${styles.bubble} ${styles.bubble1}`}>
                        <Image src="/images/bubble-1.png" alt="" width={150} height={150} className={styles.bubbleImg} />
                        <div className={styles.characterInside1}>
                            <Image src="/images/boy-typing.png" alt="Boy typing" width={90} height={90} />
                        </div>
                    </div>
                    <div className={`${styles.bubble} ${styles.bubble2}`}>
                        <Image src="/images/bubble-2.png" alt="" width={190} height={190} className={styles.bubbleImg} />
                    </div>
                    <div className={`${styles.bubble} ${styles.bubble3}`}>
                        <Image src="/images/bubble-3.png" alt="" width={250} height={250} className={styles.bubbleImg} />
                        <div className={styles.characterInside3}>
                            <Image src="/images/boy-calling.png" alt="Boy calling" width={150} height={150} />
                        </div>
                    </div>
                    <div className={`${styles.bubble} ${styles.bubble4}`}>
                        <Image src="/images/bubble-4.png" alt="" width={180} height={180} className={styles.bubbleImg} />
                        <div className={styles.characterInside4}>
                            <Image src="/images/girl-reading.png" alt="Girl reading" width={90} height={90} />
                        </div>
                    </div>
                    <div className={`${styles.bubble} ${styles.bubble5}`}>
                        <Image src="/images/bubble-4.png" alt="" width={50} height={50} className={styles.bubbleImg} />
                    </div>
                    <div className={`${styles.bubble} ${styles.bubble6}`}>
                        <Image src="/images/bubble-2.png" alt="" width={65} height={65} className={styles.bubbleImg} />
                    </div>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.heading}>Get in Touch</h2>
                    <p className={styles.description}>
                        We'd love to hear from you! Whether you have questions, need booking assistance, or want to share feedback, our team at Cottage Finder is here to help.
                    </p>
                    <button className={styles.contactBtn}>Contact Us</button>
                </div>
            </div>
        </section>
    );
}
