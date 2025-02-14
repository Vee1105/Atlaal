import React from "react";
import styles from "./Text.module.css";
import { Colors, getTheme } from '../Themes/Theme';

type TextProps = {
	type?: "title" | "subtitle" | "body" | "caption";
	text: string;
	style?: React.CSSProperties | undefined;
};

export default function Text({ type, text, style }: TextProps) {

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
					{text}
				</span>
			)}
			{type === "title" && (
				<span style={TitleStyling} className={`${styles.title} ${styles.text}`}>
					{text}
				</span>
			)}
			{type === "subtitle" && (
				<span style={SubTitleStyling} className={`${styles.subtitle} ${styles.text}`}>
					{text}
				</span>
			)}
			{type === "body" && (
				<span style={BodyStyling} className={`${styles.body} ${styles.text}`}>
					{text}
				</span>
			)}
			{type === "caption" && (
				<span style={CaptionStyling} className={`${styles.caption} ${styles.text}`}>
					{text}
				</span>
			)}
		</>
	);
}
