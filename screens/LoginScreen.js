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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleNextPress = () => {
    navigation.navigate('Verification');
  };

  return (

    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}>
 <SafeAreaView>
   <Image source={require('../assets/myLogo.png')} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Use your Email account</Text>

        <TextInput
            style={styles.loginInput}
            placeholder="Enter your Email Address"
            placeholderTextColor="#B8B2BB"
            onChangeText={setEmail}
            value={email}
            autoComplete="off"  
            keyboardType="email-address"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleNextPress}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account yet?</Text>
            <Text
              style={styles.registerLink}
              onPress={() => navigation.navigate('Register')}
            >
              Register Now
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    right: Platform.OS === "android" ? wp("14%") : wp("16%"),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    
  },
  registerContainer: {

    alignItems: 'center',
    left: Platform.OS === "android" ? wp("13%") : wp("15%"),
    bottom: hp('1%')
  },
  registerText: {
    color: 'white',
  },
  registerLink: {
    color: '#A827FE',
    textDecorationLine: 'underline',
    right: 45
  },
});
