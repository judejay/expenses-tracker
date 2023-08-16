import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
    icon: keyof typeof Ionicons.glyphMap,
    size: number,
    color: string,
    onPress: () => void
}

const IconButton = ({ icon, color, size, onPress }: IconButtonProps) => {
  return (
    <Pressable
     onPress={onPress}
     style={({pressed}) => pressed && styles.pressed}
     >
      <View style={styles.buttonContainer}>
        <Ionicons
         name={icon}
         size={size}
         color={color}
        />
      </View>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        margin: 8
    },
    pressed: {
        opacity: 0.75
    }
})