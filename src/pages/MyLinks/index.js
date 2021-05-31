import React from 'react'
import { Container, TilteContainer, Title } from './styles'
import { Menu, StatusBarPage } from '../../components'

export const MyLinks = () => {
  return (
    <Container style={{ backgroundColor: '#132742', flex: 1 }}>
      <StatusBarPage backgroundColor='#132742' barStyle='light-content' />
      <Menu />

      <TilteContainer>
        <Title>Meus links</Title>
      </TilteContainer>
    </Container>
  )
}
