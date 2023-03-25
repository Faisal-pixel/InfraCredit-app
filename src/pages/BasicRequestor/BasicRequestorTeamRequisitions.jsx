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
import RequisitionListContainer from "../../components/RequisitionListContainer";


const activityStatusData = [
    {
        activityStatusTitle: "New",
        ActivityStatusValue: 4
    },
    {
        activityStatusTitle: "Awaiting Approval",
        ActivityStatusValue: 12
    },
    {
        activityStatusTitle: "Pending My Approval",
        ActivityStatusValue: 5
    },
    {
        activityStatusTitle: "Approved",
        ActivityStatusValue: 75
    },
    {
        activityStatusTitle: "In Progress",
        ActivityStatusValue: 54
    },
    {
        activityStatusTitle: "Completed",
        ActivityStatusValue: 153
    },
]

const myRecentRequisitionsData = [
    {
        rfqNo: "SD2568",
        requestorName: "Jane Doe",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: false
    },
    {
        rfqNo: "SD2568",
        requestorName: "Bello Fawaz",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: false
    },
    {
        rfqNo: "SD2568",
        requestorName: "Amaka John",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: false
    },
    {
        rfqNo: "SD2568",
        requestorName: "Stella Obi",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: false
    },
    {
        rfqNo: "SD2568",
        requestorName: "John Snow",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: false
    },
    {
        rfqNo: "SD2568",
        requestorName: "Wale Mark",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: true
    },
    {
        rfqNo: "SD2568",
        requestorName: "Bill Gate",
        description: "IT infrastructure service",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: true
    },
]


const BasicRequestorTeamRequisitions = () => {
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
            <BasicRequestorTeamRequisitionsStyled>
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
                    <DashboardNavigation myRequisitions teamRequisitions teamRequisitionsActive myPurchaseContracts/>
                    <ActivityStatus activityStatusData={activityStatusDataState} />
                    <RequisitionListContainer 
                        listData={myRecentRequisitionsDataState}
                        goTo="/basic-requestor/team-requisitions/details"
                    />
                </div>
            </BasicRequestorTeamRequisitionsStyled>

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

const BasicRequestorTeamRequisitionsStyled = styled.div``;



export default BasicRequestorTeamRequisitions;