import React from 'react';
import styles from './styles.module.css';

export default function MessageUs() {
    return (
        <section className={styles.messageSection}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h2 className={styles.title}>Message Us</h2>
                    <h3 className={styles.subtitle}>We're real people, not robots ready to answer you wherever and whenever.</h3>
                    <p className={styles.description}>
                        We know it can be hard sometimes to decide with so many concerns and unanswered questions.
                        That's why you don't have to stay guessing, visit our FAQ section to see the most common
                        questions asked or shoot a message our way if it hasn't been answered already and we get back to you promptly.
                    </p>
                    <button className={styles.faqBtn}>Frequently Asked Questions</button>
                </div>

                <div className={styles.rightContent}>
                    <div className={styles.formCard}>
                        <div className={styles.formRow}>
                            <input type="text" placeholder="First Name" className={styles.inputField} />
                            <input type="text" placeholder="Last Name" className={styles.inputField} />
                        </div>
                        <div className={styles.formRow}>
                            <input type="email" placeholder="Email Address" className={styles.inputField} />
                        </div>
                        <div className={styles.formRow}>
                            <textarea placeholder="Write your message here..." className={styles.textareaField}></textarea>
                        </div>
                        <div className={styles.submitRow}>
                            <button className={styles.sendBtn}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
