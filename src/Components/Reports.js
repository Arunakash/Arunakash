import React,{Component} from 'react'; 
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {AntDesign} from '@expo/vector-icons';
import Header from './Header';
import COLORS from "./COLORS";
import { TouchableRipple } from 'react-native-paper';

const Reports = (props) =>{
 return(
     <View style={{flex:1}}>
         <Header name={"Reports"} navigation={props.navigation}></Header>
         <View style={styles.container}>
             <ScrollView>
                <View style={{ paddingVertical: 20 }}>
            
                    <View style={styles.listView}>
                    <TouchableRipple onPress={() =>{props.navigation.navigate("EmptyCanRprt")}} borderless={true} style={{borderRadius:10}}>
                      <View style={{borderRadius:10,paddingVertical:8}}>
                         <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                             <View style={{flex:3}}>
                               <Text style={styles.listViewTxt}>Empty Can Report</Text>
                             </View>

                             <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                               <AntDesign name="arrowright" size={24} color={COLORS.primary} />
                             </View>
                         </View>
                      </View>
                    </TouchableRipple>
                 </View>
  
                 <View style={styles.listView}>
                  <TouchableRipple onPress={() =>{props.navigation.navigate("DamagesRprt")}} borderless={true} style={{borderRadius:10}}>
                      <View style={{borderRadius:10,paddingVertical:8}}>
                         <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                             <View style={{flex:3}}>
                              <Text style={styles.listViewTxt}>Damages Report</Text>
                             </View>

                             <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                              <AntDesign name="arrowright" size={24} color={COLORS.primary} />
                             </View>
                         </View>
                      </View>
                  </TouchableRipple> 
                 </View>
       


    
                 <View style={styles.listView}>
                 <TouchableRipple onPress={() =>{props.navigation.navigate("GstReport")}} borderless={true} style={{borderRadius:10}}>
                      <View style={{borderRadius:10,paddingVertical:8}}>
                         <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                           <View style={{flex:3}}>
                             <Text style={styles.listViewTxt}>GST Report</Text>
                         </View>

                          <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                            <AntDesign name="arrowright" size={24} color={COLORS.primary} />
                         </View>
                     </View>
                     </View>
                 </TouchableRipple>
                 </View>
           

         
                 <View style={styles.listView}>
                   <TouchableRipple onPress={() =>{props.navigation.navigate("CustomerViceRprt")}} borderless={true} style={{borderRadius:10}}>
                      <View style={{borderRadius:10,paddingVertical:8}}>
                         <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                           <View style={{flex:3}}>
                             <Text style={styles.listViewTxt}>Customer Vise Report</Text>
                         </View>

                          <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                            <AntDesign name="arrowright" size={24} color={COLORS.primary} />
                         </View>
                        </View>
                      </View>
                    </TouchableRipple>
                 </View>
         

                 <View style={styles.listView}>
                 <TouchableRipple onPress={() =>{props.navigation.navigate("VendorRprt")}} borderless={true} style={{borderRadius:10}}>
                        <View style={{borderRadius:10,paddingVertical:8}}>
                         <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                           <View style={{flex:3}}>
                             <Text style={styles.listViewTxt}>Vendor Report</Text>
                         </View>

                          <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                            <AntDesign name="arrowright" size={24} color={COLORS.primary} />
                         </View>
                      </View>
                      </View>
                </TouchableRipple>
                 </View>

           
                 <View style={styles.listView}>
                 <TouchableRipple onPress={() =>{props.navigation.navigate("AdvanceRprt")}} borderless={true} style={{borderRadius:10}}>
                        <View style={{borderRadius:10,paddingVertical:8}}>
                         <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                           <View style={{flex:3}}>
                             <Text style={styles.listViewTxt}>Advance Report</Text>
                         </View>

                          <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                            <AntDesign name="arrowright" size={24} color={COLORS.primary} />
                         </View>
                       </View>
                      </View>
                    </TouchableRipple>
                 </View>
           

         
                 <View style={styles.listView}>
                     <TouchableRipple onPress={() =>{props.navigation.navigate("StoreHistoryRprt")}} borderless={true} style={{borderRadius:10}}>
                        <View style={{borderRadius:10,paddingVertical:8}}>
                           <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                           <View style={{flex:3}}>
                             <Text style={styles.listViewTxt}>Store History Report</Text>
                          </View>

                           <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                            <AntDesign name="arrowright" size={24} color={COLORS.primary} />
                          </View>
                        </View>
                     </View>
                    </TouchableRipple>
                 </View>

            
                 <View style={styles.listView}>
                   <TouchableRipple onPress={() =>{props.navigation.navigate("SalesReport")}} borderless={true} style={{borderRadius:10}}>
                   <View style={{borderRadius:10,paddingVertical:8}}>
                         <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                           <View style={{flex:3}}>
                             <Text style={styles.listViewTxt}>Sales Report</Text>
                         </View>

                          <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                            <AntDesign name="arrowright" size={24} color={COLORS.primary} />
                         </View>
                    </View>
                    </View>
                    </TouchableRipple>
                 </View>
         

                 <View style={styles.listView}>
                 <TouchableRipple onPress={() =>{props.navigation.navigate("PaymentReport")}} borderless={true} style={{borderRadius:10}}>
                      <View style={{borderRadius:10,paddingVertical:8}}>
                         <View style={{ flexDirection: "row", paddingHorizontal: 25,alignItems:'center'}}>
                           <View style={{flex:3}}>
                             <Text style={styles.listViewTxt}>Payment Report</Text>
                         </View>

                          <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                            <AntDesign name="arrowright" size={24} color={COLORS.primary} />
                         </View>
                         </View>
                    </View>
            </TouchableRipple>
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
   },
   listView: {
    backgroundColor: "#fff",

    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 8,
    zIndex: 1000,
    elevation: 4,
    flex:1
  },
  listViewTxt:{
    alignItems: "center",
    paddingVertical: 10,
    fontSize: 15
  },
  valueTxt:{
    textAlign: "center",
    paddingVertical: 5,
    color: "#fff"
  },
  textBtn: {
    height: 30,
    width: 60,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  
  },
   
})

export default Reports;