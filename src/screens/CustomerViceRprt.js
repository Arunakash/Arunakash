import React,{Component} from 'react';
import {View,Text} from 'react-native';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';

const CustomerViceRprt = (props) =>{
    return(
        <View style={{flex:1}}>
        <ReportScrnsHeader name= {"Customer Vise Report"} navigation={props.navigation}></ReportScrnsHeader>
     </View>
    )
}

export default CustomerViceRprt;