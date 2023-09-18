import { StyleSheet, Text, TextInput, View, KeyboardTypeOptions, StyleProp, ViewStyle  } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

type InputProps = {
    label: string,
    type: KeyboardTypeOptions,
    maxLength: number,
    onChangeText: () => void,
    placeholder?: string
    multiline?: boolean
    style?: StyleProp<ViewStyle>;}


const Input = ({style, label, type, maxLength, onChangeText, placeholder, multiline}: InputProps) => {
 
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        keyboardType={type}
        maxLength={maxLength}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        style={[styles.input, multiline? styles.inputMultiline: null]}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  input:{
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
})