import React,{Component} from 'react';
import {View,Text} from 'react-native';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';

const StoreHistoryRprt = (props) =>{
    return(
        <View style={{flex:1}}>
        <ReportScrnsHeader name= {"Store History Report"} navigation={props.navigation}></ReportScrnsHeader>
     </View>
    )
}

export default StoreHistoryRprt;