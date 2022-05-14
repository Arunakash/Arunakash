import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView} from 'react-native';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';
import {Entypo} from '@expo/vector-icons';
import COLORS from '../Components/COLORS';

const GstReport = (props) =>{
    const listData = [{invoiceDate:"02-02-22",invoiceNo:23,taxAmt:200,gstpercent:18,gstVal:21,gstAmt:10},
                      {invoiceDate:"03-02-22",invoiceNo:24,taxAmt:300,gstpercent:18,gstVal:22,gstAmt:50},
                      {invoiceDate:"04-02-22",invoiceNo:29,taxAmt:400,gstpercent:18,gstVal:23,gstAmt:30},
                      {invoiceDate:"08-02-22",invoiceNo:21,taxAmt:700,gstpercent:18,gstVal:25,gstAmt:60},
                     ]

    const renderItem = ({item,index}) =>{
        return(
            <View  name="table-row" style={[{flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:0.5,backgroundColor:"#fff"}]}>
                   <View style={{width:50,alignItems:'center',justifyContent:'center',paddingVertical:10}}><Text>{index+1}</Text></View>
                   <View style={styles.tableRow}><Text>{item.invoiceDate}</Text></View>
                   <View style={styles.tableRow}><Text>{item.invoiceNo}</Text></View>
                   <View style={styles.tableRow}><Text>{item.taxAmt}</Text></View>
                   <View style={styles.tableRow}><Text>{item.gstpercent}</Text></View>
                   <View style={styles.tableRow}><Text>{item.gstVal}</Text></View>
                   <View style={styles.tableRow}><Text>{item.gstAmt}</Text></View>
                 
           </View>
        )
    }
    return(
        <View style={{flex:1}}>
        <ReportScrnsHeader name= {"GST Report"} navigation={props.navigation}></ReportScrnsHeader>
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

            </View>
            <View style={{paddingHorizontal:10,paddingTop:30}}>
                <ScrollView horizontal={true} nestedScrollEnabled={true}>
                <View name={"Table-body"}>
                <View name={"header-row"} style={{flexDirection:'row',backgroundColor:"#E1ECF4"}}>
                   <View style={{width:50,alignItems:'center',justifyContent:'center',paddingVertical:10}}><Text>S.No</Text></View>
                   <View style={styles.tableRow}><Text>Invioce Date</Text></View>
                   <View style={styles.tableRow}><Text>Invioce No</Text></View>
                   <View style={styles.tableRow}><Text>Tax Amt</Text></View>
                   <View style={styles.tableRow}><Text>GST%</Text></View>
                   <View style={styles.tableRow}><Text>GST Value</Text></View>
                   <View style={styles.tableRow}><Text>GST Amt</Text></View>
                </View>  
                <FlatList contentContainerStyle={{flexGrow:1}} nestedScrollEnabled={true} data={listData}  renderItem={renderItem} keyExtractor={(item,index)=> index.toString()} />                  
                </View>   
                </ScrollView>
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
    },
    tableRow:{
        width:120,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10
    }
})


export default GstReport;