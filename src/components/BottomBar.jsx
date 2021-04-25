import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { BarStyle } from "../styles/components/bar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import theme from "../styles/theme";

const BottomBar = () => {
  return (
    <BarStyle>
      <TouchableHighlight>
        <FontAwesomeIcon icon={ faHome } color={ theme.colors.icon2 }  size={25}/>
      </TouchableHighlight>
      <TouchableHighlight>
        <FontAwesomeIcon icon={ faSearch } color={ theme.colors.icon2 } size={25} />
      </TouchableHighlight>
    </BarStyle>
  );
}

export default BottomBar;