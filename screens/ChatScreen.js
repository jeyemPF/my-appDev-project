import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native";
import { SearchBar } from "@rneui/themed";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import COLORS from "../src/COLORS";
import PEOPLE from "../src/PEOPLE";
import styles from "../styles/HomeScreenStyles";
import PersonScreen from "./chatscreen/PersonScreen";

const Stack = createStackNavigator();

const ChatScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("PersonScreen", { person: item })}>
      <View
        style={{
          marginBottom: 20,
          padding: 5,
       
          top: 10,
          flexDirection: "row",
         marginRight: '40%'
        }}
      >
        <View
          style={{
         
            flexDirection: "row",
            gap: 15,
            justifyContent: 'start' , alignItems: 'center' 
          }}
        >
          <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 50 }} />

          <View style={{ backgroundColor: COLORS.DARK_VIOLET, paddingRight: "20%" }}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                backgroundColor: COLORS.DARK_VIOLET,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>{item.name}</Text>
              <Text style={{ color: "gray", fontSize: 13 }}>{item.status}</Text>
              
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#1B0A2A",
      }}
    >
      <View style={styles.mainContainer}>
        <Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>Chats</Text>
        <SearchBar
          ref={(search) => (this.search = search)}
          placeholder="Search"
          cancelButtonTitle="Cancel"
          cancelIcon={{ type: "material", name: "close", color: "#7B568B" }}
          clearIcon={{ type: "material", name: "clear", color: "#7B568B" }}
          containerStyle={{
            backgroundColor: COLORS.DARK_VIOLET,
            top: 5,
          }}
          inputContainerStyle={{
            height: 20,
            backgroundColor: "rgba(61, 25, 91, 0.8)",
          }}
          inputStyle={{ color: "white" }}
          leftIconContainerStyle={{ marginLeft: 10 }}
          lightTheme={false}
          loadingProps={{ color: "#7B568B" }}
          onClear={() => console.log("Cleared")}
          onKeyboardHide={() => console.log("Keyboard hidden")}
          platform="ios"
          rightIconContainerStyle={{ marginRight: 10 }}
          round={true}
          searchIcon={{ type: "material", name: "search", color: "#7B568B" }}
          showCancel={false}
          showLoading={false}
          cancelButtonProps={{ color: COLORS.LIGHT_VIOLET }}
        />

        <View style={{ flex: 1 }}>
          <FlatList
            data={Object.values(PEOPLE)}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ChatScreen;
