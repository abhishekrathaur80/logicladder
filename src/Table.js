import React from "react";
import "./Table.module.css";
const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Vendor Name</th>
          <th>Pick up date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <tr key={row.orderId}>
            <td>{row.orderId}</td>
            <td>{row.vendorName}</td>
            <td>{row.pickUpDate}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
