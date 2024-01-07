import React from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from "../../src/COLORS";
import { useNavigation } from '@react-navigation/native';

const PersonScreen = ({ route }) => {
  const { person } = route.params;
  const navigation = useNavigation();
  

  const handleIconClick = () => {
    navigation.goBack();
  };

  
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", backgroundColor: COLORS.DARK_VIOLET }}>
      <View style={{  borderBottomWidth: 0.3, borderBottomColor: COLORS.BORDER_LINE, }}> 
        <View style={{flexDirection: 'row', alignItems: 'center', left: 30, marginTop: 10, paddingBottom: 10}}>
          <View style={{flexDirection: 'row', gap: 20, alignItems: 'center' }}>
            <TouchableOpacity style={{}} onPress={handleIconClick}>
              <Icon name="angle-left" size={40} color={'#A827FE'} />
            </TouchableOpacity>
          
            <Image source={person.image} style={{ width: 33, height: 33, borderRadius: 50 }} />
          </View>
          <View style={{flexDirection: 'column', left: 10, gap:3}}>
            <Text style={{color: '#ddd', fontWeight: 'bold', fontSize: 16 }}>{person.name}</Text>
            <Text style={{color: 'gray', fontSize: 13, }}>{person.status}</Text>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop:20, gap: 8}}>
      <Image source={person.image} style={{ width: 90, height: 90, borderRadius: 50 }} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#ddd', fontWeight: 'bold', fontSize: 18 }}>{person.name}</Text>
        <Text style={{color: 'gray',  fontSize: 16 }}>{person.email}</Text>
        <Text style={{color: 'gray', fontSize: 16 }}>{person.customers}</Text>
      </View>

    
      </View>
    </SafeAreaView>
  );
};

export default PersonScreen;
