import React from "react";


import styles from "./DashboardNavigation.module.css";

const DashboardNavigation = ({dashboard, dashboardActive, settings, settingsActive, bidders, requestForQuotes, requestForQuotesActive, purchaseContracts, issueResolution, report, profile, purchaseDocuments, myRequisitions, teamRequisitions, myPurchaseContracts}) => {
 

    return (
        <div className={styles.tabMenu}>
            <div className={styles.topMenu}>
              <div className={`${dashboard ? styles.div5 : styles.div} ${dashboardActive && styles.div7}`}>
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.child} />
              </div>
              <div className={`${settings ? styles.div5 : styles.div} ${settingsActive && styles.div7}`}>
                <div className={styles.dashboard}>Settings</div>
              </div>
              <div className={bidders ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Bidders</div>
              </div>
              <div className={`${requestForQuotes ? styles.div5 : styles.div} ${requestForQuotesActive && styles.div7}`}>
                <div className={styles.dashboard}>Request for Quotes</div>
              </div>
              <div className={purchaseContracts ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Purchase Contracts</div>
              </div>
              <div className={issueResolution ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Issue Resolution</div>
              </div>
              <div className={report ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Report</div>
              </div>
              <div className={profile ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Profile</div>
              </div>
              <div className={purchaseDocuments ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Purchase Documents</div>
              </div>
              <div className={myRequisitions ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>My Requisitions</div>
              </div>
              <div className={teamRequisitions ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>Team Requisitions</div>
              </div>
              <div className={purchaseContracts ? styles.div5 : styles.div}>
                <div className={styles.dashboard}>My Purchase Contracts</div>
              </div>
              <div className={styles.otherRequisitions}>Other Requisitions</div>
            </div>
            <div className={styles.tabMenuChild} />
          </div>
    )
}

export default DashboardNavigation;