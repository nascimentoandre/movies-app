import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  align-items: center;
  padding-top: 70px;
  justify-content: flex-start;
`

export const OptionsContainer = styled.View`
  flex: 0.1;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  margin-bottom: 25px;
`
export const Title = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 20px;
`

export const PosterStyle = styled.Image`
  width: 160px;
  height: 230px;
  border-radius: 15px;
  margin-bottom: 8px;
`