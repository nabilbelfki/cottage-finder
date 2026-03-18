import Image from "next/image";
import styles from "./styles.module.css";

const cities = [
    {
        id: 1,
        name: "Amsterdam",
        image: "/images/cities/Amsterdam.jpg"
    },
    {
        id: 2,
        name: "Paris",
        image: "/images/cities/Paris.jpg"
    },
    {
        id: 3,
        name: "Norway Fjords",
        image: "/images/cities/Oslo.jpg"
    },
    {
        id: 4,
        name: "Rio de Janeiro",
        image: "/images/cities/Rio De Janeiro.jpg"
    },
    {
        id: 5,
        name: "Addis Ababa",
        image: "/images/cities/Addis Ababa.jpg"
    },
    {
        id: 6,
        name: "Giza, Egypt",
        image: "/images/cities/Cairo.jpg"
    }
];

export default function VisitCities() {
    return (
        <section className={styles.visitCitiesSection}>
            <div className={styles.container}>
                {/* <h2 className={styles.heading}>Visit Cities</h2> */}
                <div className={styles.grid}>
                    {cities.map((city) => (
                        <div key={city.id} className={styles.cityCard}>
                            <Image
                                src={city.image}
                                alt={city.name}
                                fill
                                className={styles.cityImage}
                                unoptimized
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className={styles.overlay}>
                                <h3 className={styles.cityName}>{city.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
