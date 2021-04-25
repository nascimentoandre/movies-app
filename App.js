import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/configureStore";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Movie from "./src/screens/Movie";
import Login from "./src/screens/Login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Movie" component={Movie} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar />
      </ThemeProvider>
    </Provider>
  );
}
