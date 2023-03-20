import React from "react";

//STYLES
import styled from "styled-components";

const BreadCrumbsFrameIcon = () => {
    return <FrameIconStyled alt="" src="/frame60.svg" />
}

const FrameIconStyled = styled.img`
    position: relative;
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    overflow: hidden;
`

export default BreadCrumbsFrameIcon;