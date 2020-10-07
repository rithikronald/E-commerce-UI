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

export default function SuggestionCard() {
  return (
    <View
      style={{
        width: "94%",
        height: 140,
        borderRadius: 20,
        elevation: 8,
        marginVertical: "2%",
        backgroundColor: "#fff",
        alignSelf: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "3%",
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 30,
          margin: "2%",
        }}
        source={require("../assets/pic_1.jpg")}
      />
      <View style={{ flex: 1, margin: "2%" }}>
        <Text
          style={{
            fontFamily: "monospace",
            fontSize: 20,
            fontWeight: "700",
            flexWrap: "wrap",
          }}
        >
          Wireless Earphone
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#0851e8",
              fontFamily: "monospace",
            }}
          >
            $20.9
          </Text>
          <View style={{ flexDirection: "row", marginLeft: "50%" }}>
            <Icon name="star" size={18} color="#fea123" />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "#fea123",
                fontFamily: "monospace",
              }}
            >
              4.2
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "monospace",
            fontSize: 15,
            flexWrap: "wrap",
          }}
        >
          Wireless Earphone is a eiwjfow dsjfkd aksdoj sjodajsk
        </Text>
      </View>
    </View>
  );
}
