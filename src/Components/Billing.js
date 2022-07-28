import React,{Component,useState} from 'react'; 
import {View,Text,StyleSheet,ScrollView,TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
import COLORS from '../Components/COLORS'

const Billings = (props) =>{
    const [isVendorNameFocused,setIsVendorNameFocused] = useState(false);
    const [isVendorGstFocused,setIsVendorGstFocused] = useState(false);
    const [isVendorPhoneFocused,setIsVendorPhoneFocused] = useState(false);
    const [isEmailFocused,setIsEmailFocused] = useState(false);
    const [isAddressFocused,setIsAddressFocused] = useState(false);
    const [isIGstFocused,setIsIgstFocused] = useState(false);
    const [isGstFocused,setIsGstFocused] = useState(false);
    const [isBillNoFocused,setIsBillNoFocused] = useState(false);
    const [isInvoiceAmtFocused,setIsInvoiceAmtFocused] = useState(false);
    const [isInvoiceDateFocused,setIsInvoiceDateFocused] = useState(false);
    const [isOtherChargesFocused,setIsOtherChargesFocused] = useState(false);
    const [isTotalAmt,setIsTotalAmt] = useState(false);

 return(
     <View style={{flex:1}}>
         <Header name={"Billings"} navigation={props.navigation}></Header>
         <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingVertical: 20 }}>
                   <View name="form-hldr" style={{paddingVertical:20,paddingHorizontal:20,backgroundColor:"#fff",margin:10,borderRadius:5}}>
                      <View name="feild1">
                        <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Vendor Name</Text>
                        <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isVendorNameFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                           <TextInput style={[{paddingHorizontal:10,paddingVertical:5,fontSize:13}]} placeholder={"Vendor Name"} onFocus={() =>{setIsVendorNameFocused(true)}} onBlur={() =>{setIsVendorNameFocused(false)}}></TextInput>
                        </View>
                      </View>
                      <View name="feild2">  
                          <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Vendor Gst</Text>
                        <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isVendorGstFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Vendor Gst"} onFocus={() =>{setIsVendorGstFocused(true)}} onBlur={() =>{setIsVendorGstFocused(false)}}></TextInput>
                        </View>
                      </View>
                      <View name="feild3">
                          <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Vendor Phone</Text>
                        <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isVendorPhoneFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Vendor Phone"} onFocus={() =>{setIsVendorPhoneFocused(true)}} onBlur={() =>{setIsVendorPhoneFocused(false)}}></TextInput>
                        </View>
                      </View>
                      <View name="feild4">
                          <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>E-mail</Text>
                        <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isEmailFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"E-mail"} onFocus={() =>{setIsEmailFocused(true)}} onBlur={() =>{setIsEmailFocused(false)}}></TextInput>
                        </View>
                      </View>
                      <View name="feild5">
                          <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Address</Text>
                        <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isAddressFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                           <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Address"} onFocus={() =>{setIsAddressFocused(true)}} onBlur={() =>{setIsAddressFocused(false)}}></TextInput>
                        </View>
                      </View>
                      <View name="feild6" style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <View style={{width:'40%'}}>
                           <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>IGst</Text>
                            <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isIGstFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                             <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"IGst"} onFocus={() =>{setIsIgstFocused(true)}} onBlur={() =>{setIsIgstFocused(false)}}></TextInput>
                            </View>
                           </View>
                           <View style={{width:'40%'}}>
                           <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Gst</Text>
                            <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isGstFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                             <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Gst"} onFocus={() =>{setIsGstFocused(true)}} onBlur={() =>{setIsGstFocused(false)}}></TextInput>
                            </View>
                           </View>
                      </View>

                      <View name="feild7" style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <View style={{width:'45%'}}>
                           <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Bill No</Text>
                            <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isBillNoFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                             <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Bill-no"} onFocus={() =>{setIsBillNoFocused(true)}} onBlur={() =>{setIsBillNoFocused(false)}}></TextInput>
                            </View>
                           </View>
                           <View style={{width:'45%'}}>
                           <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Invoice Amount</Text>
                            <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isInvoiceAmtFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                             <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Invoice Amount"} onFocus={() =>{setIsInvoiceAmtFocused(true)}} onBlur={() =>{setIsInvoiceAmtFocused(false)}}></TextInput>
                            </View>
                           </View>
                      </View>


                      <View name="feild8" style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <View style={{width:'45%'}}>
                           <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Invoice Date</Text>
                            <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isInvoiceDateFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                             <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Invoice Date"} onFocus={() =>{setIsInvoiceDateFocused(true)}} onBlur={() =>{setIsInvoiceDateFocused(false)}}></TextInput>
                            </View>
                           </View>
                           <View style={{width:'45%'}}>
                           <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Other Charges</Text>
                            <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isOtherChargesFocused?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                             <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Other Charges"} onFocus={() =>{setIsOtherChargesFocused(true)}} onBlur={() =>{setIsOtherChargesFocused(false)}}></TextInput>
                            </View>
                           </View>
                      </View>

                      <View name="feild8" style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <View style={{width:'50%'}}>
                           <Text style={{fontSize:12,color:COLORS.primary,paddingBottom:10}}>Total Amount</Text>
                            <View name="text-input-hldr" style={[{borderRadius:20,backgroundColor:"#E1ECF4",marginBottom:25},isTotalAmt?{borderColor:COLORS.primary,borderWidth:2}:""]}>
                             <TextInput style={{paddingHorizontal:10,paddingVertical:5,fontSize:13}} placeholder={"Total Amount"} onFocus={() =>{setIsTotalAmt(true)}} onBlur={() =>{setIsTotalAmt(false)}}></TextInput>
                            </View>
                           </View>
                     
                      </View>
                   </View>
                 </View>
          </ScrollView>
         </View>
     </View>
 )
}

const styles = StyleSheet.create({
   container :{
       flex:1,
       backgroundColor:"#E9E9E8"
   }
})

export default Billings;