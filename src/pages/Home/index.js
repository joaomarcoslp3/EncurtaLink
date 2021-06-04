import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal, ActivityIndicator } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import api from '../../services/api'
import { saveLink } from '../../utils/storeLinks'
import { Menu, ModalLink, StatusBarPage } from '../../components'
import { ContainerLogo, Logo, ContainerContent, Title, Subtitle, ContainerInput, BoxIcon, Input,
  ButtonLink, ButtonLinkText } from './styles'

export const Home = () => {
  const [loading, setLoading] = useState(false)
  const [link, setLink] = useState('')
  const [linkData, setLinkData] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleShortLink = async () => {
    setLoading(true)

    try { 
      const response = await api.post('/shorten', {
        long_url: link
      })

      Keyboard.dismiss()
      setLinkData(response.data)
      setIsModalOpen(true)
      saveLink('@encurta:links', response.data)
      setLoading(false)
      setLink('')
    } catch (err) {
      alert('Ops, houve um erro com seu requisição, tente novamente')
      console.log(err)
      Keyboard.dismiss() 
      setLoading(false)
      setLink('')
    }
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
            {loading ? (
              <ActivityIndicator color='#121212' size={24} />
            ) : (
              <ButtonLinkText onPress={handleShortLink}>Gerar link</ButtonLinkText>
            )}
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={isModalOpen} transparent animationType='slide'>
          <ModalLink onClose={() => setIsModalOpen(false)} linkData={linkData} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}
