import React from "react";
import { Text, View } from "react-native";

const Movie = ({ route }) => {
  return (
    <View>
      <Text>Hello from movie</Text>
      <Text>ID: {route.params?.id} </Text>
    </View>
  );
}

export default Movie;