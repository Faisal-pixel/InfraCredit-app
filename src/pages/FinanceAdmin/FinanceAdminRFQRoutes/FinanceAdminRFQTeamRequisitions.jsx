import React, {useState, useCallback, useMemo} from "react";
import {  useNavigate } from "react-router-dom";
//IMPORT COMPONENTS
import MainHeader from "../../../components/MainHeader";
import PortalPopup from "../../../components/PortalPopup";
import NotificationPopup from "../../../components/NotificationPopup";
import UserGreetings from "../../../components/UserGreetings";
import RequisitionListContainer from "../../../components/RequisitionListContainer";
import FinanceAdminDashboardNavigationComponent from "../FinanceAdminDashboardNavigationComoponent";
import FinanceAdminSubDashboardNav from "../FinanceAdminSubDashboardNav";

import styled from "styled-components";

const FinanceAdminRFQTeamRequisitions = () => {

    const myRecentRequisitionsData = useMemo(() => [
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: true
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: true
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: true
        },
    ], [])

    
    
    

    const [isNotificationOpen, setNotificationOpen] = useState(false);
    
    const navigate = useNavigate();

    const openNotification = useCallback(() => {
        setNotificationOpen(true);
      }, []);
    
      const closeNotification = useCallback(() => {
        setNotificationOpen(false);
      }, []);

      const onContainerClick = useCallback(() => {
        navigate("/");
      }, [navigate]);

    return(
        <>
            <FinanceAdminRFQTeamRequisitionsStyled>
                <MainHeader
                    dimensions="/group.svg"
                    dimensionsText="/vector2.svg"
                    dimensionsCode="/vector3.svg"
                    dimensionsCode2="/ellipse-6@2x.png"
                    dimensionsCode3="/arrowsmdown-1.svg"
                    dimensionsCode4="/frame.svg"
                    dimensionsCode5="/ellipse-61@2x.png"
                    dimensionsCode6="/arrowsmdown-11.svg"
                    openNotification={openNotification}
                    onContainerClick={onContainerClick}
                />
                 
                <div className="body page-container">
                    <UserGreetings />
                    <FinanceAdminDashboardNavigationComponent requestForQuotesActive/>
                    <FinanceAdminSubDashboardNav myRequisitions teamRequisitions teamRequisitionsActive otherRequistions/>
                    <AdminUsersStyled>
                        <RequisitionListContainer requisitionContainerName="Team Requisitions" listData={myRecentRequisitionsData} shouldIncludeSearchFilter/>
                    </AdminUsersStyled>
                </div>
            </FinanceAdminRFQTeamRequisitionsStyled>

            {isNotificationOpen && (
                <PortalPopup
                
                overlayColor="rgba(113, 113, 113, 0.3)"
                placement="Centered"
                onOutsideClick={closeNotification}
                >
                <NotificationPopup onClose={closeNotification} />
                </PortalPopup>
            )}
        </>
    )

    
}

const FinanceAdminRFQTeamRequisitionsStyled = styled.div``;

const AdminUsersStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--body-text-size);
    /* color: var(--black1); */
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--white1);
    padding: var(--padding-xl) 0 0;
    gap: var(--gap-xl);
    text-align: left;
    font-family: var(--h21);
`;

export default FinanceAdminRFQTeamRequisitions;