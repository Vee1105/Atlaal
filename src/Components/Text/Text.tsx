import React from "react";
import styles from "./Text.module.css";
import { Colors, getTheme } from '../Themes/Theme';

type TextProps = {
	type?: "title" | "subtitle" | "body" | "caption" | "news" | "subtext";
	children: React.ReactNode;
	style?: React.CSSProperties | undefined;
	ref?: React.RefObject<null>;
};

export default function Text({ type, children, style, ref }: TextProps) {

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
	const NewsStyling = {
		color: colors?.textColor.news,
		...style,
	}

	return (
		<>
			{type === undefined && (
				<span ref={ref} style={DefaultStyling} className={styles.text}>
					{children}
				</span>
			)}
			{type === "subtext" && (
				<span ref={ref} style={DefaultStyling} className={`${styles.subtext} ${styles.text}`}>
					{children}
				</span>
			)}
			{type === "title" && (
				<span ref={ref} style={TitleStyling} className={`${styles.title} ${styles.text}`}>
					{children}
				</span>
			)}
			{type === "subtitle" && (
				<span ref={ref} style={SubTitleStyling} className={`${styles.subtitle} ${styles.text}`}>
					{children}
				</span>
			)}
			{type === "body" && (
				<span ref={ref} style={BodyStyling} className={`${styles.body} ${styles.text}`}>
					{children}
				</span>
			)}
			{type === "caption" && (
				<span ref={ref} style={CaptionStyling} className={`${styles.caption} ${styles.text}`}>
					{children}
				</span>
			)}
			{type === "news" && (
				<span ref={ref} style={NewsStyling} className={`${styles.news} ${styles.text}`}>
					{children}
				</span>
			)}
		</>
	);
}
