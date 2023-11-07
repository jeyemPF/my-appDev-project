import {  StyleSheet,Platform } from 'react-native';

import COLORS from '../src/COLORS';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: COLORS.DARK_VIOLET,
    },
    topNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      // backgroundColor: 'yellow',
      gap: wp('70%'),
    },
    logoImage: {
      height: hp('5%'),
      width: wp('10%'),
    },
    iconHeaderSortBars: {
      top: hp('0.8%'),
    },
    textHeaderProfile: {
      justifyContent: 'space-between',
      gap: hp('1%'),
    },
    nameText: {
      color: 'white',
      fontSize: hp('3%'),
      fontWeight: 'bold',
    },
    emailText: {
      color: 'white',
      fontSize: hp('1.8%'),
    },
    customerText: {
      color: 'white',
      fontSize: hp('1.8%'),
      bottom: hp('1%'),
    },
    headerImage: {
      height: Platform.OS ==='android' ? hp('8.2%') : hp('8.1%'),
      width: Platform.OS === 'android' ? wp('16.5%') : wp('17.5%'), 
      borderRadius: 1000,
    },
    textHeader: {
      marginTop: hp('2%'),
      gap: wp('20%'),
      flexDirection: 'row',
      justifyContent: 'space-around',
      // backgroundColor: 'blue'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      marginTop: hp('3.5%'),
      borderWidth: 0.4,
      borderColor: COLORS.LIGHT_VIOLET,
      width: wp('40%'),
      height: hp('5%'),
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: hp('1.8%'),
    },
  });

  export default styles