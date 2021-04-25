import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Popular from "../components/Popular";
import { getMovie } from "../redux/ducks/movie";
import { HomeContainer, OptionsContainer, PosterContainer, Title } from "../styles/screens/home";
import  BottomBar from "../components/BottomBar";
import { ScrollView } from "react-native";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const movie = useSelector(state => state.movie.movie);

  return (
    <HomeContainer>
      <OptionsContainer>
        <Title style={{color: "#f52be0"}}>Populares</Title>
        <Title>Mais votados</Title>
        <Title>Em breve</Title>
      </OptionsContainer>
      <ScrollView contentContainerStyle={scrollStyle} scrollEnabled={true}>
        <Popular />
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