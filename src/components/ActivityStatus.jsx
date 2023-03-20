import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ActivityStatus.module.css";

const ActivityStatus = ({activityStatusData}) => {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate("/bidder-dashboard/bidder-request-for-quotes")
    }, [navigate])
    return (
        <div className={styles.stats}>
        <div className={styles.activityStatus}>Activity Status</div>
            <div className={styles.stats1Parent}>
                {
                    activityStatusData.map((status, index) => (
                        
                            <div key={index} className={styles.stats1} onClick={handleClick}>
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