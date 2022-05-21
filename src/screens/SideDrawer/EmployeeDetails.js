import React, { Component, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
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

const EmployeeDetails = (props) => {
  const [AdminId, setId] = useState("");
  const [Password, setPwd] = useState("");
  const [isChange, setChange] = useState(false);
  const [employeeList, setList] = useState([
    { name: "Ramesh", Phone: "123456789" },
    { name: "Divya", Phone: "123456789" },
    { name: "Suresh", Phone: "123456789" },
    { name: "Uma", Phone: "123456789" },
    { name: "Kannan", Phone: "123456789" },
    { name: "Vijay", Phone: "123456789" },
  ]);
  return (
    <View style={{ flex: 1 }}>
      <ReportScrnsHeader
        name={"Employee Details"}
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
              Employee Details
            </Text>
          </View>
          <TouchableOpacity
            style={styles.SubmitBtn}
            onPress={() => {
              props.navigation.navigate("CreateEmployee");
            }}
          >
            <Text style={{ color: "#fff", paddingVertical: 10, fontSize: 16 }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ marginBottom: 200 }}>
          <View>
            <FlatList
              data={employeeList}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 20,
                      marginBottom: 20,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="account-arrow-right"
                      size={28}
                      color={COLORS.sideDrawerIconClr}
                    />
                    <View style={{ paddingHorizontal: 20 }}>
                      <Text style={{ fontSize: 15 }}>{item.name}</Text>
                      <Text style={{ fontSize: 15 }}>{item.Phone}</Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
              style={styles.searchResultsContainer}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default EmployeeDetails;
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
