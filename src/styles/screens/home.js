import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 40px;
`