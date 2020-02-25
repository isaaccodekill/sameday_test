import React from 'react';
import styles from './formGroupHeader.module.css'

const FormGroupHeader = ({ linkables, activeLinkable, children }) => {
    return (
        <div className={styles.formHeader}>
            <div className={styles.headerLinkGroup}>
                {
                    linkables.map((link, i) => (
                        <div className={ (i === 0) ? [styles.linkContainer, styles.activeContainer].join(' ') : styles.linkContainer}>
                            <div className={styles.HeaderLink}>
                                <span>{link.text}</span>
                                {link.notifCount ? <div className={styles.notifCount}>
                                    {link.notifCount}
                                </div> : null}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.restOfContent}>
                {children}
            </div>
        </div>
    );
};

export default FormGroupHeader;