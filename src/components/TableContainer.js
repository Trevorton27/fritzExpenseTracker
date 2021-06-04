import React from "react";
import Table from "react-bootstrap/Table";
import TableOutPut from "./TableOutPut";
import ExpenseTotal from "./ExpenseTotal";

function TableContainer({ expenseList, tableListChange }) {
  const sendTableChanges = (childList) => tableListChange(childList);

  return (
    <Table variant="dark">
      <thead>
        <tr className="table-header">
          <th>Name</th>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Detail</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <TableOutPut
          requestListModify={sendTableChanges}
          expenseList={expenseList}
        />
      </tbody>
      <tfoot>
        <ExpenseTotal
          requestListModify={sendTableChanges}
          expenseList={expenseList}
        />
      </tfoot>
    </Table>
  );
}

export default TableContainer;
