import React from "react";
import styled from "styled-components";

const SearchButton = () => {
    return (
        <SearchButtonStyled type="submit" className="">Search</SearchButtonStyled>
    )
}

const SearchButtonStyled = styled.button`
    left: 360px;
    border-radius: var(--br-31xl);
    background: linear-gradient(90deg, #227cbf, #47b65c);
    width: 200px;
    height: 40px;
    padding: var(--padding-3xs);
    justify-content: center;
    color: var(--white1);
    border: none;
`

export default SearchButton;