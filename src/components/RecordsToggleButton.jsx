import React, { useState } from "react";
import styled from "styled-components";

export function RecordsToggleButton() {
  const [myRecordToggle, setMyRecordToggle] = useState(false);
  const [allRecordsToggle, setAllRecordsToggle] = useState(false);

  const handleMyRecordsClick = () => {
    setMyRecordToggle(true);
    setAllRecordsToggle(false);
  };
  const handleAllRecordsClick = () => {
    setAllRecordsToggle(true);
    setMyRecordToggle(false);
  };
  return (
    <ToggleDivStyled>
      <div
        onClick={handleMyRecordsClick}
        className={`records-toggle ${myRecordToggle && "active"}`}
      >
        <p>My Records</p>
      </div>
      <div
        onClick={handleAllRecordsClick}
        className={`records-toggle ${allRecordsToggle && "active"}`}
      >
        <p>All records</p>
      </div>
    </ToggleDivStyled>
  );
}

const ToggleDivStyled = styled.div`
    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #d4d4d8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    display: flex;
    column-gap: 0.2rem;
    padding: 0.3rem 0.3rem;
    width: fit-content;

    p {
        margin: 0;
    }

    .records-toggle {
        display: flex;
        align-items: center;
        padding: 6px 5px;
        cursor: pointer;
    }

    .active {
        background: linear-gradient(90deg, #227cbf 0%, #47b65c 100%);
        transition: background 0.5s ease;
        border-radius: 6px;
        color: white;
    }
`

export default RecordsToggleButton;

