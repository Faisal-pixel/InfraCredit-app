import React, {useState, useCallback} from "react";
import styled from "styled-components";
import BidderRatingsPopupBox from "./BidderRatingsPopupBox";
const OutlinedWhiteBgButton = ({uploadContractNote}) => {
    const [isRatingOpen, setIsRatingOpen] = useState(false);

    const onClickRateBidderButton = useCallback(() => {
        setIsRatingOpen(true)
      }, [])
    return <>
        {isRatingOpen && <BidderRatingsPopupBox />}
        <ButtonParentStyled>
            <button className="button">
                <div className="button-child">
                Notify Winner for Signature
                </div>
            </button>
            {
                uploadContractNote && <button className="button"><div className="button-child">Upload Contract Note</div></button>
            }
            <button onClick={onClickRateBidderButton} className="button">
                <div className="button-child">Rate Bidder Performance</div>
            </button>
        </ButtonParentStyled>
    </>
} 


const ButtonParentStyled = styled.div`
    display: flex;
    flex-direction: row;
    width: 1340px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
    .button {
        color: var(--primary);
        cursor: pointer;
        border-radius: var(--br-31xl);
        background-color: var(--white1);
        border: 1px solid var(--primary);
        box-sizing: border-box;
        height: 40px;
        padding: var(--padding-3xs);
        align-items: center;
        justify-content: center;
    }
`

export default OutlinedWhiteBgButton;