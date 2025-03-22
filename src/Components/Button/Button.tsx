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
    onClick?: () => void;
    href?: string;
    color?: "White" | "Black";
};

const Button = ({
    children,
    width,
    height,
    onClick,
    ButtonStyling,
    UnderlineButton = false,
    color = undefined,
    href,
}: ButtonProps) => {
    const theme = useAppSelector((state) => state.theme.mode);
    const style = {
        color: color ? color : theme === "Light" ? "#000" : "#fff",
        width: width ? width : "auto",
        height: height ? height : "auto",
        padding: UnderlineButton ? "0px" : "5px 20px",
        borderRadius: UnderlineButton ? "0px" : "20px",
        ...ButtonStyling,
    };

    const UnderlineButtonRef = useRef(null);

    const [hovered, setHovered] = useState(false);

    useGSAP(() => {
        gsap.to(UnderlineButtonRef.current, {
            duration: 0.2,
            width: hovered ? "20%" : "100%",
            ease: "power3.inOut",
        });
        gsap.to(UnderlineButtonRef.current, {
            duration: 0.5,
            delay: 0.3,
            translate: hovered ? "520% 0" : "0% 0",
            ease: "power3.inOut",
        });
    }, [hovered]);

    return (
        <>
            {UnderlineButton ? (
                <div className={styles.ButtonUnderline}>
                    <div className={styles.ButtonUnderlineContent}>
                        <a
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            href={href}
                            style={style}
                            className={styles.ButtonUnderlineStyling}
                        >
                            <Text style={{ color: color ? color : "#fff" }}>
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
                                }}
                                ref={UnderlineButtonRef}
                            ></div>
                        </a>
                    </div>
                </div>
            ) : (
                <div className={styles.Button}>
                    <a
                        style={style}
                        className={styles.ButtonStyling}
                        onClick={onClick}
                    >
                        {children}
                    </a>
                    <div className={styles.ButtonHover}></div>
                </div>
            )}
        </>
    );
};

export default Button;
