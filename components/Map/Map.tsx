"use client";

import React, { useState } from "react";
import Image from "next/image";
import { APIProvider, Map as GoogleMap, AdvancedMarker } from "@vis.gl/react-google-maps";
import styles from "./styles.module.css";
import MarkerIcon from "@/public/icons/marker.svg";

// Assuming arbitrary coordinates for Hughesville, PA (visualized in reference)
const mapCenter = { lat: 41.2037, lng: -76.7119 };

const MAP_BOUNDS = {
    north: 41.24,
    south: 41.17,
    west: -76.75,
    east: -76.67,
};

const locations = [
    {
        id: 1,
        key: "topCenter",
        position: { lat: 41.222, lng: -76.71 },
        title: "Nabil's Comfy Cottage",
        price: 57,
        guests: 4,
        rating: 3,
        distance: "7 miles away",
        images: ["new-cottages/cottage-10.jpg", "new-cottages/cottage-11.jpg", "new-cottages/cottage-12.jpg"]
    },
    {
        id: 2,
        key: "mainBottom",
        position: { lat: 41.19, lng: -76.715 },
        title: "Shrey's Superb Cottage",
        price: 128,
        guests: 6,
        rating: 1,
        distance: "18 miles away",
        images: ["new-cottages/cottage-13.jpg", "new-cottages/cottage-14.jpg", "new-cottages/cottage-15.jpg"]
    },
    {
        id: 3,
        key: "topRight",
        position: { lat: 41.218, lng: -76.69 },
        title: "Jessica's Glam Cottage",
        price: 12,
        guests: 2,
        rating: 5,
        distance: "7 miles away",
        images: ["new-cottages/cottage-16.jpg", "new-cottages/cottage-17.jpg", "new-cottages/cottage-18.jpg"]
    }
];

export default function Map({ apiKey }: { apiKey: string }) {
    const [activeLocationId, setActiveLocationId] = useState<number>(2);

    if (!apiKey) {
        return (
            <section className={styles.containerSection} id="map">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Near You</h2>
                    <p className={styles.subHeading}>See what's right in your area</p>
                </div>
                <div className={styles.mapSection}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                        <p>Map API key is missing. Check your .env file.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.containerSection} id="map">
            <div className={styles.header}>
                <h2 className={styles.heading}>Places Near You</h2>
                <p className={styles.subHeading}>See what's right in your area</p>
            </div>
            <div className={styles.mapSection}>

                <div className={styles.sidebarContainer}>
                    <div className={styles.searchInputWrapper}>
                        <input
                            type="text"
                            placeholder="Search Destination..."
                            className={styles.searchInput}
                        />
                        <div className={styles.searchIconBox}>
                            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                    </div>
                    <div className={styles.listContainer}>
                        {locations.map((loc) => {
                            const isActive = activeLocationId === loc.id;
                            return (
                                <div
                                    key={loc.id}
                                    className={`${styles.listItem} ${isActive ? styles.listItemActive : ''}`}
                                    onClick={() => setActiveLocationId(loc.id)}
                                >
                                    <div className={styles.itemHeader}>
                                        <h4 className={styles.itemTitle}>{loc.title}</h4>
                                        <span className={styles.itemPrice}>${loc.price}</span>
                                    </div>
                                    <div className={styles.itemStats}>
                                        <div className={styles.statsLeft}>
                                            <span className={styles.guests}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                                                {loc.guests}
                                            </span>
                                            <div className={styles.rating}>
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <svg key={star} className={star <= loc.rating ? styles.starFilled : styles.starEmpty} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                                ))}
                                            </div>
                                        </div>
                                        <span className={styles.distance}>{loc.distance}</span>
                                    </div>

                                    {isActive && (
                                        <div className={styles.expandedImages}>
                                            {loc.images.map((imgSrc, i) => (
                                                <div key={i} className={styles.expandedImageWrapper}>
                                                    <Image src={`/images/${imgSrc}`} alt={`${loc.title} image ${i + 1}`} fill className={styles.expandedImage} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.mapWrapper}>
                    <APIProvider apiKey={apiKey}>
                        <GoogleMap
                            defaultCenter={mapCenter}
                            defaultZoom={13}
                            gestureHandling={"greedy"}
                            disableDefaultUI={true}
                            mapId="DEMO_MAP_ID"
                            restriction={{ latLngBounds: MAP_BOUNDS, strictBounds: false }}
                        >
                            {locations.map((loc) => (
                                <AdvancedMarker
                                    key={loc.id}
                                    position={loc.position}
                                    className={styles.marker}
                                    onClick={() => setActiveLocationId(loc.id)}
                                >
                                    {activeLocationId === loc.id ? (
                                        <MarkerIcon width={40} height={40} color='#22911E' />
                                    ) : (
                                        <MarkerIcon width={40} height={40} color='#FFFFFF' />
                                    )}
                                </AdvancedMarker>
                            ))}
                        </GoogleMap>
                    </APIProvider>
                </div>

            </div>
        </section>
    );
}
