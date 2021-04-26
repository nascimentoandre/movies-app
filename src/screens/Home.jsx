import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Popular from "../components/Popular";
import Top from "../components/Top";
import { HomeContainer, OptionsContainer, PosterContainer, Title } from "../styles/screens/home";
import  BottomBar from "../components/BottomBar";
import { ScrollView } from "react-native";

const Home = ({ navigation }) => {
  const [tab, setTab] = useState(0);

  const handleTab = () => {
    if (tab === 0) setTab(1);
    else if (tab === 1) setTab(0);
    console.log(tab);
  }

  return (
    <HomeContainer>
      <OptionsContainer>
        <TouchableOpacity onPress={handleTab}>
          <Title style={{color: "#f52be0"}}>Populares</Title>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTab}>
          <Title>Mais votados</Title>
        </TouchableOpacity>
      </OptionsContainer>
      <ScrollView contentContainerStyle={scrollStyle} scrollEnabled={true}>
        <Popular navigation={navigation} />
      </ScrollView>
      <BottomBar />
    </HomeContainer>
  );
}

const scrollStyle = {
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
}

export default Home;