import React, {useState, useMemo} from "react";
import styled from "styled-components";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import ReactTableWithStatusColumn from "./ReactTableWithStatusColumn";


const RequisitionListContainer = ({listData, goTo, requisitionContainerName, shouldIncludeSearchFilter}) => {
    const columns = useMemo(() => [
            
        {
            Header: "RFQ No",
            accessor: "rfqNo",
        },
        {
            Header: "Description",
            accessor: "description",
        },
        {
            Header: "Expiration Date & Time",
            accessor: "expDateAndTime",
        },
        {
            Header: "Status",
            accessor: "status",
        },
], []);
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

    return <>
        <RequisitionsListContainerStyled>
            <header>
                <div className="title-name">
                    {requisitionContainerName}
                </div>
                {shouldIncludeSearchFilter && <div className="search-components">
                <SearchInput placeholder="Search" searchTerm={searchTerm} handleChange={handleChange}/>
                <SearchButton />
                <img className="frame-icon" alt="" src="/frame3.svg" />
                </div>}
            </header>
            <main className="list-table">
                <ReactTableWithStatusColumn goTo={goTo} columns={columns} data={filteredlistData}/>
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
        table {
        padding: 0 1rem;
        width: 100%;
        border-spacing: 0;
        table-layout: fixed;
        tr {
            cursor: pointer;
        }
        }
        thead {
            cursor: pointer;
            th {
                color: var(--grey-dark);
                font-style: normal;
                font-weight: 400;
                font-size: 1rem;
            }
        }
        th, td {
            border-bottom: 2px solid var(--grey-light);
            padding: 1rem;
            width: auto;
            :last-child {
                width: 10%;
            }
        }
    }
`


export default RequisitionListContainer;