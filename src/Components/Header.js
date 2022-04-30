import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import COLORS from "./COLORS";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar StatusBarStyle="dark-content" />
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1.4 }} flexDirection="row">
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="menu"
              size={30}
              color="black"
              onPress={() => {
                props.navigation.dispatch(DrawerActions.openDrawer());
              }}
            />
          </View>
        </View>
        <View
          style={{ flex: 4, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>{props.name}</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <MaterialCommunityIcons
            name="bell"
            size={20}
            color={COLORS.primary}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#fff",
    // backgroundColor:"#D3D3D3",
    flexDirection: "column",
  },
});

export default Header;
