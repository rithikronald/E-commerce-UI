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

export default function SizeCard(props) {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        margin: "2%",
        elevation: 4,
      }}
    >
      <Text style={{ fontSize: 22 }}>{props.size}</Text>
    </TouchableOpacity>
  );
}
