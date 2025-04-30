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
        gsap.set([".Image2", ".Intro2", ".Intro2F"], { translateY: "-100%" });
        const TextTL = gsap.timeline({
            scrollTrigger: {
                start: "top top",
                markers: true,
                toggleActions: "play none none reverse",
                pin: true,
                scrub: 1,
            },
        });
        const ImageTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".Panel",
                markers: true,
                toggleActions: "play none none reverse",
                pin: true,
                scrub: 2,
            },
        });
        ImageTL.to(".Image1", {
            scale: 0.7,
            height: "0%",
            duration: 1,
        });
        ImageTL.to(".Image2", {
            duration: 4,
            translateY: "0%",
        });
        TextTL.to([".ContentTitle", ".Intro1"], {
            transform: "translateY(-500%)",
        });
        TextTL.to([".Intro2", ".Intro2F"], {
            transform: "translateY(0%)",
        });
        mainTL.fromTo(
            ".HeroSection",
            { transform: "translateY(-100%)" },
            { transform: "translateY(0%)", duration: 1, ease: "power3.inOut" }
        );
    });

    const greet = (name:string)

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
                            <Text
                                type="title"
                                className={`${styles.ContentTitle} ContentTitle `}
                            >
                                Welcome to Atlaal
                            </Text>
                        </div>
                        <div className={`${styles.ContentInfo} ContentInfo`}>
                            <Text
                                type="body"
                                className={`${styles.Intro1} Intro1`}
                            >
                                where the essence of minimalism meets the rich
                                tapestry of history. Our inaugural 2025
                                collection is a celebration of elegance,
                                craftsmanship, and cultural heritage, designed
                                for those who appreciate the beauty in
                                simplicity and the stories woven into every
                                thread.
                            </Text>
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
                        <div className={`${styles.ContentDiv}`}>
                            <Text
                                type="body"
                                className={`${styles.Intro2F} Intro2F`}
                            >
                                We draw inspiration from the timeless
                                silhouettes and intricate patterns of the past,
                                reimagining them for the contemporary individual
                                who values both style and substance.
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
                {/* <div
                    className={`${styles.IntroductionContent} ${styles.Third} IntroductionContent Third`}
                >
                    <div className={`${styles.Content} Content`}>
                        <Text type="body" className="Intro3">
                            Our Opening 2025 Collection invites you to explore a
                            world where tradition and modernity coexist
                            harmoniously. With a focus on premium materials and
                            exquisite craftsmanship, each garment is not just an
                            item of clothing but a statement of identity and
                            culture.
                        </Text>
                    </div>
                    <div className={`${styles.Images} Images`}>
                        <img
                            src="/Images/Opening2025/img5.webp"
                            alt="Opening2025"
                        />
                        <img
                            src="/Images/Opening2025/img6.webp"
                            alt="Opening2025"
                        />
                    </div>
                </div>
                <div
                    className={`${styles.IntroductionContent} ${styles.Fourth} IntroductionContent Fourth`}
                >
                    <div className={`${styles.Content} Content`}>
                        <Text type="body" className="Intro4">
                            Join us on this journey as we revive historical
                            aesthetics and celebrate the elegance of minimalism.
                            Discover the Atlaal collection, where every piece
                            tells a story, and every detail matters. Embrace the
                            art of refined living with Atlaal.
                        </Text>
                    </div>
                    <div className={`${styles.Images} Images`}>
                        <img
                            src="/Images/Opening2025/img1.webp"
                            alt="Opening2025"
                        />
                    </div>
                </div>
                <div className={`${styles.Images} Images`}></div> */}
            </section>
            <section className="Plans Panel"></section>
            <section className="Items Panel"></section>
            <section className="ContactUs Panel"></section>
        </div>
    );
};

export default Body;
