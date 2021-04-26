import styled from "styled-components/native";

export const MovieContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  align-items: center;
  padding-top: 50px;
  justify-content: flex-start;
`

export const DetailImage = styled.Image`
  width: 80%;
  height: 450px;
  margin-bottom: 8px;
`

export const Info = styled.View`
  align-items: flex-start;
  width: 80%;
`

export const InfoText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  margin-bottom: 10px;
`

export const Title = styled.Text`
  font-size: 25px;
  color: ${props => props.theme.colors.icon};
  margin-bottom: 7px;
`