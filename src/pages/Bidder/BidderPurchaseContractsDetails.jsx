import React, {useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";

//Components
import MainHeader from "../../components/MainHeader";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";
import UserGreetings from "../../components/UserGreetings";
import DashboardNavigation from "../../components/DashboardNavigation";
import SaveCommentSection from "../../components/SaveCommentSection";
import OutlinedWhiteBgButton from "../../components/OutlinedWhiteBgButton";

const BidderPurchaseContractsDetails = () => {
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
    return (
        <>
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
                <DashboardNavigation dashboard dashboardGoTo="/bidder-dashboard" requestForQuotes requestForQuotesGoTo="/bidder-dashboard/bidder-request-for-quotes" purchaseContracts purchaseContractsActive issueResolution report profile/>
                <OutlinedWhiteBgButton />
                <SaveCommentSection 
                    imageDimensions="/image-2@2x.png"
                    imageDimensionIds="/frame1.svg"
                    imageSizeIds="/delete.svg"
                    imageSizeIds16x16="/delete.svg"
                    imageSizeIds16x16x="/delete.svg"
                    imageSizeIds16x16x1774626="/delete.svg"
                    imageSizeIds16x16x17746262="/delete.svg"
                    imageSizeIds16x16x17746263="/delete.svg"
                />
            </div>
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

export default BidderPurchaseContractsDetails;