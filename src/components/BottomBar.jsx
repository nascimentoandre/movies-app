import React, { useState } from "react";
import { TextInput, TouchableHighlight, View } from "react-native";
import { BarStyle } from "../styles/components/bar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import theme from "../styles/theme";

const BottomBar = ({ navigation }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
    {showSearch && <View style={{width: "100%", height: 40, borderWidth: 1,  borderColor: "#d3d3d3"}}>
      <TextInput 
      placeholder="   Busque milhares de filmes..."
      placeholderTextColor="#d3d3d3"
      onChangeText={(val) => setSearch(val)} 
      onSubmitEditing={() => console.log(search)}/>
    </View>}
    <BarStyle>
      <TouchableHighlight onPress={() => navigation.navigate("Home")}>
        <FontAwesomeIcon icon={ faHome } color={ theme.colors.icon2 }  size={25}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => setShowSearch(!showSearch)}>
        <FontAwesomeIcon icon={ faSearch } color={ theme.colors.icon2 } size={25} />
      </TouchableHighlight>
    </BarStyle>
    </>
  );
}

export default BottomBar;