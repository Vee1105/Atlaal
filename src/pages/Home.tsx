import { lazy } from "react";
const Body = lazy(() => import("../Components/Components/Home/Collections/Body"));
const Header = lazy(() => import("../Components/Components/Home/Header/Header"));
const Items = lazy(() => import("../Components/Components/Home/Items/Items"));
const Footer = lazy(() => import("../Components/Components/Footer/Footer"));
import styles from "./Home.module.css"

export default function HomePage() {
    return (
        <div className={styles.Home}>
            <Header />
            <Body />
            <Items />
            <Footer />
        </div>
    );
}
