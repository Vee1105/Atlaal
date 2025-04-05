import { lazy, useRef } from "react";
import styles from "./Body.module.css";
import Session1 from "/Session1.mp4";
const Text = lazy(() => import("../../../Text/Text"));
const Panel = lazy(() => import("../../Panel/Panel"));
const Items = lazy(() => import("../Items/Items"));

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../../../Button/Button";

export default function Body() {
    const ButtonRef = useRef(null);
    const TitleRef = useRef(null);

    useGSAP(() => {
        gsap.to(TitleRef.current, {
            duration: 1,
            opacity: 1,
            translate: "0 0",
            ease: "power3.inOut",
        });
        gsap.to(ButtonRef.current, {
            duration: 1,
            delay: 1,
            opacity: 1,
            translate: "0 0",
            ease: "power3.inOut",
        });
    });

    return (
        <div className={styles.Body}>
            <Panel video={Session1}>
                <Text
                    type="title"
                    ref={TitleRef}
                    style={{ opacity: 0, translate: "0 50px", fontWeight: 400 }}
                    AffectedByTheme={false}
                >
                    Opening 2025
                </Text>
                <div
                    ref={ButtonRef}
                    style={{ opacity: 0, translate: "0 50px" }}
                >
                    <Button UnderlineButton color="White">
                        <Text AffectedByTheme={false}>
                            Shop The Collection
                        </Text>
                    </Button>
                </div>
            </Panel>
            <Items backgroundColor="hsl(0, 0.00%, 100%)" mode="Dark" />
        </div>
    );
}
