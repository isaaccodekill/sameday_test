import React from 'react';
import styles from './avatar.module.css'
import { ReactComponent as Default } from '../../../assets/images/user.svg'

const Avatar = ({ ImageUrl }) => {

    const stylesSpecial = {
        backgroundImage: ImageUrl,
    }

    return (
        <div className={styles.Avatar} style={ ImageUrl ? stylesSpecial : null }>
            { !ImageUrl ? <Default/>  : null}
        </div>
    );
};
export default Avatar;