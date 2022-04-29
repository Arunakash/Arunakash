import React,{Component} from 'react'; 
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
const Home = () =>{
 return(
     <View style={{flex:1}}>
         <Header name={"Dashboard"}></Header>
         <View style={styles.container}>
                 <ScrollView showsVerticalScrollIndicator={false} >
                     <View style={{paddingVertical:20}}>
                         <View style={styles.listView}></View>
                         <View style={styles.listView}></View>
                         <View style={styles.listView}></View>
                         <View style={styles.listView}></View>
                         <View style={styles.listView}></View>
                         <View style={styles.listView}></View>
                         <View style={styles.listView}></View>
                         <View style={styles.listView}></View>
                         <View style={styles.listView}></View>
                     </View>
                </ScrollView>
         </View>
     </View>
 )
}

const styles = StyleSheet.create({
   container :{
       flex:1,
       backgroundColor:"#E9E9E8"
   },
   listView:{
    backgroundColor:"#fff",
    height:78,
    borderRadius:10,
    marginHorizontal:10,
    marginVertical:5,
    zIndex:1000,
    elevation:4
   }
})

export default Home;