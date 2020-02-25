import React from 'react';
import styles from './footer.module.css'
import { ReactComponent as Apple } from '../../../assets/images/apple.svg';
import { ReactComponent as PlayStore } from '../../../assets/images/google-play-store.svg';
import { ReactComponent as Twitter } from '../../../assets/images/twitter.svg'
import { ReactComponent as Facebook } from '../../../assets/images/facebook.svg'
import { ReactComponent as Instagram } from '../../../assets/images/instagram.svg'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.appSection}>
                <h2>Download App</h2>
                <div className={styles.appStoreContainer}>
                    <div className={styles.iconWrapper}>
                        <Apple/>
                    </div>
                    <div className={styles.iconWrapper}>
                        <PlayStore/>
                    </div>
                </div>
            </div>
            <div className={styles.textSection}>
                <p className={styles.plainText}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur
                </p>
                <div className={styles.linkGroup}>
                    <a href="Lorem 1" target="_blank">
                        Lorem ipsum dolor sit amet
                    </a>
                    <a target="_blank" href="Lorem 2">
                        Lorem ipsum dolor sit amet
                    </a>
                    <a target="_blank" href="Lorem 2">
                        Lorem ipsum dolor sit amet
                    </a>
                </div>
            </div>
            <div className={styles.socialSection}>
                <h3>Connect with us</h3>

                <div className={styles.socialGroup}>
                    <a href="/twitter"> <Twitter/> </a>
                    <a href="/facebook"> <Facebook/> </a>
                    <a href="/insta"> <Instagram/> </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;