import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getMovie } from "../redux/ducks/movie";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const movie = useSelector(state => state.movie.movie);

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      {movie && <Text>{movie.title}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;