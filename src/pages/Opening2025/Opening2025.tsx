import { lazy } from "react";
import styles from "./Opening2025.module.css";
const Text = lazy(() => import("../../Components/Text/Text"));
const Header = lazy(
    () => import("../../Components/Components/Home/Header/Header")
);

const Opening2025 = () => {
    return (
        <div className={styles.Opening2025} style={{ overflow: "hidden", backgroundColor: "#000" }}>
            <Header />
            <div className={styles.Body}>
                <Text AffectedByTheme={false} type="title">Opening 2025</Text>
            </div>
        </div>
    );
};

export default Opening2025;
