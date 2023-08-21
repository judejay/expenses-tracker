import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/styles'
import Button from '../components/UI/Button'

type ManageExpensesProps = NativeStackScreenProps<RootStackParamList, 'MealDetailScreen'>

const ManageExpenses = ({route, navigation}: ManageExpensesProps) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    
    navigation.setOptions({
      title: isEditing? 'Edit Expense' : 'Add Expense'
    })
  
   
  }, [navigation, isEditing])


  function deleteExpenseHandler(): void {
    throw new Error('Function not implemented.')
  }

  function cancelHandler(): {} {
    throw new Error('Function not implemented.')
  }

  function confirmHandler():{} {
    throw new Error('Function not implemented.')

  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} mode='' onPress={confirmHandler} >{isEditing? 'Update': 'Add'}</Button>
      </View>
      {isEditing && <View style={styles.deleteContainer}>
        <IconButton
       icon='trash'
       size={36}
       color={GlobalStyles.colors.error500}
       onPress={deleteExpenseHandler}/>
        </View>
       }
    </View>
  )
}

export default ManageExpenses

const styles = StyleSheet.create({
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  }
})