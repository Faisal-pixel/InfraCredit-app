import styled from "styled-components";
import styles from "./RecentRequisitionContainer.module.css";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const RecentRequisitionContainer = ({
  recentRequisitionText,
  myRecentRequisitionsDataState,
  pending_svg_icon,
  completed_svg_icon,
  onListContainerClick,
  
}) => {

  console.log(myRecentRequisitionsDataState)
  return (
    <div className={styles.table}>
      <div className={styles.recentRequisitionsWrapper}>
        <div className={styles.recentRequisitions}>{recentRequisitionText}</div>
          <SearchFilterDivStyled>
            <SearchInput placeholder="Search" />
            <SearchButton />
            <img className={styles.frameIcon} alt="" src="/frame3.svg" />
          </SearchFilterDivStyled>
      </div>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <div className={styles.title1}>
            <div className={styles.rfqNo}>RFQ No</div>
          </div>
          <div className={styles.title2}>
            <div className={styles.description}>Description</div>
          </div>
          <div className={styles.title2}>
            <div className={styles.description}>{`Expiration Date & Time`}</div>
          </div>
          <div className={styles.title1}>
            <div className={styles.rfqNo}>Status</div>
          </div>
        </div>
        {myRecentRequisitionsDataState.map((myRecentRequisitionsData) => {

          const {rfqNo, description, expDateAndTime,status} = myRecentRequisitionsData;
          return(
            <div className={styles.list} onClick={onListContainerClick}>
              <div className={styles.sd2568}>{rfqNo}</div>
              <div
                className={styles.buildingMaintenance}
              >{description}</div>
              <div className={styles.buildingMaintenance}>
                {/* 2022-01-28 14:53 GMT+1 */}
                {expDateAndTime}
              </div>
              <div className={status ? styles.div4 : styles.div}>
                <img className={styles.child} alt="" src={status ? completed_svg_icon : pending_svg_icon} />
                <div className={status ? styles.completed : styles.pending}>{status ? "Completed" : "Pending"}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const SearchFilterDivStyled = styled.div` 
  display: flex;
  position: relative;
  width: 560px;
  height: 40px;
  flex-shrink: 0;
  justify-content: space-between;
  gap: 1rem;
`;

export default RecentRequisitionContainer;
