import styled from "styled-components/native";

export const BarStyle = styled.View`
  height: 8%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${props => props.theme.colors.bar};
  margin-top: 10px;
`