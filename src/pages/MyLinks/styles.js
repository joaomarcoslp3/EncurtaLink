import styled from 'styled-components/native'
import {} from 'react-native'

export const Container = styled.View `
  background-color: #132742;
  flex: 1;
`

export const Title = styled.Text `
  margin-top: ${Platform.OS === 'ios' ? 35+'%' : 20+'%'};
  margin-left: 20px;
  color: #FFF;
  font-size: 33px;
  font-weight: bold;
`

export const ListLinks = styled.FlatList ``

export const ContainerEmpty = styled.View `
  margin-top: 15%;
  align-items: center;
`

export const WarningText = styled.Text `
  font-size: 17px;
  color: #FFF;
`
