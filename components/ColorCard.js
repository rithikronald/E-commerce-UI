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

export default function ColorCard(props) {
  return (
    <TouchableOpacity
      style={{
        width: 80,
        height: 80,
        backgroundColor: props.color,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: "2%",
        borderWidth: 1,
        borderColor: "#c1c1c1",
        elevation: 4,
      }}
    ></TouchableOpacity>
  );
}
