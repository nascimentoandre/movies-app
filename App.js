import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/configureStore";
import Home from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

export default function App() {

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Home />
          <StatusBar />
        </ThemeProvider>
      </Provider>
    </>
  );
}
