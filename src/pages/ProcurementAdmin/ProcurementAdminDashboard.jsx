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
import RecordsToggleButton from "../../components/RecordsToggleButton";


const activityStatusData = [
    {
        activityStatusTitle: "New",
        ActivityStatusValue: 5
    },
    {
        activityStatusTitle: "Awaiting Approval",
        ActivityStatusValue: 31
    },
    {
        activityStatusTitle: "Approved",
        ActivityStatusValue: 51
    },
    {
        activityStatusTitle: "In Progress",
        ActivityStatusValue: 10
    },
    {
        activityStatusTitle: "Completed",
        ActivityStatusValue: 135
    },
    {
        activityStatusTitle: "Pending Rating",
        ActivityStatusValue: 2
    },
]

const recentRequisitionsData = [
    {
        rfqNo: "SD2568",
        requestorName: "John",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: false
    },
    {
        rfqNo: "SD2568",
        requestorName: "Janet",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: false
    },
    {
        rfqNo: "SD2568",
        requestorName: "Jackson",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: false
    },
    {
        rfqNo: "SD2568",
        requestorName: "Snow",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: false
    },
    {
        rfqNo: "SD1564",
        requestorName: "Robert",
        description: "IT infrastructure Service",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: true
    },
    {
        rfqNo: "SD1564",
        requestorName: "Josephine",
        description: "IT infrastructure Service",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: true
    },
    {
        rfqNo: "SD1564",
        requestorName: "Maleek",
        description: "IT infrastructure Service",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: true
    },
]


const ProcurementAdminDashboard = () => {
    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const [activityStatusDataState, setActivityStatusDataState] = useState([]);
    const [recentRequisitionsDataState, setrecentRequisitionsDataState] = useState([])
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
        setrecentRequisitionsDataState(recentRequisitionsData)
      }, [])

    return(
        <>
            <ProcurementAdminDashboardStyled>
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
                    <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                        <UserGreetings />
                        <RecordsToggleButton />
                    </div>
                    <DashboardNavigation dashboard dashboardActive settings bidders requestForQuotes purchaseContracts purchaseDocuments/>
                    <ActivityStatus activityStatusData={activityStatusDataState} />
                    <RecentRequisitionContainer
                    listDataState={recentRequisitionsDataState}
                    shouldIncludeStatusSection
                    recentRequisitionText="Recent Requisitions"
                    pending_svg_icon="/ellipse-84.svg"
                    completed_svg_icon="/ellipse-85.svg"
                    goTo="/procurement-admin/requisition-details"
                     />
                </div>
            </ProcurementAdminDashboardStyled>

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

const ProcurementAdminDashboardStyled = styled.div``;

export default ProcurementAdminDashboard;