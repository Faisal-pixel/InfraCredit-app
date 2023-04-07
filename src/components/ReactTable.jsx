import React, {useCallback} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useTable, useSortBy } from "react-table";
import { useNavigate } from "react-router-dom";

const ReactTable = ({columns, data, showFilter, goTo}) => {
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

      const navigate = useNavigate()

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
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
}



export default ReactTable;