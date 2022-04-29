/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import COLORS from "./COLORS";
export default function index({ title, navigation }) {
  return (
    <View style={styles.header}>
      <Pressable style={styles.circle} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={22} color="#000" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    marginTop: 60,
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    color: "#000",
    letterSpacing: 1,
  },
  circle: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "white",
  },
  iconButton: {
    color: "white",
    marginLeft: 4,
  },
});
