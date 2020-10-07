import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";

export default function ImageThumb(props) {
  return (
    <Image
      style={{
        width: 80,
        height: 80,
        borderRadius: 30,
        marginHorizontal: 8,
        borderWidth: 3,
        borderColor: "#fff",
      }}
      source={props.pic}
    />
  );
}
