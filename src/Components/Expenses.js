import React,{Component} from 'react'; 
import {View,Text,StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';

const Expenses = () =>{
 return(
     <View style={{flex:1}}>
         <Header></Header>
         <View style={styles.container}>
           <Text>Expenses Component</Text>
         </View>
     </View>
 )
}

const styles = StyleSheet.create({
   container :{
       flex:1,
       alignItems:'center',
       justifyContent:'center'
   }
})

export default Expenses;