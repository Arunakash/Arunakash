import React,{Component} from 'react';
import {View,Text} from 'react-native';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';

const GstReport = (props) =>{
    return(
    <View style={{flex:1}}>
        <ReportScrnsHeader name= {"GST Report"} navigation={props.navigation}></ReportScrnsHeader>
     </View>
    )
}

export default GstReport;