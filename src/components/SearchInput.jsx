import React from "react";
import styled from "styled-components";

const SearchInput = ({placeholder, searchTerm, handleChange}) => {
    
    return (
        <>
            <SearchInputStyled type="search" placeholder={placeholder} value={searchTerm} onChange={handleChange} />
        </>
    )
}

const SearchInputStyled = styled.input`
    width: 350px;
    background-color: var(--white1);
    border-radius: var(--br-8xs);
    border: 1px solid var(--gray-200);
    padding: var(--padding-3xs) var(--padding-xl);
    justify-content: flex-start;
`

export default SearchInput;