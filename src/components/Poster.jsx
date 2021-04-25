import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { PosterStyle } from "../styles/screens/home";

const Poster = (props) => {
  const { posterPath } = props;
  const path = "https://image.tmdb.org/t/p/w500" + posterPath;
  return (
    <>
    <TouchableOpacity>
      <PosterStyle source={{uri: path}}/>
    </TouchableOpacity>
    </>
  );
}

export default Poster;