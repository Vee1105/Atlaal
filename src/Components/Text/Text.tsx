import React, { CSSProperties } from "react";
import styles from "./Text.module.css";

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
    HasUnderline = false,
    UnderlineID,
    TextID,
    UnderlineStyle,
}: TextProps) {

    const DefaultStyling: CSSProperties = {
        lineHeight: "1.2",
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
                <h1
                    ref={ref}
                    style={DefaultStyling}
                    className={`${styles.title} ${styles.text} ${className}`}
                >
                    {children}
                    {HasUnderline && (
                        <UnderLine
                            UnderlineID={UnderlineID}
                            style={UnderlineStyle}
                        />
                    )}
                </h1>
            )}
            {type === "subtitle" && (
                <span
                    ref={ref}
                    style={DefaultStyling}
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
                <p
                    ref={ref}
                    style={DefaultStyling}
                    className={`${styles.body} ${styles.text} ${className}`}
                >
                    {children}
                    {HasUnderline && (
                        <UnderLine
                            UnderlineID={UnderlineID}
                            style={UnderlineStyle}
                        />
                    )}
                </p>
            )}
            {type === "caption" && (
                <span
                    ref={ref}
                    style={DefaultStyling}
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
                    style={DefaultStyling}
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
