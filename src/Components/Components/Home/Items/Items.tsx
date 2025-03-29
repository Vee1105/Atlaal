import { lazy, useRef, useState } from "react";
const Text = lazy(() => import("../../../Text/Text"));
import styles from "./Items.module.css";
import Front from "/Front.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Items() {
    const SliderRef = useRef<HTMLDivElement>(null);
    const ItemsID = document.getElementById("ItemsUnderline");

    const [itemsHovered, setItemsHovered] = useState(false);

    useGSAP(() => {
        gsap.to(ItemsID, {
            duration: 1,
            width: itemsHovered ? "100%" : "20%",
            translate: itemsHovered ? "101% 0" : "-101% 0",
            ease: "power3.inOut",
        });
    }, [itemsHovered]);

    return (
        <>
            <div className={styles.Items}>
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
                            style={{
                                fontSize: "2.2rem",
                                fontWeight: "300",
                                lineHeight: "1.3",
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
};

const BlankSpace = () => {
    return (
        <>
            <div style={{ opacity: 0 }}>1</div>
            <div style={{ opacity: 0 }}>1</div>
            <div style={{ opacity: 0 }}>1</div>
            <div style={{ opacity: 0 }}>1</div>
            <div style={{ opacity: 0 }}>1</div>
            <div style={{ opacity: 0 }}>1</div>
        </>
    );
};

const DiplayItems = ({
    title,
    image,
    UnderlineID,
}: ItemProps) => {
    const [Hovered, setHovered] = useState(false);
    const TheUnderlineID = document.querySelectorAll(`#${UnderlineID}`);
    const DivRef = useRef(null);
    const ImageRef = useRef(null)
    useGSAP(() => {
        gsap.to(TheUnderlineID, {
            duration: 1,
            width: Hovered ? "100%" : "20%",
            translate: Hovered ? "101% 0" : "-100% 0",
            ease: "power3.inOut",
        });
        gsap.to(DivRef.current, {
            duration: 0.5,
            scale: Hovered ? 0.95 : 1,
            ease: "power3.inOut",
        });
    }, [Hovered]);

    return (
        <div ref={DivRef} className={styles.ItemDisplay}>
            <img
                className={styles.ItemImage}
                ref={ImageRef}
                src={image}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={styles.Info}
            >
                <Text
                    UnderlineID={UnderlineID}
                    UnderlineStyle={{ width: "20%", translate: "-100% 0" }}
                    HasUnderline={true}
                    className={"Title"}
                    style={{ fontWeight: "500", fontSize: "1.3rem" }}
                >
                    {title}
                </Text>
            </div>
        </div>
    );
};
