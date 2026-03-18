"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoIcon from "@/public/icons/logo.svg";
import styles from "./styles.module.css";

export default function Header() {
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const [hidden, setHidden] = useState(false);
    const [isTop, setIsTop] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest <= 50) {
            setIsTop(true);
            setHidden(false);
        } else {
            if (latest > previous && latest > 150) {
                // Scrolling down past threshold => hide it
                setHidden(true);
            } else if (latest < previous) {
                // Scrolling up => reveal as white/green theme
                setIsTop(false);
                setHidden(false);
            }
        }
    });

    const isWhiteHeaderPage = pathname === "/cottages" || pathname === "/get-in-touch";

    return (
        <motion.header
            className={`${styles.header} ${(isTop && !isWhiteHeaderPage) ? styles.isTop : styles.isScrolled}`}
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <div className={styles.container}>
                <Link href="/">
                    <div className={styles.logo}>
                        <LogoIcon width={42} height={42} />
                    </div>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/">Explore</Link>
                    <Link href="/cottages">Cottages</Link>
                    <Link href="/our-mission">Our Mission</Link>
                    <div className={styles.actions}>
                        <Link href="/get-in-touch" className={styles.joinButton} aria-label="Join Us" title="Join Us">
                            <svg className={styles.joinSvg} viewBox="0 0 104 40" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <mask id="knockout-text">
                                        <rect width="104" height="40" fill="white" />
                                        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="16" fontWeight="600" fontFamily="var(--font-inter), system-ui, sans-serif">Join Us</text>
                                    </mask>
                                </defs>
                                <rect width="104" height="40" rx="20" fill="currentColor" mask="url(#knockout-text)" />
                            </svg>
                        </Link>
                    </div>
                </nav>
            </div>
        </motion.header>
    );
}
