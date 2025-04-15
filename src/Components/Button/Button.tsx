import { useRef, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import styles from "./Button.module.css";
import Text from "../Text/Text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export type ButtonProps = {
    children: React.ReactNode;
    width?: string | number;
    height?: string | number;
    ButtonStyling?: React.CSSProperties;
    UnderlineButton?: boolean;
    BackgroundButton?: boolean;
    onClick?: () => void;
    ref?: React.RefObject<null>;
    href?: string;
    color?: "White" | "Black";
    HoverEffect?: boolean;
    className?: string;
    DivWidth?: string | number;
};

const Button = ({
    children,
    width,
    height,
    onClick,
    ref,
    ButtonStyling,
    UnderlineButton = false,
    BackgroundButton = false,
    color = undefined,
    href,
    HoverEffect = false,
    className,
    DivWidth,
}: ButtonProps) => {
    const theme = useAppSelector((state) => state.theme.mode);
    const style = {
        width: width ? width : "auto",
        height: height ? height : "auto",
        padding: UnderlineButton ? "0px" : "5px 20px",
        borderRadius: UnderlineButton ? "0px" : "20px",
        ...ButtonStyling,
    };

    const defaultButtonStyling = {
        width: width ? width : "auto",
        height: height ? height : "auto",
        padding: "5px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...ButtonStyling,
    };

    const ButtonDivStyles = {
        width: DivWidth,
    };

    const ButtonRef = useRef<HTMLAnchorElement>(null);
    const underlineButton = useRef<HTMLDivElement>(null);

    const [hovered, setHovered] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(false);

    useGSAP(() => {
        gsap.to(underlineButton.current, {
            scrollTrigger: {
                trigger: underlineButton.current,
                start: "top 95%",
                toggleActions: "play none none reverse",
            },
            duration: 0.2,
            width: hovered ? "0%" : "100%",
            ease: "power3.inOut",
        });
        gsap.to(underlineButton.current, {
            duration: 0.5,
            delay: 0.3,
            ease: "power3.inOut",
        });
    }, [hovered]);

    useGSAP(() => {
        gsap.to(ButtonRef.current, {
            duration: 0.1,
            backgroundColor: buttonHovered ? "transparent" : "#fff",
            color: buttonHovered ? "#fff" : "#000",
            border: buttonHovered ? "1px solid #fff" : "1px solid #000",
            ease: "power3.inOut",
        });
    }, [buttonHovered]);

    return (
        <>
            {(UnderlineButton && (
                <div ref={ref} className={styles.ButtonUnderline}>
                    <div className={styles.ButtonUnderlineContent}>
                        <a
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            href={href}
                            style={style}
                            className={styles.ButtonUnderlineStyling}
                        >
                            <Text
                                style={{
                                    color: color ? color : "#fff",
                                    textAlign: "start",
                                }}
                            >
                                {children}
                            </Text>
                            <div
                                style={{
                                    backgroundColor: color
                                        ? color
                                        : theme === "Light"
                                        ? "#000"
                                        : "#fff",
                                    height: "2px",
                                    alignSelf: "end",
                                }}
                                ref={underlineButton}
                            ></div>
                        </a>
                    </div>
                </div>
            )) ||
                (BackgroundButton && (
                    <div
                        ref={ref}
                        style={ButtonDivStyles}
                        className={`${styles.Button} ${className}`}
                    >
                        <a
                            style={style}
                            className={styles.ButtonStyling}
                            onClick={onClick}
                            ref={ButtonRef}
                            onMouseEnter={() => setButtonHovered(true)}
                            onMouseLeave={() => setButtonHovered(false)}
                        >
                            {children}
                        </a>
                        {HoverEffect ? (
                            <div className={styles.ButtonHover}></div>
                        ) : null}
                    </div>
                )) || (
                    <div ref={ref}>
                        <a style={defaultButtonStyling} onClick={onClick}>
                            {children}
                        </a>
                    </div>
                )}
        </>
    );
};

export default Button;
