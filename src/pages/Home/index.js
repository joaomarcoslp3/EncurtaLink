import React from 'react'
import { ContainerLogo, Logo, ContainerContent, Title, Subtitle, ContainerInput, BoxIcon, Input,
  ButtonLink, ButtonLinkText } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'
import { Menu, StatusBarPage } from '../../components'

export const Home = () => {
  return (
    <LinearGradient colors={['#1DDBB9', '#132742']} style={{flex: 1, justifyContent: 'center'}}>
      <StatusBarPage backgroundColor='#1DDBB9' barStyle='light-content' />
      <Menu />

      <ContainerLogo>
        <Logo source={require('../../assets/Logo.png')} resizeMode='contain' />
      </ContainerLogo>

      <ContainerContent>
        <Title>EncurtaLink</Title>
        <Subtitle>Cole seu link para encurtar</Subtitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name='link' size={22} color='#FFF' />
          </BoxIcon>
          <Input placeholder='Cole seu link aqui...' placeholderTextColor = "#FFF" />
        </ContainerInput>

        <ButtonLink>
          <ButtonLinkText>Gerar link</ButtonLinkText>
        </ButtonLink>
      </ContainerContent>
    </LinearGradient>
  )
}
