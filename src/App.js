import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/ExpenseForm/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onSetNewDataHandler = (newData) => {
    setExpenses(prevlist => {return[newData, ...prevlist]});
  }

  return (
    <div>
      <NewExpense onSetNewData={onSetNewDataHandler}/>
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;