import React from "react";
import Loading from "../components/Loading";
import { ImgBg, LoginButton, LoginText } from "../styles/screens/login";

const Login = ({ navigation }) => {
  const bg_img = require("../assets/background.jpeg");

  if (!bg_img) return <Loading />

  return (
    <ImgBg imageStyle={{opacity: 0.8}} source={bg_img}>
      <LoginButton onPress={() => navigation.navigate("Home")}>
        <LoginText>Entrar como visitante</LoginText>
      </LoginButton>
    </ImgBg>
  );
}

export default Login;