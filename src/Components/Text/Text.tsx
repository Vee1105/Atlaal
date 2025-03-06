import React from "react";
import styles from "./Text.module.css";
import { Colors, getTheme } from '../Themes/Theme';

type TextProps = {
	type?: "title" | "subtitle" | "body" | "caption";
	children: React.ReactNode;
	style?: React.CSSProperties | undefined;
};

export default function Text({ type, children, style }: TextProps) {

	const theme = getTheme();

	const colors = Colors[`${theme}`];

	const DefaultStyling = {
		color: colors?.textColor.default,
		...style,
	}
	const TitleStyling = {
		color: colors?.textColor.title,
		...style,
	}
	const SubTitleStyling = {
		color: colors?.textColor.subtitle,
		...style,
	}
	const BodyStyling = {
		color: colors?.textColor.body,
		...style,
	}
	const CaptionStyling = {
		color: colors?.textColor.caption,
		...style,
	}
	return (
		<>
			{type === undefined && (
				<span style={DefaultStyling} className={styles.text}>
					{children}
				</span>
			)}
			{type === "title" && (
				<h1 style={TitleStyling} className={`${styles.title} ${styles.text}`}>
					{children}
				</h1>
			)}
			{type === "subtitle" && (
				<span style={SubTitleStyling} className={`${styles.subtitle} ${styles.text}`}>
					{children}
				</span>
			)}
			{type === "body" && (
				<span style={BodyStyling} className={`${styles.body} ${styles.text}`}>
					{children}
				</span>
			)}
			{type === "caption" && (
				<span style={CaptionStyling} className={`${styles.caption} ${styles.text}`}>
					{children}
				</span>
			)}
		</>
	);
}
