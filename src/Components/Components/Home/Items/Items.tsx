import { lazy, useRef } from 'react';
const Text = lazy(() => import("../../../Text/Text"));
import styles from "./Items.module.css";
import Front from "/Front.png"

export default function Items() {

    const SliderRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className={styles.Items}>
                <Text type="title">House's Unisex Collection</Text>
                <div className={styles.ButtonNav}>
                    <a 
                        onClick={() => {
                            if (SliderRef.current){
                                SliderRef.current.scrollLeft -= 600
                            }
                        }}>
                        Left
                    </a>
                    <a 
                        onClick={() => {
                            if (SliderRef.current){
                                SliderRef.current.scrollLeft += 600
                            }
                        }}
                        style={{right: 0}}>
                        Right
                    </a>
                </div>
                <div ref={SliderRef} className={styles.Item} >
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
