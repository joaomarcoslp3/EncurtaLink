import React from 'react'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { ContainerButton, Link  } from './styles'
 
export const ListItem = ({ url }) => {
  return (
    <View>
      <ContainerButton activeOpacity={0.9} onPress={() => {}}>
        <Feather name='link' color='#FFF' size={24} />
        <Link numberOfLines={1}>https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com</Link>
      </ContainerButton>
    </View>
  )
}
