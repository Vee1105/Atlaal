import { lazy, useRef } from 'react';
const Text = lazy(() => import("../../../Text/Text"));
import styles from "./Items.module.css";
import Front from "/Front.png"

export default function Items() {

    const SliderRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className={styles.Items}>
                <Text type="title">Latest Items</Text>
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
                    <BlankSpace />
                        <DiplayItems title="Atlaal's T-Shit" image={Front} price={600} />
                        <DiplayItems title="Blank Black T-Shit" image={Front} price={600} />
                        <DiplayItems title="Blank Black T-Shit" image={Front} price={600} />
                    <BlankSpace />
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

const BlankSpace = () => {
    return (
        <>
            <div style={{opacity: 0}}>1</div>
            <div style={{opacity: 0}}>1</div>
            <div style={{opacity: 0}}>1</div>
            <div style={{opacity: 0}}>1</div>
            <div style={{opacity: 0}}>1</div>
            <div style={{opacity: 0}}>1</div>
        </>
    )
}

const DiplayItems = ({ title, image, price }: ItemProps) => {
    return (
        <div id='Item' className={styles.ItemDisplay} onDrag={(e) => e.preventDefault()}>
            <img src={image} onDrag={(e) => e.preventDefault()}/>
            <div>{title}</div>
            <div>EGP {price}</div>
        </div>
    );
};
