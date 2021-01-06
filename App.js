import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import Stack from "./src/navigations/Stack";
import theme from "./src/styles/theme";
import Loading from "./src/screens/Loading/Loading";
import LoginStack from "./src/navigations/LoginStack";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <Loading />
  ) : AsyncStorage.getItem("token") ? (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
