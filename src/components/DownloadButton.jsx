import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DownloadButton = ({buttonName}) => {
    return (
        <Link style={{textDecoration: "none"}}>
        <DownloadButtonStyled type="submit" className="">
            
            {buttonName}
            
        </DownloadButtonStyled>
        </Link>
    )
}

const DownloadButtonStyled = styled.div`
    display: flex;
    box-sizing: border-box;
    left: 360px;
    border-radius: var(--br-31xl);
    background: linear-gradient(90deg, #227cbf, #47b65c);
    width: 200px;
    height: 40px;
    padding: var(--padding-3xs);
    justify-content: center;
    cursor: pointer;
    border: none;
    color: var(--white1);
`

export default DownloadButton;