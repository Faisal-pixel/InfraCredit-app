import React, {useState, useCallback, useMemo} from "react";
import {  useNavigate } from "react-router-dom";
//IMPORT COMPONENTS
import MainHeader from "../../components/MainHeader";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";
import UserGreetings from "../../components/UserGreetings";

import styled from "styled-components";
import ProcurementAdminDashboardNavigationComponent from "./ProcurementAdminDashboardNavigationComponent";
import ReactTable from "../../components/ReactTable";
import GeneralOutlinedWhiteBgButton from "../../components/GeneralOutlinedWhiteBgButton";
import GeneralButton from "../../components/GeneralButton";
import SearchFilterComponent from "../../components/SearchFilterComponent";







const ProcurementAdminBidders = () => {
    const columns = useMemo(() => [
            
            {
                Header: "Bidder Number",
                accessor: "bidderNumber"
            },
            {
                Header: "Company Name",
                accessor: "companyName"
            },
            {
                Header: "Company Email",
                accessor: "companyEmail"
            },
            {
                Header: "Company Phone Number",
                accessor: "companyPhoneNumber"
            },
            {
                Header: "Company Address",
                accessor: "companyAddress"
            },
    ], [])

    const data = useMemo(() => [
        {
            bidderNumber: "PE0001",
            companyName: "XYZ Corporations",
            companyEmail: "xyzCorporation@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Lekki, Lagos"
        },
        {
            bidderNumber: "PE0001",
            companyName: "Nigeria Limited",
            companyEmail: "NigeriaLimited@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Ikeja, Lagos"
        },
        {
            bidderNumber: "PE0001",
            companyName: "Sigma Holdings",
            companyEmail: "sigma@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Ajah, Lagos"
        },
        {
            bidderNumber: "PE0001",
            companyName: "Redstar Global Limited",
            companyEmail: "redstarglobal@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Yaba, Lagos"
        },
        {
            bidderNumber: "PE0001",
            companyName: "Sigma Holdings",
            companyEmail: "sigmalholdings@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Mushin, Lagos"
        },
        {
            bidderNumber: "PE0001",
            companyName: "Redstar Global Limited",
            companyEmail: "redstarglobal@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Oshodi, Lagos"
        }
    ], [])
    
    

    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);
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

      const handleChange = (e) => {
        setSearchTerm(e.target.value);   
    }

    const filteredData = data.filter(data => {
        return (
            data.bidderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.companyEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.companyPhoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.companyAddress.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })

    return(
        <>
            <ProcurementAdminBiddersStyled>
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
                    <ProcurementAdminDashboardNavigationComponent biddersActive/>
                    <BidderStyled>
                        <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                            <div className="left-side-buttons">
                                <GeneralOutlinedWhiteBgButton buttonName="Upload Prequalified Bidders"/>
                                <GeneralButton buttonName="Create New Bidder"/>
                            </div>
                            <SearchFilterComponent showFilter={showFilter} setShowFilter={setShowFilter} searchTerm={searchTerm} handleChange={handleChange}/>
                        </div>
                            
                        <ReactTable columns={columns} data={filteredData} showFilter={showFilter}/>
                    </BidderStyled>
                </div>
            </ProcurementAdminBiddersStyled>

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

const ProcurementAdminBiddersStyled = styled.div``;

const BidderStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--body-text-size);
    /* color: var(--black1); */
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--white1);
    padding: var(--padding-xl) 1rem 0;
    gap: var(--gap-xl);
    text-align: left;
    font-family: var(--h21);

    .left-side-buttons {
        display: flex;
        column-gap: 1rem;
    }
    
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


export default ProcurementAdminBidders;