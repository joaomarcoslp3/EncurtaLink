import React from 'react'
import { Text, View } from 'react-native'
 
export const ListItem = ({ url }) => {
  return (
    <View>
      <Text>{url}</Text>
    </View>
  )
}
