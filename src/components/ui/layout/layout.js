import React, {useState} from 'react';
import styles from './layout.module.css'
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false)
    const Layout = open ? [styles.Layout, styles.LayoutOpen].join(' ') : styles.Layout

    return (
        <div className={Layout}>
            <Sidebar open={open} setOpen={setOpen}/>
            <div className={styles.main}>
                <Header open={open}/>
                <div className={styles.mainContent}>
                    {children}
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Layout;