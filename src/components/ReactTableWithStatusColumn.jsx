import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useTable, useSortBy } from "react-table";
import styled from "styled-components";

const ReactTableWithStatusColumn = ({columns, data, showFilter, goTo}) => {
    const tableInstance = useTable({columns, data}, useSortBy)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

      const renderSortIcon = (column) => {
        if (!column.canSort) {
          return null;
        }
      
        if (column.isSorted) {
          return <FontAwesomeIcon icon={column.isSortedDesc ? faSortDown : faSortUp} />;
        }
      
        return <FontAwesomeIcon icon={faSort} />;
      };
      const navigate = useNavigate();
      const onListContainerClick = useCallback((row) => {
        navigate(goTo, {state: {row}});
      }, [navigate, goTo]);
    return <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')} {renderSortIcon(column)}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps({
                                className: `my-custom-row`
                            })} onClick={() => onListContainerClick(row.original)}>
                            {row.cells.map((cell, index) => {
                                if (index === row.cells.length - 1) {
                                    // If it's the last cell, check the value of the "completed" column
                                    const status = cell.value;
                                    return (
                                        <td {...cell.getCellProps()}>
                                        <StatusDivStyled status={status}>
                                                <img className="child" alt="" src={status ? "/ellipse-85.svg" : "/ellipse-84.svg"} />
                                                <div className={status ? "completed" : "pending"}>{status ? "Completed" : "Pending"}</div>
                                        </StatusDivStyled>
                                        </td>
                                    );
                                } else {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                }
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
}

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



export default ReactTableWithStatusColumn;