import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import COLORS from "./COLORS";
import Header from "./Header";
const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header name={"Dashboard"} navigation={props.navigation}></Header>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingVertical: 20 }}>
            <View style={styles.listView}>
              <View style={{ flexDirection: "row", paddingHorizontal: 25 }}>
                <Text
                  style={{
                    alignItems: "center",
                    paddingVertical: 10,
                    fontSize: 15,
                  }}
                >
                  Availabe Empty Can :
                </Text>
                <View style={styles.textBtn}>
                  <Text
                    style={{
                      textAlign: "center",
                      paddingVertical: 5,
                      color: "#fff",
                    }}
                  >
                    20
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E9E8",
  },
  listView: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    zIndex: 1000,
    elevation: 4,
  },
  textBtn: {
    height: 30,
    width: 60,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10,
  },
});

export default Home;
