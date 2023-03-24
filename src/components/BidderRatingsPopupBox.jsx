import React from "react";
import styled from "styled-components";
import GeneralButton from "./GeneralButton";

const BidderRatingsPopupBox = () => {
    return <>
        <BidderRatingsPopupBoxStyled>
            <BidderRatingsPopupBoxParent>
                <BidderRatingsPopupBoxHeader>
                    <h3>
                        Bidder Performance rating
                    </h3>
                </BidderRatingsPopupBoxHeader>

                <BidderRatingsPopupBoxMain>
                    <ul>
                        <li>Quality of Delivery</li>
                        <li>Time Delivery</li>
                        <li>Quality of Delivery</li>
                        <li>Quality of delivery</li>
                    </ul>
                    <div className="star-ratings">
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                </BidderRatingsPopupBoxMain>
                <div>
                    <GeneralButton type="submit" buttonName="Save"/>
                </div>
            </BidderRatingsPopupBoxParent>
        </BidderRatingsPopupBoxStyled>
    </>
}

const BidderRatingsPopupBoxStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(113, 113, 113, 0.3);
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BidderRatingsPopupBoxParent = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    
    div {
        text-align: right;
        button {
            cursor: pointer;
        }
    }
`


const BidderRatingsPopupBoxHeader = styled.header`

`

const BidderRatingsPopupBoxMain = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;

    ul {
        li {
            padding-bottom: 20px;
        }
    }
`


export default BidderRatingsPopupBox;
