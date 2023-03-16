import styles from "./NotificationPopup.module.css";

const NotificationPopup = ({ onClose }) => {
  return (
    <div className={styles.notification}>
      <div className={styles.notification3}>
        <div className={styles.bg} />
        <div className={styles.seeDetailsWrapper}>
          <div className={styles.seeDetails}>See Details</div>
        </div>
        <div className={styles.hideWrapper}>
          <div className={styles.seeDetails}>Hide</div>
        </div>
        <div className={styles.markJohnJust}>
          Mark John just Created a new RFQ request.
        </div>
        <div className={styles.newRfq}>New RFQ!</div>
        <div className={styles.notification3Child} />
        <div className={styles.notification3Item} />
        <div className={styles.frame}>
          <img className={styles.vectorIcon} alt="" />
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
          <div className={styles.ellipseParent}>
            <img className={styles.vectorIcon} alt="" src="/ellipse-7.svg" />
            <div className={styles.div}>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
