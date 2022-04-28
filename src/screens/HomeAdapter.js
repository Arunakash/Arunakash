import React,{Component} from 'react'; 
import {View,Text,StyleSheet} from 'react-native';
import Home from '../Components/Home';
import Billngs from '../Components/Billing';
import Customer from '../Components/Customer';
import Expenses from '../Components/Expenses';
import Reports from '../Components/Reports';
import {FontAwesome,Foundation,AntDesign,FontAwesome5,Octicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HomeAdapter = () =>{
 return(
    <Tab.Navigator  screenOptions={{ headerShown: false }} initialRouteName= {"Home"} shifting={false} activeColor="#031969" labeled={true} barStyle={{ backgroundColor: 'white'}} >
            <Tab.Screen name ="Home" component = {Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color}) => (
                <Foundation name="home" size={24} color={color} />
              ),
            }}
      /> 
          <Tab.Screen name ="customer" component = {Customer}
            options={{
              tabBarLabel: 'customer',
              tabBarIcon: ({ color,}) => (
                <FontAwesome name="user-circle-o" size={24} color={color}  />
              ),
            }}
      /> 
                 <Tab.Screen name ="Billing" component = {Billngs}
            options={{
              tabBarLabel: 'Billings',
              tabBarIcon: ({ color,}) => (
                <AntDesign name="creditcard" size={24} color={color}  />
              ),
            }}
      /> 
                 <Tab.Screen name ="Expenses" component = {Expenses}
            options={{
              tabBarLabel: 'Expenses',
              tabBarIcon: ({ color,}) => (
                <FontAwesome5 name="money-bill-wave" size={23} color={color}  />
              ),
            }}
      /> 
                 <Tab.Screen name ="Reports" component = {Reports}
            options={{
              tabBarLabel: 'Reports',
              tabBarIcon: ({ color,}) => (
                <Octicons name="report" size={24} color={color}  />
              ),
            }}
      /> 
    </Tab.Navigator>
 )
}

const styles = StyleSheet.create({
   container :{
       flex:1
   }
})

export default HomeAdapter;