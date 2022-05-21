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

const Product = (props) => {
  const [AdminId, setId] = useState("");
  const [Password, setPwd] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [twentyltr, sertwen] = React.useState("first");
  const [emptycan, setempty] = React.useState("first");
  const [checked, setChecked] = React.useState("first");
  //   const [checked, setChecked] = React.useState("first");
  //   const [checked, setChecked] = React.useState("first");
  //   const [checked, setChecked] = React.useState("first");
  //   const [checked, setChecked] = React.useState("first");
  //   const [checked, setChecked] = React.useState("first");
  //   const [checked, setChecked] = React.useState("first");

  return (
    <View style={{ flex: 1 }}>
      <ReportScrnsHeader
        name={"Products"}
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
              Products
            </Text>
          </View>
        </View>
        <ScrollView style={{ marginBottom: 200 }}>
          <View style={{ paddingHorizontal: 15 }}>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.inputBox}>1. 20 ltr can :</Text>
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={twentyltr === "first" ? "checked" : "unchecked"}
                    onPress={() => sertwen("first")}
                  />
                </View>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="second"
                    color={COLORS.primary}
                    status={twentyltr === "second" ? "checked" : "unchecked"}
                    onPress={() => sertwen("second")}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.inputBox}>2. 20 ltr Emptycan :</Text>
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={emptycan === "first" ? "checked" : "unchecked"}
                    onPress={() => setempty("first")}
                  />
                </View>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="second"
                    color={COLORS.primary}
                    status={emptycan === "second" ? "checked" : "unchecked"}
                    onPress={() => setempty("second")}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.inputBox}>3. 200ml :</Text>
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                </View>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="second"
                    color={COLORS.primary}
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.inputBox}>4. 300ml :</Text>
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                </View>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="second"
                    color={COLORS.primary}
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.inputBox}>5. 500ml :</Text>
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                </View>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="second"
                    color={COLORS.primary}
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.inputBox}>6. 1 ltr :</Text>
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                </View>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="second"
                    color={COLORS.primary}
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.inputBox}>7. 2 ltrs :</Text>
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                </View>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="second"
                    color={COLORS.primary}
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.inputBox}>8. 5 ltrs :</Text>
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                </View>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="second"
                    color={COLORS.primary}
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.inputBox}>9. 10 ltrs :</Text>
              <View style={styles.RadioBtnBox}>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="first"
                    color={COLORS.primary}
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                </View>
                <View style={styles.innerBox}>
                  <RadioButton
                    value="second"
                    color={COLORS.primary}
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Product;
const styles = StyleSheet.create({
  inputBox: {
    paddingVertical: 10,
    fontSize: 16,
    width: "60%",
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
    marginRight: 30,
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
