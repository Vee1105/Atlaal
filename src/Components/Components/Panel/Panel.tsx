import React from "react";

type PanelProps = {
    children: React.ReactNode;
    image: string;
};

export default function Panel({ children, image }: PanelProps) {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
            }}
        >
            <img
                src={image}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                }}
            />
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom: "70px",
                }}
            >
                {children}
            </div>
        </div>
    );
}
