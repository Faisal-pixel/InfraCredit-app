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
import SearchInput from "../../components/SearchInput";
import SearchButton from "../../components/SearchButton";


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
        status: false
    },
    {
        rfqNo: "SD2568",
        requesterName: "Bill Gate",
        description: "IT infrastructure service",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: false
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
                    <RequisitionsListContainer>
                        <header>
                            <div className="title-name">
                                My Recent Requisitions
                            </div>
                            <div className="search-components">
                                <SearchInput />
                                <SearchButton />
                                <img className="frame-icon" alt="" src="/frame3.svg" />
                            </div>
                        </header>
                        <main className="list-table">
                            <div className="grid list-header">
                                <div className="list-column-title">RFQ No</div>
                                <div className="list-column-title">Description</div>
                                <div className="list-column-title">Expiration Date & Time</div>
                                <div className="list-column-title">Status</div>
                            </div>

                            <div className="grid list-body">
                                <div className="list-data">SD2568</div>
                                <div className="list-data">Building Maintenance</div>
                                <div className="list-data">2022-01-28 14:53 GMT+1</div>
                                <div className="list-data status-div">
                                    <img className="child" alt="" src="/ellipse-85.svg" />
                                    <div className="completed">Completed</div>
                                </div>
                            </div>
                           
                        </main>
                    </RequisitionsListContainer>
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

const RequisitionsListContainer = styled.div`
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--white1);
    padding: var(--padding-xl) 0 0;
    gap: var(--gap-xl);
    text-align: left;
    font-family: var(--h21);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--body-text-size);

    header {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 0 var(--padding-xl);
        align-items: flex-start;
        justify-content: flex-start;
        .title-name {
            width: 100%;
            position: relative;
            line-height: 28.8px;
            font-weight: 500;
            display: flex;
            justify-content: space-between;
            font-size: var(--h3-size);
            color: var(--secondary1);
        }

        .search-components {
            display: flex;
            position: relative;
            width: 560px;
            height: 40px;
            flex-shrink: 0;
            justify-content: space-between;
            gap: 1rem;

            .frame-icon {

            }
        }
    }

    main {
        width: 100%;
        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            background-color: var(--white1);
        }
        

        .list-header {
            width: 100%;
            padding: var(--padding-mini) var(--padding-xl);
            box-sizing: border-box;
            color: var(--grey-dark);
        }
        .list-body {
            box-sizing: border-box;
            border-top: 1px solid var(--grey-light);
            border-bottom: 1px solid var(--grey-light);
            width: 100%;
            padding: var(--padding-mini) var(--padding-xl);
            justify-content: space-between;
            cursor: pointer;

            .list-data.status-div {
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                align-items: center;

                .child {
                    position: relative;
                    width: 10px;
                    height: 10px;
                    flex-shrink: 0;
                }

                .completed {
                    border-radius: var(--br-21xl);
                    background-color: var(--green-1001);
                    padding: var(--padding-8xs) var(--padding-4xs);
                    justify-content: flex-start;
                    gap: var(--gap-7xs);
                    font-size: var(--caption-size);
                    color: var(--green-9001);
                }
            }
        }
    }
`

export default BasicRequestorTeamRequisitions;