import React from "react";
import styled from "styled-components";

const SelectDropdown = ({permissionsData, setUpdateSelect}) => {
    
    return <>
        <DropdownStyled>
            {
                permissionsData.map(data => (
                    <div onClick={() => setUpdateSelect(data.permission)} key={data.accessorID}  className="pleaseSelectWrapper">
                        <div className="pleaseSelect">{data.permission}</div>
                    </div>
                ))
            }
        </DropdownStyled>
    </>
}

const DropdownStyled = styled.div`
    display: flex;
    align-items: flex-start;
    position: absolute;
    border-radius: var(--br-8xs);
    background-color: var(--white1);
    border: 0.5px solid var(--grey-dark);
    box-sizing: border-box;
    width: 270px;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    overflow: auto;
    text-align: left;
    font-size: var(--caption-size);
    color: var(--black1);
    font-family: var(--h21);
    top: 100%;
    left: 0;
    z-index: 100;

    .pleaseSelect {
        position: relative;
        line-height: 14.4px;
    }
    .pleaseSelectWrapper {
        
    }
    .pleaseSelectWrapper {
        display: flex;
        align-items: flex-start;
        align-self: stretch;
        flex-direction: row;
        padding: var(--padding-3xs);
        justify-content: flex-start;

        :hover {
            background-color: var(--grey-dark);
            color: white;
        }
    }
`

export default SelectDropdown;