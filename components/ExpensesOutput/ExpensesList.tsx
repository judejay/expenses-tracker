import { View, Text, FlatList } from 'react-native'
import { Expense } from './ExpensesSummary'
import ExpenseItem from './ExpenseItem'

type ExpensesListProps = {
  expenses: Expense[]
}

function renderExpenseItem({item}: {item :Expense}) {
  return <ExpenseItem  {...item} />
}

const ExpensesList = ({expenses}: ExpensesListProps) => {
  return (
    <FlatList<Expense>
    data={expenses} 
    renderItem={renderExpenseItem }
    keyExtractor={(item) => item.id}
    />
  )
}

export default ExpensesList