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

const MyAccount = (props) => {
  const [AdminName, setName] = useState("");
  const [ComapnyName, setComName] = useState("");
  const [PhoneNo, setNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Gst, setGst] = useState("");
  const [checked, setChecked] = React.useState("second");
  const [isEdit, setEdit] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ReportScrnsHeader
        name={"MyAccount"}
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
            <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 5 }}>
              My Account
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 20,
            }}
          >
            {!isEdit ? (
              <TouchableOpacity
                style={styles.SubmitBtn}
                onPress={() => setEdit(true)}
              >
                <Text
                  style={{ color: "#fff", paddingVertical: 10, fontSize: 16 }}
                >
                  Edit
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.SubmitBtn}
                onPress={() => setEdit(false)}
              >
                <Text
                  style={{ color: "#fff", paddingVertical: 10, fontSize: 16 }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <ScrollView style={{ marginBottom: 200 }}>
          <View style={{ paddingHorizontal: 15, alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="Admin Name"
                value={AdminName}
                editable={isEdit}
                onChangeText={setName}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="Company Name"
                value={ComapnyName}
                editable={isEdit}
                onChangeText={setComName}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="GST"
                value={Gst}
                editable={isEdit}
                onChangeText={setGst}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="Phone Number"
                value={PhoneNo}
                onChangeText={setNumber}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="Email"
                value={Email}
                editable={isEdit}
                onChangeText={setEmail}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="UPI Id"
                value={ComapnyName}
                editable={isEdit}
                onChangeText={setComName}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="Address"
                value={Address}
                editable={isEdit}
                onChangeText={setAddress}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                  <View style={styles.RadioTextBox}>
                    <Text>GST</Text>
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
                    <Text>Non-GST</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MyAccount;
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
