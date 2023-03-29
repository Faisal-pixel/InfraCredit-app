import React, {useState, useCallback, useEffect} from "react";
import {  useNavigate } from "react-router-dom";
//IMPORT COMPONENTS
import MainHeader from "../../components/MainHeader";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";
import UserGreetings from "../../components/UserGreetings";
import DashboardNavigation from "../../components/DashboardNavigation";

import styled from "styled-components";
import SubDashboardNav from "../../components/SubDashboardNav";
import { useTable } from "react-table";




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


const ProcurementAdminSettings = () => {
    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const {} = useTable({})
    
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
        setrecentRequisitionsDataState(recentRequisitionsData)
      }, [])

    return(
        <>
            <ProcurementAdminSettingsStyled>
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
                    <DashboardNavigation dashboard settings settingsActive bidders requestForQuotes purchaseContracts purchaseDocuments/>
                    <SubDashboardNav adminUser adminUserActive userRoles userPermissions shouldIncludeButton buttonName="Add new user"/>
                    <AdminUsersTablesStyled>

                    </AdminUsersTablesStyled>
                </div>
            </ProcurementAdminSettingsStyled>

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

const ProcurementAdminSettingsStyled = styled.div``;

const AdminUsersTablesStyled = styled.div``;

export default ProcurementAdminSettings;