import {Outlet} from "react-router-dom";

import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import styles from "./Layout.module.css";
import SideBar from "./components/SideBar/index.jsx";

const Layout = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.mainContainer}>
                <SideBar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
