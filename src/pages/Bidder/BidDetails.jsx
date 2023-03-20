import React, {useState, useCallback} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";

//STYLES

import styled from "styled-components";
import BreadCrumbsNavigation from "../../components/BreadCrumbsNavigation";
import BreadCrumbsFrameIcon from "../../components/BreadCrumbsFrameIcon";
import BreadCrumbsNextName from "../../components/BreadCrumbsNextName";
import DownloadButton from "../../components/DownloadButton";
import GeneralButton from "../../components/GeneralButton";
import DetailsToggle from "../../components/DetailsToggle";

const BidDetails = () => {
    const location = useLocation();
    const {listData} = location.state;
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
            
            <BidDetailsStyled className="page-container">
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
                                <div>{`${listData.rfqNo}:`}</div>
                            </div>
                            <div className="creation-date-parent">
                                <p>Creation Date:</p>
                                <div>05/03/2023</div>
                            </div>
                            <div className="duration-parent">
                                <p>Invitation Date & Time: 05/03/2023; 12:53:00 GMT + 1 </p>
                                <p>Expiration Date & Time: 05/03/2023; 12:53:00 GMT + 1 </p>
                                <p>Expiration Date Countdown: 00:00:03 Hours </p>
                            </div>
                        </div>

                        <div className="bottom">
                            <div className="company-overview-parent">
                                <p>Company Overview: </p>
                                <textarea></textarea>
                            </div>
                            <div className="project-discription-parent">
                                <p>Project Description: </p>
                                <textarea></textarea>
                            </div>
                            <div className="scope-of-work-parent">
                                <p>Scope of work: </p>
                                <textarea></textarea>
                            </div>
                        </div>
                    </DetailsDropdownStyled>
                </DetailsToggle>

                <DetailsToggle title="RFQ Response">
                    <DetailsDropdownStyled>
                        <div className="bid-value-parent">
                            <p>Bid Value:</p>
                            <div>1,200,000.000</div>
                        </div>
                        <div className="comment-parent">
                            <p>Comment (Optional):</p>
                            <textarea></textarea>
                        </div>
                        <GeneralButton type="submit" buttonName="Upload supporting documents"/>
                    </DetailsDropdownStyled>
                </DetailsToggle>
            </BidDetailsStyled>

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

const BidDetailsStyled = styled.div`
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
    box-sizing: border-box;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    
    .top {
        display: flex;
        justify-content: flex-start;
        column-gap: 2rem;

        .rfq-no-parent, .creation-date-parent {
            div {
                box-sizing: border-box;
                border: 1px solid var(--gray-200);
                padding: 0.5rem;
                min-width: 15rem;
                border-radius: 0.5rem;
            }
        }

        .duration-parent  {
            p {
                &:nth-child(1) {
                    color: var(--secondary1);
                }
                &:nth-child(2) {
                    color: var(--primary);
                }
                &:nth-child(3) {
                    color: var(--color-red);
                }
            }
        }
    }

    .bottom {
        display: flex;
        justify-content: flex-start;
        column-gap: 3.5rem;

        .company-overview-parent, .project-discription-parent, .scope-of-work-parent {
            flex-basis: 30%;
            textarea {
                resize: none;
                width: 100%;
                min-height: 15vh;
                border: 1px solid var(--gray-200);
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

    .comment-parent {
        textarea {
            resize: none;
            width: 100%;
            min-height: 15vh;
            border: 1px solid var(--gray-200);
            border-radius: 0.5rem;
        }
    }

`

export default BidDetails;