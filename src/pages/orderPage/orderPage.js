import React from 'react';
import Layout from "../../components/ui/layout/layout";
import styles from './ordePage.module.css'
import { ReactComponent as Production } from "../../assets/images/productionHouse.svg";
import DropDown from "../../components/ui/dropDown/dropDown";
import SearchInput from "../../components/searchInput/searchInput";
import FormGroupHeader from "../../components/formGroupHeader/formGroupHeader";
import orders from '../../helpers/orders'
import OrderCard from "../../components/ui/orderCard/orderCard";

const OrderPage = () => {
    const links = [{
        text : 'All productions',
        notifCount: 192
    }, {
        text: 'Awaiting production',
        notifCount: 19
    }]
    return (
            <Layout>
                <div className={styles.headerSection}>
                    <div className={styles.sectionOne}>
                     <Production />
                     <h1>Production House</h1>
                    </div>
                    <div className={styles.sectionTwo}>
                        <DropDown color="#fff" backgroundColor="#007BFF" options={[{ text: "Categories"}, { text: "Option 2" }, { text: "Option 3" }]} defaultOption="Categories"/>
                        <SearchInput/>
                    </div>
                </div>
                <FormGroupHeader linkables={links} activeLinkable={1}>
                    <button className={[styles.btn, styles.outline].join(' ')}>Print worksheet</button>
                    <DropDown color="#1A3A54" backgroundColor="transparent" options={[{text: "Mark as Complete"}, {text: "Option 1"}, {text: "Option 2"}]} defaultOption="Mark as Complete"/>
                    <button className={[styles.btn, styles.fill].join(' ')}>Save</button>
                </FormGroupHeader>
                <div className={styles.orderGroup}>
                    <OrderCard header/>
                    {
                        orders.map((order, idx) => <OrderCard key={idx}  id={idx} configObject={order}  />)
                    }
                </div>
            </Layout>
    );
};

export default OrderPage;