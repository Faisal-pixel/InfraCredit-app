import React from "react";
import styles from "./StatusContainer.module.css";

const ActivityStatus = ({activityStatusData}) => {
    return (
        <div className={styles.stats}>
        <div className={styles.activityStatus}>Activity Status</div>
            <div className={styles.stats1Parent}>
                {
                    activityStatusData.map((status, index) => (
                        
                            <div key={index} className={styles.stats1}>
                                <div className={styles.new}>{status.activityStatusTitle}</div>
                                <b className={styles.b}>{status.ActivityStatusValue}</b>
                            </div>
                        
                        ))
                }
            </div>
        </div>
    )
}

export default ActivityStatus;