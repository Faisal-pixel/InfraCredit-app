import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";


import styles from "./DashboardNavigation.module.css";

const DashboardNavigation = ({dashboard, dashboardActive, dashboardGoTo, settings, settingsActive, settingsGoTo, bidders, biddersActive, biddersGoTo, requestForQuotes, requestForQuotesActive, requestForQuotesGoTo, purchaseContracts, purchaseContractsActive, purchaseContractsGoTo, issueResolution, report, profile, purchaseDocuments, myRequisitions, myRequisitionsActive, teamRequisitions, teamRequisitionsActive, myPurchaseContracts, myPurchaseContractsActive}) => {
    const navigate = useNavigate();
    const onRequestForQuotesClick = useCallback(() => {
        navigate(requestForQuotesGoTo)
    }, [navigate, requestForQuotesGoTo])
    const onDashboardClick = useCallback(() => {
      navigate(dashboardGoTo)
    }, [navigate, dashboardGoTo])
    const onPurchaseContractsClick = useCallback(() => {
        navigate(purchaseContractsGoTo)
    }, [navigate, purchaseContractsGoTo])
    const myRequisitionsClick = useCallback(() => {
        navigate("/basic-requestor")
    }, [navigate])
    const teamRequisitionsClick = useCallback(() => {
        navigate("/basic-requestor/team-requisitions")
    }, [navigate])
    const myPurchaseContractsClick = useCallback(() => {
        navigate("/basic-requestor/purchase-contracts")
    }, [navigate])
    const onSettingsClick = useCallback(() => {
        navigate(settingsGoTo)
    }, [navigate, settingsGoTo])
    const onBiddersClick = useCallback(() => {
        navigate(biddersGoTo)
    }, [navigate, biddersGoTo])

    return (
        <div className={styles.tabMenu}>
            <div className={styles.topMenu}>
              <div onClick={onDashboardClick} className={`${dashboard ? styles.div5 : styles.div} ${dashboardActive && styles.div7}`}>
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.child} />
              </div>
              <div onClick={onSettingsClick} className={`${settings ? styles.div5 : styles.div} ${settingsActive && styles.div7}`}>
                <div className={styles.dashboard}>Settings</div>
                <div className={styles.child} />
              </div>
              <div onClick={onBiddersClick} className={`${bidders ? styles.div5 : styles.div} ${biddersActive && styles.div7}`}>
                <div className={styles.dashboard}>Bidders</div>
                <div className={styles.child} />
              </div>
              <div onClick={onRequestForQuotesClick} className={`${requestForQuotes ? styles.div5 : styles.div} ${requestForQuotesActive && styles.div7}`}>
                <div className={styles.dashboard}>Request for Quotes</div>
                <div className={styles.child} />
              </div>
              <div onClick={onPurchaseContractsClick} className={`${purchaseContracts ? styles.div5 : styles.div} ${purchaseContractsActive && styles.div7}` }>
                <div className={styles.dashboard}>Purchase Contracts</div>
                <div className={styles.child} />
              </div>
              <div className={issueResolution ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Issue Resolution</div>
                <div className={styles.child} />
              </div>
              <div className={report ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Report</div>
                <div className={styles.child} />
              </div>
              <div className={profile ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Profile</div>
                <div className={styles.child} />
              </div>
              <div className={purchaseDocuments ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Purchase Documents</div>
                <div className={styles.child} />
              </div>
              <div onClick={myRequisitionsClick} className={`${myRequisitions ? styles.div5 : styles.div} ${myRequisitionsActive && styles.div7}`}>
                <div className={styles.dashboard}>My Requisitions</div>
                <div className={styles.child} />
              </div>
              <div onClick={teamRequisitionsClick} className={`${teamRequisitions ? styles.div5 : styles.div} ${teamRequisitionsActive && styles.div7}`}>
                <div className={styles.dashboard}>Team Requisitions</div>
                <div className={styles.child} />
              </div>
              <div onClick={myPurchaseContractsClick} className={`${myPurchaseContracts ? styles.div5 : styles.div} ${myPurchaseContractsActive && styles.div7}`}>
                <div className={styles.dashboard}>My Purchase Contracts</div>
                <div className={styles.child} />
              </div>
              <div className={styles.otherRequisitions}>Other Requisitions</div>
            </div>
            <div className={styles.tabMenuChild} />
          </div>
    )
}

export default DashboardNavigation;