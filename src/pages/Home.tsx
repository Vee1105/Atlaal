import Body from "../Components/Components/Home/Collections/Body";
import Header from "../Components/Components/Home/Header/Header";
import Items from "../Components/Components/Home/Items/Items";
import styles from "./Home.module.css"

export default function HomePage() {
    return (
        <div className={styles.Home}>
            {/* <ThemeSwitch /> */}
            {/*  Navbar */}
            <Header />
            <Body />
            <Items />
            {/* //Collections
            //  //Top Sellers
            //  //Categories
            //  //Footer */}
        </div>
    );
}
