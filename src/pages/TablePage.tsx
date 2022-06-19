import { useState } from "react";
import { tableData } from "../components/mock/mock";
import { Table } from "../components/Table";
import { TableStatus } from "../constants/TableType";

export const TablePage = () => {
  return (
    <div style={{ width: "1312px", margin: "10px" }}>
      <Table rows={tableData} />
    </div>
  );
};
