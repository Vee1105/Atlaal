import React from "react";
import styles from "./Text.module.css";
import { Colors } from "../Themes/Theme";

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
    HasUnderline?: boolean;
    UnderlineID?: string;
    TextID?: string;
    UnderlineStyle?: React.CSSProperties;
    HasDarkBackground?: boolean;
}

export default function Text({
    type,
    children,
    style,
    ref,
    className,
    AffectedByTheme = true,
    HasUnderline = false,
    UnderlineID,
    TextID,
    UnderlineStyle,
    HasDarkBackground = false,
}: TextProps) {
    const theme = "Light";

    const colors = Colors[`${theme}`];



    const DefaultStyling = {
        color: HasDarkBackground ? "#fff" : AffectedByTheme ? colors?.textColor.default : "#fff",
        lineHeight: "1",
        overflow: "hidden",
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
                    className={`${className} ${styles.text}`}
                    id={TextID}
                >
                    {children}
                    {HasUnderline && (
                        <UnderLine
                            UnderlineID={UnderlineID}
                            style={UnderlineStyle}
                        />
                    )}
                </span>
            )}
            {type === "subtext" && (
                <span
                    ref={ref}
                    style={DefaultStyling}
                    className={`${styles.subtext} ${styles.text} ${className}`}
                >
                    {children}
                    {HasUnderline && (
                        <UnderLine
                            UnderlineID={UnderlineID}
                            style={UnderlineStyle}
                        />
                    )}
                </span>
            )}
            {type === "title" && (
                <span
                    ref={ref}
                    style={TitleStyling}
                    className={`${styles.title} ${styles.text} ${className}`}
                >
                    {children}
                    {HasUnderline && (
                        <UnderLine
                            UnderlineID={UnderlineID}
                            style={UnderlineStyle}
                        />
                    )}
                </span>
            )}
            {type === "subtitle" && (
                <span
                    ref={ref}
                    style={SubTitleStyling}
                    className={`${styles.subtitle} ${styles.text} ${className}`}
                >
                    {children}
                    {HasUnderline && (
                        <UnderLine
                            UnderlineID={UnderlineID}
                            style={UnderlineStyle}
                        />
                    )}
                </span>
            )}
            {type === "body" && (
                <span
                    ref={ref}
                    style={BodyStyling}
                    className={`${styles.body} ${styles.text} ${className}`}
                >
                    {children}
                    {HasUnderline && (
                        <UnderLine
                            UnderlineID={UnderlineID}
                            style={UnderlineStyle}
                        />
                    )}
                </span>
            )}
            {type === "caption" && (
                <span
                    ref={ref}
                    style={CaptionStyling}
                    className={`${styles.caption} ${styles.text} ${className}`}
                >
                    {children}
                    {HasUnderline && (
                        <UnderLine
                            UnderlineID={UnderlineID}
                            style={UnderlineStyle}
                        />
                    )}
                </span>
            )}
            {type === "news" && (
                <span
                    ref={ref}
                    style={NewsStyling}
                    className={`${styles.news} ${styles.text} ${className}`}
                >
                    {children}
                    {HasUnderline && (
                        <UnderLine
                            UnderlineID={UnderlineID}
                            style={UnderlineStyle}
                        />
                    )}
                </span>
            )}
        </>
    );
}

const UnderLine = ({
    UnderlineID,
    style,
}: {
    UnderlineID?: string;
    style?: React.CSSProperties;
}) => {
    return (
        <div
            id={UnderlineID}
            style={{
                height: 2,
                backgroundColor: "black",
                ...style,
            }}
        />
    );
};
