import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function ExpenseList(props){
    const [selectedYear, setSelectedYear] = useState('2021');

    const onFilterChangehandler = (year) => {
        setSelectedYear(year)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter prevYearValue={selectedYear} onFilterChange={onFilterChangehandler}/>
                {props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear).length === 0 && <p>No entries found</p>}
                {props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear).length > 0 && props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear).map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
            </Card>
        </div>
    )
}

export default ExpenseList;