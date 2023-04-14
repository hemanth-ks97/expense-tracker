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
                <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title} amount={props.expenses[0].amount}/>
                <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title} amount={props.expenses[1].amount}/>
                <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title} amount={props.expenses[2].amount}/>
                <ExpenseItem date={props.expenses[3].date} title={props.expenses[3].title} amount={props.expenses[3].amount}/>
            </Card>
        </div>
    )
}

export default ExpenseList;