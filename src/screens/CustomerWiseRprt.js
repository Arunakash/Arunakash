import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView} from 'react-native';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';
import {Entypo} from '@expo/vector-icons';
import COLORS from '../Components/COLORS';

const CustomerWiseRprt = (props) =>{

    const listData = [{name:"200",count:200},{name:"300",count:100},{name:"300",count:150}]
    const billInvoiceData = [{billNo:"SVP1",billDate:"20-11-22",totalAmt:"100",balance:"0"},
    {billNo:"SVP2",billDate:"20-11-22",totalAmt:"200",balance:"100"}, {billNo:"SVP3",billDate:"20-11-22",totalAmt:"200",balance:"100"}]
    const renderItem = ({item,index}) =>{
        return(
            <View  name="table-row" style={[{flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:0.5,backgroundColor:"#fff"}]}>
            <View style={{flex:1,paddingVertical:15,alignItems:'center',justifyContent:'center'}} name="customerNameBox">
              <View name="icon-hldr" >
               <Text style={{fontSize:11}}>{index+1}</Text>
              </View>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}} name="DueDetailsBox">
                <Text style={{fontSize:11}}>{item.name}</Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}} name="DueValbOX">
                <Text style={{fontSize:11}}>{item.count}</Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}} name="DueValbOX">
                <Text style={{fontSize:11}}>- - -</Text>
            </View>
        </View>
        )
    }

    const inVoiceRenderItem = ({item,index}) =>{
        return(
            <View  name="table-row" style={[{flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:0.5,backgroundColor:"#fff"}]}>
            <View style={{flex:1.5,paddingVertical:15,alignItems:'center',justifyContent:'center'}} name="customerNameBox">
              <View name="icon-hldr" >
               <Text style={{fontSize:11}}>{index+1}</Text>
              </View>
            </View>
            <View style={{flex:3,justifyContent:'center',alignItems:'center'}} >
                <Text style={{fontSize:11}}>{item.billNo}</Text>
            </View>
            <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:11}}>{item.billDate}</Text>
            </View>
            <View style={{flex:3,alignItems:'center',justifyContent:'center'}} >
                <Text style={{fontSize:11}}>{item.totalAmt}</Text>
            </View>
            <View style={{flex:3,alignItems:'center',justifyContent:'center'}} >
                <Text style={{fontSize:11}}>{item.balance}</Text>
            </View>
            <View style={{flex:3,alignItems:'center',justifyContent:'center'}} >
                <Text style={{fontSize:11}}>- - -</Text>
            </View>
        </View>
        )
    }


    return(
        <View style={{flex:1}}>
        <ReportScrnsHeader name= {"Customer Wise Report"} navigation={props.navigation}></ReportScrnsHeader>
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
             <Text style={{fontSize:13,fontWeight:'bold',color:COLORS.primary}}>Customer Name</Text>
             <View style={{width:150,marginLeft:10,backgroundColor:'#fff',height:30,borderRadius:4,justifyContent:'center'}}></View>
            </View>
         <ScrollView contentContainerStyle={{paddingBottom:150}}>
                 <View name="table-body" style={{paddingHorizontal:10}}>
                     <View name={"Header-row"} style={{paddingVertical:15,flexDirection:'row',backgroundColor:"#E1ECF4"}}>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11}}>Total Bills</Text></View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11}}>Total Amount</Text></View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:11}}>Total Amount Bal</Text></View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11}}>Finally</Text></View>
                     </View>
                     <FlatList contentContainerStyle={{flexGrow:1}} nestedScrollEnabled={false} data={listData}  renderItem={renderItem} keyExtractor={(item,index)=> index.toString()} />                       
                </View>

                <View name="table-body" style={{paddingHorizontal:10,paddingTop:40}}>
                     <View name={"Header-row"} style={{paddingVertical:15,flexDirection:'row',backgroundColor:"#E1ECF4"}}>
                        <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11,textAlign:'center'}}>S.No</Text></View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11,textAlign:'center'}}>Bill No</Text></View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11,textAlign:'center'}}>Bill Date</Text></View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11,textAlign:'center'}}>Total Amount</Text></View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11,textAlign:'center'}}>Balance</Text></View>
                        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:11,textAlign:'center'}}>Finally</Text></View>
                     </View>
                     <FlatList contentContainerStyle={{flexGrow:1}} nestedScrollEnabled={false} data={billInvoiceData}  renderItem={inVoiceRenderItem} keyExtractor={(item,index)=> index.toString()} />                       
                </View>
                </ScrollView>
             {/* can use this template for horizontal scroll actions */}
                {/* <View style={{paddingHorizontal:10,borderColor:'red',borderWidth:1}}>
                <ScrollView h nestedScrollEnabled={true} horizontal={true} >
              <View name="table-body" style={{paddingTop:50,borderColor:'red',borderWidth:1,width:'100'}}>
                <View name={"Header-row"} style={{paddingVertical:15,flexDirection:'row',backgroundColor:"#E1ECF4",paddingHorizontal:10}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingLeft:10}}><Text style={{fontWeight:'bold',fontSize:11}}>S.No</Text></View>
               </View>
              </View>
              </ScrollView>
              </View> */}

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

export default CustomerWiseRprt;