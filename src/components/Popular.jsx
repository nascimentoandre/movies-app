import React, { useEffect } from "react";
import { Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getPopular } from "../redux/ducks/popular";
import Loading from "./Loading";
import Poster from "./Poster";

const Popular = () => {
  // importando dados
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);

  const popular = useSelector(state => state.popular.popular);

  // Tela de carregamento
  if (!popular) return <Loading />

  // Posters dos filmes
  return (
    <>
      <Poster posterPath={popular.results[0].poster_path}/>
      <Poster posterPath={popular.results[1].poster_path}/>
      <Poster posterPath={popular.results[2].poster_path}/>
      <Poster posterPath={popular.results[3].poster_path}/>
    </>
  );
}

export default Popular;