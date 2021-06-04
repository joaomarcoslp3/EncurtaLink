import AsyncStorage from '@react-native-async-storage/async-storage'
 
export const getLinks = async (key) => {
  const myLinks = await AsyncStorage.getItem(key) 
  let linkSaves = JSON.parse(myLinks) || []

  return linkSaves
}

export const saveLink = async (key, newLink) => {
  let linksStored = await getLinks(key)
  const hasLink = linksStored.some(link => link.id === newLink.id)

  if (hasLink) return

  linksStored.push(newLink)
  await AsyncStorage.setItem(key, JSON.stringify(linksStored)) 
}

export const deleteLink = async (links, id) => {
  let myLinks = links.filter(item => item.id !== id)
  await AsyncStorage.setItem('@encurta:links', JSON.stringify(myLinks))
  return myLinks
}
 