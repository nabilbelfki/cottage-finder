import styles from "./styles.module.css";
import WifiIcon from "@/public/icons/wifi.svg";
import FreeParkingIcon from "@/public/icons/free-parking.svg";
import SwimmingPoolIcon from "@/public/icons/swimming-pool.svg";
import WashingMachineIcon from "@/public/icons/washing-machine.svg";
import AirConditioningIcon from "@/public/icons/air-conditioning.svg";
import SmokingIcon from "@/public/icons/smoking.svg";
import PetFriendlyIcon from "@/public/icons/pet-friendly.svg";
import GardenIcon from "@/public/icons/garden.svg";
import BarbequeIcon from "@/public/icons/barbeque.svg";
import FirepitIcon from "@/public/icons/firepit.svg";
import SmartHomeIcon from "@/public/icons/smart-home.svg";
import TelevisionIcon from "@/public/icons/television.svg";
import JacuzziIcon from "@/public/icons/jacuzzi.svg";
import CribIcon from "@/public/icons/crib-toy.svg";
import LandscapeIcon from "@/public/icons/landscape.svg";
import KingSizeBedIcon from "@/public/icons/king-size.svg";
import GarageIcon from "@/public/icons/garage.svg";
import ChargingStationIcon from "@/public/icons/charging-station.svg";

const amenities = [
    { name: "Wifi", Icon: WifiIcon },
    { name: "Free Parking", Icon: FreeParkingIcon },
    { name: "Swimming Pool", Icon: SwimmingPoolIcon },
    { name: "Washing Machine", Icon: WashingMachineIcon },
    { name: "Air Conditioning", Icon: AirConditioningIcon },
    { name: "Smoking Allowed", Icon: SmokingIcon },
    { name: "Pet Friendly", Icon: PetFriendlyIcon },
    { name: "Garden", Icon: GardenIcon },
    { name: "Barbeque", Icon: BarbequeIcon },
    { name: "Firepit", Icon: FirepitIcon },
    { name: "Smart Home", Icon: SmartHomeIcon },
    { name: "Television", Icon: TelevisionIcon },
    { name: "Hot Tub", Icon: JacuzziIcon },
    { name: "Crib", Icon: CribIcon },
    { name: "Great View", Icon: LandscapeIcon },
    { name: "King Size Bed", Icon: KingSizeBedIcon },
    { name: "Garage", Icon: GarageIcon },
    { name: "EV Charging Station", Icon: ChargingStationIcon },
];

export default function Amenities() {
    const half = Math.ceil(amenities.length / 2);
    const amenitiesRow1 = amenities.slice(0, half);
    const amenitiesRow2 = amenities.slice(half);

    // We create 4 copies to ensure seamless scrolling even on ultra-wide screens
    // The keyframes animate from 0 to -25%, meaning it shifts exactly one original copy's width
    const row1Copies = [...amenitiesRow1, ...amenitiesRow1, ...amenitiesRow1, ...amenitiesRow1];
    const row2Copies = [...amenitiesRow2, ...amenitiesRow2, ...amenitiesRow2, ...amenitiesRow2];

    return (
        <section className={styles.amenitiesSection} id="amenities">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Choose the amenities that you want during your stay.</h2>
                    <p className={styles.description}>
                        With a wide range to choose from, we know you will be able to find the perfect stay.
                    </p>
                </div>
                <div className={styles.amenitiesContainer}>
                    <div className={`${styles.marqueeRow} ${styles.marqueeLeft}`}>
                        {row1Copies.map((amenity, index) => (
                            <div key={index} className={styles.amenityChip}>
                                <div className={styles.iconWrapper}>
                                    <amenity.Icon width={24} height={24} />
                                </div>
                                <span className={styles.amenityName}>{amenity.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className={`${styles.marqueeRow} ${styles.marqueeRight}`}>
                        {row2Copies.map((amenity, index) => (
                            <div key={index} className={styles.amenityChip}>
                                <div className={styles.iconWrapper}>
                                    <amenity.Icon width={24} height={24} />
                                </div>
                                <span className={styles.amenityName}>{amenity.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
