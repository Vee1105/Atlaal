import Text from "../../../Text/Text";
import styles from "./Items.module.css";
import Front from "/Front.png"

export default function Items() {
    return (
        <>
            <div className={styles.Items}>
                <Text type="title">By The House</Text>
                <div className={styles.Item}>
                <DiplayItems title="Blank Black T-Shit" image={Front} price={400} />
                <DiplayItems title="Blank Black T-Shit" image={Front} price={400} />
                <DiplayItems title="Blank Black T-Shit" image={Front} price={400} />
                <DiplayItems title="Blank Black T-Shit" image={Front} price={400} />
                <DiplayItems title="Blank Black T-Shit" image={Front} price={400} />
                <DiplayItems title="Blank Black T-Shit" image={Front} price={400} />
                </div>
            </div>
        </>
    );
}


type ItemProps = {
    title: string;
    image: string;
    price: number;
};

const DiplayItems = ({ title, image, price }: ItemProps) => {
    return (
        <div className={styles.ItemDisplay}>
            <img src={image}/>
            <div>{title}</div>
            <div>EGP {price}</div>
        </div>
    );
};
