import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./Mock_Data.json";
import { COLUMNS } from "./columns";
import "./InvestmentTable.css";
import { Link } from "react-router-dom";

export default function BasicTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <>
      <table {...getTableProps()} id="InvestmentTable">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (

                    <td {...cell.getCellProps()}><Link to="/existingArtist" style={{color: "black" , textDecoration: 'none' }}>{cell.render("Cell")}</Link>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
