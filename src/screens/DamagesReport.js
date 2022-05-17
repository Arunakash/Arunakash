import React, { Component } from "react";
import { View, Text } from "react-native";
import ReportScrnsHeader from "../Components/ReportScrnsHeader";

const DamagesRprt = (props) => {
  const countVal = 32;
  return (
    <View style={{ flex: 1 }}>
      <ReportScrnsHeader
        name={"Damages Report"}
        navigation={props.navigation}
        label={"Total DMG Count :"}
        countValue={countVal}
      ></ReportScrnsHeader>
    </View>
  );
};

export default DamagesRprt;
