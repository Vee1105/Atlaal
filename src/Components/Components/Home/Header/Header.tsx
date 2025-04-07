import { lazy, useEffect, useRef, useState } from "react";
const Button = lazy(() => import("../../../Button/Button"));
import styles from "./Header.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Colors, getTheme } from "../../../Themes/Theme";
const Text = lazy(() => import("../../../Text/Text"));

export const MobileDevice = () => {
    const width = window.innerWidth;
    if (width <= 900) return true;
    else return false;
};

type StyleAndDimensions = {
    width?: string | number;
    height?: string | number;
    marginTop?: string | number;
    marginLeft?: string | number;
    paddingTop?: string | number;
};

export default function Header() {
    const [Dimensions, setDimensions] = useState<StyleAndDimensions>({
        width: 0,
        height: 0,
    });
    const [TransitionStyles, setTransitionStyles] =
        useState<StyleAndDimensions>({
            width: 0,
            height: 0,
            marginTop: 0,
            marginLeft: 0,
            paddingTop: 0,
        });

    useEffect(() => {
        setDimensions({
            width: MobileDevice() ? "100px" : "8rem",
            height: MobileDevice() ? "50px" : "4rem",
        });
        setTransitionStyles({
            width: Dimensions.width,
            height: Dimensions.height,
            marginTop: MobileDevice() ? "5px" : "10px",
            marginLeft: MobileDevice() ? "20px" : 0,
            paddingTop: MobileDevice() ? "10px" : "0px",
        });
    }, [Dimensions.height, Dimensions.width]);

    const LogoRef = useRef(null);
    const HeaderRef = useRef(null);
    const HeaderText = document.getElementsByClassName("HeaderText");

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const theme = getTheme();
    const colors = Colors[`${theme}`];

    const Letters = document.getElementsByClassName("Letter");
    const Icons = document.getElementsByClassName("Icon");

    useGSAP(() => {
        gsap.to([Letters, Icons], {
            scrollTrigger: {
                trigger: "body",
                start: "top -80%",
                end: "top -80%",
                toggleActions: "play none reverse none",
            },
            fill: colors?.textColor.default,
            duration: 0.2,
            ease: "power3.inOut",
        });

        gsap.to(HeaderText, {
            scrollTrigger: {
                trigger: "body",
                start: "top -80%",
                end: "top -80%",
                toggleActions: "play none reverse none",
            },
            color: colors?.textColor.default,
            duration: 0.1,
            ease: "power3.inOut",
        });

        gsap.to(HeaderRef.current, {
            scrollTrigger: {
                trigger: "body",
                start: "top -80%",
                end: "top -80%",
                toggleActions: "play none reverse none",
            },
            duration: 0.1,
            ease: "power3.inOut",
            backgroundColor: colors.backgroundColor,
        });
    });

    return (
        <div
            style={{
                height: MobileDevice() ? "auto" : "4rem",
                padding: MobileDevice() ? "0px 0px" : "5px 0px",
            }}
            ref={HeaderRef}
            className={styles.HeaderContainer}
        >
            <div className={styles.Header}>
                <LeftSide />
                <div className={styles.LogoDiv}>
                    <div ref={LogoRef} style={TransitionStyles}>
                        <Logo />
                    </div>
                </div>

                <RightSide />
            </div>
        </div>
    );
}

export const LogoUnanimated = ({
    color,
    style,
}: {
    color?: string;
    style?: React.CSSProperties;
}) => {
    const styless = {
        fill: color ? color : "#fff",
        ...style,
    };

    const LogoPath = document.querySelectorAll(".LogoPath");

    const [hovered, setHovered] = useState(false);

    useGSAP(() => {
        gsap.to(LogoPath, {
            duration: 0.75,
            fill: hovered ? "transparent" : color ? color : "#fff",
            stroke: hovered ? "white" : "transparent",
            strokeWidth: "1px",
            ease: "power3.inOut",
        });
    }, [hovered]);

    return (
        <svg
            id="prefix__Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 643 307.18"
        >
            <g id="prefix__Layer_1-2" data-name="Layer 1">
                <path
                    style={styless}
                    className="LogoPath"
                    onMouseEnter={() => {
                        setHovered(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                    }}
                    d="M170.87 172.16c.45-4.49.72-9.42 1.02-14.76.3-5.34.61-10.82.95-16.42l4.92-53.99c.17-2.88.4-6.43.7-10.63.3-4.2.68-8.44 1.15-12.73.47-4.28 1.02-8.35 1.65-12.22.64-3.86 1.17-7.1 1.59-9.74.42-2.63 1-5.11 1.72-7.44s1.57-4.92 2.55-7.76c.97-2.84 2.18-6.21 3.63-10.12 1.18-3.18 2.64-6.9 4.38-11.16a3.245 3.245 0 014.19-1.79c1.44.57 2.27 2.08 1.99 3.61-1.37 7.57-2.48 17.99-3.31 31.23-.93 14.85-3.68 37.15-4.45 61.84l-.98 22.31c-.51 13.57-2.1 27.15-4.77 40.72-2.67 13.57-5.75 25.88-9.23 36.9-4.58 14.51-10.22 28.25-16.92 41.23-6.7 12.98-14.63 24.35-23.8 34.1-9.16 9.75-19.6 17.5-31.3 23.22s-24.81 8.59-39.32 8.59c-10.86 0-20.36-1.74-28.51-5.22-8.14-3.48-14.97-8.25-20.49-14.32-5.52-6.07-11.11-12.15-13.91-20.29C1.52 259.18 0 249.08 0 239.91c0-18.32 1.88-35.34 7.73-51.5 5.34-14.76 9.48-30.84 16.92-46.87.89-1.92 3.13-2.82 5.11-2.07 2.12.8 3.16 3.19 2.32 5.29-4.54 11.4-7.82 21.5-9.84 30.28-2.25 9.76-3.37 18.67-3.37 26.72 0 19.77 5.39 34.49 16.16 44.16 10.77 9.67 25.71 14.51 44.79 14.51 14.84 0 27.61-2.44 38.3-7.32 10.69-4.88 19.58-10.9 26.66-18.07 0 0 21.92-21.6 26.09-62.93zM219.26 209.74a3.255 3.255 0 01-2.44-3.71c1.47-8.54 2.8-23.97 4.01-46.28l2.55-64.77c.59-13.32 1.4-23.14 2.42-29.46s2.97-13.72 5.85-22.21c2.7-7.93 6.8-18.09 12.32-30.47a3.051 3.051 0 013.85-1.62h.02c1.49.56 2.32 2.16 1.87 3.68-2.43 8.24-4.24 24.54-5.45 48.9l-4.2 74.7c-1.15 21.8-6.81 44.91-16.98 69.33a3.272 3.272 0 01-3.79 1.91z"
                />
                <path
                    style={styless}
                    className="LogoPath"
                    onMouseEnter={() => {
                        setHovered(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                    }}
                    d="M309.63 200.04c20.95-.24 207.55-5.25 224.48-13.88 17.05-8.69 30.84-21.91 41.36-39.64s15.86-33.6 16.03-47.59c-.17-12.05-5.98-18.15-17.43-18.32-10.52 0-20.74 3.9-30.67 11.71-7.21 5.6-14.93 13.45-23.16 23.54 5.51-17.9 8.78-34.91 9.8-51.03 1.83-31.56 3.83-51.91 6-61.08.36-1.54-.5-3.09-2-3.59a3.05 3.05 0 00-3.74 1.63c-7.26 16.18-12.14 30.31-14.64 42.42-1.53 5.77-2.67 17.35-3.44 34.74-.93 26.72-2.63 44.67-5.09 53.83l-17.56 25.71c-5.61.75-97.69.05-107.56.33-6.57-.05-71.93-1.08-76.07-3.11-4.24-2.08-7.59-5.36-10.05-9.86-2.46-4.5-4.16-10.18-5.09-17.05-.93-6.87-1.4-15.1-1.4-24.69 0-23.67.61-43.56 1.85-59.68 1.1-14.47 2.4-25.59 3.88-33.36.28-1.46-.53-2.91-1.93-3.43l-.28-.1c-1.54-.57-3.26.19-3.88 1.71-1.78 4.35-3.25 8.12-4.41 11.33-1.4 3.86-2.55 7.21-3.44 10.05-.89 2.84-1.61 5.45-2.16 7.83s-1.04 4.84-1.46 7.38c-.59 3.05-1.17 6.58-1.72 10.56-.55 3.99-1.06 8.08-1.53 12.28-.47 4.2-.81 8.29-1.02 12.28-.21 3.99-.4 7.42-.57 10.31l-3.44 72.54c-.34 5.52-.66 10.12-.95 13.81-.3 3.69-.89 6.98-1.78 9.86-.89 2.89-2.27 5.58-4.14 8.08-1.87 2.5-4.45 5.24-7.76 8.21-6.28 5.6-13.72 9.78-22.33 12.53-7.83 2.51-15.53 4.19-23.12 5.05a3.287 3.287 0 00-2.83 2.45l-.24.95c-.31 1.25.13 2.55 1.14 3.35 1.17.93 2.6 1.9 4.3 2.9 2.59 1.53 5.33 2.93 8.21 4.2 2.88 1.27 5.79 2.42 8.72 3.44 2.93 1.02 5.54 1.61 7.83 1.78 2.55-.68 5.13-1.78 7.76-3.31s5.09-3.24 7.38-5.15c2.29-1.91 4.41-3.97 6.36-6.17 1.95-2.21 3.65-4.2 5.09-5.98 3.48-4.92 6.55-10.35 9.23-16.29 2.66-5.91 4.97-12.46 6.91-19.64 0-.03.05-.03.06 0 1.52 3.19 3.46 5.84 5.82 7.94 2.37 2.12 4.94 3.8 7.7 5.03a34.28 34.28 0 008.46 2.55c2.72.44 6.58.78 9.28.68m239.71-57.13c-11.81 5.15-24.42 8.34-37.82 9.58l5.6-7.98c12.43-17.13 24.87-25.7 37.3-25.7 3.59 0 6.63.78 9.12 2.33s3.73 3.37 3.73 5.44c-.14 5.73-6.11 11.17-17.93 16.32zM612.45 201.89c-1.66-.41-2.73-2.02-2.44-3.7 1.47-8.54 2.8-23.97 4.01-46.28l2.55-64.77c.59-13.32 1.38-23.14 2.35-29.46.97-6.32 2.93-13.72 5.85-22.21 2.74-7.93 6.86-18.08 12.38-30.46a3.062 3.062 0 013.86-1.63c1.5.56 2.32 2.17 1.87 3.71-2.42 8.32-4.24 24.99-5.45 50.01l-4.2 73.55c-1.15 21.64-6.81 44.75-16.99 69.32a3.256 3.256 0 01-3.79 1.91z"
                />
            </g>
        </svg>
    );
};

export const Logo = () => {
    const styless = {
        fill: "#fff",
    };

    const Group = document.getElementsByClassName("Group");

    useGSAP(() => {
        // Fading
        gsap.to(Group, {
            opacity: 1,
            duration: 1,
            delay: 1.5,
            ease: "power3.inOut",
        });
    });

    return (
        <div>
            <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 649.52 315.34"
            >
                <g
                    style={{ opacity: 0 }}
                    className="Group"
                    id="Layer_1-2"
                    data-name="Layer 1"
                >
                    <path
                        style={styless}
                        className="Letter"
                        d="M65.66,315.34c-10.86,0-20.36-1.74-28.51-5.22-8.14-3.48-14.97-8.25-20.49-14.32-5.52-6.07-9.67-13.17-12.47-21.32s-4.2-16.8-4.2-25.96c0-18.32,2.06-35.63,6.17-51.92,4.11-16.29,10.29-33.04,18.52-50.27l7.38,2.8c-5.34,12.98-9.14,24.35-11.39,34.1-2.25,9.76-3.37,18.67-3.37,26.72,0,19.77,5.39,34.49,16.16,44.16,10.77,9.67,25.71,14.51,44.79,14.51,14.84,0,27.61-2.44,38.3-7.32,10.69-4.88,19.58-10.9,26.66-18.07,7.08-7.17,12.58-14.72,16.48-22.65,3.9-7.93,6.4-15.04,7.51-21.32.25-1.53.57-3.94.95-7.25s.76-7.21,1.15-11.71c.38-4.5.72-9.42,1.02-14.76.3-5.34.61-10.82.95-16.42l4.92-53.99c.17-2.88.4-6.43.7-10.63.3-4.2.68-8.44,1.15-12.73.47-4.28,1.02-8.35,1.65-12.22.64-3.86,1.17-7.1,1.59-9.74.42-2.63,1-5.11,1.72-7.44.72-2.33,1.57-4.92,2.55-7.76.97-2.84,2.18-6.21,3.63-10.12,1.44-3.9,3.31-8.61,5.6-14.13l5.47,2.16c-1.61,7.72-2.89,19-3.82,33.85-.93,14.85-3.68,37.15-4.45,61.84l-.98,22.31c-.51,13.57-2.1,27.15-4.77,40.72-2.67,13.57-5.75,25.88-9.23,36.9-4.58,14.51-10.22,28.25-16.92,41.23-6.7,12.98-14.63,24.35-23.8,34.1-9.16,9.75-19.6,17.5-31.3,23.22-11.71,5.73-24.81,8.59-39.32,8.59Z"
                    />
                    <path
                        style={styless}
                        className="Letter"
                        d="M215.68,217.16c1.7-7.64,3.22-24.05,4.58-49.25l2.55-64.77c.59-13.32,1.4-23.14,2.42-29.46,1.02-6.32,2.97-13.72,5.85-22.21,2.88-8.48,7.38-19.51,13.49-33.09l5.47,2.04c-2.88,7.04-5.01,24.22-6.36,51.54l-4.2,74.7c-1.19,22.57-7.21,46.53-18.07,71.9l-5.73-1.4Z"
                    />
                    <path
                        style={styless}
                        className="Letter"
                        d="M290.23,12.61c-1.7,7.81-3.16,19.77-4.39,35.89-1.23,16.12-1.85,36.01-1.85,59.68,0,9.59.47,17.82,1.4,24.69.93,6.87,2.63,12.56,5.09,17.05,2.46,4.5,5.81,7.78,10.05,9.86,4.24,2.08,9.75,3.12,16.54,3.12,3.82,0,6.64,1.34,8.46,4.01,1.82,2.67,2.74,6.3,2.74,10.88,0,8.57-2.42,15.1-7.25,19.6-4.84,4.5-10.43,6.74-16.8,6.74-2.8,0-5.64-.23-8.53-.7-2.88-.47-5.71-1.31-8.46-2.55-2.76-1.23-5.33-2.9-7.7-5.03-2.38-2.12-4.33-4.79-5.85-8.02-1.95,7.21-4.26,13.79-6.94,19.72-2.67,5.94-5.75,11.37-9.23,16.29-1.44,1.78-3.14,3.78-5.09,5.98-1.95,2.21-4.07,4.26-6.36,6.17s-4.75,3.63-7.38,5.15c-2.63,1.53-5.22,2.63-7.76,3.31-2.29-.17-4.9-.76-7.83-1.78s-5.83-2.16-8.72-3.44c-2.88-1.27-5.62-2.67-8.21-4.2-2.59-1.53-4.56-2.97-5.92-4.33l1.27-5.09c8.32-.76,16.78-2.52,25.39-5.28,8.61-2.76,16.06-6.94,22.33-12.53,3.31-2.97,5.9-5.7,7.76-8.21,1.86-2.5,3.25-5.2,4.14-8.08.89-2.88,1.48-6.17,1.78-9.86.3-3.69.61-8.29.95-13.81l3.44-72.54c.17-2.88.36-6.32.57-10.31.21-3.99.55-8.08,1.02-12.28.47-4.2.97-8.29,1.53-12.28.55-3.99,1.12-7.51,1.72-10.56.42-2.55.91-5,1.46-7.38.55-2.37,1.27-4.98,2.16-7.83.89-2.84,2.04-6.19,3.44-10.05,1.4-3.86,3.25-8.55,5.54-14.06l5.47,2.04Z"
                    />
                    <path
                        style={styless}
                        className="Letter"
                        d="M555.72,83.67c11.45.17,17.26,6.28,17.43,18.32-.17,14-5.52,29.86-16.03,47.59-10.52,17.73-24.31,30.95-41.36,39.64-17.05,8.7-189.03,14.49-207.94,14.65-7.46-.17-5.73-10.05-5.9-19.8,0-7.29.59-15.59,4.71-20.25,4.12-4.66,158.91-1.51,164.6-2.28l17.56-25.71c2.46-9.16,4.16-27.11,5.09-53.83.76-17.39,1.91-28.97,3.44-34.74,2.63-12.73,7.89-27.7,15.78-44.92l5.34,1.78c-2.46,7.38-4.71,28.63-6.74,63.75-1.02,16.12-4.28,33.13-9.8,51.03,8.23-10.09,15.95-17.94,23.16-23.54,9.93-7.8,20.15-11.71,30.67-11.71ZM553.17,128.97c0-2.55-1.53-4.77-4.58-6.68s-6.79-2.86-11.2-2.86c-15.27,0-30.54,10.52-45.81,31.56l-6.87,9.8c16.46-1.53,31.94-5.45,46.45-11.77,14.51-6.32,21.84-13,22.02-20.04Z"
                    />
                    <path
                        style={styless}
                        className="Letter"
                        d="M615.17,198.77c1.7-7.64,3.22-24.05,4.58-49.25l2.55-64.77c.59-13.32,1.38-23.14,2.35-29.46.97-6.32,2.93-13.72,5.85-22.21,2.93-8.48,7.44-19.51,13.55-33.09l5.47,2.04c-2.88,7.04-5.01,24.6-6.36,52.68l-4.2,73.55c-1.19,22.4-7.21,46.36-18.07,71.9l-5.73-1.4Z"
                    />
                </g>
            </svg>
        </div>
    );
};

const LeftSide = () => {
    return (
        <div
            style={{ marginTop: MobileDevice() ? "0px" : "0px" }}
            className={styles.LeftSide}
        >
            <div className={styles.ContactUs}>
                <Button>
                    <Text
                        AffectedByTheme={false}
                        className={`HeaderText ${styles.ContactUsText}`}
                    >
                        Contact Us
                    </Text>
                </Button>
            </div>
        </div>
    );
};

const RightSide = () => {
    return (
        <div className={styles.RightSide}>
            <Button>
                <Search />
            </Button>
            <Button>
                <Cart />
            </Button>
            <div className={styles.Categories}>
                <Button className={styles.CategoriesIcon}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 256 256"
                        className={styles.CategoriesIcon}
                    >
                        <path
                            fill="white"
                            className="Icon"
                            d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"
                        />
                    </svg>
                </Button>
            </div>
        </div>
    );
};

const Search = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
        >
            <path
                className="Icon"
                fill="white"
                d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"
            />
        </svg>
    );
};

const Cart = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
        >
            <path
                className="Icon"
                fill="white"
                d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
            />
        </svg>
    );
};
