import React, {useState, useCallback, useMemo} from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import UserGreetings from "../../components/UserGreetings";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";
import DashboardNavigation from "../../components/DashboardNavigation";
import PurchaseContractsContainer from "../../components/PurchaseContractsContainer";






const BidderPurchaseContracts = () => {
    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const purchaseContractsData = useMemo(() => [
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",  
        },
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
    ], [])
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
                    <DashboardNavigation dashboard dashboardGoTo="/bidder-dashboard" requestForQuotes requestForQuotesGoTo="/bidder-dashboard/bidder-request-for-quotes" purchaseContracts purchaseContractsActive purchaseContractsGoTo="/bidder-dashboard/bidder-purchase-contracts" issueResolution report profile/>
                     <PurchaseContractsContainer listData={purchaseContractsData} goTo="/bidder-dashboard/bidder-purchase-contracts/details"/>
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

export default BidderPurchaseContracts;