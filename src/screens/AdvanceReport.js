import React,{Component} from 'react';
import {View,Text} from 'react-native';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';


const AdvanceRprt = (props) =>{
    return(
        <View style={{flex:1}}>
        <ReportScrnsHeader name= {"Advance Report"} navigation={props.navigation}></ReportScrnsHeader>
     </View>
    )
}

export default AdvanceRprt; 