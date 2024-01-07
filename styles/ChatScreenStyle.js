import {  StyleSheet,Platform } from 'react-native';

import COLORS from '../src/COLORS';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: COLORS.DARK_VIOLET,
      marginTop: 5,
      marginLeft: 15,
      marginRight: 15
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
      },
      button: {
      
        borderWidth: 0.4,
        borderColor: COLORS.LIGHT_VIOLET,
        width: wp('25%'),
        height: hp('4%'),
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      buttonText: {
        color: "white",
        fontSize: hp('1.8%'),
      },
  });

  export default styles