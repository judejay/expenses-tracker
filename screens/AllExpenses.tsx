import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'


type AllExpensesProps = {}

const AllExpenses = (props: AllExpensesProps) => {
  const expensesCtx = useContext(ExpensesContext)
  return ( <ExpensesOutput
     expenses={expensesCtx.expenses}
     expensesPeriod='Total'
     fallbackText='No expenses registered' />
 
  )
}
 
export default AllExpenses

