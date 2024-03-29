import React, {useState, useCallback, useMemo} from "react";
import {  useNavigate } from "react-router-dom";
//IMPORT COMPONENTS
import MainHeader from "../../components/MainHeader";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";
import UserGreetings from "../../components/UserGreetings";

import styled from "styled-components";
import RequisitionListContainer from "../../components/RequisitionListContainer";
import ITAdminDashboardNavigationComponent from "./ITAdminDashboardNavigationComoponent";
import ITAdminSubDashboardNav from "./ITAdminSubDashboardNav";







const ITAdminRFQTeamRequisitions = () => {

    const myRecentRequisitionsData = useMemo(() => [
        {
            rfqNo: "SD2568",
            requesterName: "Jane Doe",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            requesterName: "Bello Fawaz",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            requesterName: "Amaka John",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            requesterName: "Stella Obi",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            requesterName: "John Snow",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            requesterName: "Wale Mark",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: true
        },
        {
            rfqNo: "SD2568",
            requesterName: "Bill Gate",
            description: "IT infrastructure service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: true
        },
    ], [])

    
    
    

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
            <ITAdminRFQTeamRequisitionsStyled>
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
                    <ITAdminDashboardNavigationComponent requestForQuotesActive/>
                    <ITAdminSubDashboardNav myRequisitions teamRequisitions teamRequisitionsActive otherRequistions/>
                    <AdminUsersStyled>
                        <RequisitionListContainer requisitionContainerName="Team Requisitions" listData={myRecentRequisitionsData} goTo="/it-admin/request-for-quotes/team-requisitions/details" shouldIncludeSearchFilter/>
                    </AdminUsersStyled>
                </div>
            </ITAdminRFQTeamRequisitionsStyled>

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

const ITAdminRFQTeamRequisitionsStyled = styled.div``;

const AdminUsersStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--body-text-size);
    /* color: var(--black1); */
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--white1);
    padding: var(--padding-xl) 0 0;
    gap: var(--gap-xl);
    text-align: left;
    font-family: var(--h21);
    
    table {
        width: 100%;
        border-spacing: 0;
        thead {
            .my-custom-row {
            
        }
        }
        thead {
            cursor: pointer;
            th {
                color: var(--grey-dark);
                font-style: normal;
                font-weight: 400;
                font-size: 1rem;

            }
        }
        th, td {
            border-bottom: 2px solid var(--grey-light);
            padding: 1rem;
        }
    }
`;

export default ITAdminRFQTeamRequisitions;