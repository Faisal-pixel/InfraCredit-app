import React, {useState, useCallback, useEffect} from "react";
import { useNavigate } from "react-router-dom";
//IMPORT COMPONENTS
import MainHeader from "../components/MainHeader";
import PortalPopup from "../components/PortalPopup";
import NotificationPopup from "../components/NotificationPopup";
import UserGreetings from "../components/UserGreetings";
import DashboardNavigation from "../components/DashboardNavigation";

import styled from "styled-components";
import ActivityStatus from "../components/ActivityStatus";


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


const BidderDashboard = () => {
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
        setActivityStatusDataState(activityStatusData)
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
                    <DashboardNavigation dashboard dashboardActive requestForQuotes purchaseContracts issueResolution report profile/>
                    <ActivityStatus activityStatusData={activityStatusDataState} />
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