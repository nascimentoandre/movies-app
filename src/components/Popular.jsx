import React, { useEffect } from "react";
import { Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getPopular } from "../redux/ducks/popular";
import Poster from "./Poster";

const Popular = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);

  const popular = useSelector(state => state.popular.popular);

  return (
    <>
      <Text style={{fontSize: 35}}>pop</Text>
      {popular && <Text>{popular.results[0].poster_path}</Text>}
    </>
  );
}

export default Popular;