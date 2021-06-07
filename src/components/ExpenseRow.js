import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function ExpenseRow({ expenseList, setExpenseList }) {
  console.log('expenseList tho: ', expenseList);
  const deleteExpense = (id) => {
    setExpenseList(expenseList.filter((expense) => id !== expense.id));
  };
  return expenseList.map((item) => (
    <tr key={item.id}>
      <td>{item.itemName}</td>
      <td>{item.location}</td>
      <td>{item.date}</td>
      <td>$ {item.amount}</td>
      <td>{item.paymentType}</td>
      <td>
        <Button variant='warning' onClick={(e) => deleteExpense(item.id)}>
          Delete
        </Button>
      </td>
    </tr>
  ));
}

export default ExpenseRow;
