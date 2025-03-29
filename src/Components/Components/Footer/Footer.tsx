import { lazy } from "react";
import styles from "./Footer.module.css";
import { Colors } from "../../Themes/Theme";
const Text = lazy(() => import("../../Text/Text"));
const Button = lazy(() => import("../../Button/Button"));

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
                                fontWeight: "400",
                            }}
                            type="subtext"
                        >
                            Atlaal Services
                        </Text>
                        <Button UnderlineButton color="White">
                            Gifting
                        </Button>
                        <Button UnderlineButton color="White">
                            Custom Made
                        </Button>
                        <Button UnderlineButton color="White">
                            Contact Us
                        </Button>
                        <Button UnderlineButton color="White">
                            My Order
                        </Button>
                    </div>
                    <div className={styles.About}>
                        <Text
                            style={{
                                color: colors.textColor.news,
                                textAlign: "center",
                                fontWeight: "400",
                            }}
                            type="subtext"
                        >
                            About
                        </Text>
                        <Button UnderlineButton color="White">
                            About Atlaal
                        </Button>
                        <Button UnderlineButton color="White">
                            Our Story
                        </Button>
                        <Button UnderlineButton color="White">
                            Work With Us
                        </Button>
                        <Button UnderlineButton color="White">
                            Culture
                        </Button>
                        <Button UnderlineButton color="White">
                            What's Coming?
                        </Button>
                    </div>
                    <div className={styles.ReachUs}>
                        <Text
                            style={{
                                color: colors.textColor.news,
                                textAlign: "center",
                                fontWeight: "400",
                            }}
                            type="subtext"
                        >
                            Connect
                        </Text>
                    </div>
                    <div className={styles.Newsletter}>
                        <Text
                            style={{
                                color: colors.textColor.news,
                                textAlign: "center",
                                fontWeight: "400",
                            }}
                            type="subtext"
                        >
                            News
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
