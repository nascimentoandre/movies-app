import styled from "styled-components/native";

export const ImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LoginButton = styled.TouchableHighlight`
  border: 1px solid black;
  background-color: ${props => props.theme.colors.background};
  padding: 10px 15px;
  border-radius: 4px;
`

export const LoginText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.icon};
`