import React, {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import styles from "./RecentRequisitionContainer.module.css";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const RecentRequisitionContainer = ({
  recentRequisitionText,
  listDataState,
  pending_svg_icon,
  completed_svg_icon,
  shouldIncludeStatusSection,
  goTo,
  purchaseContracts,
  shouldIncludeSearchandFilter
  
}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => {
        setSearchTerm(e.target.value);   
    }
    const onSearchButtonClicked = (e) => {
      setSearchTerm(searchTerm);
    }
    const filteredlistDataState = listDataState.filter(data => {
      return (
        data.rfqNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.expDateAndTime.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })

  const onListContainerClick = useCallback((myRecentRequisitionsData) => {
    navigate(goTo, {state: {listData: myRecentRequisitionsData}});
  }, [navigate, goTo]);

  return (
    <div className={styles.table}>
      <div className={styles.recentRequisitionsWrapper}>
        <div className={styles.recentRequisitions}>{recentRequisitionText}</div>
          {shouldIncludeSearchandFilter && <SearchFilterDivStyled>
            <SearchInput placeholder="Search" searchTerm={searchTerm} handleChange={handleChange}/>
            <SearchButton onClick={onSearchButtonClicked}/>
            <img alt="" src="/frame3.svg" />
          </SearchFilterDivStyled>}
      </div>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <div className={styles.title1}>
            <div className={styles.rfqNo}>{purchaseContracts ? "Contract No" : "RFQ No."}</div>
          </div>
          <div className={styles.title2}>
            <div className={styles.description}>Description</div>
          </div>
          <div className={styles.title2}>
            <div className={styles.description}>{purchaseContracts ? "Contract Date & Time" : `Expiration Date & Time`}</div>
          </div>
          {
            shouldIncludeStatusSection && <div className={styles.title1}>
            <div className={styles.rfqNo}>Status</div>
          </div>
          }
        </div>
        {filteredlistDataState.map((listData, index) => {

          const {rfqNo, description, expDateAndTime, status} = listData;
          return(
            <div key={index} className={styles.list} onClick={() => {onListContainerClick(listData)}}>
              <div className={styles.sd2568}>{rfqNo}</div>
              <div
                className={styles.buildingMaintenance}
              >{description}</div>
              <div className={styles.buildingMaintenance}>
                {/* 2022-01-28 14:53 GMT+1 */}
                {expDateAndTime}
              </div>
              {shouldIncludeStatusSection && <div className={status ? styles.div4 : styles.div}>
                <img className={styles.child} alt="" src={status ? completed_svg_icon : pending_svg_icon} />
                <div className={status ? styles.completed : styles.pending}>{status ? "Completed" : "Pending"}</div>
              </div>}
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
