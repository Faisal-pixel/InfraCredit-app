import React, {useState, useCallback, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import UserGreetings from "../../components/UserGreetings";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";
import DashboardNavigation from "../../components/DashboardNavigation";
import RecentRequisitionContainer from "../../components/RecentRequisitionContainer";


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

const BidderRequestForQuotes = () => {
    const [isNotificationOpen, setNotificationOpen] = useState(false);
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
        setMyRecentRequisitionsDataState(myRecentRequisitionsData)
      }, [])

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
                    <DashboardNavigation dashboard dashboardGoTo="/bidder-dashboard" requestForQuotes requestForQuotesActive requestForQuotesGoTo="/bidder-dashboard/bidder-request-for-quotes" purchaseContracts purchaseContractsGoTo="/bidder-dashboard/bidder-purchase-contracts" issueResolution report profile/>
                    <RecentRequisitionContainer
                    listDataState={myRecentRequisitionsDataState}
                    recentRequisitionText="My Recent Bids"
                    pending_svg_icon="/ellipse-84.svg"
                    completed_svg_icon="/ellipse-85.svg"
                    goTo="/bidder-dashboard/bid-details"
                    shouldIncludeSearchandFilter
                    shouldIncludeStatusSection
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

export default BidderRequestForQuotes