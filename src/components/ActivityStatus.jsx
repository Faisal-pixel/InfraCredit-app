import React from "react";
import styles from "./StatusContainer.module.css";

const ActivityStatus = () => {
    return (
        <div className={styles.stats}>
                        <div className={styles.activityStatus}>Activity Status</div>
                        <div className={styles.stats1Parent}>
                            <div className={styles.stats1}>
                                <div className={styles.new}>New</div>
                                <b className={styles.b}>5</b>
                            </div>
                            <div className={styles.stats1}>
                                <div className={styles.new}>Awaiting Approval</div>
                                <b className={styles.b}>31</b>
                            </div>
                            <div className={styles.stats1}>
                                <div className={styles.approved}>Approved</div>
                                <b className={styles.b}>51</b>
                            </div>
                            <div className={styles.stats1}>
                                <div className={styles.new}>In Progress</div>
                                <b className={styles.b}>10</b>
                            </div>
                            <div className={styles.stats1}>
                                <div className={styles.new}>Completed</div>
                                <b className={styles.b}>135</b>
                            </div>
                            <div className={styles.stats1}>
                                <div className={styles.new}>Pending Rating</div>
                                <b className={styles.b}>2</b>
                            </div>
                        </div>
                    </div>
    )
}

export default ActivityStatus;