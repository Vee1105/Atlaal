import { lazy, useRef } from "react";
import styles from "./Body.module.css";
import Session1 from "/Session1.mp4";
const Text = lazy(() => import("../../../Text/Text"));
const CollectionButton = lazy(() => import("./CollectionButton"));
const Panel = lazy(() => import("../../Panel/Panel"));
// const SidePanel = lazy(() => import("../../Panel/SidePanel"));
// const MultiImagePanel = lazy(() => import("../../Panel/MultiImagePanel"));

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Body() {
    const ButtonRef = useRef(null);
    const TitleRef = useRef(null);
    const TextRef = useRef(null);

    useGSAP(() => {

        gsap.to(TitleRef.current, {
            duration: 1,
            opacity: 1,
            translate: "0 0",
            delay: 1,
            ease: "power3.inOut",
        })
        gsap.to(TextRef.current, {
            duration: 1,
            opacity: 1,
            translate: "0 0",
            delay: 1.5,
            ease: "power3.inOut",
        })
        gsap.to(ButtonRef.current, {
            duration: 1,
            opacity: 1,
            translate: "0 0",
            delay: 2,
            ease: "power3.inOut",
        })

    });

    return (
        <div className={styles.Collections}>
            <Panel video={Session1}>
                <Text
                    type="title"
                    ref={TitleRef}
                    style={{ color: "white", opacity: 0, translate: "0 50px"}}
                >
                    Opening Collection 2025
                </Text>
                <Text type="subtext" ref={TextRef} style={{width: "520px", textAlign: "center", opacity: 0, translate: "0 50px"}}>
                    We Are pleased to announce our opening collection,
                    and We Are celebrating It with a 50% off on the entire collection.
                </Text>
                <CollectionButton
                    DivStyling={{ opacity: 0, translate: "0 50px" }}
                    ref={ButtonRef}
                >
                    Shop Now
                </CollectionButton>
            </Panel>
        </div>
    );
}
