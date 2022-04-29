import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import {Ionicons,MaterialCommunityIcons,Entypo,FontAwesome5,MaterialIcons,Foundation,FontAwesome,Octicons} from '@expo/vector-icons';
import COLORS from './COLORS';
import { TouchableRipple,List} from 'react-native-paper';



const SideDrawer = () =>{
    return(
      <View style={styles.sideDrawerContainer}>
       <View name="pofile-info-container" style={styles.profileInfoCntnr}>
           <View style={styles.innerContainer}>
               <View style={{paddingBottom:10}}>
                  <Text style={styles.sideDrawerHdng}>NT369 Supply</Text>
             </View>
             <View style={styles.sideDrawerProfileInfo}>
             <Ionicons name="person-circle" size={30} color="rgb(0, 122, 255)" style={{paddingRight:6}}/>
              <Text style={{fontSize:16}}>+91 93244793232</Text>
            </View>
           </View>
       </View>
       <ScrollView>
       <View name="sideDrawerContent" style={{padding:10}}>
         <View style={{backgroundColor:"#fff",borderRadius:5,elevation:1.5,zIndex:1000,paddingVertical:10}}>
       
         <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                    <MaterialCommunityIcons name="account-arrow-right" size={24} color={COLORS.sideDrawerIconClr} />
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>My Account</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple> 

            <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                    <Entypo name="login" size={20.5} color={COLORS.sideDrawerIconClr} />
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>Login Creation/Details</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple> 

            <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                    <MaterialCommunityIcons name="account-details-outline" size={23} color={COLORS.sideDrawerIconClr} />
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>Employee Details</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple> 

            <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                    <FontAwesome5 name="money-bill-wave" size={18}  color={COLORS.sideDrawerIconClr} />
                   </View>
                   <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>Expenses crav</Text>
                      <Entypo name="chevron-small-down" size={24} color="black" style={{position:'absolute',right:20}}/>
                   </View>
                  </View>
              </View>
            </TouchableRipple>  
            
            <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                      <MaterialCommunityIcons name="label-percent-outline" size={24} color={COLORS.sideDrawerIconClr} />
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>Gst/Non Gst Applicable</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple>    

            <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                      <MaterialIcons name="support" size={22} color={COLORS.sideDrawerIconClr}  />
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>Support Videos/Instructions</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple>    

            <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                      <Foundation name="web" size={23} color={COLORS.sideDrawerIconClr} />
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>Website</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple>  

            <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                    <FontAwesome name="phone" size={20} color={COLORS.sideDrawerIconClr}/>
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>Call Us 9867546787</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple> 

            <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                    <Ionicons name="log-out-outline" size={23} color="#FF5722"/>
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:"#FF5722"}}>Logout</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple>
           
         </View>
       
         <View style={{paddingVertical:10}}>
           <View style={{backgroundColor:"#fff",borderRadius:5,elevation:1.5,zIndex:1000,paddingVertical:10}}>
           <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                    <Ionicons name="language" size={22} color={COLORS.sideDrawerIconClr} />
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>Language</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple> 

            <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                    <MaterialCommunityIcons name="clipboard-check-multiple-outline" size={22} color={COLORS.sideDrawerIconClr}/>
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>Terms & Conditions</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple> 
            
            <TouchableRipple onPress={() =>{console.log("")}}>
              <View style={{flexDirection:'row',paddingVertical:15}}>
                  <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                    <Octicons name="package" size={22} color={COLORS.sideDrawerIconClr} />
                   </View>
                   <View style={{flex:5}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.sideDrawerTxtClr}}>Products</Text>
                   </View>
                  </View>
              </View>
            </TouchableRipple> 

           </View>
         </View>
       </View>
       </ScrollView>
      </View>
    )
  }

  const styles = StyleSheet.create({
    sideDrawerContainer:{
      flex:1,
      paddingTop:50,
      backgroundColor:COLORS.sideDrawerBackgrndClr
    },
    profileInfoCntnr:{
      paddingHorizontal:10,
      borderBottomColor:'#D6D7D5',
      borderBottomWidth:1
    },
    innerContainer:{
      paddingVertical:15,
      paddingLeft:10,
      justifyContent:'center'
    },
    sideDrawerHdng:{
      color:"rgb(0, 122, 255)",
      fontSize:18,
      fontWeight:'bold'
    },
    sideDrawerProfileInfo:{
      flexDirection:'row',
      alignItems:'center'
    }
  })
  export default SideDrawer;