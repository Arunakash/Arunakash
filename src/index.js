import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Signin from ".././src/screens/auth/Signin";
import Registration from ".././src/screens/auth/Registration";
const Main = createStackNavigator();
const Onboard = createStackNavigator();
const Auth = createStackNavigator();
function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        swipeEnabled: true,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
      }}
    >
      <Auth.Screen
        name="login"
        options={{ headerShown: false }}
        component={Signin}
      />
      <Auth.Screen
        name="registartion"
        options={{ headerShown: false }}
        component={Registration}
      />
    </Auth.Navigator>
  );
}
function MainStack() {
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName={"auth"}>
        <Main.Screen
          name="auth"
          options={{ headerShown: false }}
          component={AuthStack}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
}
export default MainStack;
