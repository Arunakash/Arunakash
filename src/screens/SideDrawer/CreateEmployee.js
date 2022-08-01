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

const CreateEmployee = (props) => {
  const [AdminId, setId] = useState("");
  const [Password, setPwd] = useState("");
  const [isChange, setChange] = useState(false);
  const [checked, setChecked] = React.useState("second");

  return (
    <View style={{ flex: 1 }}>
      <ReportScrnsHeader
        name={"Create Employee"}
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
        >
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 30,
            }}
          >
            <MaterialCommunityIcons
              name="account-arrow-right"
              size={28}
              color={COLORS.sideDrawerIconClr}
            />
            {/* <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 5 }}>
              Create Employee
            </Text> */}
          </View>
        </View>
        <ScrollView style={{ marginBottom: 200 }}>
          <View style={{ paddingHorizontal: 15, alignItems: "center" }}>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              {/* <Text style={styles.inputBox}>Login By :</Text> */}
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                  <View style={styles.RadioTextBox}>
                    <Text>Admin</Text>
                  </View>
                </View>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="second"
                    color={COLORS.primary}
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                  <View style={styles.RadioTextBox}>
                    <Text>Delivery Boy</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              {/* <Text style={styles.inputBox}>
                {checked === "second" ? "Employee Name" : "Name"}
              </Text> */}
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder={checked === "second" ? "Employee Name" : "Name"}
                value={AdminId}
                onChangeText={setId}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              {/* <Text style={styles.inputBox}>Phone No :</Text> */}
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="Phone No"
                value={Password}
                onChangeText={setPwd}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              {/* <Text style={styles.inputBox}>Alternative Phone No :</Text> */}
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="Alternative Phone No"
                value={Password}
                onChangeText={setPwd}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              {/* <Text style={styles.inputBox}>Id No :</Text> */}
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="Id Proof No"
                value={Password}
                onChangeText={setPwd}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.SubmitBtn}
            onPress={() => {
              props.navigation.navigate("EmployeeDetails");
            }}
          >
            <Text style={{ color: "#fff", paddingVertical: 10, fontSize: 16 }}>
              Save
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreateEmployee;
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
    marginTop: 40,
  },
});
