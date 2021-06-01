import React from 'react'
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native'
import Clipboard from 'expo-clipboard'
import { Feather } from '@expo/vector-icons'
import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles'

export const ModalLink = (props) => {
  const { onClose } = props

  const copyLink = () => {
    Clipboard.setString('UEUM')
    alert('vai nenem')
  }

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Link: UEUM`
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name='x' color='#212743' size={30} /> 
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather name='share' color='#212743' size={30} /> 
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>https://jonas.com</LongUrl>

          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>https://bit.ly/aopa74</ShortLinkUrl>
            <TouchableOpacity onPress={copyLink}>
              <Feather name='copy' color='#FFF' size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  )
}
