import styles from "./Panel.module.css";
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
            scrollTrigger: {
                trigger: "body",
                start: "top -40%",
                end: "top -20%",
                toggleActions: "play none reverse none",
            },
            height: "60%",
            duration: 0.4,
            ease: "power3.inOut",
        });

        gsap.from(VideoRef.current, {
            height: "150%",
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
                <>
                    <video
                        src={video}
                        typeof="video/mp4"
                        width={"100%"}
                        height={"100%"}
                        ref={VideoRef}
                        autoPlay
                        loop
                        muted
                        preload="auto"
                        style={{ position: "absolute", objectFit: "cover" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            display: "flex",
                            alignItems: "flex-end",
                            padding: "2rem 0",
                        }}
                    >
                        <a
                            style={{ left: "3rem", position: "absolute" }}
                            className={styles.Buttons}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="white"
                                    d="M15 18q-.402 0-.701-.299T14 17V7q0-.402.299-.701T15 6h1.5q.402 0 .701.299T17.5 7v10q0 .402-.299.701T16.5 18zm-7.5 0q-.402 0-.701-.299T6.5 17V7q0-.402.299-.701T7.5 6H9q.402 0 .701.299T10 7v10q0 .402-.299.701T9 18z"
                                />
                            </svg>
                        </a>
                        <a
                            style={{ right: "3rem", position: "absolute" }}
                            className={styles.Buttons}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none">
                                    <path
                                        fill="white"
                                        d="M4.158 13.93a3.75 3.75 0 0 1 0-3.86a1.5 1.5 0 0 1 .993-.7l1.693-.339a.45.45 0 0 0 .258-.153L9.17 6.395c1.182-1.42 1.774-2.129 2.301-1.938S12 5.572 12 7.42v9.162c0 1.847 0 2.77-.528 2.962c-.527.19-1.119-.519-2.301-1.938L7.1 15.122a.45.45 0 0 0-.257-.153L5.15 14.63a1.5 1.5 0 0 1-.993-.7"
                                    />
                                    <path
                                        stroke="white"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        d="m15 15l6-6m0 6l-6-6"
                                    />
                                </g>
                            </svg>
                        </a>
                    </div>
                </>
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
                    gap: "1.5rem",
                }}
            >
                {children}
            </div>
        </div>
    );
}
