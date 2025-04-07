import { lazy, useRef, useState } from "react";
const Text = lazy(() => import("../../../Text/Text"));
import styles from "./Items.module.css";
import Front from "/Front.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Colors } from "../../../Themes/Theme";
import { ScrollTrigger } from "gsap/all";

type ItemsProps = {
    backgroundColor: string;
    mode: "Light" | "Dark";
};

export default function Items({ backgroundColor, mode = "Light" }: ItemsProps) {
    const SliderRef = useRef<HTMLDivElement>(null);
    const ItemsID = document.getElementById("ItemsUnderline");
    const ItemsRef = useRef<HTMLDivElement>(null);
    const [itemsHovered, setItemsHovered] = useState(false);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(ItemsID, {
            duration: 1,
            width: itemsHovered ? "100%" : "20%",
            translate: itemsHovered ? "101% 0" : "-101% 0",
            ease: "power3.inOut",
        });
        gsap.to(ItemsRef.current, {
            scrollTrigger: {
                trigger: ItemsRef.current,
                start: "top top",
                end: "bottom top",
                toggleActions: "play none none reverse",
                pin: true,
                scrub: 1,
            },
        })
    }, [itemsHovered]);

    const colors = Colors[`${mode == "Light" ? "Dark" : "Light"}`];

    return (
        <>
            <div
                style={{ backgroundColor: backgroundColor }}
                className={styles.Items}
                ref={ItemsRef}
            >
                <div className={styles.ContentContainer}>
                    <div
                        style={{
                            cursor: "pointer",
                            lineHeight: "1.3",
                            margin: "1%",
                            overflow: "hidden",
                        }}
                        onMouseEnter={() => setItemsHovered(true)}
                        onMouseLeave={() => setItemsHovered(false)}
                    >
                        <Text
                            HasUnderline={true}
                            UnderlineID="ItemsUnderline"
                            UnderlineStyle={{
                                backgroundColor: colors.textColor.default,
                            }}
                            type="subtitle"
                            style={{
                                fontWeight: "300",
                                lineHeight: "1.3",
                                color: colors.textColor.default,
                            }}
                            id="ItemsTitle"
                        >
                            Latest Items
                        </Text>
                    </div>
                    {/* WHEN THERE IS MORE THAN ONE ITEM ENABLE THIS. OTHERWISE LEAVE IT OFF */}
                    {/* <div className={styles.ButtonNav}>
                    <a 
                        onClick={() => {
                            if (SliderRef.current){
                                SliderRef.current.scrollLeft -= 600
                            }
                        }}>
                        Left
                    </a>
                    <a 
                        onClick={() => {
                            if (SliderRef.current){
                                SliderRef.current.scrollLeft += 600
                            }
                        }}
                        style={{right: 0}}>
                        Right
                    </a>
                </div> */}
                    <div ref={SliderRef} className={styles.Item}>
                        {/* <BlankSpace /> */}
                        <DiplayItems
                            title="Atlaal's T-Shirt"
                            image={Front}
                            price={600}
                            UnderlineID={"Underline1"}
                            TextID="Text1"
                            mode={mode}
                        />
                        {/* <BlankSpace /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

type ItemProps = {
    title: string;
    image: string;
    price: number;
    UnderlineID?: string;
    TextID?: string;
    ImageOnHover?: string;
    mode: "Light" | "Dark";
};

// const BlankSpace = () => {
//     return (
//         <>
//             <div style={{ opacity: 0 }}>1</div>
//             <div style={{ opacity: 0 }}>1</div>
//             <div style={{ opacity: 0 }}>1</div>
//             <div style={{ opacity: 0 }}>1</div>
//             <div style={{ opacity: 0 }}>1</div>
//             <div style={{ opacity: 0 }}>1</div>
//         </>
//     );
// };

const DiplayItems = ({
    title,
    image,
    UnderlineID,
    mode = "Light",
}: ItemProps) => {
    const [Hovered, setHovered] = useState(false);
    const TheUnderlineID = document.querySelectorAll(`#${UnderlineID}`);
    const DivRef = useRef(null);
    const ImageRef = useRef(null);
    useGSAP(() => {
        gsap.to(ImageRef.current, {
            scrollTrigger: {
                trigger: ImageRef.current,
                start: "top 70%",
                toggleActions: "play none none none",
            },
            duration: 1,
            height: "100%",
            ease: "power3.inOut",
        });
        gsap.to(TheUnderlineID, {
            duration: 1,
            width: Hovered ? "100%" : "20%",
            translate: Hovered ? "101% 0" : "-100% 0",
            ease: "power3.inOut",
        });
        gsap.to(DivRef.current, {
            duration: 0.5,
            ease: "power3.inOut",
        });
    }, [Hovered]);

    const colors = Colors[`${mode == "Light" ? "Dark" : "Light"}`];

    return (
        <div ref={DivRef} className={styles.ItemDisplay}>
            <div className={styles.ItemImageDiv}>
                <img
                    className={styles.ItemImage}
                    ref={ImageRef}
                    src={image}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    height={"120%"}
                />
            </div>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={styles.Info}
            >
                <Text
                    UnderlineID={UnderlineID}
                    UnderlineStyle={{
                        width: "20%",
                        translate: "-100% 0",
                        backgroundColor: colors.textColor.default,
                    }}
                    HasUnderline={true}
                    className={"Title"}
                    style={{
                        fontWeight: "500",
                        fontSize: "1.3rem",
                        color: colors.textColor.default,
                    }}
                >
                    {title}
                </Text>
            </div>
        </div>
    );
};
