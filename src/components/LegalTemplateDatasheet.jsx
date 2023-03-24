import React from "react";
import styled from "styled-components";

//Components
import GeneralOutlinedWhiteBgButton from "./GeneralOutlinedWhiteBgButton";

const LegalTemplateDatasheet = () => {
    return <>
        <LegalTemplateDatasheetStyled>
        <div className="legal-template-top">
                            <div className="company-overview-parent">
                                <p>Company Overview</p>
                                <div></div>
                            </div>
                            <div className="project-description-parent">
                                <p>Project Description:</p>
                                <div></div>
                            </div>
                            <div className="scope-of-work-parent">
                                <p>Scope of Work:</p>
                                <div></div>
                            </div>
                            <div className="expiration-duration-parent">
                                <div className="top">
                                    <div className="expiration-number-parent">
                                        <p>Expiration Date:</p>
                                        <input type="number" placeholder="Input Number"/>
                                    </div>
                                    <div className="expiration-number-select">
                                        <div className="select pointer">Select <span>{`>`}</span></div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <p>Service Category</p>
                                    <div className="pointer">Category 1 <span>{`>`}</span></div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="legal-template-middle">
                            <GeneralOutlinedWhiteBgButton buttonName="Preview Template" buttonType=""/>
                            <GeneralOutlinedWhiteBgButton buttonName="Select all bidders" buttonType=""/>
                            <GeneralOutlinedWhiteBgButton buttonName="Select preferred bidders" buttonType=""/>
                        </div>

                        <div className="legal-template-bottom">
                            <div className="nominated-bidders-table">
                                <header>
                                    <h3>Nominated Bidders</h3>
                                    <div className="countdown-container">
                                        <p>Invitation Date & Time: 05/03/2023; 12:53:00 GMT + 1 </p>
                                        <p>Expiration Date & Time: 05/03/2023; 12:53:00 GMT + 1 </p>
                                        <p>Expiration Date Countdown: 00:00:03 Hours </p>
                                    </div>
                                </header>
                                <main>
                                    <div className="vendor-code-container">
                                        <div className="vendor-code-title title">Vendor Code</div>
                                        <div className="vendor-code-data data">
                                            <div className="data-child">VEND021</div>
                                            <div className="data-child">VEND021</div>
                                            <div className="data-child">VEND021</div>
                                            <div className="data-child">VEND021</div>
                                        </div>
                                    </div>
                                    <div className="vendor-name-container">
                                        <div className="vendor-name-title title">Vendor Name</div>
                                        <div className="vendor-code-data data">
                                            <div className="data-child">XYZ Corporations</div>
                                            <div className="data-child">ABC Nigeria Limited</div>
                                            <div className="data-child">Sigma Holdings</div>
                                            <div className="data-child">Redstar Global Limited</div>
                                        </div>
                                    </div>
                                    <div className="bid-submitted-container">
                                        <div className="bid-submitted-title title">Bid Submitted</div>
                                        <div className="vendor-code-data data">
                                            <div className="data-child">Yes</div>
                                            <div className="data-child">Yes</div>
                                            <div className="data-child">Yes</div>
                                            <div className="data-child">Yes</div>
                                        </div>
                                    </div>
                                    <div className="bid-value-container">
                                        <div className="bid-value-title title">Bid Value</div>
                                        <div className="vendor-code-data data">
                                            <div className="data-child">N2,000,000.00</div>
                                            <div className="data-child">N5,000,000.00</div>
                                            <div className="data-child">N3,000,000.00</div>
                                            <div className="data-child">N1,000,000.00</div>
                                        </div>
                                    </div>
                                </main>
                                <footer>
                                    <GeneralOutlinedWhiteBgButton  buttonName="Notify Bidders"/>
                                    <GeneralOutlinedWhiteBgButton  buttonName="Reset Bidders"/>
                                    <GeneralOutlinedWhiteBgButton  buttonName="Review Quotes"/>
                                    <GeneralOutlinedWhiteBgButton  buttonName="Upload Contract for Winner"/>
                                    <GeneralOutlinedWhiteBgButton  buttonName="View Contract"/>
                                    <GeneralOutlinedWhiteBgButton  buttonName="Notify Bid Losers"/>
                                </footer>
                            </div>
                        </div>
        </LegalTemplateDatasheetStyled>
    </>
}

const LegalTemplateDatasheetStyled = styled.div`
    box-sizing: border-box;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    cursor: auto;
    .legal-template-top {
        display: flex;
        justify-content: flex-start;
        column-gap: 2rem;
        width: 100%;
        .company-overview-parent, .project-description-parent, .scope-of-work-parent {
            flex-basis: 25%;
            div {
                box-sizing: border-box;
                min-height: 15vh;
                border: 1px solid var(--gray-200);
                padding: 0.5rem;
                border-radius: 0.5rem;
            }
        }

        .expiration-duration-parent {
            display: flex;
            flex-direction: column;
            min-width: 25%;

            .top {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                .expiration-number-select {
                    width: 100%;

                }
                .select, .expiration-number-parent input[type="number"] {
                    box-sizing: border-box;
                    border: 1px solid var(--gray-200);
                    padding: 1rem 0.5rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 0.5rem;
                    :focus {
                        outline: none;
                    }
                }

                .expiration-number-parent {
                    input[type="number"] {
                        width: 10rem;
                    }
                }

                .expiration-number-select {
                }


            }

            .bottom {
                display: flex;
                flex-direction: column;
                width: 75%;
                div {
                    box-sizing: border-box;
                    border: 1px solid var(--gray-200);
                    padding: 1rem 0.5rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 0.5rem;
                }
            }
        }

        
    }

    .legal-template-middle {
        display: flex;
        justify-content: flex-start;
        column-gap: 1rem;
        
    }

    .legal-template-bottom {
        .nominated-bidders-table {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
            row-gap: 1.5rem;

            header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                h3 {
                    font-size: var(--h3-size);
                    color: var(--secondary1);
                }

                .countdown-container {
                    p {
                        &:nth-child(1) {
                            color: var(--secondary1);
                        }
                        &:nth-child(2) {
                            color: var(--primary);
                        }
                        &:nth-child(3) {
                            color: var(--color-red);
                        }
                    }
                }
            }

            main {
                display: grid;
                grid-template-columns: repeat(4, 1fr);

                .title {
                    box-sizing: border-box;
                    color: var(--grey-dark);
                    padding: 1rem .5rem;
                    border-top: 1px solid var(--grey-300);
                }

                .data-child {
                    padding: 1rem .5rem;
                }
            }

            footer {
                display: flex;
                column-gap: 1rem;
                
                .buttonDiv {
                    flex-basis: 16.7%;
                    .button {
                        width: 100%;
                    }
                }
            }
        }
    }
`

export default LegalTemplateDatasheet