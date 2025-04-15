import { lazy, useEffect, useRef } from "react";
const Body = lazy(() => import("../../Components/Home/Collections/Body"));
const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
import styles from "./Home.module.css"
import Lenis from "lenis";

export default function HomePage() {
    const lenis = useRef<Lenis | null>(null);

    useEffect(() => {
        lenis.current = new Lenis({
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            smoothWheel: true,
        })

        const animate = (time: number) => {
            lenis.current?.raf(time);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        return () => {
            lenis.current?.destroy();
        }

    }, [])


    return (
        <div className={styles.Home}>
            <Header Animated />
            <Body />
            <Footer />
        </div>
    );
}
