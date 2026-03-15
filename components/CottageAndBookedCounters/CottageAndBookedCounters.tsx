import Counter from "../Counter/Counter";
import styles from "./styles.module.css";

export default function CottageAndBookedCounters() {
    return (
        <section className={styles.countersSection}>
            <div className={styles.container}>
                <div className={styles.counterBlock} style={{ justifyContent: 'flex-end' }}>
                    <h2 className={styles.text}>We Have Over</h2>
                    <div className={styles.row}>
                        <div className={styles.highlightPill} style={{ flexBasis: '100%' }}>
                            <Counter end={1337} />
                        </div>
                        <h2 className={styles.text}>Cottages</h2>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.counterBlock}>
                    <h2 className={styles.text}>And</h2>
                    <div className={styles.highlightPill}>
                        <Counter end={1872347} />
                    </div>
                    <h2 className={styles.text}>Visits Booked So Far</h2>
                </div>
            </div>
        </section>
    );
}
