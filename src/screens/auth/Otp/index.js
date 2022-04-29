import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import InnerHeader from "../../../Components/InnerHeader";
import COLORS from "../../../Components/COLORS";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
export default function Otp({ navigation }) {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 5;
  function validator(val) {
    let isEmpty = val.length === 5;
    return isEmpty;
  }

  return (
    <View style={styles.container}>
      <InnerHeader title={"Registration"} navigation={navigation} />
      <View style={{ marginTop: 60, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", paddingBottom: 5 }}>
          Enter the one-time password
        </Text>
        <Text style={{ fontSize: 14, color: "#aaa" }}>
          Enter the 5-digit password from the email you received
        </Text>
      </View>
      <ScrollView>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={(val) => {
            setValue(val);
            // if (val.length === 5) {
            //   onSubmit(val);
            // }
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Fragment key={index}>
              <View
                onLayout={getCellOnLayoutHandler(index)}
                style={[
                  styles.TextFIeld,
                  styles.cell,
                  isFocused && styles.focusCell,
                ]}
              >
                <Text key={`value-${index}`} style={[styles.otpText]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            </Fragment>
          )}
        />
        <TouchableOpacity
          style={[styles.ResendContainer]}
          onPress={() => ReSend()}
        >
          <View style={{}}>
            <Text style={{ textAlign: "center" }}> Resend OTP </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={styles.SubmitBtn}
        onPress={() => {
          navigation.replace("DrawerRoot");
        }}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  TextFIeld: {
    width: 50,
    height: 50,
    borderBottomColor: COLORS.dim,
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
  },

  otpText: {
    fontSize: 18,
    color: COLORS.placeholder,
    textAlign: "center",
  },
  codeFieldRoot: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  SubmitBtn: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    marginBottom: 100,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
  },

  IconsStyle: {
    paddingVertical: 10,
    paddingLeft: 10,
    top: 10,
  },
  ResendContainer: {
    marginVertical: 60,
  },
});
