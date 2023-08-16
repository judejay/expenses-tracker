import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export type Expense = {
  id: string,
  amount: number,
  description: string,
  date: Date
}

type ExpensesSummaryProps = {
    periodName: string,
    expenses: Expense[]
}

const ExpensesSummary = ({periodName, expenses}: ExpensesSummaryProps) => {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum +  expense.amount
    }, 0);
 
 
    return (
    <View>
      <Text>{periodName}</Text>
      <Text>£{expensesSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({})