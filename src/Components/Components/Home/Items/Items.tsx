import styles from "./Items.module.css";
import Front from "/Front.png"

export default function Items() {
    return (
        <div className={styles.Items}>
            <ItemsContainer />
        </div>
    );
}

const ItemsContainer = () => {
    return (
        <div className={styles.ItemsContainer}>
            <Item />
        </div>
    );
};

const Item = () => {
    return (
        <div className={styles.ItemSlider}>
            <DiplayItems title="Blank Black T-Shit" image={Front} price={400} />
            <DiplayItems title="Blank Black T-Shit" image={Front} price={400} />
            <DiplayItems title="Blank Black T-Shit" image={Front} price={400} />
        </div>
    );
};

type ItemProps = {
    title: string;
    image: string;
    price: number;
};

const DiplayItems = ({ title, image, price }: ItemProps) => {
    return (
        <div className={styles.ItemDisplay}>
            <img src={image} style={{width: 400}} />
            <div>{title}</div>
            <div>EGP {price}</div>
        </div>
    );
};
