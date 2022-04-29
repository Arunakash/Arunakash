import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SmsRetriever from "react-native-sms-retriever";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import InnerHeader from "../../../Components/InnerHeader";
import COLORS from "../../../Components/COLORS";
export default function Registration({ navigation }) {
  const [phoneNumber, setNumber] = useState("");
  const [name, setName] = useState("");
  const [CompanyName, setCompany] = useState("");
  const [Gst, setGst] = useState("");
  const [email, setMail] = useState("");
  const [Address, setAddress] = useState("");
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
      <InnerHeader title={"Registration"} navigation={navigation} />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Registration</Text>
      </View>
      <ScrollView>
        <View style={{ marginTop: 50 }}>
          <View style={styles.btn}>
            <FontAwesome
              name="phone"
              size={20}
              color="black"
              style={styles.IconsStyle}
            />
            <TextInput
              placeholderTextColor="grey"
              style={styles.input}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setNumber}
            />
          </View>
          <View style={styles.btn}>
            <Ionicons
              name="person"
              size={20}
              color="black"
              style={styles.IconsStyle}
            />
            <TextInput
              placeholderTextColor="grey"
              style={styles.input}
              placeholder="Your Name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.btn}>
            <Ionicons
              name="mail"
              size={20}
              color="black"
              style={styles.IconsStyle}
            />
            <TextInput
              placeholderTextColor="grey"
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setMail}
            />
          </View>
          <View style={styles.btn}>
            <Ionicons
              name="business"
              size={20}
              color="black"
              style={styles.IconsStyle}
            />
            <TextInput
              placeholderTextColor="grey"
              style={styles.input}
              placeholder="Company Name"
              value={CompanyName}
              onChangeText={setCompany}
            />
          </View>
          <View style={styles.btn}>
            <Ionicons
              name="card"
              size={20}
              color="black"
              style={styles.IconsStyle}
            />
            <TextInput
              placeholderTextColor="grey"
              style={styles.input}
              placeholder="GST/Company Register Number"
              value={Gst}
              onChangeText={setGst}
            />
          </View>
          <View style={styles.btn}>
            <Ionicons
              name="location"
              size={20}
              color="black"
              style={styles.IconsStyle}
            />
            <TextInput
              placeholderTextColor="grey"
              style={styles.input}
              placeholder=" CompanyAddress"
              value={Address}
              onChangeText={setAddress}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.SubmitBtn}
          onPress={() => {
            navigation.replace("otp");
          }}
        >
          <Text style={styles.submitText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input2: {
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
  input: {
    width: "90%",
    fontSize: 14,
    paddingVertical: 15,
    marginHorizontal: 0,
    paddingHorizontal: 22,
    // backgroundColor: "#F5F5F5",
  },
  SubmitBtn: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    marginTop: 20,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
  },
  btn: {
    width: "90%",
    height: 60,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  IconsStyle: {
    paddingVertical: 10,
    paddingLeft: 10,
    top: 10,
  },
});
