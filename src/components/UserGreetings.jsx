import React from "react";
import styles from "./UserGreetings.module.css";

const UserGreetings = () => {
    return (
        <div className={styles.welcomeNote}>
            <div className={styles.heyJohnParent}>
                <div className={styles.heyJohn}>Hey John -</div>
                <div className={styles.weWereJust}>
                    We were just about to start the party without you. Welcome back,
                    buddy!
                </div>
            </div>
        </div>
    )
}

export default UserGreetings