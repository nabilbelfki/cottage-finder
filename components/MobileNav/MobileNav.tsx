"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import HomeIcon from "@/public/icons/mobile-navigation/home.svg";
import SearchIcon from "@/public/icons/mobile-navigation/search.svg";
import ContactIcon from "@/public/icons/mobile-navigation/contact.svg";
import MissionIcon from "@/public/icons/mobile-navigation/mission.svg";

const NAV_ITEMS = [
    { name: "EXPLORE", href: "/", icon: HomeIcon },
    { name: "SEARCH", href: "/search", icon: SearchIcon },
    { name: "CONTACT", href: "/contact", icon: ContactIcon },
    { name: "MISSION", href: "/our-mission", icon: MissionIcon },
];

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className={styles.mobileNav}>
            {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                    >
                        <div className={styles.iconWrapper}>
                            <Icon className={styles.icon} />
                        </div>
                        <span className={styles.navText}>{item.name}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
