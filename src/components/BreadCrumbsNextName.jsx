import React from "react";
import styled from "styled-components";

const isActiveStyling = {
    "color": "var(--primary)"
}

const BreadCrumbsNextName = ({breadCrumbsNextName, isActive}) => {
    return <BreadCrumbsNextNameStyled style={isActive && isActiveStyling}>{breadCrumbsNextName}</BreadCrumbsNextNameStyled>
}

const BreadCrumbsNextNameStyled = styled.div`
    position: relative;
    line-height: 14.4px;
    
`

export default BreadCrumbsNextName;