import { lazy } from "react";
import styles from "./Footer.module.css";
import { Colors } from "../../Themes/Theme";
const Text = lazy(() => import("../../Text/Text"));

const Footer = () => {
    const colors = Colors.Dark;
    return (
        <div className={styles.Footer}>
            <div className={styles.ContentContainer}>
                <div className={styles.Content}>
                    <div className={styles.Services}>
                        <Text
                            style={{
                                color: colors.textColor.news,
                                textAlign: "center",
                                fontWeight: "500"
                            }}
                            type="subtext"
                        >
                            Atlaal Services
                        </Text>

                    </div>
                    <div className={styles.ReachUs}></div>
                    <div className={styles.Newsletter}></div>
                    <div className={styles.About}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
