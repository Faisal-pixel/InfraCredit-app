import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginOptions.module.css";

const LoginOptions = () => {
    const navigate = useNavigate()
    const clickHandler = useCallback(() => {
        navigate("/bidder-dashboard")
    }, [navigate])
  return (
    <div className={styles.loginOptions}>
      <div className={styles.mainHeader}>
        <div className={styles.infracredit1}>
          <div className={styles.sapphireprocureParent}>
            <div className={styles.sapphireprocure}>SapphireProcure</div>
            <img className={styles.groupIcon} alt="" src="/group12.svg" />
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.loginParent}>
            <div className={styles.login}>Login</div>
            <div className={styles.pleaseSelectYour}>
              Please Select your account type to login.
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.button1}>Login as Employee</div>
          </div>
          <div className={styles.button} onClick={clickHandler}>
            <div className={styles.button1}>Login as Bidder</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <img
          className={styles.gelImages31Icon}
          alt=""
          src="/gelimages3-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LoginOptions;