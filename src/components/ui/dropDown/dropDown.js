import React, { useState } from 'react';
import styles from './dropDown.module.css'
import DropOption from "../dropOption/dropOption";
import { ReactComponent as Drop } from '../../../assets/images/dropdown.svg'


const DropDown = ({ color, backgroundColor, changeFunction, options, defaultOption, className, special }) => {



    const [open, setOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(defaultOption)
    const choseOption = (optionPicked) => {
        setSelectedOption(optionPicked.text)
        setOpen(false)
    }

    const optionGroupClasses = open ? [styles.optionGroup, styles.showOptions].join(' ') : styles.optionGroup


    return (
        <div className={special ? [styles.Dropdown, className].join(' ') : styles.Dropdown} style={ backgroundColor ?  { backgroundColor: backgroundColor}: null}>
            <div className={styles.chosenOption} style={{color: color}} onClick={() => setOpen(!open)}> <span>{selectedOption}</span> <Drop color={color} style={{fill: color}}/> </div>
            <div className={optionGroupClasses}>
                { options.map(option => (
                    <DropOption image={ option.image ? option.image : null} text={option.text} clickFunc={() => choseOption(option)} />))}
            </div>
        </div>
    );
};

export default DropDown;