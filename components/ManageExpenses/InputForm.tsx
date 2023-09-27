import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import { GlobalStyles } from '../../constants/styles'
import { getFormattedDate } from '../../util/date';


export interface ExpenseData {
  amount: { value: string; isValid: boolean };
  date: { value: string; isValid: boolean };
  description:{ value: string; isValid: boolean };
}
interface InputFormProps {
  submitButtonLabel: string;
  onCancel: () => void;
  onSubmit: (expenseData: ExpenseData) => void;
  defaultValues?: ExpenseData;
}

const InputForm = ({submitButtonLabel, onCancel, onSubmit, defaultValues}: InputFormProps) => {
const [inputs, setInputs] = useState<ExpenseData>({
  amount: {
    value: defaultValues ? defaultValues.amount.toString() : '',
    isValid: true,
  },
  date: {
    value: defaultValues ? (defaultValues.date.toString()) : '',
    isValid: true,
  },
  description: {
    value: defaultValues ? defaultValues.description.toString() : '',
    isValid: true,
  },
});
  
      const amountChangedHandler = (    inputIdentifier: keyof typeof inputs,         
        enteredValue: string ) => 
      {
        
        setInputs((currInputs) => {
          return {
            ...currInputs, 
            [inputIdentifier]: { value: enteredValue, isValid: true }
          }
        })
      }

      const formIsInvalid =
      !inputs.amount.isValid ||
      !inputs.date.isValid ||
      !inputs.description.isValid;

  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>      
            <Input 
            style={styles.rowInput}
            label="Amount"
            invalid={!inputs.amount.isValid}
            textInputConfig={{
              keyboardType: 'decimal-pad',
              onChangeText: amountChangedHandler.bind(this, 'amount'),
              value: inputs.amount.value,
            }}
            />
            <Input
            style={styles.rowInput}
            label='Date'
            invalid={!inputs.date.isValid}
            textInputConfig={{
              placeholder: 'YYYY-MM-DD',
              keyboardType: 'default',
              onChangeText: amountChangedHandler.bind(this, 'date'), 
              value: inputs.date.value,
            }}                     
            />
        </View>
           <Input 
            label='Description'
            invalid={!inputs.description.isValid}
            textInputConfig={{
             keyboardType: 'default',
             onChangeText: amountChangedHandler.bind(this, 'description'), 
             value: inputs.description.value,
             multiline: true 
           }}          
         
          />
          {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
  },
  formStyle: {
    marginTop: 80
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center'
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
})