import React from "react";
import styles from "./Text.module.css";
import { Colors, getTheme } from "../Themes/Theme";

interface TextProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    > {
    type?: "title" | "subtitle" | "body" | "caption" | "news" | "subtext";
    children: React.ReactNode;
    style?: React.CSSProperties | undefined;
    ref?: React.RefObject<null>;
    AffectedByTheme?: boolean;
    className?: string | undefined;
}

export default function Text({
    type,
    children,
    style,
    ref,
    className,
    AffectedByTheme = true,
}: TextProps) {
    const theme = getTheme();

    const colors = Colors[`${theme}`];

    const DefaultStyling = {
        color: AffectedByTheme ? colors?.textColor.default : "#fff",
        ...style,
    };
    const TitleStyling = {
        color: AffectedByTheme ? colors?.textColor.title : "#fff",
        ...style,
    };
    const SubTitleStyling = {
        color: AffectedByTheme ? colors?.textColor.subtitle : "#fff",
        ...style,
    };
    const BodyStyling = {
        color: AffectedByTheme ? colors?.textColor.body : "#fff",
        ...style,
    };
    const CaptionStyling = {
        color: AffectedByTheme ? colors?.textColor.caption : "#fff",
        ...style,
    };
    const NewsStyling = {
        color: AffectedByTheme ? colors?.textColor.news : "#fff",
        ...style,
    };

    return (
        <>
            {type === undefined && (
                <span
                    ref={ref}
                    style={DefaultStyling}
                    className={`${className}`}
                >
                    {children}
                </span>
            )}
            {type === "subtext" && (
                <span
                    ref={ref}
                    style={DefaultStyling}
                    className={`${styles.subtext} ${styles.text} ${className}`}
                >
                    {children}
                </span>
            )}
            {type === "title" && (
                <span
                    ref={ref}
                    style={TitleStyling}
                    className={`${styles.title} ${styles.text} ${className}`}
                >
                    {children}
                </span>
            )}
            {type === "subtitle" && (
                <span
                    ref={ref}
                    style={SubTitleStyling}
                    className={`${styles.subtitle} ${styles.text} ${className}`}
                >
                    {children}
                </span>
            )}
            {type === "body" && (
                <span
                    ref={ref}
                    style={BodyStyling}
                    className={`${styles.body} ${styles.text} ${className}`}
                >
                    {children}
                </span>
            )}
            {type === "caption" && (
                <span
                    ref={ref}
                    style={CaptionStyling}
                    className={`${styles.caption} ${styles.text} ${className}`}
                >
                    {children}
                </span>
            )}
            {type === "news" && (
                <span
                    ref={ref}
                    style={NewsStyling}
                    className={`${styles.news} ${styles.text} ${className}`}
                >
                    {children}
                </span>
            )}
        </>
    );
}
