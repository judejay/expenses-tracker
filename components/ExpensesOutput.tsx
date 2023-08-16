import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ExpensesSummary, { Expense } from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const DUMMY_EXPENSES = [
  {
    id: 'el',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-08-19')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.99,
    date: new Date('2023-08-16')
  },
  {
    id: 'e3',
    description: 'some bananas',
    amount: 4.99,
    date: new Date('2022-02-16')
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 18.99,
    date: new Date('2022-07-1')
  },
  {
    id: 'e5',
    description: 'A book',
    amount: 8.99,
    date: new Date('2022-09-01')
  }

]

type ExpensesOutputProps = {
    expenses: Expense [],
    expensesPeriod: string
}

const ExpensesOutput = ({expenses, expensesPeriod}: ExpensesOutputProps) => {
  return (
    <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList />    
    </View>

  )
}

export default ExpensesOutput

const styles = StyleSheet.create({})