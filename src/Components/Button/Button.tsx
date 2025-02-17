import { Colors, getTheme } from "../Themes/Theme"
import styles from "./Button.module.css"

export type ButtonProps = {
    children: React.ReactNode
    width?: string | number
    height?: string | number
    type?: "Primary" | "Secondary"
    ButtonStyling?: React.CSSProperties
}

export const Button = ({children, width, height, type, ButtonStyling} : ButtonProps) =>  {
    const theme = getTheme();
    const Color = Colors[`${theme}`];
    const style = {
        backgroundColor: type === "Secondary" ? Color?.secondaryColor : Color?.accentColor,
        color: theme === "Light"? "#fff" : type === "Secondary" ? "#000" : Color?.textColor.button,
        width: width ? width : "auto",
        height: height ? height : "auto",
        padding: "5px 20px",
        borderRadius: "20px",
        ...ButtonStyling
    }



    return <a style={style} className={styles.ButtonStyling}>{children}</a>
}