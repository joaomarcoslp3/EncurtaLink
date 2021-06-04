import React from 'react'
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native'
import Clipboard from 'expo-clipboard'
import { Feather } from '@expo/vector-icons'
import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles'

export const ModalLink = (props) => {
  const { onClose, linkData } = props
  const { long_url, link } = linkData 

  const copyLink = () => {
    Clipboard.setString(link)
    alert('Link copiado com sucesso.')
  }

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Link: ${link}`
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
          <LongUrl numberOfLines={1}>{long_url}</LongUrl>

          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>{link}</ShortLinkUrl>
            <TouchableOpacity onPress={copyLink}>
              <Feather name='copy' color='#FFF' size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  )
}
