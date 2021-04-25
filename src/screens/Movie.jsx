import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getTop } from "../redux/ducks/top";

const Movie = ({ route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTop());
  }, [dispatch]);

  const top = useSelector(state => state.top.top);

  return (
    <View>
      <Text>Hello from movie</Text>
      <Text>ID: {route.params?.id} </Text>
      {top && <Text>{top.results[0].title}</Text>}
    </View>
  );
}

export default Movie;