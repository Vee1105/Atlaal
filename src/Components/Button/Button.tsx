import { useAppSelector } from "../../store/hooks";
import styles from "./Button.module.css";

export type ButtonProps = {
    children: React.ReactNode;
    width?: string | number;
    height?: string | number;
    ButtonStyling?: React.CSSProperties;
    onClick?: () => void;
};

export const Button = ({
    children,
    width,
    height,
    onClick,
    ButtonStyling,
}: ButtonProps) => {
    const theme = useAppSelector((state) => state.theme.mode);
    const style = {
        color:
            theme === "Light"
                ? "#000"
                : "#fff",
        width: width ? width : "auto",
        height: height ? height : "auto",
        padding: "5px 20px",
        borderRadius: "20px",
        ...ButtonStyling,
    };

    return (
        <div className={styles.Button}>
            <a style={style} className={styles.ButtonStyling} onClick={onClick}>
                {children}
            </a>
            <div className={styles.ButtonHover}></div>
        </div>
    );
};
