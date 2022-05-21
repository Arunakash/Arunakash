import React, { Component, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ReportScrnsHeader from "../../Components/ReportScrnsHeader";
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
  Foundation,
  FontAwesome,
  Octicons,
} from "@expo/vector-icons";
import COLORS from "../../Components/COLORS";
import { RadioButton } from "react-native-paper";

const TermsCondition = (props) => {
  const [AdminId, setId] = useState("");
  const [Password, setPwd] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [checked, setChecked] = React.useState("first");

  return (
    <View style={{ flex: 1 }}>
      <ReportScrnsHeader
        name={"Terms & Conditions"}
        navigation={props.navigation}
      ></ReportScrnsHeader>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent: "space-between",
          }}
        ></View>
        <ScrollView style={{ marginBottom: 200 }}>
          <View style={{ paddingHorizontal: 15 }}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TermsCondition;
const styles = StyleSheet.create({
  inputBox: {
    paddingVertical: 10,
    fontSize: 16,
    width: "30%",
  },
  input: {
    width: "68%",
    fontSize: 14,
    paddingVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 12,
    // backgroundColor: "#F5F5F5",
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginBottom: 10,
  },
  RadioBtnBox: {
    flexDirection: "row",

    marginVertical: 5,
  },
  innerBox: {
    flexDirection: "row",
    marginRight: 10,
  },
  RadioTextBox: {
    paddingTop: 8,
  },
  SubmitBtn: {
    width: 100,
    height: 40,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
  },
});
