import React, {useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";
//IMPORT COMPONENTS
import MainHeader from "../components/MainHeader";
import PortalPopup from "../components/PortalPopup";
import NotificationPopup from "../components/NotificationPopup";
import UserGreetings from "../components/UserGreetings";
import DashboardNavigation from "../components/DashboardNavigation";

import styled from "styled-components";
import ActivityStatus from "../components/ActivityStatus";





const BidderDashboard = () => {
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
                    <ActivityStatus />
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