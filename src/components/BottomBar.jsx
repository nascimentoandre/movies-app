import React from "react";
import { Text } from "react-native";
import { BarStyle, Item } from "../styles/components/bar";

const BottomBar = () => {
  return (
    <BarStyle>
      <Item>
        <Text style={{color: "white"}}>G</Text>
      </Item>
      <Item>
        <Text style={{color: "white"}}>A</Text>
      </Item>
    </BarStyle>
  );
}

export default BottomBar;