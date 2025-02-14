import { useEffect } from "react";
import styles from "./Circle.module.css";

const MouseCircle = ({ parentDiv }: { parentDiv?: HTMLElement | null }) => {
    function mousePosition(event: MouseEvent) {
        const circle = document.getElementById("circle");
        if (circle) {
            setTimeout(() => {
                circle.style.left = event.clientX - 50 + "px";
                circle.style.top = event.clientY - 50 + "px";
            }, 100);
        }
    }

    function mouseOut() {
        const circle = document.getElementById("circle");
        if (circle) {
            circle.style.opacity = "0";
        }
    }

    function mouseEnter() {
        const circle = document.getElementById("circle");
        if (circle) {
            circle.style.opacity = "1";
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", mousePosition);
        parentDiv?.addEventListener("mouseleave", mouseOut);
        parentDiv?.addEventListener("mouseenter", mouseEnter);
        return () => {
            window.removeEventListener("mousemove", mousePosition);
            parentDiv?.removeEventListener("mouseleave", mouseOut);
            parentDiv?.removeEventListener("mouseenter", mouseEnter);
        };
    }, []);
    return <div id="circle" className={styles.darkCircle}></div>;
};

export default MouseCircle;
