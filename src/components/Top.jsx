import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTop } from "../redux/ducks/top";
import Loading from "./Loading";
import Poster from "./Poster";

const Top = ({ navigation }) => {
  // importando dados
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTop());
  }, [dispatch]);

  const top = useSelector(state => state.top.top);

  // Tela de carregamento
  if (!top) return <Loading />

  // Posters dos filmes
  return (
    <>
      {top.results.map(movie => (
        <Poster id={movie.id} key={movie.id} navigation={navigation} posterPath={movie.poster_path} />  
      ))}
    </>
  );
}

export default Top;