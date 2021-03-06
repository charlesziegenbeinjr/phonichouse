import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./Mock_Data.json";
import { COLUMNS } from "./columns";
import "./NewListedArtists.css";

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
      <div
        style={{
          backgroundColor: "white",
          width: "300px",
          borderRadius: "10px",
        }}
      >
        <span style={{ marginLeft: 20, marginTop: 20, fontWeight: "bold" }}>
          New Listed Artists
        </span>
        <table {...getTableProps()} id="NewListedArtists">
          {/* <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead> */}
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
