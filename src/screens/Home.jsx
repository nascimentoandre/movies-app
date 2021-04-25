import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Popular from "../components/Popular";
import { getMovie } from "../redux/ducks/movie";
import { HomeContainer, OptionsContainer, PosterContainer, Title } from "../styles/screens/home";

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
      <PosterContainer>
        <Popular />
      </PosterContainer>
    </HomeContainer>
  );
}

export default Home;