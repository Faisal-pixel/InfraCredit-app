import React from "react";
import styled from "styled-components";

const GeneralOutlinedWhiteBgButton = ({buttonName, buttonType}) => {
    return <>
        <GeneralOutlinedWhiteBgButtonStyled className="buttonDiv">
            <button type={buttonType} className="button">
                <div className="button-child">
                {buttonName}
                </div>
            </button>
        </GeneralOutlinedWhiteBgButtonStyled>
    </>
}

const GeneralOutlinedWhiteBgButtonStyled = styled.div`
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
        
        :hover {
            color: white;
            background-color: var(--secondary1);
        }
    }
`

export default GeneralOutlinedWhiteBgButton;