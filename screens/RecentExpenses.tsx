import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'

type PropsRecentExpenses = {}

const RecentExpenses = (props: PropsRecentExpenses) => {
  const expensesCtx = useContext(ExpensesContext)
  const recentExpense = expensesCtx.expenses.filter((expenses) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expenses.date > date7daysAgo;
  });
  return (
    <ExpensesOutput
     expenses={recentExpense}
     expensesPeriod='Last 7 days'
     fallbackText='No expenses for last 7 days'  />
  )   
  
}

export default RecentExpenses

const styles = StyleSheet.create({})