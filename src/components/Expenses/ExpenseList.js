import './ExpenseList.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import Expenses from './Expenses';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

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
                <ExpensesChart expenses={filteredExpenses}/>
                <Expenses expenses={filteredExpenses} />
            </Card>
        </div>
    )
}

export default ExpenseList;