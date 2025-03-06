import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

type PanelProps = {
    children: React.ReactNode;
    image: string;
    Direction: "left" | "right";
    style?: React.CSSProperties; 
};

export default function SidePanel({Direction ,children, image, style }: PanelProps) {

    const ImageRef = useRef(null);


    useGSAP(() => {
        gsap.to(ImageRef.current, {
            scrollTrigger: ImageRef.current,
            duration: 1,
            opacity: 1,
            translate: "0 0",
            ease: "power3.inOut",
        })
    })

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: Direction === "right" ? "row-reverse" : "row",
                ...style
            }}

        >
            <img
                id="Image"
                ref={ImageRef}
                src={image}
                style={{
                    width: "40%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: "0",
                    translate: "0 50px",
                    position: "relative",
                }}
            />
            <div
                style={{
                    width: "60%",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                {children}
            </div>
        </div>
    );
}
