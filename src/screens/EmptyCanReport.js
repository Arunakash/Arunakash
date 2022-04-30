
import React,{Component} from 'react';
import {View,Text} from 'react-native';
import ReportScrnsHeader from '../Components/ReportScrnsHeader';


const EmptyCanRprt = (props) =>{
    const countVal = 23
    return(
        <View style={{flex:1}}>
           <ReportScrnsHeader name= {"Empty Can Report"} navigation={props.navigation} label={"Total Empty Due :"} countValue ={countVal}></ReportScrnsHeader>
        </View>
    )
}

export default EmptyCanRprt;