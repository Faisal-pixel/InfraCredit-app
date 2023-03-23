import React from "react";
import styled from "styled-components";
const OutlinedWhiteBgButton = ({uploadContractNote}) => {
    return <>
        <ButtonParentStyled>
            <button className="button">
                <div className="button-child">
                Notify Winner for Signature
                </div>
            </button>
            {
                uploadContractNote && <button className="button"><div className="button-child">Upload Contract Note</div></button>
            }
            <button className="button">
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