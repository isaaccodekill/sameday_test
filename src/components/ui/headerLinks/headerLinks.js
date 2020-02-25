import React from 'react';
import styles from './headerLinks.module.css'


const HeaderLinks = ({ Notification, count, children, className }) => {
    return (
        <div className={ className ? [ styles.HeaderLinks, className].join(' ') : styles.HeaderLinks}>
            { Notification ? <span className={styles.notificationCircle}> { count } </span> : null }
            {children}
        </div>
    );
};

export default HeaderLinks;