import Link from "next/link";
import XIcon from "@/public/icons/x.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import styles from "./styles.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1 */}
                    <div className={styles.col}>
                        <h3 className={styles.colTitle}>About Cottage Finder</h3>
                        <p className={styles.colText}>
                            We provide the best cottages for you to spend your holidays. Book your next adventure with us.
                        </p>
                        <div className={styles.spacer}></div>
                        <ul className={styles.list}>
                            <li><Link href="#" className={styles.link}>Privacy Policy</Link></li>
                            <li><Link href="#" className={styles.link}>Trust & Safety</Link></li>
                            <li><Link href="#" className={styles.link}>Terms</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className={styles.col}>
                        <h3 className={styles.colTitle}>Explore</h3>
                        <ul className={styles.list}>
                            <li><Link href="/#hero" className={styles.link}>Search</Link></li>
                            <li><Link href="/#cottages" className={styles.link}>Cottage List</Link></li>
                            <li><Link href="/#people-say-about-us" className={styles.link}>Comments</Link></li>
                            <li><Link href="/#we-love-nature" className={styles.link}>What We Love</Link></li>
                            <li><Link href="/#cottage-and-booked-counters" className={styles.link}>Total Visits & Cottages</Link></li>
                            <li><Link href="/#get-in-touch" className={styles.link}>Get In Touch</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className={styles.col}>
                        <h3 className={styles.colTitle}>Our Mission</h3>
                        <ul className={styles.list}>
                            <li><Link href="/our-mission#we-love-outdoors" className={styles.link}>We Love the Outdoors</Link></li>
                            <li><Link href="/our-mission#what-youve-shared" className={styles.link}>What Youve Shared</Link></li>
                            <li><Link href="/our-mission#core-values" className={styles.link}>Core Values</Link></li>
                            <li><Link href="/our-mission#our-story" className={styles.link}>Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className={styles.col}>
                        <h3 className={styles.colTitle}>Cottages</h3>
                        <ul className={styles.list}>
                            <li><Link href="#" className={styles.link}>Finder</Link></li>
                            <li><Link href="#" className={styles.link}>New Cottages</Link></li>
                            <li><Link href="#" className={styles.link}>Visit Cities</Link></li>
                            <li><Link href="#" className={styles.link}>Top Cottages</Link></li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div className={styles.col}>
                        <h3 className={styles.colTitle}>Subscribe to our Newsletter</h3>
                        <p className={styles.colText}>Learn the latest news about Cottage Finder and stay connected to what is going on.</p>
                        <div className={styles.subscribeForm}>
                            <input type="email" placeholder="Your Email Address" className={styles.input} />
                            <button className={styles.subscribeBtn}>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>© 2023 Cottage Finder. All rights reserved.</p>
                    <div className={styles.socials}>
                        <Link href="#" className={styles.socialLink}><XIcon width={24} height={24} /></Link>
                        <Link href="#" className={styles.socialLink}><FacebookIcon width={24} height={24} /></Link>
                        <Link href="#" className={styles.socialLink}><InstagramIcon width={24} height={24} /></Link>
                        <Link href="#" className={styles.socialLink}><LinkedinIcon width={24} height={24} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}