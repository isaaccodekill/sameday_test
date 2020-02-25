import React from 'react';
import styles from './imageSlide.module.css'

const ImageSlide = ({ imageList, cardComponent }) => {
    console.log("The image list", imageList)

    const ImageSlide = cardComponent ? [styles.ImageSlide, styles.cardType].join(' ') : styles.ImageSlide

    return (
        <div className={ImageSlide}>
            {
                imageList.map((image, i) => {
                    return (
                    <div className={styles.imageGroup}>
                        <img src={image} alt=""/>
                        <span className={styles.text}>
                            { (i === 0) ? "Front" : (i === 1) ? "Back" : (i === 2) ? "Side" : "Side" }
                        </span>
                    </div>)})
            }
        </div>
    );
};

export default ImageSlide;