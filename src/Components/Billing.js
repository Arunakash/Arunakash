import React,{Component} from 'react'; 
import {View,Text,StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
const Billings = (props) =>{
 return(
     <View style={{flex:1}}>
         <Header name={"Billings"} navigation={props.navigation}></Header>
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
       justifyContent:'center',
       backgroundColor:"#E9E9E8"
   }
})

export default Billings;