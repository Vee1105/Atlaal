import React from "react";

type PanelProps = {
    children: React.ReactNode;
    image: string;
};

export default function SidePanel({ children, image }: PanelProps) {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 300
            }}

        >
            <img
                src={image}
                style={{
                    width: "30%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: "1",
                    position: "relative",
                }}
            />
            <div
                style={{
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
