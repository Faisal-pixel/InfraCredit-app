import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GeneralButton from "../../../components/GeneralButton";


import styles from "../../../components/SubDashboardNav.module.css";

const ManagementSubDashboardNav = ({ myRequisitions, myRequisitionsActive, teamRequisitions, teamRequisitionsActive, otherRequistions, otherRequistionsActive, buttonName, shouldIncludeButton}) => {
    const navigate = useNavigate();
    
    
    const onMyRequisitionsClick = useCallback(() => {
        navigate("/management/request-for-quotes/my-requisitions")
    }, [navigate])
    const onTeamRequisitionsClick = useCallback(() => {
        navigate("/management/request-for-quotes/team-requisitions")
    }, [navigate])
    
    const onOtherRequisitionsClick = useCallback(() => {
        navigate("/management/request-for-quotes/other-requisitions")
    }, [navigate])

    return (
        <div className={styles.tabMenu}>
            <div className={styles.topMenu}>
              {/* MANAGEMENT REQUEST FOR QUOTES SUB NAV */}
              <div onClick={onMyRequisitionsClick} className={`${myRequisitions ? styles.div5 : styles.div} ${myRequisitionsActive && styles.div7}`}>
                <div className={styles.dashboard}>My Requisitions</div>
                <div className={styles.child} />
              </div>
              <div onClick={onTeamRequisitionsClick} className={`${teamRequisitions ? styles.div5 : styles.div} ${teamRequisitionsActive && styles.div7}`}>
                <div className={styles.dashboard}>Team Requisitions</div>
                <div className={styles.child} />
              </div>
              <div onClick={onOtherRequisitionsClick} className={`${otherRequistions ? styles.div5 : styles.div} ${otherRequistionsActive && styles.div7}`}>
                <div className={styles.dashboard}>Other Requisitions</div>
                <div className={styles.child} />
              </div>
              <div className={styles.buttonContainer}>
                {
                  shouldIncludeButton && <GeneralButton buttonName={buttonName}/>
                }
              </div>
            </div>
            <div className={styles.tabMenuChild} />
          </div>
    )
}

export default ManagementSubDashboardNav;