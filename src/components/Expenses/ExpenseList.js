import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import Expenses from './Expenses';
import { useState } from 'react';

function ExpenseList(props){
    const [selectedYear, setSelectedYear] = useState('2021');

    const onFilterChangehandler = (year) => {
        setSelectedYear(year)
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString()===selectedYear)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter prevYearValue={selectedYear} onFilterChange={onFilterChangehandler}/>
                <Expenses expenses={filteredExpenses} />
            </Card>
        </div>
    )
}

export default ExpenseList;