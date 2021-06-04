import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Modal } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { getLinks, deleteLink } from '../../utils/storeLinks'
import { ListItem, Menu, ModalLink, StatusBarPage } from '../../components'
import { Container, ListLinks, Title, ContainerEmpty, WarningText } from './styles'

export const MyLinks = () => {
  const isFocused = useIsFocused()
  const [loading, setLoading] = useState(true)
  const [linkData, setLinkData] = useState({})
  const [links, setLinks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const getLinksSaved = async () => {
      const result = await getLinks('@encurta:links')
      setLinks(result)
      setLoading(false)
    }
    getLinksSaved()
  }, [isFocused])

  const handleItem = (item) => {
    setLinkData(item)
    setIsModalOpen(true)
  }

  const handleDelete = async (id) => {
    const result = await deleteLink(links, id)
    setLinks(result)
  }
  
  return (
    <Container>
      <StatusBarPage backgroundColor='#132742' barStyle='light-content' />
      <Menu />

      <Title>Meus links</Title>

      {loading && (
        <ContainerEmpty>
          <ActivityIndicator color='#FFF' size={25} />
        </ContainerEmpty>
      )}

      {links.length === 0 && !loading && (
        <ContainerEmpty>
          <WarningText>Você ainda não possui nenhum link :(</WarningText>
        </ContainerEmpty>
      )}
       
      <ListLinks 
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} />
        )}
        contentContainerStyle={{ paddingBottom: 22 }}
        showsVerticalScrollIndicator={false}
      />
      <Modal visible={isModalOpen} transparent animationType='slide'>
        <ModalLink onClose={() => setIsModalOpen(false)} linkData={linkData} />
      </Modal>
    </Container>
  )
}
