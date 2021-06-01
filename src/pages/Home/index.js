import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal } from 'react-native'
import { ContainerLogo, Logo, ContainerContent, Title, Subtitle, ContainerInput, BoxIcon, Input,
  ButtonLink, ButtonLinkText } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'
import { Menu, ModalLink, StatusBarPage } from '../../components'

export const Home = () => {
  const [link, setLink] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleShortLink = () => {
    setIsModalOpen(true)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={['#1DDBB9', '#132742']} style={{flex: 1, justifyContent: 'center'}}>
        <StatusBarPage backgroundColor='#1DDBB9' barStyle='light-content' />
        <Menu />

        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'position'} enabled>
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
              <Input 
                placeholder='Cole seu link aqui...' 
                placeholderTextColor='#FFF' 
                autoCapitalize='none' 
                autoCorrect={false} 
                keyboardType='url'
                value={link}
                onChangeText={(value) => setLink(value)}
              />
            </ContainerInput>

            <ButtonLink>
              <ButtonLinkText onPress={handleShortLink}>Gerar link</ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={isModalOpen} transparent animationType='slide'>
          <ModalLink onClose={() => setIsModalOpen(false)} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}
