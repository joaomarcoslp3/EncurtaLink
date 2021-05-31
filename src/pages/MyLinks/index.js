import React from 'react'
import { View, Text } from 'react-native'
import { Menu, StatusBarPage } from '../../components'

export const MyLinks = () => {
  return (
    <View style={{ backgroundColor: '#132742', flex: 1 }}>
      <StatusBarPage backgroundColor='#132742' barStyle='light-content' />
      <Menu />
    </View>
  )
}
