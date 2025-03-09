import { lazy, useRef } from "react";
import styles from "./Body.module.css";
import SummerImage from "/SummerCollection.jpg";
import OceanOfFahsion from "/OceanOfFashion.jpg";
import Session1 from "/Session1.mp4";
const Text = lazy(() => import("../../../Text/Text"));
const CollectionButton = lazy(() => import("./CollectionButton"));
const Panel = lazy(() => import("../../Panel/Panel"));
const SidePanel = lazy(() => import("../../Panel/SidePanel"));
const MultiImagePanel = lazy(() => import("../../Panel/MultiImagePanel"));

import Model1 from "/Model1.jpg";
import Model2 from "/Model2.jpg";
import Model3 from "/Model3.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Body() {
    const ButtonRef = useRef(null);
    const TitleRef = useRef(null);

    useGSAP(() => {
        gsap.to(ButtonRef.current, {
            duration: 1,
            opacity: 1,
            translate: "0 0",
            ease: "power3.inOut",
        })

        gsap.to(TitleRef.current, {
            duration: 1,
            opacity: 1,
            translate: "0 0",
            ease: "power3.inOut",
        })
    });

    return (
        <div className={styles.Collections}>
            <Panel video={Session1}>
                <Text
                    type="title"
                    ref={TitleRef}
                    style={{ color: "white", opacity: 0, translate: "0 50px", marginBottom: "20px", zIndex: 2 }}
                >
                    Opening Collection 2025
                </Text>
                <CollectionButton
                    DivStyling={{ opacity: 0, translate: "0 50px", zIndex: 2 }}
                    ref={ButtonRef}
                >
                    Shop Now
                </CollectionButton>
            </Panel>
            <SidePanel Direction="left" image={SummerImage}>
                <Text type="title">Summer Collection</Text>
                <CollectionButton>Shop Now</CollectionButton>
            </SidePanel>
            <Text style={{ lineHeight: "1.2" }} type="title">
                Rich Culture By The House
            </Text>
            <SidePanel
                style={{ gap: "70px" }}
                Direction="right"
                image={OceanOfFahsion}
            >
                <Text type="title">
                    Drown Yourself With
                </Text>
                <Text
                    style={{ fontStyle: "italic" }}
                    type="subtitle"
                >
                    Culture This is a test for the new Work Sans font integerated in this project.
                </Text>
                <CollectionButton>Explore</CollectionButton>
            </SidePanel>

            <MultiImagePanel
                Direction="right"
                images={[Model1, Model2, Model3]}
            >
                <Text type="title">Look Good Anywhere</Text>
            </MultiImagePanel>
        </div>
    );
}
