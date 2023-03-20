import React, {useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";

//STYLES

import styled from "styled-components";
import BreadCrumbsNavigation from "../../components/BreadCrumbsNavigation";
import BreadCrumbsFrameIcon from "../../components/BreadCrumbsFrameIcon";
import BreadCrumbsNextName from "../../components/BreadCrumbsNextName";
import SearchButton from "../../components/SearchButton";

const BidDetails = () => {
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
            
            <BidDetailsStyled>
                <BreadCrumbsNavigation>
                    <BreadCrumbsFrameIcon />
                    <BreadCrumbsNextName breadCrumbsNextName="Bid Details" isActive/>
                </BreadCrumbsNavigation>

                <BidDetailsButtons>
                    <SearchButton />
                    <SearchButton />
                </BidDetailsButtons>
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
`

export default BidDetails;