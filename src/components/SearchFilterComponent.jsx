import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const SearchFilterComponent = ({searchTerm, handleChange, showFilter, setShowFilter}) => {
    return <>
        <SearchFilterDivStyled>
            <SearchInput placeholder="Search" searchTerm={searchTerm} handleChange={handleChange}/>
            <img onClick={() => {setShowFilter(!showFilter)}} alt="" src="/frame3.svg" />
          </SearchFilterDivStyled>
    </>
}

const SearchFilterDivStyled = styled.div` 
  display: flex;
  position: relative;
  height: 40px;
  flex-shrink: 0;
  column-gap: 1rem;
`;

export default SearchFilterComponent;