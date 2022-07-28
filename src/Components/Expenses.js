import React,{Component,useState} from 'react'; 
import {View,Text,StyleSheet,ScrollView,TextInput,FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
import COLORS from '../Components/COLORS'

const Expenses = (props) =>{
   const listData = [{name:"200",count:200},{name:"300",count:100},{name:"300",count:150},]
  const [isFocuseExpensesGrp,setIsFocusExpensesGrp] = useState(false);
  const [isFocuseExpensesNme,setIsFocusedExpensesNme] = useState(false);
  const [isFocuseAmount,setIsFocuseAmount] = useState(false);
  const [isRemarksFocus,setIsFocusRemarks] = useState(false)

 return(
     <View style={{flex:1}}>
         <Header name="Expenses" navigation={props.navigation}></Header>
         <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                 <View style={{ paddingVertical: 20 }}>
                   <View name="form-hldr" style={{paddingVertical:20,paddingHorizontal:20,backgroundColor:"#fff",margin:10,borderRadius:5}}>
                      <View name="feild1">
                        <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Expenses Group</Text>
                        <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isFocuseExpensesGrp?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Expenses Group"} onFocus={() =>{setIsFocusExpensesGrp(true)}} onBlur={()=>{setIsFocusExpensesGrp(false)}}></TextInput>
                        </View>
                      </View>
                      <View name="feild2">  
                          <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Expenses Name</Text>
                        <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isFocuseExpensesNme?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Expenses Name"} onFocus={() =>{setIsFocusedExpensesNme(true)}} onBlur ={() =>{setIsFocusedExpensesNme(false)}}></TextInput>
                        </View>
                      </View>
                      <View name="feild3">
                          <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Amount</Text>
                        <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isFocuseAmount?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Amount"} onFocus={() =>{setIsFocuseAmount(true)}} onBlur={() =>{setIsFocuseAmount(false)}}></TextInput>
                        </View>
                      </View>
                      <View name="feild4">
                          <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Remarks</Text>
                        <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isRemarksFocus?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Remarksgit"} onFocus={() =>{setIsFocusRemarks(true)}} onBlur={() =>{setIsFocusRemarks(false)}}></TextInput>
                        </View>
                      </View>
                   </View>
                 </View>
                 <View name="table-body" style={{paddingHorizontal:10,paddingBottom:40,paddingTop:15}}>
                     <View name={"Header-row"} style={{paddingVertical:15,flexDirection:'row',backgroundColor:"#E1ECF4"}}>
                        <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11}}>S.No</Text></View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11,textAlign:'center'}}>Expenses Group</Text></View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:11}}>Expenses Name</Text></View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11}}>Amount</Text></View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11}}>Remarks</Text></View>
                     </View>
                     {
                       listData.map((item,index) =>(
                        <View key={index}  name="table-row" style={[{flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:0.5,backgroundColor:"#fff"}]}>
                        <View style={{flex:1.5,paddingVertical:15,alignItems:'center',justifyContent:'center'}} name="customerNameBox">
                          <View name="icon-hldr" >
                           <Text style={{fontSize:11}}>{index+1}</Text>
                          </View>
                        </View>
                        <View style={{flex:3,justifyContent:'center',alignItems:'center'}} name="DueDetailsBox">
                            <Text style={{fontSize:11}}>{item.name}</Text>
                        </View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}} name="DueValbOX">
                            <Text style={{fontSize:11}}>{item.count}</Text>
                        </View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}} name="DueValbOX">
                            <Text style={{fontSize:11}}>1000</Text>
                        </View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}} name="DueValbOX">
                            <Text style={{fontSize:11}}>None</Text>
                        </View>
                    </View>
                       ))
                     }
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