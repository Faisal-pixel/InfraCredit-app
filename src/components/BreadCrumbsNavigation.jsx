import React from "react";

//STYLES
import styles from "./BreadCrumbsNavigation.module.css";

const BreadCrumbsNavigation = ({children}) => {
    return (
        <>
            <div className={styles.breadcrumb}>
                <div className={styles.dashboard} >
                Dashboard
                </div>
                {children}
            </div>
        </>
    )
}

export default BreadCrumbsNavigation;