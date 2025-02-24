import styles from "./Collections.module.css";
import BackgroundImage from "./CollectionBackground.png";
import Text from "../../../Text/Text";
import { CollectionButton } from "./CollectionButton";
import Panel from "../../Panel/Panel";

export default function Collections() {
    return (
        <div className={styles.Collections}>
            <Panel image={BackgroundImage}>
                <Text type="title">Summer Collection</Text>
                <CollectionButton>Shop Now</CollectionButton>
            </Panel>
        </div>
    );
}
