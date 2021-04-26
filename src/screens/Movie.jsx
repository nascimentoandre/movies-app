import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/ducks/movie";
import { DetailImage, MovieContainer, Info, InfoText, Title } from "../styles/screens/movie";
import Loading from "../components/Loading";
import BottomBar from "../components/BottomBar";
import { ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Movie = ({ route, navigation }) => {
  const dispatch = useDispatch();

  id = route.params.id;

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch]);

  const movie = useSelector(state => state.movie.movie);

  if (!movie) return <Loading />

  const path = "https://image.tmdb.org/t/p/w500/" + movie.poster_path; 
  const genres = [];
  for (let i in movie.genres) genres.push(movie.genres[i].name);

  return (
    <MovieContainer>
      <ScrollView contentContainerStyle={scrollStyle} scrollEnabled={true}>
        <DetailImage source={{uri: path}}/>
        <Info>
          <Title>{movie.title}</Title>
          <InfoText>{movie.release_date.slice(0,4)} • {genres.join("/")} • {movie.vote_average}/10  <FontAwesomeIcon icon={faStar} color={"#f52be0"}/></InfoText>
          <InfoText>{movie.overview}</InfoText>
        </Info>
      </ScrollView>
      <BottomBar navigation={navigation} />
    </MovieContainer>
  );
}

const scrollStyle = {
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
}

export default Movie;