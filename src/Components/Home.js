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
              <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                <View style={{flex:2}}>
                  <Text style={styles.listViewTxt}>Availabe Empty 20Ltr Can</Text>
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <View style={styles.textBtn}>
                    <Text style={styles.valueTxt}>20</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.listView}>
              <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                <View style={{flex:2}}>
                  <Text style={styles.listViewTxt}>Filled 20Ltr Can</Text>
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <View style={styles.textBtn}>
                    <Text style={styles.valueTxt}>20</Text>
                  </View>
                </View>
              </View>
            </View>
            
            <View style={styles.listView}>
              <View style={{ flexDirection: "row",paddingHorizontal: 25,alignItems:'center'}}>
                <View style={{flex:2}}>
                  <Text style={styles.listViewTxt}>Total Sales Value</Text>
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <View style={styles.textBtn}>
                    <Text style={styles.valueTxt}>210</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.listView}>
              <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                <View style={{flex:2}}>
                  <Text style={styles.listViewTxt}>Total Expenses</Text>
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <View style={styles.textBtn}>
                    <Text style={styles.valueTxt}>54</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.listView}>
              <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                <View style={{flex:2}}>
                  <Text style={styles.listViewTxt}>Total Purchase</Text>
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <View style={styles.textBtn}>
                    <Text style={styles.valueTxt}>102</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.listView}>
              <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                <View style={{flex:2}}>
                  <Text style={styles.listViewTxt}>Customer Balance</Text>
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <View style={styles.textBtn}>
                    <Text style={styles.valueTxt}>12</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.listView}>
              <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                <View style={{flex:2}}>
                  <Text style={styles.listViewTxt}>Vendor Balance</Text>
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <View style={styles.textBtn}>
                    <Text style={styles.valueTxt}>22</Text>
                  </View>
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
    marginVertical: 8,
    zIndex: 1000,
    elevation: 4,
    flex:1
  },
  listViewTxt:{
    alignItems: "center",
    paddingVertical: 10,
    fontSize: 15
  },
  valueTxt:{
    textAlign: "center",
    paddingVertical: 5,
    color: "#fff"
  },
  textBtn: {
    height: 30,
    width: 60,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  
  },
});

export default Home;
