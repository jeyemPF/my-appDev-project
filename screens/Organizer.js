import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";
import { SearchBar } from "@rneui/themed";


import styles from "../styles/OrganizersScreenStyle";
import COLORS from "../src/COLORS";
import PEOPLE from "../src/PEOPLE";
import OrganizerModal from "./Modals/OrganizerModal";

const Organizer = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const toggleModal = (item) => {
    setSelectedPerson(item);
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        marginBottom: 20,
        padding: 10,
        backgroundColor: COLORS.DARK_VIOLET,
        top: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.DARK_VIOLET,
          flexDirection: "row",
          gap: 15,
        }}
      >
        <Image source={item.image} style={{ width: 40, height: 40, borderRadius: 50 }} />

        <View style={{ backgroundColor: COLORS.DARK_VIOLET, paddingRight: "20%" }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: COLORS.DARK_VIOLET,
            }}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ color: "white", fontSize: 15 }}>{item.position}</Text>

            {item.ratings && (
              <View style={{}}>
                <Text style={{ color: "white" }}></Text>
                <Rating
                  type="star"
                  startingValue={item.ratings}
                  imageSize={15}
                  readonly
                  tintColor={COLORS.DARK_VIOLET}
                />
              </View>
            )}
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: COLORS.DARK_VIOLET }}>
        <TouchableOpacity style={styles.button} onPress={() => toggleModal(item)}>
          <Text style={styles.buttonText}>Service</Text>
        </TouchableOpacity>
      </View>
    </View>
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
        <Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>Organizers</Text>
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

        {/* Modal component */}
        <OrganizerModal isVisible={isModalVisible} closeModal={closeModal} person={selectedPerson} />
      </View>
    </SafeAreaView>
  );
};

export default Organizer;
