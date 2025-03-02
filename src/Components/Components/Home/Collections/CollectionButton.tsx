import { useAppSelector } from "../../../../store/hooks";
import styles from "./CollectionButton.module.css";

export type ButtonProps = {
    children: React.ReactNode;
    width?: string | number;
    height?: string | number;
    ButtonStyling?: React.CSSProperties;
    DivStyling?: React.CSSProperties;
    onClick?: () => void;
    ref?: React.RefObject<null>;
};

export const CollectionButton = ({
    children,
    width,
    height,
    onClick,
    ButtonStyling,
    ref,
    DivStyling,
}: ButtonProps) => {
    const theme = useAppSelector((state) => state.theme.mode);
    const style = {
        color: theme === "Light" ? "#000" : "#000",
        width: width ? width : "auto",
        height: height ? height : "auto",
        padding: "5px 20px",
        borderRadius: "20px",
        ...ButtonStyling,
    };

    return (
        <div style={DivStyling} ref={ref} className={styles.Button}>
            <a style={style} className={styles.ButtonStyling} onClick={onClick}>
                {children}
            </a>
        </div>
    );
};
