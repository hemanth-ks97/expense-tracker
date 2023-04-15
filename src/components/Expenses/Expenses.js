import './Expenses.css'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    if(props.expenses.length === 0){
        return (
            <h2 className="expenses-list__fallback">No entries</h2>
        )
    }

    return (
        <ul className="expenses-list">
        {props.expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
        </ul>
    )
}

export default Expenses;