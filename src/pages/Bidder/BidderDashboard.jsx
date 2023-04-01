import React, {useState, useCallback, useEffect} from "react";
import {  useNavigate } from "react-router-dom";
//IMPORT COMPONENTS
import MainHeader from "../../components/MainHeader";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";
import UserGreetings from "../../components/UserGreetings";
import DashboardNavigation from "../../components/DashboardNavigation";

import styled from "styled-components";
import ActivityStatus from "../../components/ActivityStatus";
import RecentRequisitionContainer from "../../components/RecentRequisitionContainer";


const activityStatusData = [
    {
        activityStatusTitle: "RFQ",
        ActivityStatusValue: 5
    },
    {
        activityStatusTitle: "RFP",
        ActivityStatusValue: 31
    },
    {
        activityStatusTitle: "Contracts",
        ActivityStatusValue: 2
    }
]

const myRecentRequisitionsData = [
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
]


const BidderDashboard = () => {
    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const [activityStatusDataState, setActivityStatusDataState] = useState([]);
    const [myRecentRequisitionsDataState, setMyRecentRequisitionsDataState] = useState([])
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

      useEffect(() => {
        setActivityStatusDataState(activityStatusData);
        setMyRecentRequisitionsDataState(myRecentRequisitionsData)
      }, [])

    return(
        <>
            <BidderDashboardStyled>
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
                    <DashboardNavigation dashboard dashboardActive dashboardGoTo="/bidder-dashboard" requestForQuotes purchaseContracts purchaseContractsGoTo="/bidder-dashboard/bidder-purchase-contracts" issueResolution report profile/>
                    <ActivityStatus activityStatusData={activityStatusDataState} goTo="/bidder-dashboard/bidder-request-for-quotes" />
                    <RecentRequisitionContainer
                    listDataState={myRecentRequisitionsDataState}
                    shouldIncludeStatusSection
                    recentRequisitionText="My Recent Requisitions"
                    pending_svg_icon="/ellipse-84.svg"
                    completed_svg_icon="/ellipse-85.svg"
                    goTo="/bidder-dashboard/bid-details"
                     />
                </div>
            </BidderDashboardStyled>

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

const BidderDashboardStyled = styled.div``;

export default BidderDashboard;