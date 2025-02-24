import styles from "./Collections.module.css";
import BackgroundImage from "./CollectionBackground.png";
import SummerImage from "/SummerCollection.jpg";
import Text from "../../../Text/Text";
import { CollectionButton } from "./CollectionButton";
import Panel from "../../Panel/Panel";
import SidePanel from "../../Panel/SidePanel";

export default function Collections() {
    return (
        <div className={styles.Collections}>
            <Panel image={BackgroundImage}>
                <Text type="title">Fall Winter 2025 Collection</Text>
                <CollectionButton>Shop Now</CollectionButton>
            </Panel>
            <SidePanel image={SummerImage}>
                <Text type="title">Summer Collection</Text>
                <CollectionButton>Shop Now</CollectionButton>
            </SidePanel>
        </div>
    );
}
