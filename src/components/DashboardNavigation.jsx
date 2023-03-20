import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";


import styles from "./DashboardNavigation.module.css";

const DashboardNavigation = ({dashboard, dashboardActive, settings, settingsActive, bidders, requestForQuotes, requestForQuotesActive, purchaseContracts, purchaseContractsActive, issueResolution, report, profile, purchaseDocuments, myRequisitions, teamRequisitions, myPurchaseContracts}) => {
    const navigate = useNavigate();
    const onRequestForQuotesClick = useCallback(() => {
        navigate("/bidder-dashboard/bidder-request-for-quotes")
    }, [navigate])
    const onDashboardClick = useCallback(() => {
        navigate("/bidder-dashboard")
    }, [navigate])
    const onPurchaseContractsClick = useCallback(() => {
        navigate("/bidder-dashboard/bidder-purchase-contracts")
    }, [navigate])

    return (
        <div className={styles.tabMenu}>
            <div className={styles.topMenu}>
              <div onClick={onDashboardClick} className={`${dashboard ? styles.div5 : styles.div} ${dashboardActive && styles.div7}`}>
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.child} />
              </div>
              <div className={`${settings ? styles.div5 : styles.div} ${settingsActive && styles.div7}`}>
                <div className={styles.dashboard}>Settings</div>
                <div className={styles.child} />
              </div>
              <div className={bidders ? styles.div5 : styles.div}>
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
              <div className={myRequisitions ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>My Requisitions</div>
                <div className={styles.child} />
              </div>
              <div className={teamRequisitions ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Team Requisitions</div>
                <div className={styles.child} />
              </div>
              <div className={myPurchaseContracts ? styles.div5 : styles.div}>
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