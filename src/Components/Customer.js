import React,{Component} from 'react'; 
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons,AntDesign} from "@expo/vector-icons";
import Header from './Header';
import COLORS from "../Components/COLORS";

const Customer = (props) =>{
    const listData = [{ name: "Arun", count: 20 },{ name: "Kumar", count: 10 },{ name: "Ramesh", count: 15 },{ name: "Prabhu", count: 23 },{ name: "Logesh", count: 20 },{ name: "Kanan", count: 20 },{ name: "Karun Kumar", count: 2 },{ name: "Muhamad sahib", count: 12 },{ name: "Janani", count: 21 }, { name: "Raghavi", count: 13 },];
 
    const renderItem = ({ item, index }) => {
        return (
          <View
            name="table-row"
            style={[
              {
                flexDirection: "row",
                borderBottomColor: "grey",
                borderBottomWidth: 0.5,
              },
              index % 2 === 0 ? { backgroundColor: "#E1ECF4" } : {},
            ]}
          >
            <View
              style={{
                flex: 5.5,
                flexDirection: "row",
                paddingVertical: 15,
                alignItems: "center",
              }}
              name="customerNameBox"
            >
              <View name="icon-hldr" style={{ paddingLeft: 10 }}>
                <Ionicons name="person-circle" size={30} color={COLORS.primary}/>
              </View>
              <View name="namePhoneNum-hldr" style={{ paddingLeft: 5 }}>
                <Text style={{ fontSize: 13, paddingBottom: 5 }}>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome
                    name="phone"
                    size={12}
                    color={COLORS.sideDrawerIconClr}
                  />
                  <Text style={{ fontSize: 12, paddingLeft: 3 }}>
                    +91 9076897678
                  </Text>
                </View>
              </View>
            </View>
          
            <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }} name="DueValbOX">
            <MaterialCommunityIcons name="pencil-circle-outline" size={24} color={COLORS.primary} onPress={() =>{props.navigation.navigate("EditCustomerData")}}/>
              {/* <Text>{item.count}</Text> */}
            </View>
          </View>
        );
      };


    return(
     <View style={{flex:1}}>
         <Header name={"Customer"} navigation={props.navigation}></Header>
         <View style={styles.container}>
         <View name="table-body">
            <FlatList
              contentContainerStyle={{ paddingBottom: 165, flexGrow: 1,paddingTop:20 }}
              nestedScrollEnabled={false}
              data={listData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={{position:'absolute',bottom:30,right:25}}>
                <View name={"Add-btn-ldr"} style={{paddingBottom:8}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.primary,borderRadius:50,height:45,width:45}}>
                       <Text style={{color:"#fff",paddingRight:3}}>+</Text>
                      <Text style={{fontSize:12,color:"#fff"}}>Add</Text>
                    </View>
                </View>
                <View name={"contact-book-btn-hldr"} style={{paddingBottom:8}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.primary,borderRadius:50,height:45,width:45}}>
                    <AntDesign name="contacts" size={18} color="#fff" />
                </View>
                </View>
                <View name={"Add-contact-btn-hldr"}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.primary,borderRadius:50,height:45,width:45}}>
                <Ionicons name="person-add-outline" size={18} color="#fff" />
                </View>
                </View>
            </View>
          </View>
         </View>
     </View>
 )
}

const styles = StyleSheet.create({
   container :{
       flex:1,
       backgroundColor:"#E9E9E8"
   },
   dateTxtHldr: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    elevation: 5,
    zIndex: 1000,
  },
})


export default Customer;