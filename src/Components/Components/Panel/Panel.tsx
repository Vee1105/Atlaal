import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

type PanelProps = {
    children: React.ReactNode;
    image?: string;
    video?: string;
};

export default function Panel({ children, image, video }: PanelProps) {
    const VideoRef = useRef<HTMLVideoElement>(null);

    useGSAP(() => {
        gsap.to(VideoRef.current, {
            height: "100%",
            duration: 1,
            ease: "power3.inOut",
        });
    });

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
            {video && (
                <video
                    src={video}
                    typeof="video/mp4"
                    width={"100%"}
                    height={"150%"}
                    ref={VideoRef}
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    style={{ position: "absolute", objectFit: "cover" }}
                />
            )}
            {image && (
                <img
                    src={image}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                    }}
                />
            )}

            <div
                style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom: "70px",
                    gap: "10px",
                }}
            >
                {children}
            </div>
        </div>
    );
}
