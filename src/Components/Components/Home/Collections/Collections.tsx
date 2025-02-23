import styles from "./Collections.module.css";
import BackgroundImage from "./CollectionBackground.png";
import Text from "../../../Text/Text";
import LogoOutline from "../Header/LogoOutline";

export default function Collections() {
    return (
        <div className={styles.Collections}>
            <div className={styles.Collection}>
                <div className={styles.CollectionContent}>
                    <div
                        style={{
                            position: "relative",
                            width: "70%",
                            top: "10%",
                        }}
                    >
                        <LogoOutline />
                    </div>
                    <Text type="title">Summer Collection</Text>
                </div>
                <div className={styles.CollectionBackgroundDiv}>
                    <img
                        className={styles.CollectionBackground}
                        src={BackgroundImage}
                        alt="Collection Background"
                    />
                </div>
            </div>
        </div>
    );
}