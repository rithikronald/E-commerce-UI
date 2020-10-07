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
import { Icon, Avatar } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-elements";
import ImageThumb from "./components/ImageThumb";
import OptionCard from "./components/OptionCard";
import SizeCard from "./components/SizeCard";
import ColorCard from "./components/ColorCard";
import SuggestionCard from "./components/SuggestionCard";

export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fafaf8" }}>
      <StatusBar style="auto" />
      <View style={{ width: "100%", height: 500 }}>
        <ImageBackground
          style={{
            width: "100%",
            height: "100%",
          }}
          borderRadius={15}
          source={require("./assets/pic_3.jpg")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              marginTop: "12%",
              paddingHorizontal: "3%",
            }}
          >
            <Icon name="arrow-back" size={30} style={{}} color="#475e88"></Icon>
            <Text
              style={{
                fontSize: 30,
                marginHorizontal: "16%",
                fontWeight: "bold",
                fontFamily: "monospace",
                color: "#475e88",
              }}
            >
              Headphones
            </Text>
            <Icon
              name="shopping-cart"
              type="font-awesome-5"
              size={25}
              style={{}}
              color="#475e88"
            ></Icon>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 1, marginVertical: "2%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <ImageThumb pic={require("./assets/pic_2.jpg")} />
          <ImageThumb pic={require("./assets/pic_1.jpg")} />
          <ImageThumb pic={require("./assets/pic_3.jpg")} />
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 25,
            fontFamily: "monospace",
            fontWeight: "700",
            marginVertical: "2%",
            color: "#475e88",
          }}
        >
          Sony Headphones ‎WI-C400
        </Text>
        <Text
          style={{
            alignSelf: "center",
            marginHorizontal: "10%",
            fontFamily: "monospace",
            textAlign: "center",
            color: "#475e88",
          }}
        >
          Digital Noise Cancelling with HD Noise Cancelling Processor QN1 and
          Dual Noise Sensor Technology.
        </Text>
      </View>
      <ScrollView
        style={{
          padding: "3%",
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <OptionCard text="24 hours Delivery" />
        <OptionCard text="Free Delivery" />
        <OptionCard text="10% Discount" />
      </ScrollView>
      <View style={{ flex: 1, margin: "2%" }}>
        <Text
          style={{
            fontFamily: "monospace",
            fontSize: 22,
            fontWeight: "700",
            color: "#475e88",
          }}
        >
          Product Review
        </Text>
        <View style={{ flexDirection: "row", margin: "2%" }}>
          <AirbnbRating
            showRating={false}
            count={5}
            reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
            defaultRating={3}
            size={20}
            starContainerStyle={{
              alignSelf: "flex-start",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginLeft: "2%",
              color: "#fea123",
              marginTop: "2%",
            }}
          >
            3.2
          </Text>
          <View style={{ flexDirection: "row", marginLeft: "23%" }}>
            <Avatar
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
              size={40}
            />
            <Avatar
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
              }}
              size={40}
            />
            <Avatar
              rounded
              title="+28"
              size={40}
              avatarStyle={{ right: 5 }}
              titleStyle={{ color: "#fea123" }}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 1, margin: "2%" }}>
        <Text
          style={{
            fontFamily: "monospace",
            fontSize: 22,
            fontWeight: "700",
            color: "#475e88",
          }}
        >
          Size
        </Text>
        <View style={{ flexDirection: "row" }}>
          <SizeCard size="S" />
          <SizeCard size="M" />
          <SizeCard size="L" />
          <SizeCard size="XL" />
          <SizeCard size="2XL" />
        </View>
      </View>
      <View style={{ flex: 1, margin: "2%" }}>
        <Text
          style={{
            fontFamily: "monospace",
            fontSize: 22,
            fontWeight: "700",
            color: "#475e88",
          }}
        >
          Color
        </Text>
        <View style={{ flexDirection: "row" }}>
          <ColorCard color="#856657" />
          <ColorCard color="#c1905d" />
          <ColorCard color="#856657" />
        </View>
      </View>
      <View style={{ flex: 1, margin: "2%" }}>
        <Text
          style={{
            fontFamily: "monospace",
            fontSize: 22,
            fontWeight: "700",
            color: "#475e88",
          }}
        >
          You may also like this
        </Text>
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </View>
    </ScrollView>
  );
}
