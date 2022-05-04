import React,{Component,useState} from 'react';
import {View,Text,StyleSheet,TextInput,FlatList} from 'react-native';
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';
import COLORS from '../Components/COLORS';

const DamagesRprt = (props) =>{
    const countVal = 32;
    const [isSearchBarFocused,setIsSearchBarFocused] = useState(false);
    const listData = [{name:"Arun",count:20},{name:"Kumar",count:10},{name:"Ramesh",count:15},{name:"Prabhu",count:23},{name:"Logesh",count:20},
    {name:"Kanan",count:20},{name:"Karun Kumar",count:2},{name:"Muhamad sahib",count:12},{name:"Janani",count:21},{name:"Raghavi",count:13}]

    const renderItem = ({item,index}) =>{
        return(
            <View  name="table-row" style={[{flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:0.5},index%2 === 0?{backgroundColor:'#E1ECF4'}:{}]}>
            <View style={{flex:5.5,flexDirection:'row',paddingVertical:15,alignItems:'center'}} name="customerNameBox">
              <View name="icon-hldr" style={{paddingLeft:10}}>
                <Ionicons name="person-circle" size={30} color={COLORS.sideDrawerIconClr}/>
              </View>
              <View name="namePhoneNum-hldr" style={{paddingLeft:5}}>
                  <Text style={{fontSize:13,paddingBottom:5}}>{item.name}</Text>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <FontAwesome name="phone" size={12} color={COLORS.sideDrawerIconClr}/>
                      <Text style={{fontSize:12,paddingLeft:3}}>+91 9076897678</Text>
                  </View>
              </View>
            </View>
            <View style={{flex:3,justifyContent:'center'}} name="DueDetailsBox">
                <Text style={{fontSize:13}}>Damages Count</Text>
            </View>
            <View style={{flex:2,alignItems:'center',justifyContent:'center'}} name="DueValbOX">
                <Text>{item.count}</Text>
            </View>
        </View>
        )
    }


    return(
        <View style={{flex:1}}>
        <ReportScrnsHeader name= {"Damages Report"} navigation={props.navigation} label={"Total DMG Count :"} countValue={countVal}></ReportScrnsHeader>
        <View style={{flex:1}}>
            <View style={{paddingTop:20}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                     <View style={styles.dateTxtHldr}>
                         <Text>From: 20 Apr, 2020</Text>
                     </View>
                     <View style={styles.dateTxtHldr}>
                         <Text>To: 30 Apr, 2020</Text>
                     </View>
                  </View>
                  <View style={[{backgroundColor:'#fff',height:40,marginHorizontal:20,marginVertical:20,borderRadius:26,flexDirection:'row',alignItems:'center'},isSearchBarFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                      <Ionicons name="ios-search" size={20} color={isSearchBarFocused?COLORS.primary : COLORS.sideDrawerIconClr} style={{paddingLeft:15}}/>
                      <TextInput placeholder='Search by Name' onBlur={() =>{setIsSearchBarFocused(false)}} onFocus={() =>{setIsSearchBarFocused(true)}} style={{borderRightColor:COLORS.sideDrawerIconClr,borderRightWidth:1,flex:1,padding:0,paddingLeft:10}}></TextInput>
                      <FontAwesome name="filter" size={18} color={COLORS.sideDrawerIconClr} style={{paddingRight:15,paddingLeft:10}}/>
                      </View>
                      <View name="table-body">
                          <FlatList contentContainerStyle={{ paddingBottom: 160 ,flexGrow:1}} nestedScrollEnabled={false} data={listData}  renderItem={renderItem} keyExtractor={(item,index)=> index.toString()} />                       
                      </View>
            </View>
        </View>
     </View>
    )
}

const styles = StyleSheet.create({
    dateTxtHldr:{
        backgroundColor:'#fff',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        elevation:5,
        zIndex:1000
    }
})

export default DamagesRprt;