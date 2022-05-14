import React,{Component} from 'react'; 
import {View,Text,StyleSheet,ScrollView,TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
import COLORS from '../Components/COLORS'

const Expenses = (props) =>{
 return(
     <View style={{flex:1}}>
         <Header name="Expenses" navigation={props.navigation}></Header>
         <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                 <View style={{ paddingVertical: 20 }}>
                   <View name="form-hldr" style={{paddingVertical:20,paddingHorizontal:20,backgroundColor:"#fff",margin:10,borderRadius:5}}>
                      <View name="feild1">
                        <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Expenses Group</Text>
                        <View name="text-input-hldr" style={{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25}}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Expenses Group"}></TextInput>
                        </View>
                      </View>
                      <View name="feild2">  
                          <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Expenses Name</Text>
                        <View name="text-input-hldr" style={{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25}}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Expenses Name"}></TextInput>
                        </View>
                      </View>
                      <View name="feild3">
                          <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Amount</Text>
                        <View name="text-input-hldr" style={{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25}}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Amount"}></TextInput>
                        </View>
                      </View>
                      <View name="feild4">
                          <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Remarks</Text>
                        <View name="text-input-hldr" style={{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25}}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Remarks"}></TextInput>
                        </View>
                      </View>
                   </View>
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
   }
})

export default Expenses;