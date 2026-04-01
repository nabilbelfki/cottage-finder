import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const topCottages = [
    {
        id: 1,
        title: "Eugene's Elegant Cottage",
        location: "Atlanta, Georgia",
        image: "top-cottages/eugenes-cottage.jpg",
        avatar: "top-cottages/eugene.avif",
        stars: 5,
    },
    {
        id: 2,
        title: "Jamal's Jazzy Cottage",
        location: "Atlanta, Georgia",
        image: "top-cottages/jamals-cottage.jpg",
        avatar: "top-cottages/jamal.jpg",
        stars: 5,
    },
    {
        id: 3,
        title: "Cindy's Cabin Cottage",
        location: "Washington, United States",
        image: "top-cottages/cindys-cottage.jpg",
        avatar: "top-cottages/cindy.jpg",
        stars: 5,
    },
    {
        id: 4,
        title: "Duncan's Dreamy Cottage",
        location: "Orlando, Florida",
        image: "top-cottages/duncans-cottage.jpg",
        avatar: "top-cottages/duncan.avif",
        stars: 5,
    },
    {
        id: 5,
        title: "Jim's Jungle Cottage",
        location: "Kaua'i, Hawaii",
        image: "top-cottages/jims-cottage.jpg",
        avatar: "top-cottages/jim.avif",
        stars: 5,
    },
    {
        id: 6,
        title: "Karen's Cozy Cottage",
        location: "Denver, Colorado",
        image: "top-cottages/karens-cottage.jpg",
        avatar: "top-cottages/karen.avif",
        stars: 5,
    },
    {
        id: 7,
        title: "Martina's Modern Cottage",
        location: "Austin, Texas",
        image: "top-cottages/martinas-cottage.jpg",
        avatar: "top-cottages/martina.avif",
        stars: 5,
    }
];

export default function TopCottages() {
    return (
        <section className={styles.topCottagesSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Top Cottages</h2>
                <p className={styles.subHeading}>Discover the best cottages in the world. These cottages are the best of the best.</p>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeTrack}>
                        <div className={styles.marqueeGroup}>
                            {topCottages.map((cottage) => (
                                <Link href="/cottage" key={`group1-${cottage.id}`} className={styles.card}>
                                    <Image
                                        src={`/images/${cottage.image}`}
                                        alt={cottage.title}
                                        fill
                                        priority
                                        className={styles.cottageImage}
                                    />

                                    <div className={styles.cardOverlay}>
                                        <div className={styles.overlayContent}>
                                            <div className={styles.avatarWrapper}>
                                                <Image
                                                    src={`/images/${cottage.avatar}`}
                                                    alt="Host Avatar"
                                                    width={64}
                                                    height={64}
                                                    priority
                                                    className={styles.avatar}
                                                />
                                            </div>
                                            <div className={styles.textDetails}>
                                                <h3 className={styles.cottageTitle}>{cottage.title}</h3>
                                                <p className={styles.cottageLocation}>{cottage.location}</p>
                                            </div>
                                            <div className={styles.starsContainer}>
                                                {[...Array(cottage.stars)].map((_, i) => (
                                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className={styles.marqueeGroup} aria-hidden="true">
                            {topCottages.map((cottage) => (
                                <Link href="/cottage" key={`group2-${cottage.id}`} className={styles.card}>
                                    <Image
                                        src={`/images/${cottage.image}`}
                                        alt={cottage.title}
                                        fill
                                        priority
                                        className={styles.cottageImage}
                                    />

                                    <div className={styles.cardOverlay}>
                                        <div className={styles.overlayContent}>
                                            <div className={styles.avatarWrapper}>
                                                <Image
                                                    src={`/images/${cottage.avatar}`}
                                                    alt="Host Avatar"
                                                    width={64}
                                                    height={64}
                                                    priority
                                                    className={styles.avatar}
                                                />
                                            </div>
                                            <div className={styles.textDetails}>
                                                <h3 className={styles.cottageTitle}>{cottage.title}</h3>
                                                <p className={styles.cottageLocation}>{cottage.location}</p>
                                            </div>
                                            <div className={styles.starsContainer}>
                                                {[...Array(cottage.stars)].map((_, i) => (
                                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
