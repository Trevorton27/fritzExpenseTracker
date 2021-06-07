import React from 'react';
import Table from 'react-bootstrap/Table';
import ExpenseRow from './ExpenseRow';
import ExpenseTotal from './ExpenseTotal';

function expenseTable({ expenseList, setExpenseList }) {
  return (
    <Table variant='dark'>
      <thead>
        <tr className='table-header'>
          <th>Item</th>
          <th>Location</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <ExpenseRow setExpenseList={setExpenseList} expenseList={expenseList} />
      </tbody>
      <tfoot>
        <ExpenseTotal
          expenseList={expenseList}
          setExpenseList={setExpenseList}
        />
      </tfoot>
    </Table>
  );
}

export default expenseTable;
