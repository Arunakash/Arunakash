import React, { Component } from "react";
import { View, Text } from "react-native";
import ReportScrnsHeader from "../../Components/ReportScrnsHeader";

const MyAccount = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ReportScrnsHeader
        name={"MyAccount"}
        navigation={props.navigation}
      ></ReportScrnsHeader>
      <View>
        <View>
          <Text>Login Details</Text>
        </View>
      </View>
    </View>
  );
};

export default MyAccount;
