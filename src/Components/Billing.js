import React,{Component} from 'react'; 
import {View,Text,StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
const Billings = () =>{
 return(
     <View style={{flex:1}}>
         <Header></Header>
         <View style={styles.container}>
           <Text>Billings Component</Text>
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

export default Billings;