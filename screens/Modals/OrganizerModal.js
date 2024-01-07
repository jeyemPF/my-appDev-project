import React from "react";
import { View, Text, TouchableOpacity, Modal, Image, SafeAreaView } from "react-native";
import { Rating } from "react-native-ratings";
import COLORS from "../../src/COLORS";

const OrganizerModal = ({ isVisible, closeModal, person }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.DARK_VIOLET   }}>
      <Image
              source={person && person.event ? person.event.image : null}
              style={{ width:  '100%', height: '55%',  backgroundColor: COLORS.DARK_VIOLET, top: 130, opacity: 0.6}} // Adjusted borderRadius
            />
        <View
          style={{
            backgroundColor: 'white',
          
            borderRadius: 10,
            width: "100%",
            height: "100%",
            borderTopEndRadius: 30, borderTopStartRadius: 30,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          
       
            {/* <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
              {person?.name}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
              {person?.position}
              </Text>
            {person && person.ratings && (
              <View style={{backgroundColor: 'green', justifyContent: 'center'}}>
                <Text style={{ color: "white  " }}></Text>
                <Rating
                  type="star"
                  startingValue={person.ratings}
                  imageSize={15}
                  readonly
                  tintColor={COLORS.DARK_VIOLET}
                />
              </View>
            )} */}
          
           

            <Text style={{ fontSize: 30, fontWeight: 800, marginBottom: 10, bottom: 40 , color: 'white'}}>
              {person?.event?.name}
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>About</Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              {person?.event?.description}
            </Text>

         
            
            <TouchableOpacity style={{ marginTop: 20 }} onPress={closeModal}>
              <Text style={{ color: "blue" }}>Close</Text>
            </TouchableOpacity>
          </View>
  
      </SafeAreaView>
    </Modal>
  );
};

export default OrganizerModal;