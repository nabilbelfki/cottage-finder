"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

import WifiIcon from "@/public/icons/wifi.svg";
import BarbequeIcon from "@/public/icons/barbeque.svg";
import SwimmingPoolIcon from "@/public/icons/swimming-pool.svg";
import AirConditioningIcon from "@/public/icons/air-conditioning.svg";
import FirepitIcon from "@/public/icons/firepit.svg";
import SmokingIcon from "@/public/icons/smoking.svg";
import GardenIcon from "@/public/icons/garden.svg";
import WashingMachineIcon from "@/public/icons/washing-machine.svg";
import KingSizeBedIcon from "@/public/icons/king-size.svg";
import GarageIcon from "@/public/icons/garage.svg";
import LandscapeIcon from "@/public/icons/landscape.svg";
import TelevisionIcon from "@/public/icons/television.svg";
import SmartHomeIcon from "@/public/icons/smart-home.svg";
import ChargingStationIcon from "@/public/icons/charging-station.svg";

const amenitiesList = [
    { name: "Free WiFi", Icon: WifiIcon },
    { name: "Grill/Barbecue", Icon: BarbequeIcon },
    { name: "Swimming Pool", Icon: SwimmingPoolIcon },
    { name: "Air Conditioning", Icon: AirConditioningIcon },
    { name: "Fire pit", Icon: FirepitIcon },
    { name: "Smoking", Icon: SmokingIcon },
    { name: "Outdoor Garden", Icon: GardenIcon },
    { name: "Washing Machine", Icon: WashingMachineIcon },
    { name: "King Sized Bed", Icon: KingSizeBedIcon },
    { name: "Garage", Icon: GarageIcon },
    { name: "Good View", Icon: LandscapeIcon },
    { name: "Television", Icon: TelevisionIcon },
    { name: "Smart House", Icon: SmartHomeIcon },
    { name: "EV Charger", Icon: ChargingStationIcon },
];

export default function Amenities() {
    return (
        <motion.section 
            className={styles.amenitiesSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className={styles.container}>
                <h2 className={styles.heading}>Amenities</h2>
                <div className={styles.grid}>
                    {amenitiesList.map((item, index) => (
                        <div key={index} className={styles.amenityItem}>
                            <span className={styles.icon}>
                                <item.Icon width={24} height={24} />
                            </span>
                            <span className={styles.name}>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
