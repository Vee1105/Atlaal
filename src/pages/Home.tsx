import Collections from "../Components/Components/Home/Collections/Collections";
import Header from "../Components/Components/Home/Header/Header";
import Items from "../Components/Components/Home/Items/Items";
import styles from "./Home.module.css"

export default function HomePage() {
    return (
        <div className={styles.Home}>
            {/*  Navbar */}
            <Header />
            <Collections />
            <Items />
            {/* //Collections
            //  //Top Sellers
            //  //Categories
            //  //Footer */}
        </div>
    );
}
