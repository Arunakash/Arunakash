import React,{Component} from 'react'; 
import {View,Text,StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';

const Expenses = (props) =>{
 return(
     <View style={{flex:1}}>
         <Header name="Expenses" navigation={props.navigation}></Header>
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
       justifyContent:'center',
       backgroundColor:"#E9E9E8"
   }
})

export default Expenses;