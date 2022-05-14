import React,{Component,useState} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';
import {Entypo} from '@expo/vector-icons';
import {Checkbox} from 'react-native-paper';
import COLORS from '../Components/COLORS';


const StoreHistoryRprt = (props) =>{
    const listData = [{name:"20 Ltr",count:20},{name:"30 Ltr",count:10},{name:"300 Ml",count:15},{name:"500 Ml",count:23},{name:"50 Ltr",count:20},
    {name:"250 Ml",count:20},{name:"10 Ltr",count:2},{name:"20 Ltr",count:12},{name:"5 Ltr",count:21},{name:"2 Ltr",count:13}]
   
    let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];
    const renderItem = ({item,index}) =>{
        return(
            <View  name="table-row" style={[{flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:0.5},index%2 === 0?{backgroundColor:'#E1ECF4'}:{}]}>
            <View style={{flex:1,paddingVertical:15,alignItems:'center',justifyContent:'center'}} name="customerNameBox">
              <View name="icon-hldr" >
               <Text>{index+1}</Text>
              </View>
            </View>
            <View style={{flex:4,justifyContent:'center',alignItems:'center'}} name="DueDetailsBox">
                <Text style={{fontSize:13}}>{item.name}</Text>
            </View>
            <View style={{flex:3,alignItems:'center',justifyContent:'center'}} name="DueValbOX">
                <Text>{item.count}</Text>
            </View>
        </View>
        )
    }

    return(
        <View style={{flex:1}}>
        <ReportScrnsHeader name= {"Store History Report"} navigation={props.navigation}></ReportScrnsHeader>
        <View style={{flex:1}}>
            <View style={{paddingTop:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                     <View style={styles.dateTxtHldr}>
                         <Text><Text style={{color:COLORS.primary}}>From:</Text> 20 Apr, 2020</Text>
                     </View>
                     <View style={styles.dateTxtHldr}>
                         <Text><Text style={{color:COLORS.primary}}>To:</Text> 30 Apr, 2020</Text>
                     </View>
            </View>
            <View style={{flexDirection:'row',paddingTop:20,paddingBottom:20,justifyContent:'center',alignItems:'center'}}>
             <Text>Vendor Name</Text>
             <View style={{width:150,marginLeft:10,backgroundColor:'#fff',height:30,borderRadius:4,justifyContent:'center'}}>
                 <Text style={{paddingLeft:8}}>vendor1</Text>
             <Entypo name="chevron-thin-down" size={15} color="black" style={{position:'absolute',right:10}}/>
             </View>
            </View>
                 <View name="table-body">
                     <FlatList contentContainerStyle={{ paddingBottom: 240 ,flexGrow:1}} nestedScrollEnabled={false} data={listData}  renderItem={renderItem} keyExtractor={(item,index)=> index.toString()} />                       
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
export default StoreHistoryRprt;