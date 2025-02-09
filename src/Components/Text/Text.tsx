import React from "react";
import styles from "./Text.module.css";

type TextProps = {
	type?: "title" | "subtitle" | "body" | "caption";
	text: string;
	style?: React.CSSProperties;
};

export default function Text({ type, text, style }: TextProps) {
	return (
		<>
			{type === undefined && (
				<span style={style} className={styles.text}>
					{text}
				</span>
			)}
			{type === "title" && (
				<span style={style} className={`${styles.title} ${styles.text}`}>
					{text}
				</span>
			)}
			{type === "subtitle" && (
				<span style={style} className={`${styles.subtitle} ${styles.text}`}>
					{text}
				</span>
			)}
			{type === "body" && (
				<span style={style} className={`${styles.body} ${styles.text}`}>
					{text}
				</span>
			)}
			{type === "caption" && (
				<span style={style} className={`${styles.caption} ${styles.text}`}>
					{text}
				</span>
			)}
		</>
	);
}
