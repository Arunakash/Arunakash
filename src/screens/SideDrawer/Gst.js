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

const Gst = (props) => {
  const [AdminId, setId] = useState("");
  const [Password, setPwd] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [checked, setChecked] = React.useState("first");

  return (
    <View style={{ flex: 1 }}>
      <ReportScrnsHeader
        name={"Gst"}
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
              GST Menu
            </Text>
          </View>
          {isEdit ? (
            <TouchableOpacity
              style={styles.SubmitBtn}
              onPress={() => {
                setEdit(false);
              }}
            >
              <Text
                style={{ color: "#fff", paddingVertical: 10, fontSize: 16 }}
              >
                Save
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.SubmitBtn}
              onPress={() => {
                setEdit(true);
              }}
            >
              <Text
                style={{ color: "#fff", paddingVertical: 10, fontSize: 16 }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView style={{ marginBottom: 200 }}>
          <View style={{ paddingHorizontal: 15 }}>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.inputBox}>GST :</Text>
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
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.inputBox}>GSt No/Reg No :</Text>
              <TextInput
                placeholderTextColor="grey"
                style={styles.input}
                placeholder="Gst No"
                value={AdminId}
                onChangeText={setId}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Gst;
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
