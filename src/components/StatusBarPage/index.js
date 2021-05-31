import React from 'react'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
 
export const StatusBarPage = (props) => {
  const isFocused = useIsFocused()

  return isFocused && <StatusBar {...props} />
}
