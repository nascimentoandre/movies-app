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
      {popular.results.map(movie => (
        <Poster key={movie.id} posterPath={movie.poster_path} />  
      ))}
    </>
  );
}

export default Popular;