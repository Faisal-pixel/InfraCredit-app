import React, { useState } from "react";
import styled from "styled-components";

const DetailsToggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <DetailsToggleStyled onClick={() => setToggle(!toggle)}>
            <div className="generalParent">
                    <div className="general">
                        <div className="toggleText">{title}</div>
                        <img className="frameIcon" alt="" src="/frame64.svg" />
                    </div>
            </div>
            {toggle && children}
        </DetailsToggleStyled>
    )
}

const DetailsToggleStyled = styled.div`
    height: auto;
    cursor: pointer;
    border: solid 1px;
    width: 100%;
    .toggleText {
  position: relative;
  line-height: 24px;
  font-weight: 600;
}
.frameIcon {
  position: relative;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  overflow: hidden;
}
.general {
  width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.generalParent {
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--h4-size);
  color: var(--white1);
  font-family: var(--h21);
}
`

export default DetailsToggle;