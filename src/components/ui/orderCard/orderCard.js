import React from 'react';
import styles from './orderCard.module.css'
import { ReactComponent as Clock } from "../../../assets/images/clock.svg";
import { ReactComponent as Eye } from "../../../assets/images/eye.svg";
import ImageSlide from "../imageSlide/imageSlide";
import { withRouter } from 'react-router-dom'

const OrderCard = ({ header, configObject, id, history, specialCase }) => {
    const orderCardClasses = header ?  [styles.orderCard, styles.HeaderType].join(' ') : styles.orderCard

    const route = (id) => {
        if(!specialCase){
            history.push(`/Operations/Production-house/${id}`)
        }
    }

    return (
        <div className={orderCardClasses} onClick={ !header ? () => route(id) : () => {}}>
            <span className={styles.checkbox}>
                <input type="checkbox" name="" id=""/>
            </span>
            { !specialCase ? <span className={styles.order}>
                {
                    header ? "Order #": configObject.order
                }
            </span> : null}
            <span className={styles.item}>
                {
                    header ? "Item #": configObject.item
                }
            </span>
            <span className={styles.Details}>
                {
                    header ? "Details": (<span className={styles.ImageBox}> <Eye/> <div className={styles.slideContainer}> <ImageSlide imageList={configObject.details.otherImages} cardComponent/> </div> <img src={configObject.details.mainImage} alt="" srcset=""/> <span>{configObject.details.text}</span></span>)
                }
            </span>
            <span className={styles.colors}>
                {
                    header ? "Colors": <div className={styles.colorBlock} style={{backgroundColor: configObject.color.color}}>{configObject.color.text}</div>
                }
            </span>
            <span className={styles.qty}>
                {
                    header ? "Qty" : configObject.qty
                }
            </span>
            <span className={styles.printType} style={ specialCase ? { color: "red" } : null }>
                {
                    header ? specialCase ? "Production Type" : "Print Type" : configObject.printType
                }
            </span>
            { !specialCase ? <span className={styles.delivery}>{
                header ? "Delivery Method" : (configObject.delivery === 0) ? <span className={styles.rush}> <Clock/> Rush shipping</span> : <span className={styles.chill}> Pickup Order</span>
            }</span>: null}
            { !specialCase ? <span className={styles.deliveryTime}>
                {
                    header ? "Delivery Time" : <span className={styles.dateTime}> <span className={styles.date}> {configObject.deliveryDate} </span>
                        <span>
                            <span className={styles.timeLead}> Time left</span>
                            <span className={styles.greenTime}> {configObject.timeLeft} </span>
                        </span> </span>
                }
            </span>: null}
            { !specialCase ? <span className={styles.prodStatus}>
                {
                    header ? "Production status" : `Running ${configObject.done} out of ${configObject.left}`
                }
            </span> : null}

            {
                specialCase ? <span className={styles.prodStatus}>
                    {
                        header ? "Paid" : <span><span className={styles.smallIconWrapper}> <span className={styles.checkMark}/></span>
                            <span>Rush</span></span>
                    }
                </span> : null
            }

        </div>
    );
};

export default withRouter(OrderCard);