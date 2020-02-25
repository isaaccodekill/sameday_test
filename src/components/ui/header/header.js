import React from 'react';
import styles from './header.module.css'
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as Search } from "../../../assets/images/search_svg.svg";
import { ReactComponent as Message } from '../../../assets/images/mail.svg'
import { ReactComponent as ShoppingCart } from '../../../assets/images/shopping-cart.svg'
// import { ReactComponent as Notification } from '../../../assets/images/'
import HeaderLinks from '../headerLinks/headerLinks'
import Avatar from '../avatar/avatar'

const Header = ({ open }) => {
    const headerClasses = open ? [styles.Header, styles.openHeader].join(' ') : styles.Header
    return (
        <div className={headerClasses}>
            <Logo className={styles.Logo}/>
            <div className={styles.HeaderNavItems}>
                <HeaderLinks className={styles.search}>
                    <Search/>
                    <input type="text" placeholder="Search"/>
                </HeaderLinks>
                <HeaderLinks Notification count={1}>
                    <Message/>
                    <span> Message</span>
                </HeaderLinks>
                <HeaderLinks Notification count={1}>
                    <ShoppingCart/>
                    <span> Market Place </span>
                    <div className={styles.guitarPick}/>
                </HeaderLinks>
                <HeaderLinks Notification count={1}>
                    <div className={styles.specialMenu}>
                        <div className={styles.menuGroup}>
                            <div className={styles.circle}/>
                            <div className={styles.rectangle}/>
                        </div>
                        <div className={styles.menuGroup}>
                            <div className={styles.circle}/>
                            <div className={styles.rectangle}/>
                        </div>
                        <div className={styles.menuGroup}>
                            <div className={styles.circle}/>
                            <div className={styles.rectangle}/>
                        </div>
                    </div>
                    <span>Notification</span>
                </HeaderLinks>
                <HeaderLinks className={styles.column}>
                    <Avatar/>
                    <div className={styles.flexGroup}>
                        <span>Me</span>
                        <div className={styles.guitarPick}/>
                    </div>
                </HeaderLinks>
            </div>
        </div>
    );
};

export default Header;