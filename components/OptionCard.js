import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

export default function OptionCard(props) {
  return (
    <View
      style={{
        width: 180,
        borderRadius: 18,
        height: 70,
        flexDirection: "row",
        borderRadius: 20,
        borderColor: "#c1c1c1",
        marginHorizontal: 6,
        padding: 3,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          width: 60,
          height: 60,
          elevation: 1,
        }}
      >
        <Icon
          name="shopping-cart"
          type="font-awesome-5"
          size={25}
          style={{
            borderRadius: 10,
            margin: 8,
          }}
          color="#699cf9"
        ></Icon>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "monospace",
            color: "#475e88",
            fontWeight: "bold",
            margin: "3%",
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
}
