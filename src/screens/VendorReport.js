import React,{Component} from 'react';
import {View,Text} from 'react-native';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';

const VendorRprt = (props) =>{
    return(
    <View style={{flex:1}}>
        <ReportScrnsHeader name= {"Vendor Report"} navigation={props.navigation}></ReportScrnsHeader>
     </View>
    )
}

export default VendorRprt;