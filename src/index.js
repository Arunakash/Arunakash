import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Signin from ".././src/screens/auth/Signin";
import Registration from ".././src/screens/auth/Registration";
import Otp from "./screens/auth/Otp";
import HomeAdapter from "./screens/HomeAdapter";
import SideDrawer from "./Components/SideDrawerContent";
import EmptyCanRprt from "./screens/EmptyCanReport";
import AdvanceRprt from "./screens/AdvanceReport";
import CustomerWiseRprt from "./screens/CustomerWiseRprt";
import DamagesRprt from "./screens/DamagesReport";
import GstReport from "./screens/GstReport";
import PaymentReport from "./screens/PaymentReport";
import SalesReport from "./screens/SalesReport";
import StoreHistoryRprt from "./screens/StoreHistoryRprt";
import VendorRprt from "./screens/VendorReport";
import MyAccount from "./screens/SideDrawer/MyAccount";
import LoginDetails from "./screens/SideDrawer/LoginDetails";
import EmployeeDetails from "./screens/SideDrawer/EmployeeDetails";
import CreateEmployee from "./screens/SideDrawer/CreateEmployee";
import Gst from "./screens/SideDrawer/Gst";
import Product from "./screens/SideDrawer/Product";
import TermsCondition from "./screens/SideDrawer/Terms&condition";
import EditCustomerData from "./screens/EditCustomerData";


const Main = createStackNavigator();
// const Onboard = createStackNavigator();
const Auth = createStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        swipeEnabled: true,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
      }}
    >
      <Auth.Screen
        name="login"
        options={{ headerShown: false }}
        component={Signin}
      />
      <Auth.Screen
        name="registartion"
        options={{ headerShown: false }}
        component={Registration}
      />
      <Auth.Screen
        name="otp"
        options={{ headerShown: false }}
        component={Otp}
      />
    </Auth.Navigator>
  );
}

const DrawerContainer = () => {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="HomeAdapter" component={HomeAdapter} />
      <Main.Screen name="EmptyCanRprt" component={EmptyCanRprt} />
      <Main.Screen name="DamagesRprt" component={DamagesRprt} />
      <Main.Screen name="GstReport" component={GstReport} />
      <Main.Screen name="CustomerWiseRprt" component={CustomerWiseRprt} />
      <Main.Screen name="VendorRprt" component={VendorRprt} />
      <Main.Screen name="AdvanceRprt" component={AdvanceRprt} />
      <Main.Screen name="StoreHistoryRprt" component={StoreHistoryRprt} />
      <Main.Screen name="SalesReport" component={SalesReport} />
      <Main.Screen name="PaymentReport" component={PaymentReport} />
      <Main.Screen name="MyAccount" component={MyAccount} />
      <Main.Screen name="LoginDetails" component={LoginDetails} />
      <Main.Screen name="EmployeeDetails" component={EmployeeDetails} />
      <Main.Screen name="CreateEmployee" component={CreateEmployee} />
      <Main.Screen name="Gst" component={Gst} />
      <Main.Screen name="Product" component={Product} />
      <Main.Screen name="TermsCondition" component={TermsCondition} />
    </Main.Navigator>
  );
};

const DrawerRoot = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"DrawerContainer"}
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <SideDrawer {...props} />}
    >
      <Drawer.Screen name="DrawerContainer" component={DrawerContainer} />
    </Drawer.Navigator>
  );
};

function MainStack() {
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName={"auth"}>
        <Main.Screen
          name="auth"
          options={{ headerShown: false }}
          component={AuthStack}
        />
        <Main.Screen
          name="DrawerRoot"
          options={{ headerShown: false }}
          component={DrawerRoot}
        />
        <Main.Screen name="EditCustomerData"  options={{ headerShown: false }} component={EditCustomerData}/>
      </Main.Navigator>
    </NavigationContainer>
  );
}
export default MainStack;
