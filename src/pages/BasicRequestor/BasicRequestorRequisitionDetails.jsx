import React, {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import BreadCrumbsNavigation from "../../components/BreadCrumbsNavigation";
import BreadCrumbsFrameIcon from "../../components/BreadCrumbsFrameIcon";
import BreadCrumbsNextName from "../../components/BreadCrumbsNextName";
import GeneralButton from "../../components/GeneralButton";
import DownloadButton from "../../components/DownloadButton";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";
import DetailsToggle from "../../components/DetailsToggle";


import styled from "styled-components";
import LegalTemplateDatasheet from "../../components/LegalTemplateDatasheet";
import EsgTemplateDatasheet from "../../components/EsgTemplateDatasheet";


const BasicRequestorRequisitionDetails = () => {
    // const location = useLocation();
    // const {listData} = location.state;
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
    return <>
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
        <BasicRequestorRequisitionDetailsStyled className="page-container body">
            
            <BreadCrumbsNavigation>
                    <BreadCrumbsFrameIcon />
                    <BreadCrumbsNextName breadCrumbsNextName="Bid Details" isActive/>
                </BreadCrumbsNavigation>

                <BidDetailsButtons>
                    <DownloadButton buttonName="Download RFQ" />
                    <GeneralButton type="submit" buttonName="Submit Response" />
                </BidDetailsButtons>

                <DetailsToggle title="General">
                    <DetailsDropdownStyled>
                        <div className="top">
                            <div className="rfq-no-parent">
                                <p>RFQ No:</p>
                                <div>sd2345</div>
                            </div>
                            <div className="creation-date-parent">
                                <p>Creation Date:</p>
                                <div>05/03/2023</div>
                            </div>
                            <div className="requester-parent">
                                <p>Requester:</p>
                                <div>John</div>
                            </div>
                            <div className="business-unit-parent">
                                <p>Business Unit:</p>
                                <div>05/03/2023</div>
                            </div>
                            <div className="department-parent">
                                <p>Department:</p>
                                <div>Sales</div>
                            </div>
                            
                        </div>

                        <div className="middle">
                            <div className="company-overview-parent">
                                <p>Description: </p>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="requisition-status-parent">
                                <p>Requisition Status: </p>
                                <div>New</div>
                            </div>
                        </div>
                    </DetailsDropdownStyled>
                </DetailsToggle>
                <DetailsToggle title="Legal Template Datasheet">
                    <DetailsDropdownStyled>
                        <LegalTemplateDatasheet />
                    </DetailsDropdownStyled>
                </DetailsToggle>
                <DetailsToggle title="ESG Template Datasheet">
                    <DetailsDropdownStyled>
                        <EsgTemplateDatasheet />
                    </DetailsDropdownStyled>
                </DetailsToggle>
                

        </BasicRequestorRequisitionDetailsStyled>

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
}

const BasicRequestorRequisitionDetailsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    flex: 1 1;
    overflow: hidden;
    padding: var(--padding-11xl) var(--padding-31xl);
    gap: var(--gap-xl);
`

const BidDetailsButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`
const DetailsDropdownStyled = styled.div`
    .pointer {
        cursor: pointer;
    }
    box-sizing: border-box;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    cursor: auto;

    textarea {
        box-sizing: border-box;
        padding: 0.5rem;
        resize: none;
        width: 100%;
        min-height: 15vh;
        border: 1px solid var(--gray-200);
        border-radius: 0.5rem;

        :focus {
            outline: none;
        }
    }
    
    .top {
        display: flex;
        justify-content: flex-start;
        column-gap: 2rem;

        .rfq-no-parent, .creation-date-parent, .requester-parent, .business-unit-parent, .department-parent {
            div {
                box-sizing: border-box;
                border: 1px solid var(--gray-200);
                padding: 0.5rem;
                min-width: 15rem;
                border-radius: 0.5rem;
            }
        }

        
    }

    .middle {
        display: flex;
        justify-content: flex-start;
        column-gap: 3.5rem;

        .company-overview-parent {
            width: 100%;
            
        }
        
    }

    .bottom {
        display: flex;
        justify-content: flex-start;
        column-gap: 3.5rem;

        .requisition-status-parent {
            div {
                box-sizing: border-box;
                border: 1px solid var(--gray-200);
                padding: 0.5rem;
                min-width: 15rem;
                border-radius: 0.5rem;
            }
        }
        
    }

    

    .bid-value-parent {
        width: 15rem;
        div {
                box-sizing: border-box;
                border: 1px solid var(--gray-200);
                padding: 0.5rem;
                /* min-width: 15rem; */
                border-radius: 0.5rem;
            }
    }


`

export default BasicRequestorRequisitionDetails;