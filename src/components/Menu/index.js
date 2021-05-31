import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { ButtonMenu } from './styles'
 
export const Menu = () => {
  const navigation = useNavigation()

  const handleOpenMenu = () => {
    navigation.openDrawer()
  }

  return (
    <ButtonMenu onPress={handleOpenMenu}>
      <Feather name='menu' size={35} color='#FFF' />
    </ButtonMenu>
  )
}
