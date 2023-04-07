import React, {useState, useCallback, useMemo} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import ReactTableWithStatusColumn from "./ReactTableWithStatusColumn";


const RequisitionListContainer = ({listData, goTo, requisitionContainerName}) => {
    const columns = useMemo(() => [
            
        {
            Header: "Admin Users",
            accessor: "rfqNo"
        },
        {
            Header: "User role",
            accessor: "description"
        },
        {
            Header: "User Type",
            accessor: "expDateAndTime"
        },
        {
            Header: "Status",
            accessor: "status"
        },
], [])
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => {
        setSearchTerm(e.target.value);   
    }
    const filteredlistData = listData.filter(data => {
      return (
        data.rfqNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.expDateAndTime.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })

    const onListContainerClick = useCallback((myRecentRequisitionsData) => {
        navigate(goTo, {state: {listData: myRecentRequisitionsData}});
      }, [navigate, goTo]);

    return <>
        <RequisitionsListContainerStyled>
            <header>
                <div className="title-name">
                    {requisitionContainerName}
                </div>
                <div className="search-components">
                <SearchInput placeholder="Search" searchTerm={searchTerm} handleChange={handleChange}/>
                <SearchButton />
                <img className="frame-icon" alt="" src="/frame3.svg" />
                </div>
            </header>
            <main className="list-table">
                <ReactTableWithStatusColumn columns={columns} data={filteredlistData}/>
            </main>
        </RequisitionsListContainerStyled>
    </>
}

const RequisitionsListContainerStyled = styled.div`
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--white1);
    padding: var(--padding-xl) 0 0;
    gap: var(--gap-xl);
    text-align: left;
    font-family: var(--h21);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--body-text-size);

    header {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 0 var(--padding-xl);
        align-items: flex-start;
        justify-content: flex-start;
        .title-name {
            width: 100%;
            position: relative;
            line-height: 28.8px;
            font-weight: 500;
            display: flex;
            justify-content: space-between;
            font-size: var(--h3-size);
            color: var(--secondary1);
        }

        .search-components {
            display: flex;
            position: relative;
            width: 560px;
            height: 40px;
            flex-shrink: 0;
            justify-content: space-between;
            gap: 1rem;

            .frame-icon {

            }
        }
    }

    main {
        width: 100%;
        .grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            background-color: var(--white1);
        }
        

        .list-header {
            width: 100%;
            padding: var(--padding-mini) var(--padding-xl);
            box-sizing: border-box;
            color: var(--grey-dark);
        }
        .list-body {
            box-sizing: border-box;
            border-top: 1px solid var(--grey-light);
            border-bottom: 1px solid var(--grey-light);
            width: 100%;
            padding: var(--padding-mini) var(--padding-xl);
            justify-content: space-between;
            cursor: pointer;

            .list-data {
                .status-div {
                    

                    
                }
            }
        }
    }
`

const StatusDivStyled = styled.div`
    width: min-content;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: var(--br-21xl);
    background-color: ${props => props.status ? `var(--green-1001)` : `var(--yellow-1001)`};
    padding: var(--padding-8xs) var(--padding-4xs);
    justify-content: flex-start;
    gap: var(--gap-7xs);
    font-size: var(--caption-size);
    color: var(--green-9001);

    .child {
        position: relative;
        width: 10px;
        height: 10px;
        flex-shrink: 0;
    }

    .completed, .pending {
        line-height: 14.4px;
        display: inline-block;
    }
`

export default RequisitionListContainer;