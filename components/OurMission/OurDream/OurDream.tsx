import Image from "next/image";
import styles from "./styles.module.css";

// Assets
import ipad from "@/public/images/ipad.png";
import firepit from "@/public/images/firepit.png";
import butterfly from "@/public/images/butterfly.png";
import sun from "@/public/images/sun.png";
import cloud from "@/public/images/cloud.png";
import squirrel from "@/public/images/squirrel.png";
import cabin from "@/public/images/cabin.png";
import tree from "@/public/images/tree.png";
import rainbow from "@/public/images/rainbow.png";
import fish from "@/public/images/fish.png";
import sunflower from "@/public/images/sunflower.png";
import mountains from "@/public/images/mountains.png";
import bird from "@/public/images/bird.png";
import worm from "@/public/images/worm.png";
import kittie from "@/public/images/kittie.png";
import strawberry from "@/public/images/strawberry.png";

export default function OurDream() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Floating Decorations */}
                <div className={`${styles.deco} ${styles.tree}`}><Image src={tree} alt="Tree" width={230} height={230} /></div>
                <div className={`${styles.deco} ${styles.rainbow}`}><Image src={rainbow} alt="Rainbow" width={150} height={150} /></div>
                <div className={`${styles.deco} ${styles.fish}`}><Image src={fish} alt="Fish" width={180} height={180} /></div>
                <div className={`${styles.deco} ${styles.sunflower}`}><Image src={sunflower} alt="Sunflower" width={180} height={180} /></div>
                <div className={`${styles.deco} ${styles.mountains}`}><Image src={mountains} alt="Mountains" width={250} height={120} /></div>

                <div className={`${styles.deco} ${styles.firepit}`}><Image src={firepit} alt="Firepit" width={240} height={240} /></div>
                <div className={`${styles.deco} ${styles.butterfly}`}><Image src={butterfly} alt="Butterfly" width={180} height={180} /></div>
                <div className={`${styles.deco} ${styles.sun}`}><Image src={sun} alt="Sun" width={180} height={180} /></div>
                <div className={`${styles.deco} ${styles.cloud}`}><Image src={cloud} alt="Cloud" width={230} height={230} /></div>
                <div className={`${styles.deco} ${styles.squirrel}`}><Image src={squirrel} alt="Squirrel" width={240} height={240} /></div>

                <div className={`${styles.deco} ${styles.strawberry}`}><Image src={strawberry} alt="Strawberry" width={100} height={100} /></div>
                <div className={`${styles.deco} ${styles.cabin}`}><Image src={cabin} alt="Cabin" width={333} height={333} /></div>
                <div className={`${styles.deco} ${styles.bird}`}><Image src={bird} alt="Bird" width={240} height={240} /></div>
                <div className={`${styles.deco} ${styles.worm}`}><Image src={worm} alt="Worm" width={140} height={140} /></div>
                <div className={`${styles.deco} ${styles.kittie}`}><Image src={kittie} alt="Kittie" width={250} height={250} /></div>

                <Image src={ipad} alt="Cottage Finder on iPad" width={1000} height={550} className={styles.ipadImage} quality={100} />

                <div className={styles.content}>
                    <h2 className={styles.heading}>Our Dream</h2>
                    <p className={styles.subtitle}>Get everybody outside in nature.</p>
                </div>
            </div>
        </section>
    );
}
