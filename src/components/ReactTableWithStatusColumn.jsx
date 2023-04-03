import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useTable, useSortBy } from "react-table";

const ReactTableWithStatusColumn = ({columns, data, showFilter}) => {
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
    return <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(showFilter && column.getSortByToggleProps())}>{column.render('Header')} {showFilter && renderSortIcon(column)}</th>
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
                            })}>
                            {row.cells.map((cell, index) => {
                                if (index === row.cells.length - 1) {
                                    // If it's the last cell, check the value of the "completed" column
                                    const status = cell.value;
                                    return (
                                        <td {...cell.getCellProps()}>
                                        {status ? "Completed" : "Pending"}
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



export default ReactTableWithStatusColumn;