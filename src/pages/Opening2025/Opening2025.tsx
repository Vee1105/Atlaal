import { lazy, useEffect, useRef } from "react";
import styles from "./Opening2025.module.css";
import Lenis from "lenis";
const Body = lazy(() => import("../../Components/Opening2025/Body"));

const Opening2025 = () => {

    const lenis = useRef<Lenis | null>(null);

    useEffect(() => {
        lenis.current = new Lenis({
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            smoothWheel: true,
        })

        const animatte = (time: number) => {
            lenis.current?.raf(time);
            requestAnimationFrame(animatte);
        };

        requestAnimationFrame(animatte);

        return () => {
            lenis.current?.destroy();
        }

    }, [])

    return (
        <div
            className={`${styles.Opening2025} Opening2025`}
            style={{ overflow: "hidden", backgroundColor: "hsl(30, 30%, 70%)" }}
        >
            <Body />
        </div>
    );
};

export default Opening2025;
