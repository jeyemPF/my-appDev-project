import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, TouchableOpacity, Text, Platform,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import COLORS from '../src/COLORS';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Tab1Screen from './profile/Tab1Screen';
import Tab2Screen from './profile/Tab2Screen';
import Tab3Screen from './profile/Tab3Screen';
import styles from '../styles/ProfileScreenStyle';



const Tab = createMaterialTopTabNavigator();

const Profile = ({ navigation }) => {
  const handleIconClick = () => {
    // Define the logic for handling the icon click event here
  };

  return (
    <SafeAreaView style={[styles.mainContainer, {paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0},]}>

      <View style={styles.topNav}>
        <Image style={styles.logoImage} source={require('../assets/myLogo.png')} />
        <TouchableOpacity style={styles.iconHeaderSortBars} onPress={handleIconClick}>
          <Icon name="bars" size={22} color={'#A827FE'} />
        </TouchableOpacity>
      </View>
      <View style={styles.textHeader}>
        <View style={styles.textHeaderProfile}>
          <Text style={styles.nameText}>Grex Martinez</Text>
          <Text style={styles.emailText}>grexmartin@gmail.com</Text>
          <Text style={styles.customerText}>Customer</Text>
        </View>
        <Image source={require("../assets/man-header.png")} style={styles.headerImage} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <Tab.Navigator style={{marginTop: hp('3%'),}}
    
        screenOptions={{
          tabBarAndroidRipple: { borderless: false },
          tabBarStyle: { backgroundColor: COLORS.DARK_VIOLET,},
          tabBarIndicatorStyle: { backgroundColor: COLORS.LIGHT_VIOLET,},
          activeTintColo: COLORS.LIGHT_VIOLET, 
          tabBarStyle: {
            backgroundColor: COLORS.DARK_VIOLET,
            color: 'white'
          },
          tabBarLabelStyle: {color: 'white'},
         
          }}
      

      >
        <Tab.Screen name="Post" component={Tab1Screen} />
        <Tab.Screen name="Feedback" component={Tab2Screen} />
        <Tab.Screen name="Ratings" component={Tab3Screen} />
      </Tab.Navigator>
    </SafeAreaView>
    
  );
};



export default Profile;
