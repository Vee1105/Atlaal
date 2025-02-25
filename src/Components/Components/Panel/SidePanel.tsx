import React from "react";

type PanelProps = {
    children: React.ReactNode;
    image: string;
    Direction: "left" | "right";
    style?: React.CSSProperties; 
};

export default function SidePanel({Direction ,children, image, style }: PanelProps) {
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
                src={image}
                style={{
                    width: "40%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: "1",
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
