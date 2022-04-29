import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import SmsRetriever from "react-native-sms-retriever";
import COLORS from "../../../Components/COLORS.js";
import { RadioButton } from "react-native-paper";
import Images from "../../../Assets/constants.js";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Signin({ navigation }) {
  const [phoneNumber, setNumber] = useState("");
  const [password, setPwd] = useState("");
  const [checked, setChecked] = React.useState("first");
  useEffect(() => {
    _onPhoneNumberPressed();
  }, []);
  const _onPhoneNumberPressed = async () => {
    try {
      const phoneNumber = await SmsRetriever.requestPhoneNumber();
      setNumber(phoneNumber);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.SubContainer}>
        <View>
          <Image source={Images.Logo1} style={styles.logo} />
        </View>
        <TextInput
          placeholderTextColor="grey"
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setNumber}
        />
        <TextInput
          placeholderTextColor="grey"
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPwd}
        />

        {/* <View style={styles.btn}></View> */}
      </View>
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

      <TouchableOpacity
        style={styles.SubmitBtn}
        onPress={() => {
          navigation.replace("DrawerRoot");
        }}
      >
        <Text style={styles.submitText}>Signin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center", marginVertical: 30 }}>
        <Text style={{ color: "#000", fontSize: 16 }}>Forgot Password</Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 16 }}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("registartion");
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.primary }}>Signup</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // alignItems: "center",
    // justifyContent: "center",
  },
  SubContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  btn: {
    width: "90%",
    height: 50,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  logo: {
    // resizeMode: 'contain',
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  phoneNo: {
    fontSize: 18,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    fontSize: 14,
    paddingVertical: 15,
    marginHorizontal: 20,
    paddingHorizontal: 22,
    // backgroundColor: "#F5F5F5",
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginBottom: 20,
  },
  RadioBtnBox: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
  innerBox: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  RadioTextBox: {
    paddingTop: 8,
  },
  SubmitBtn: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    marginTop: 30,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
  },
});
