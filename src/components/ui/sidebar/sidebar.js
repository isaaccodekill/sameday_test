import React, { useState } from 'react';
import styles from './sidebar.module.css'
import { ReactComponent as OperationsSvg } from '../../../assets/images/operations_svg.svg'
import { ReactComponent as Dashboard } from '../../../assets/images/dashboard_logo.svg'
import { ReactComponent as Record } from "../../../assets/images/records_svg.svg";
import { ReactComponent as Supply } from "../../../assets/images/suppy_svg.svg";
import { ReactComponent as Market } from "../../../assets/images/market_svg.svg";
import { ReactComponent as Forums  } from "../../../assets/images/forums_svg.svg";
import { ReactComponent as Settings } from "../../../assets/images/settings.svg";
import SideMenuItem from "../sideMenuItem/sideMenuItem";

const Sidebar = ({ open, setOpen }) => {
    const sideBarClasses = open ? [styles.sideBar, styles.sideOpen] : [styles.sideBar]
    const menuBox = open ? [ styles.menuBox, styles.menuOpen] : [styles.menuBox]

    return (
        <div className={sideBarClasses.join(' ')}>
            <div className={styles.sideBarHeader}>
                    <div className={menuBox.join(' ')} onClick={() => setOpen(!open)}>
                        <div className={styles.bar}/>
                    </div>
            </div>
            <div className={styles.navlinks}>
                <SideMenuItem open={open} openFunc={setOpen} svg={Dashboard} text={"Dashboard"} path="/dashboard"/>
                <SideMenuItem open={open} openFunc={setOpen} svg={OperationsSvg} text={"Operations"} children={[{ name: "Orders", notifCount: 1, urlTarget: "/Operations/Orders" },
                    { name: "Production House", notifCount: 1, urlTarget: "/Operations/Production-house" },
                    { name: "Bids", notifCount: 1, urlTarget: "/Operations/Bids" },
                    {name: "Promotion / Discount", urlTarget: "/Operations/Promotion"}, {name: "Outsourcing", urlTarget: "O/perations/Out-sourcing"}]}>
                </SideMenuItem>
                <SideMenuItem path="/Records" open={open} openFunc={setOpen} svg={Record} text={"Records"} notifCount={1}/>
                <SideMenuItem path="/SupplyStore" open={open} openFunc={setOpen} svg={Supply} text={"Supply Store"}/>
                <SideMenuItem path="/MarketPlace" open={open} openFunc={setOpen} svg={Market} text={"Market place"} notifCount={1}/>
                <SideMenuItem path="/Forums" open={open} openFunc={setOpen} svg={Forums} text={"Forums"}/>
                <SideMenuItem path="/Settings"  open={open} openFunc={setOpen} svg={Settings} text={"Settings"}/>
            </div>
        </div>
    );

};

export default Sidebar;