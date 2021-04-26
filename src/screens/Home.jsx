import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Popular from "../components/Popular";
import Top from "../components/Top";
import { HomeContainer, OptionsContainer, PosterContainer, Title } from "../styles/screens/home";
import  BottomBar from "../components/BottomBar";
import { ScrollView } from "react-native";

const Home = ({ navigation }) => {
  const [tab, setTab] = useState(0);
  const [color, setColor] = useState(["#f52be0", "#d3d3d3"]);

  const handleTab0 = () => {
    setTab(0);
    setColor(["#f52be0", "#d3d3d3"]);
  }

  const handleTab1 = () => {
    setTab(1);
    setColor(["#d3d3d3", "#f52be0"]);
  }

  return (
    <HomeContainer>
      <OptionsContainer>
        <TouchableOpacity onPress={handleTab0}>
          <Title style={{color: color[0]}}>Populares</Title>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTab1}>
          <Title style={{color: color[1]}}>Mais votados</Title>
        </TouchableOpacity>
      </OptionsContainer>
      <ScrollView contentContainerStyle={scrollStyle} scrollEnabled={true}>
        {tab === 0 ? <Popular navigation={navigation} /> : <Top navigation={navigation} /> }
      </ScrollView>
      <BottomBar navigation={navigation} />
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