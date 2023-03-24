import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";

//STYLES
import styles from "./BreadCrumbsNavigation.module.css";

const BreadCrumbsNavigation = ({children, dashboardGoTo}) => {
    const navigate = useNavigate();
    const onDashboardClick = useCallback(() => {
        navigate(dashboardGoTo);
      }, [navigate, dashboardGoTo]);
    return (
        <>
            <div className={styles.breadcrumb}>
                <div onClick={onDashboardClick} className={styles.dashboard} >
                Dashboard
                </div>
                {children}
            </div>
        </>
    )
}

export default BreadCrumbsNavigation;