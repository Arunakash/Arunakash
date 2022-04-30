import React,{Component} from 'react'; 
import {View,Text,StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';

const Customer = (props) =>{
 return(
     <View style={{flex:1}}>
         <Header name={"Customer"} navigation={props.navigation}></Header>
         <View style={styles.container}>
           <Text>Customer Component</Text>
         </View>
     </View>
 )
}

const styles = StyleSheet.create({
   container :{
       flex:1,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:"#E9E9E8"
   }
})

export default Customer;