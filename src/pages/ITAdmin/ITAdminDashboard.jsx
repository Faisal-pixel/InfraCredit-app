import React, {useState, useCallback, useEffect, useMemo} from "react";
import {  useNavigate } from "react-router-dom";
//IMPORT COMPONENTS
import MainHeader from "../../components/MainHeader";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";
import UserGreetings from "../../components/UserGreetings";

import styled from "styled-components";
import ActivityStatus from "../../components/ActivityStatus";
import RecordsToggleButton from "../../components/RecordsToggleButton";
import ITAdminDashboardNavigationComponent from "./ITAdminDashboardNavigationComoponent";
import RequisitionListContainer from "../../components/RequisitionListContainer";


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




const ITAdminDashboard = () => {
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
    const [activityStatusDataState, setActivityStatusDataState] = useState([]);
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
      }, [])

    return(
        <>
            <ITAdminDashboardStyled>
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
                    <ITAdminDashboardNavigationComponent dashboardActive/>
                    <ActivityStatus activityStatusData={activityStatusDataState} />
                    <RequisitionListContainer requisitionContainerName="My Requisitions" listData={myRecentRequisitionsData}/>
                </div>
            </ITAdminDashboardStyled>

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

const ITAdminDashboardStyled = styled.div``;

export default ITAdminDashboard;