import React, { useEffect } from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getQuery } from "../redux/ducks/query"
import Loading from "../components/Loading";
import { HomeContainer, OptionsContainer, Title } from "../styles/screens/home";
import BottomBar from "../components/BottomBar";
import Poster from "../components/Poster";

const Query = ({ route, navigation }) => {
  const queryStr = (route.params?.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuery(queryStr));
  }, [dispatch, queryStr]);

  const query = useSelector(state => state.query.query);

  if (!query) return <Loading />

  return (
    <HomeContainer>
      <OptionsContainer>
        <TouchableOpacity>
          <Title style={{color: "#f52be0"}}>Resultados</Title>
        </TouchableOpacity>
      </OptionsContainer>
      <ScrollView contentContainerStyle={scrollStyle} scrollEnabled={true}>
        {query.results.length !== 0 ? 
        query.results.map(movie => (
          movie.poster_path && <Poster id={movie.id} key={movie.id} navigation={navigation} posterPath={movie.poster_path} />
        )) : 
        <Text style={{color: "#d3d3d3", fontSize: 15}}>Não foram encontrados resultados.</Text> }
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

export default Query;