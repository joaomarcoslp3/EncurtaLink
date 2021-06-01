import React from 'react'
import { Container, ListLinks, Title } from './styles'
import { ListItem, Menu, StatusBarPage } from '../../components'

export const MyLinks = () => {
  return (
    <Container>
      <StatusBarPage backgroundColor='#132742' barStyle='light-content' />
      <Menu />

      <Title>Meus links</Title>

      <ListLinks 
        data={[{id: 1, url: 'ueum.eu'}]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem url={item.url} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
