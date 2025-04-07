import styles from "./Panel.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

type PanelProps = {
    children: React.ReactNode;
    image?: string;
    video?: string;
    link?: string;
};

export default function Panel({ children, image, video, link }: PanelProps) {
    const VideoRef = useRef<HTMLVideoElement>(null);

    const [paused, setPaused] = useState(false);
    const [muted, setMuted] = useState(true);

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
                cursor: "pointer",
            }}
        >
            {link && (
                <a
                    href={link}
                    rel="noreferrer"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: 2,
                    }}
                ></a>
            )}
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
                            className={`${styles.Buttons} ${styles.Left}`}
                            onClick={() => {
                                if (!paused) {
                                    VideoRef.current?.pause();
                                    setPaused(true);
                                } else {
                                    VideoRef.current?.play();
                                    setPaused(false);
                                }
                            }}
                        >
                            {paused ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path fill="white" d="M8 5.14v14l11-7z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M15 18q-.402 0-.701-.299T14 17V7q0-.402.299-.701T15 6h1.5q.402 0 .701.299T17.5 7v10q0 .402-.299.701T16.5 18zm-7.5 0q-.402 0-.701-.299T6.5 17V7q0-.402.299-.701T7.5 6H9q.402 0 .701.299T10 7v10q0 .402-.299.701T9 18z"
                                    />
                                </svg>
                            )}
                        </a>
                        <a
                            className={`${styles.Buttons} ${styles.Right}`}
                            onClick={() => {
                                if (!muted && VideoRef.current) {
                                    VideoRef.current.muted = true;
                                    setMuted(true);
                                } else if (VideoRef.current) {
                                    VideoRef.current.muted = false;
                                    setMuted(false);
                                }
                            }}
                        >
                            {muted ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="m19.8 22.6l-3.025-3.025q-.625.4-1.325.688t-1.45.462v-2.05q.35-.125.688-.25t.637-.3L12 14.8V20l-5-5H3V9h3.2L1.4 4.2l1.4-1.4l18.4 18.4zm-.2-5.8l-1.45-1.45q.425-.775.638-1.625t.212-1.75q0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.138T21 11.975q0 1.325-.363 2.55T19.6 16.8m-3.35-3.35L14 11.2V7.95q1.175.55 1.838 1.65T16.5 12q0 .375-.062.738t-.188.712M12 9.2L9.4 6.6L12 4z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974t-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2"
                                    />
                                </svg>
                            )}
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
                    gap: "0.5rem",
                }}
            >
                {children}
            </div>
        </div>
    );
}
