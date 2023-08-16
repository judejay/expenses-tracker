import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput'

type AllExpensesProps = {}

const AllExpenses = (props: AllExpensesProps) => {
  return ( <ExpensesOutput expenses={[]} expensesPeriod='Total' />
 
  )
}

export default AllExpenses

