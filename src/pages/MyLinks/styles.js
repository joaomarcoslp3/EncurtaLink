import styled from 'styled-components/native'
import {} from 'react-native'

export const Container = styled.View `
  background-color: #132742;
  flex: 1;
`

export const TilteContainer = styled.View `
  margin-top: ${Platform.OS === 'ios' ? 35+'%' : 20+'%'};
  padding-left: 20px;
`

export const Title = styled.Text `
  color: #FFF;
  font-size: 33px;
  font-weight: bold
`
