import { useMemo } from "react";
import styles from "./MainHeader.module.css";

const MainHeader = ({
  dimensions,
  dimensionsText,
  dimensionsCode,
  dimensionsCode2,
  dimensionsCode3,
  dimensionsCode4,
  dimensionsCode5,
  dimensionsCode6,
  vectorBottom,
  vectorTop,
  frameCursor,
  openNotification,
  onContainerClick,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      bottom: vectorBottom,
      top: vectorTop,
    };
  }, [vectorBottom, vectorTop]);

  const divStyle = useMemo(() => {
    return {
      cursor: frameCursor,
    };
  }, [frameCursor]);

  return (
    <div className={styles.mainHeader}>
      <div className={styles.sapphireprocure}>SapphireProcure</div>
      <img className={styles.groupIcon} alt="" src={dimensions} />
      <div className={styles.user}>
        <div className={styles.frame} onClick={openNotification}>
          <img className={styles.vectorIcon} alt="" />
          <img
            className={styles.vectorIcon1}
            alt=""
            src={dimensionsText}
            style={vectorIconStyle}
          />
          <img className={styles.vectorIcon2} alt="" src={dimensionsCode} />
          <div className={styles.ellipseParent}>
            <img className={styles.vectorIcon} alt="" src="/ellipse-71.svg" />
            <div className={styles.div}>2</div>
          </div>
        </div>
        <div className={styles.user1}>
          <img className={styles.userChild} alt="" src={dimensionsCode2} />
          <div className={styles.johnSnow}>John Snow</div>
          <img
            className={styles.arrowSmDown1Icon}
            alt=""
            src={dimensionsCode3}
          />
        </div>
        <div
          className={styles.div1}
          onClick={onContainerClick}
          style={divStyle}
        >
          <img className={styles.frameIcon} alt="" src={dimensionsCode4} />
          <div className={styles.johnSnow}>Logout</div>
        </div>
        <img className={styles.userItem} alt="" src={dimensionsCode5} />
        <img className={styles.arrowSmDown1Icon} alt="" src={dimensionsCode6} />
      </div>
    </div>
  );
};

export default MainHeader;
