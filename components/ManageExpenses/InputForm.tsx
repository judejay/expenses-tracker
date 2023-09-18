import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'
import { GlobalStyles } from '../../constants/styles'

const InputForm = () => {
    const amountChangedHandler = () => {}
  return (
    <View >
        <View style={styles.inputsRow}>      
            <Input 
            style={styles.rowInput}
            label='Amount' 
            type='decimal-pad'
            maxLength={0}
            onChangeText={amountChangedHandler}/>
            <Input
            style={styles.rowInput}
            placeholder='YYYY-MM-DD'
            label='Date' type='default'         
            maxLength={10}
            onChangeText={function (): void {
            throw new Error('Function not implemented.')
            } } />
        </View>
        <Input 
         label='Description'
         type={'default'} 
         multiline={true} 
         maxLength={0} 
         onChangeText={function (): void {
              throw new Error('Function not implemented.')
          } } />
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
  }
})