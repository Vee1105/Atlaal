import { lazy } from "react";
import styles from "./Body.module.css";
import Button from "../Button/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Text = lazy(() => import("../../Components/Text/Text"));

const Body = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const mainTL = gsap.timeline();
        gsap.set([".Intro1", ".ContentTitle"], {
            transform: "translateY(-100%)",
        });
        gsap.set(".Intro2", {
            transform: "translateY(100%)",
        });
        gsap.set(".Intro3", {
            transform: "translateY(0%)",
        });
        gsap.set([".Image1", ".Image2"], { height: "0%" });
        gsap.set(".Image1", { scale: 0.7 });
        const TextTL = gsap.timeline({
            id: "TextTL",
            scrollTrigger: {
                trigger: ".Panel",
                start: 0,
                end: "+=300%",
                toggleActions: "play none none reverse",
                scrub: 1,
            },
        });
        const ImageTL = gsap.timeline({
            id: "ImageTL",
            scrollTrigger: {
                trigger: ".Panel",
                // markers: true,
                end: "+=300%",
                toggleActions: "play none none reverse",
                pin: true,
                scrub: 2,
            },
        });
        ImageTL.to(".Image3", {
            height: "0%",
        });
        ImageTL.to(".Image2", {
            height: "100%",
        }).to(".Image2", {
            height: "0%",
        });
        ImageTL.to(".Image1", {
            scale: 1,
            height: "100%",
        });
        TextTL.to(".Intro3", {
            transform: "translateY(-100%)",
        });
        TextTL.to([".Intro2", ".Intro2F"], {
            transform: "translateY(0%)",
        }).to([".Intro2", ".Intro2F"], {
            transform: "translateY(100%)",
        });
        TextTL.to([".ContentTitle", ".Intro1"], {
            transform: "translateY(0%)",
        });
        mainTL.fromTo(
            ".HeroSection",
            { transform: "translateY(-100%)" },
            { transform: "translateY(0%)", duration: 1, ease: "power3.inOut" }
        );
    });

    return (
        <div className={styles.Body}>
            <div
                className={`HeroSection Logo ${styles.Logo} ${styles.HeroSection}`}
            >
                <Text type="title">
                    Atlaal <span>&copy;</span>
                </Text>
            </div>
            <div
                className={`HeroSection Title ${styles.Title} ${styles.HeroSection}`}
            >
                <Text type="title">Grand Opening.</Text>
            </div>
            <div
                className={`HeroSection Nav ${styles.Nav} ${styles.HeroSection}`}
            >
                <Button>
                    <Text>Search</Text>
                </Button>
                <Button>
                    <Text>Cart</Text>
                </Button>
                <Button>
                    <Text>Contact</Text>
                </Button>
            </div>

            <section
                className={`${styles.Introduction} ${styles.Panel} Introduction Panel`}
            >
                <div
                    className={`${styles.IntroductionContent} ${styles.First} IntroductionContent First`}
                >
                    <div className={`${styles.Content} Content`}>
                        <div
                            className={`${styles.ContentTitleDiv} ContentTitleDiv`}
                        >
                            <div className={styles.ContentDiv}>
                                <Text
                                    type="title"
                                    className={`${styles.ContentTitle} ContentTitle `}
                                >
                                    Welcome to Atlaal
                                </Text>
                            </div>
                        </div>
                        <div
                            className={`${styles.ContentInfo} ContentInfo Content`}
                        >
                            <div className={styles.ContentDiv}>
                                <Text
                                    type="body"
                                    className={`${styles.Intro1} Intro1`}
                                >
                                    where the essence of minimalism meets the
                                    rich tapestry of history. Our inaugural 2025
                                    collection is a celebration of elegance,
                                    craftsmanship, and cultural heritage,
                                    designed for those who appreciate the beauty
                                    in simplicity and the stories woven into
                                    every thread.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.Images} Images`}>
                        <img
                            src="/Images/Opening2025/img7.webp"
                            alt="Opening2025"
                            className="Image1"
                        />
                    </div>
                </div>
                <div
                    className={`${styles.IntroductionContent} ${styles.Second} IntroductionContent Second`}
                >
                    <div className={`${styles.Content} Content`}>
                        <div className={`${styles.ContentDiv}`}>
                            <Text
                                type="body"
                                className={`${styles.Intro2} Intro2`}
                            >
                                At Atlaal, we believe that true luxury lies in
                                the details. Each piece in our collection is
                                meticulously handcrafted, reflecting the
                                artistry of ancient Arab and modern fashion.
                            </Text>
                        </div>
                    </div>
                    <div className={`${styles.Images} Images`}>
                        <div className={`${styles.Image2Div} Image2Div`}>
                            <img
                                src="/Images/Opening2025/img2.webp"
                                alt="Opening2025"
                                className={`Image2 ${styles.Image2}`}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.IntroductionContent} ${styles.Third} IntroductionContent Third`}
                >
                    <div className={`${styles.Content} Content`}>
                        <div className={styles.ContentDiv}>
                            <Text type="title" className="Intro3">
                                Opening 2025 is here.
                            </Text>
                        </div>
                    </div>
                    <div className={`${styles.Images} Images`}>
                        <img
                            src="/Images/Opening2025/img10.webp"
                            alt="Opening2025"
                            className="Image3"
                        />
                    </div>
                </div>
            </section>
            <section style={{backgroundColor: "hsl(0, 0%, 14%)"}} className="Items Panel">
                <div>
                    haha
                </div>
            </section>
            <section className="ContactUs Panel"></section>
        </div>
    );
};

export default Body;
