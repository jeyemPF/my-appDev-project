import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Verification({ navigation }) {
  const [verification, setVerification] = useState('');

  const handleNextPress = () => {
    navigation.navigate('HomePage');
  };

  return (

    <KeyboardAvoidingView
  behavior={Platform.OS === 'android' ? 'padding' : 'height'}
  style={styles.container}>
 <SafeAreaView>
   <Image source={require('../assets/myLogo.png')} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subtitle}>Use your Verification code</Text>

        <TextInput
            style={styles.loginInput}
            placeholder="Enter your Verification Address"
            placeholderTextColor="#B8B2BB"
            onChangeText={setVerification}
            value={verification}
            autoComplete="off"  
            keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleNextPress}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have receive yet?</Text>
            <Text
              style={styles.resendLink}
              onPress={() => navigation.navigate('Register')}
            >
              Resend
            </Text>
          </View>
        </View>
      </View>
</SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B0A2A',
  },
  image: {
    // width: 90,
    // height: 120,
    left: Platform.OS === "android" ? "30%" : "30%",
    width: wp('30%'),
    height: hp('20%'),
  },
  contentContainer: {
    // marginTop: 40,
    alignItems: 'center',
    gap: hp('1%')
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  subtitle: {
    color: '#7E7EA6',
  },
  loginInput: {
    borderWidth: 1,
    borderColor: '#A827FE',
    borderRadius: 5,
    paddingHorizontal: 10,
    // height: 45,
    // width: 300,

    height: hp('5.5%'),
    width: wp('90%'),
    color: 'white',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 40,
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  loginButton: {
    backgroundColor: '#A827FE',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 5,
    right: Platform.OS === "android" ? wp("14%") : wp("16%"),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Platform.OS ==="android" ? hp('2%') : hp('2%'),
    color: 'white',
    
  },
  registerContainer: {

    alignItems: 'center',
    left: Platform.OS === "android" ? wp("13%") : wp("17.5%"),
    // bottom: hp('1%')
  },
  registerText: {
    color: 'white',
  },
  resendLink: {
    color: '#A827FE',
    textDecorationLine: 'underline',
    // right: wp('8%')
    right: Platform.OS === "android" ? wp("14%") : wp("12.5%"),
  },
});
