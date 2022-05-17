import React,{Component,useState} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import {Checkbox} from 'react-native-paper';
import COLORS from '../Components/COLORS';


const SalesReport = (props) =>{

    const [productBy,setProductBy] = useState(true);
    const [customerBy,setCustomerBy] = useState(false);
    const [Employee,setEmployee] = useState(false);

    const listData = [{name:"20 Ltr",count:20},{name:"30 Ltr",count:10},{name:"300 Ml",count:15},{name:"500 Ml",count:23},{name:"50 Ltr",count:20},
    {name:"250 Ml",count:20},{name:"10 Ltr",count:2},{name:"20 Ltr",count:12},{name:"5 Ltr",count:21},{name:"2 Ltr",count:13}]
    
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
        <ReportScrnsHeader name= {"Sales Report"} navigation={props.navigation}></ReportScrnsHeader>
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
            <View style={{flexDirection:'row',paddingTop:20,paddingBottom:20,justifyContent:'space-evenly',alignItems:'center'}}>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Text>Product by</Text>
                     <Checkbox status= {productBy? 'checked':'unchecked'} color={COLORS.primary} onPress = {() =>{setProductBy(!productBy),setCustomerBy(false),setEmployee(false)}}></Checkbox>
                 </View>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                     <Text>Customer by</Text>
                     <Checkbox  status= {customerBy ? 'checked':'unchecked'} color={COLORS.primary} onPress = {() =>{setProductBy(false),setCustomerBy(!customerBy),setEmployee(false)}}></Checkbox>
                 </View>
  
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                     <Text>Employee</Text>
                     <Checkbox status= {Employee ? 'checked':'unchecked'} color={COLORS.primary} onPress = {() =>{setProductBy(false),setCustomerBy(false),setEmployee(!Employee)}}></Checkbox>
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


export default SalesReport;