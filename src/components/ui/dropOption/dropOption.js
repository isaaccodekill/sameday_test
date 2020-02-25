import React from 'react';
import styles from './dropOption.module.css'

const DropOption = ({ image:Image, text, clickFunc  }) => {
    return (
        <div className={styles.option} onClick={clickFunc}>
            { Image ? <Image/> : null }
            <span> {text} </span>
        </div>
    );
};

export default DropOption;