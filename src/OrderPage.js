import React, { useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import mockData from "./mockData.json";
import "./OrderPage.module.css";

const OrderPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  //filter mock data based on search term

  const filteredRows = mockData.filter((row) => {
    return (
      row.orderId.toString().includes(searchTerm) ||
      row.vendorName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      row.pickUpDate.includes(searchTerm) ||
      row.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currrentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <h1>Orders Page</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table rows={currrentRows} />
      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={filteredRows.length}
        paginate={paginate}
      />
    </div>
  );
};

export default OrderPage;
