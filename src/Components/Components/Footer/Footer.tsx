import { lazy, useState } from "react";
import styles from "./Footer.module.css";
import { Colors } from "../../Themes/Theme";
import { LogoUnanimated } from "../Home/Header/Header";
import InputField from "../../InputField/InputField";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
                            Culture
                        </Button>
                        <Button UnderlineButton color="White">
                            What's Coming?
                        </Button>
                        <Button UnderlineButton color="White">
                            Terms & Conditions
                        </Button>
                        <Button UnderlineButton color="White">
                            Privacy Policy
                        </Button>
                        <Button UnderlineButton color="White">
                            FAQs
                        </Button>
                    </div>
                    <div className={styles.NewsConnect}>
                        <Text
                            style={{
                                color: colors.textColor.news,
                                textAlign: "center",
                                fontWeight: "400",
                            }}
                            type="subtext"
                        >
                            News & Connect
                        </Text>
                        <Text HasDarkBackground style={{ textAlign: "start" }}>
                            Sign up for our newsletter to recieve news and
                            updates.
                        </Text>
                        <InputField
                            type="email"
                            id="Email"
                            placeholder="Enter your email"
                            style={{
                                width: "100%",
                                height: "2rem",
                                fontSize: "1rem",
                            }}
                        />
                        <Button
                            BackgroundButton
                            ButtonStyling={{
                                backgroundColor: "white",
                                color: "black",
                            }}
                        >
                            Sign Up
                        </Button>
                        <Socials color="hsla(0, 0%, 95%, 0.7)" />
                    </div>
                    <div className={styles.FooterLogo}>
                        <LogoUnanimated />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

const Socials = ({ color }: { color?: string }) => {
    const [InstagramHovered, setInstagramHovered] = useState(false);
    const [XHovered, setXHovered] = useState(false);
    const [TiktokHovered, setTiktokHovered] = useState(false);
    const [PinterestHovered, setPinterestHovered] = useState(false);

    useGSAP(() => {
        gsap.to("#Instagram", {
            duration: 0.5,
            fill: InstagramHovered ? "white" : "hsla(0, 0%, 95%, 0.7)",
            ease: "power3.inOut",
        })
        gsap.to("#X", {
            duration: 0.5,
            fill: XHovered ? "white" : "hsla(0, 0%, 95%, 0.7)",
            ease: "power3.inOut",
        })
        gsap.to("#Tiktok", {
            duration: 0.5,
            fill: TiktokHovered ? "white" : "hsla(0, 0%, 95%, 0.7)",
            ease: "power3.inOut",
        })
        gsap.to("#Pinterest", {
            duration: 0.5,
            fill: PinterestHovered ? "white" : "hsla(0, 0%, 95%, 0.7)",
            ease: "power3.inOut",
        })
    }, [InstagramHovered, XHovered, TiktokHovered, PinterestHovered]);

    return (
        <div className={styles.Socials}>
            <a
                id="Instagram"
                onMouseEnter={() => setInstagramHovered(true)}
                onMouseLeave={() => setInstagramHovered(false)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        id="Instagram"
                        fill={color ? color : "white"}
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    />
                </svg>
            </a>
            <a
                id="Tiktok"
                onMouseEnter={() => setTiktokHovered(true)}
                onMouseLeave={() => setTiktokHovered(false)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        id="Tiktok"
                        fill={color ? color : "white"}
                        d="M16 8.245V15.5a6.5 6.5 0 1 1-5-6.326v3.163a3.5 3.5 0 1 0 2 3.163V2h3a5 5 0 0 0 5 5v3a7.97 7.97 0 0 1-5-1.755"
                    />
                </svg>
            </a>
            <a
                id="X"
                onMouseEnter={() => setXHovered(true)}
                onMouseLeave={() => setXHovered(false)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        id="X"
                        fill={color ? color : "white"}
                        d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                    />
                </svg>
            </a>
            <a
                id="Pinterest"
                onMouseEnter={() => setPinterestHovered(true)}
                onMouseLeave={() => setPinterestHovered(false)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        id="Pinterest"
                        fill={color ? color : "white"}
                        d="M13.372 2.094a10.003 10.003 0 0 0-5.369 19.074a7.8 7.8 0 0 1 .162-2.292c.185-.839 1.296-5.463 1.296-5.463a3.7 3.7 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.897 0 3.17-2.431 3.17-5.301c0-2.201-1.457-3.847-4.143-3.847a4.746 4.746 0 0 0-4.93 4.793a2.96 2.96 0 0 0 .648 1.97a.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.785a.354.354 0 0 1-.51.253c-1.384-.554-2.036-2.077-2.036-3.816c0-2.847 2.384-6.255 7.154-6.255c3.796 0 6.319 2.777 6.319 5.747c0 3.909-2.176 6.848-5.393 6.848a2.86 2.86 0 0 1-2.454-1.246s-.579 2.316-.692 2.754a8 8 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.99 9.99 0 0 0 9.996-10.002a10 10 0 0 0-8.635-9.904"
                    />
                </svg>
            </a>
        </div>
    );
};
