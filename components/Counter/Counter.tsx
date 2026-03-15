"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
    end: number;
    duration?: number;
    className?: string;
}

export default function Counter({ end, duration = 2000, className }: CounterProps) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            
            if (entry.isIntersecting) {
                // Reset and start animation
                let startTimestamp: number | null = null;
                
                const step = (timestamp: number) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                    // Easing function for smoother animation
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    setCount(Math.floor(easeOutQuart * end));

                    if (progress < 1) {
                        animationFrameId = window.requestAnimationFrame(step);
                    } else {
                        setCount(end); // Ensure exact finish
                    }
                };
                
                animationFrameId = window.requestAnimationFrame(step);
            } else {
                // Instantly reset count to 0 when scrolled out of view
                if (animationFrameId) {
                    window.cancelAnimationFrame(animationFrameId);
                }
                setCount(0);
            }
        }, { threshold: 0.1 });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
            if (observer && elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [end, duration]);

    return <span ref={elementRef} className={className}>{count.toLocaleString()}</span>;
}
