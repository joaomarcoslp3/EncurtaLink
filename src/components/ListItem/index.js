import React from 'react'
import { View } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { ContainerButton, Link, ActionContainer } from './styles'
 
export const ListItem = ({ data, selectedItem, deleteItem }) => {
  const RightActions = () => (
    <ActionContainer onPress={() => deleteItem(data.id)}>
      <Feather name='trash' color='#FFF' size={24} />
    </ActionContainer>
  )

  return (
    <View>
      <Swipeable renderRightActions={RightActions}>
        <ContainerButton activeOpacity={0.9} onPress={() => selectedItem(data)}>
          <Feather name='link' color='#FFF' size={24} />
          <Link numberOfLines={1}>{data.long_url}</Link>
        </ContainerButton>
      </Swipeable>
    </View>
  )
}
