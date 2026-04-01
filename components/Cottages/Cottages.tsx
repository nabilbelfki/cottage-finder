"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import BedIcon from "@/public/icons/bed.svg";
import BathtubIcon from "@/public/icons/bathtub.svg";
import Like from "@/components/Like/Like";

const cottages = [
    { id: 1, title: "Whispering Pine Cottage", location: "Vancouver, BC", price: 150, image: "whispering-pine-cottage.jpg", beds: 2, bath: 1, liked: true },
    { id: 2, title: "Willow Lake Lodge", location: "Kelowna, BC", price: 200, image: "willowlakelodge.jpg", beds: 2, bath: 1, liked: true },
    { id: 3, title: "Sunnybrook Farmhouse", location: "Banff, AB", price: 180, image: "sunnybrook-farmhouse.jpg", beds: 2, bath: 1, liked: false },
    { id: 4, title: "Cedar Peak Cabin", location: "Whistler, BC", price: 220, image: "cedar-peak-cabin.jpg", beds: 2, bath: 1, liked: true },
    { id: 5, title: "Mossy Hollow Cabin", location: "Tofino, BC", price: 180, image: "mossy-hollow-cabin.jpg", beds: 2, bath: 1, liked: true },
    { id: 6, title: "Meadowview Cottage", location: "Victoria, BC", price: 170, image: "meadowview-cottage.jpg", beds: 2, bath: 1, liked: false },
    { id: 7, title: "Eagles Perch Cabin", location: "Canmore, AB", price: 240, image: "eagles-perch-cabin.jpg", beds: 2, bath: 1, liked: false },
    { id: 8, title: "Seabreeze Cottage", location: "Halifax, NS", price: 250, image: "seabreeze-cottage.jpg", beds: 2, bath: 1, liked: true },
    { id: 9, title: "Galloway Cottage", location: "Muskoka, ON", price: 130, image: "galloway-cottage.jpg", beds: 2, bath: 1, liked: true },
    { id: 10, title: "Lakeview Cottage", location: "Lake Michagan, MI", price: 190, image: "lakeview-cottage.jpg", beds: 1, bath: 3, liked: false },
    { id: 11, title: "Misty Mountain Cabin", location: "Lake Michagan, MI", price: 190, image: "misty-mountain-cabin.jpg", beds: 3, bath: 1, liked: true },
    { id: 12, title: "Foraging Logs Cabin", location: "Lake Michagan, MI", price: 190, image: "foraging-logs-cabin.jpg", beds: 1, bath: 1, liked: false },
];

export default function Cottages() {
    const [cottageState, setCottageState] = useState(cottages);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleLike = (id: number) => {
        setCottageState(prev => prev.map(cottage =>
            cottage.id === id ? { ...cottage, liked: !cottage.liked } : cottage
        ));
    };

    return (
        <section className={styles.cottagesSection} id="cottages">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.filterToggle} onClick={() => setIsFilterOpen(!isFilterOpen)}>
                        <span>Filter</span>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isFilterOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {isFilterOpen && (
                    <div className={styles.filterMenu}>

                        <div className={styles.filterColumn}>
                            <h4>Distance</h4>
                            <label className={styles.radioLabel}><input type="radio" name="distance" /> &lt; 10 miles away</label>
                            <label className={styles.radioLabel}><input type="radio" name="distance" /> &lt; 25 miles away</label>
                            <label className={styles.radioLabel}><input type="radio" name="distance" defaultChecked /> &lt; 50 miles away</label>
                            <label className={styles.radioLabel}><input type="radio" name="distance" /> &lt; 75 miles away</label>
                            <label className={styles.radioLabel}><input type="radio" name="distance" /> &gt; 100 miles away</label>
                        </div>

                        <div className={styles.filterColumn}>
                            <h4>Reviews</h4>
                            <label className={styles.checkboxLabel}><input type="checkbox" defaultChecked /> 1 Star</label>
                            <label className={styles.checkboxLabel}><input type="checkbox" /> 2 Stars</label>
                            <label className={styles.checkboxLabel}><input type="checkbox" /> 3 Stars</label>
                            <label className={styles.checkboxLabel}><input type="checkbox" /> 4 Stars</label>
                            <label className={styles.checkboxLabel}><input type="checkbox" /> 5 Stars</label>
                        </div>

                        <div className={styles.amenitiesGridBox}>
                            <h4>Amenities</h4>
                            <div className={styles.amenitiesGridInner}>
                                <label className={styles.checkboxLabel}><input type="checkbox" defaultChecked /> Pet-friendly</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Dishwasher</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Air Conditioning</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Grill/Barbecue</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Non-smoking</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Swimming Pool</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Microwave</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Smart Appliances</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Smoking</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Free WiFi</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Stove/Oven</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Fireplace</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Laundry Machine</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Free Parking</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> TV</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Garden</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Hot tub</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Child-friendly</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Bathtub</label>
                                <button className={styles.applyBtn}>Apply</button>
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.grid}>
                    {cottageState.map((cottage) => (
                        <Link href="/cottage" key={cottage.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={`/images/cottages/${cottage.image}`}
                                    alt={cottage.title}
                                    fill
                                    className={styles.image}
                                />
                                <div className={styles.heartBtn} onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                                    <Like
                                        liked={!!cottage.liked}
                                        toggle={() => toggleLike(cottage.id)}
                                    />
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardInfo}>
                                    <h3 className={styles.title}>{cottage.title}</h3>
                                    <div className={styles.locationBedsAndBaths}>
                                        <p className={styles.location}>{cottage.location}</p>
                                        <div className={styles.bedsAndBaths}>
                                            <div className={styles.bed}>
                                                <BedIcon width={10} height={10} />
                                                <span className={styles.bedText}>{cottage.beds}</span>
                                            </div>
                                            <div className={styles.bath}>
                                                <BathtubIcon width={10} height={10} />
                                                <span className={styles.bathText}>{cottage.bath}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.priceContainer}>
                                    <span className={styles.price}>${cottage.price}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.pagination}>
                    <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                    <button className={styles.pageBtn}>2</button>
                    <button className={styles.pageBtn}>3</button>
                    <span className={styles.dots}>...</span>
                    <button className={styles.pageBtn}>8</button>
                    <button className={styles.pageBtn}>9</button>
                    <button className={styles.pageBtn}>10</button>
                </div>
            </div>
        </section>
    );
}
