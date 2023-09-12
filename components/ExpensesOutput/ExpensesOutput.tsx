import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  DUMMY_EXPENSES } from '../../store/expenses-context'
import ExpensesSummary, { Expense } from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'



type ExpensesOutputProps = {
    expenses: Expense [],
    expensesPeriod: string
}

const ExpensesOutput = ({expenses, expensesPeriod}: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
        <ExpensesList expenses={expenses} />    
    </View>

  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
})