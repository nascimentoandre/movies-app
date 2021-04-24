import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/configureStore";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
        <StatusBar />
      </Provider>
    </>
  );
}
