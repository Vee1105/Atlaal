import { lazy, useRef, useState } from "react";
const Text = lazy(() => import("../../../Text/Text"));
import styles from "./Items.module.css";
import Front from "/Front.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Items() {
    const SliderRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className={styles.Items}>
                <div className={styles.ContentContainer}>
                    <Text
                        HasUnderline
                        style={{
                            fontSize: "2.2rem",
                            fontWeight: "300",
                            height: "10%",
                            cursor: "pointer",
                            lineHeight: "1.3",
                        }}
                        id="ItemsTitle"
                    >
                        Latest Items
                    </Text>
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
    price,
    UnderlineID,
    TextID,
}: ItemProps) => {
    const [Hovered, setHovered] = useState(false);
    const TheUnderlineID = document.querySelectorAll(`#${UnderlineID}`);
    const ItemsTitle = document.getElementById(`ItemsTitle`);
    const DivRef = useRef(null);

    useGSAP(() => {
        gsap.to([TheUnderlineID, ItemsTitle], {
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
                    TextID={TextID}
                    style={{ fontWeight: "500", fontSize: "1.3rem" }}
                >
                    {title}
                </Text>
            </div>
        </div>
    );
};
