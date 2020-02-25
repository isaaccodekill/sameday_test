import React from 'react';
import styles from './singleOrderPage.module.css'
import Layout from "../../components/ui/layout/layout";
import { ReactComponent as RightArrow } from '../../assets/images/right-arrow.svg'
import { ReactComponent as Production } from "../../assets/images/productionHouse.svg";
import { ReactComponent as Cart } from '../../assets/images/shopping-cart.svg'
import DropDown from "../../components/ui/dropDown/dropDown";
import FormGroupHeader from "../../components/formGroupHeader/formGroupHeader";
import { ReactComponent as File } from "../../assets/images/file.svg";
import OrderCard from "../../components/ui/orderCard/orderCard";
import { withRouter } from 'react-router-dom'
import Orders from '../../helpers/orders'
import ImageSlide from "../../components/ui/imageSlide/imageSlide";


const SingleOrderPage = ({ match }) => {
    const { params : { id } } = match
    const links = [{
        text : 'Product details'
    }, {
        text: 'History / Notes',
    }]

    const configObject = Orders[id];

    return (
        <Layout>
            <div className={styles.headerSection}>
                <div className={styles.sectionOne}>
                    <div className={styles.backGroup}>
                        <div className={styles.svgHolder}>
                            <RightArrow/>
                        </div>
                        <span>Back</span>
                        {/* add a border right to this */}
                    </div>
                    <div className={styles.productionSvgGroup}>
                        <Production/>
                        <h1> Production House </h1>
                    </div>
                </div>
            </div>
            <div className={styles.secondHeader}>
                <div className={styles.flexLeft}>
                    <h1>Order: #ADJ2322434D</h1>
                    <p className={styles.subHeader}>Account Setup > Delivery Mathod</p>
                </div>
                <div className={styles.flexRight}>
                    <span className={styles.textGroupLead}>Production Status :</span>
                    <h2 className={styles.textGroupText}>Running 2 of 5</h2>
                </div>
            </div>
            <div className={styles.mainCard}>
                <div className={styles.cardSection}>
                    <Cart/>
                    <div className={styles.cardTextGroup}>
                        <p className={styles.lead}>
                            Order Value
                        </p>
                        <span className={styles.value}>
                            $40,000
                        </span>
                    </div>
                    <span className={styles.line}/>
                </div>
                <div className={styles.cardSection}>
                    <div className={styles.cardTextGroup}>
                        <p className={styles.lead}>
                            Order Date
                        </p>
                        <span className={styles.value}>
                            25 - June - 2017
                        </span>
                    </div>
                    <span className={styles.line}/>
                </div>
                <div className={styles.cardSection}>
                    <div className={styles.cardTextGroup}>
                        <p className={styles.lead}>
                            Delivery Method
                        </p>
                        <span className={styles.value}>
                            <span>Pickup Order</span>
                            <DropDown specialCase color="#1E8406" backgroundColor="transparent" options={[{text: "Can Edit"}, {text:"otherOption"}]} defaultOption="Can Edit"/>
                        </span>
                    </div>
                    <span className={styles.line}/>
                </div>
                <div className={styles.cardSection}>
                    <div className={styles.cardTextGroup}>
                        <p className={styles.lead}>
                            Rush Option
                        </p>
                        <span className={styles.value}>
                            <span className={styles.smallIconWrapper}> <span className={styles.checkMark}></span></span>
                            <span>Rush</span>
                        </span>
                    </div>
                    <span className={styles.line}/>
                </div>
                <div className={styles.cardSection}>
                    <div className={styles.cardTextGroup}>
                        <p className={styles.lead}>
                            Status
                        </p>
                        <span className={styles.value}>
                            Pending
                        </span>
                    </div>
                    <span className={styles.line}/>
                </div>
                <div className={styles.cardSection}>
                    <div className={styles.cardTextGroup}>
                        <p className={styles.lead}>
                            Requested By
                        </p>
                        <span className={styles.value}>
                            <span className={styles.dateGroup}>
                                <span className={styles.date}>
                                    25 - June -2017
                                </span>
                                <span className={styles.timeGroup}>
                                    <span className={styles.timeLead}>
                                        Time left
                                    </span>
                                    <span className={styles.time}>
                                        10:00:00
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <span className={styles.line}/>
                </div>
                <div className={styles.cardSection}>
                    <div className={styles.cardTextGroup}>
                        <p className={styles.lead}>
                            Shipped or Picked Date
                        </p>
                        <span className={styles.value}>
                            25 - June - 2017
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.orderMainSection}>
                <FormGroupHeader linkables={links} activeLinkable={1}>
                    <DropDown color="#1E8406" backgroundColor="transparent" options={[{text: "Mark"}, {text: "Option 1"}, {text: "Option 2"}]} defaultOption="Worksheet"/>
                    <button className={[styles.btn, styles.fill].join(' ')}>Print</button>
                    <button className={[styles.btn, styles.outline].join(' ')}> <File/> Add Note</button>
                    <DropDown color="#fff" backgroundColor="#007BFF" options={[{text: "Mark as Complete"}, {text: "Option 1"}, {text: "Option 2"}]} defaultOption="Complete production"/>
                </FormGroupHeader>
                <hr className={styles.hr}/>
                <div className={styles.miniBanner}>
                    <h2>Product</h2>
                    <button className={styles.btnOutline}> Download Artwork</button>
                </div>
                <ImageSlide imageList={configObject.details.otherImages}/>
                {/* insert image slider here it becomes horizontal when on small screens */}
                <div className={styles.orderGroup}>
                    <OrderCard header specialCase/>
                    <OrderCard specialCase configObject={configObject} />
                </div>
            </div>

        </Layout>
    );
};

export default withRouter(SingleOrderPage);