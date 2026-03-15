import Link from "next/link";
import LogoIcon from "@/public/icons/logo.svg";
import styles from "./styles.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/">
                    <div className={styles.logo}>
                        <LogoIcon width={42} height={42} />
                    </div>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/">Explore</Link>
                    <Link href="#">Cottages</Link>
                    <Link href="/our-mission">Our Mission</Link>
                    <div className={styles.actions}>
                        <button className={styles.joinButton} aria-label="Join Us" title="Join Us">
                            <svg className={styles.joinSvg} viewBox="0 0 104 40" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <mask id="knockout-text">
                                        <rect width="104" height="40" fill="white" />
                                        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="16" fontWeight="600" fontFamily="var(--font-inter), system-ui, sans-serif">Join Us</text>
                                    </mask>
                                </defs>
                                <rect width="104" height="40" rx="20" fill="currentColor" mask="url(#knockout-text)" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
