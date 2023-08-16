import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput'

type PropsRecentExpenses = {}

const RecentExpenses = (props: PropsRecentExpenses) => {
  return (
    <ExpensesOutput expenses={[]} expensesPeriod='Last 7 days' />
  )   
  
}

export default RecentExpenses

const styles = StyleSheet.create({})