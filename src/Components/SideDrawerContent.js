import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SideDrawer = () =>{
    return(
      <View style={{flex:1,paddingTop:50}}>
       <View name="pofile-info-container" style={{paddingHorizontal:10,borderBottomColor:'#D6D7D5',borderBottomWidth:1}}>
           <View style={{paddingVertical:15,paddingLeft:10,justifyContent:'center'}}>
               <View style={{paddingBottom:10}}>
                  <Text style={{color:"rgb(0, 122, 255)",fontSize:18,fontWeight:'bold'}}>NT369 Supply</Text>
             </View>
             <View style={{flexDirection:'row',alignItems:'center'}}>
             <Ionicons name="person-circle" size={30} color="rgb(0, 122, 255)" style={{paddingRight:6}}/>
              <Text style={{fontSize:16}}>+91 93344793212</Text>
            </View>
           </View>
       </View>
      </View>
    )
  }

  export default SideDrawer;