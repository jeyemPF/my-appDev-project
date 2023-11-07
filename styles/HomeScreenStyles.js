import { StyleSheet, Platform } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1B0A2A",
      // flexDirection: "column",
    },
  
    container: {
      flex: 1,
      // alignItems: 'flex-start',
      backgroundColor: "#1B0A2A",
      flexDirection: "column",
      gap: 15,
      // paddingLeft: '25%',
      // paddingRight: '25%',
    },
  
    sectionContainer: {
      justifyContent: "flex-start",
      gap: hp('1%'),   
  

    },
  
    // header
  
    header: {
      alignItems: "flex-start",
      backgroundColor: "#1B0A2A",
      flexDirection: "row",
      // paddingRight: Platform.OS === "android" ? "3%" : "2%",
      // paddingLeft: Platform.OS === "android" ? "3%" : "2%",
      paddingRight: wp("1.2%"), 
      paddingLeft: wp('1.2%'),
      // backgroundColor: 'red',
    },
    textHeader: {
      flex: 1,
      flexDirection: "column",
    },
    welcomeText: {
      // fontSize: 20,
      fontSize: hp('2.5%'),
      fontWeight: "bold",
      color: "#A827FE",
    },
  
    userNameText: {
      // fontSize: 18,
      fontSize: hp('2%'),
      // fontWeight: 'bold',
      color: "white",
    },
    image: {
      // borderRadius: 100,
      borderRadius: wp('5%'),
      
      // height: 40,
      // width: 40,
      height: hp ('4.5%'),
      width: wp ('9.5%'),
    },
  
    // categories
    categoriesContainer: {
      // flex: 1,
      backgroundColor: "#1B0A2A",
      flexDirection: "column",
      // backgroundColor: 'blue',
      gap: hp('1.5%'),
      // paddingRight: Platform.OS === "android" ? "3%" : "2%",
      // paddingLeft: Platform.OS === "android" ? "3%" : "2%",

      paddingRight: wp("3%"),
      paddingLeft: wp("3%"),
      
    },
    categories: {
      flexDirection: "column",
    },
    categoriesText: {
      // flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    categoriesTitle: {
      // fontSize: 25,
      fontSize: hp('2.9%'),
      fontWeight: "bold",
      color: "white",
    },
    categoriesViewMore: {
      color: "#B8B2BB",
      // marginTop: "3%",
      marginTop: hp("1.5%"),
      // fontWeight: "bold",
    },
    // categories ScrollView
  
    scrollViewImgContainer: {
      flexDirection: "row",
      // gap: 20,
      // gap: Platform.OS === "android" ? 15 : 20,
      // backgroundColor: 'yellow',
      // marginBottom: '63%',
      gap: wp("4.5%")
    },
    scrollViewImgText: {
      color: "white",
      // fontSize: 13,
       fontSize: hp('1.5%'),


    },
    imageScrollView: {
      borderWidth: 1,
      borderColor: "#A827FE",
      borderRadius: Platform.OS === 'android' ? 50 : 50,
      height: Platform.OS === 'android' ? hp('9%') : hp('8.4%'), 
      width: Platform.OS === 'android' ? wp('18%') : wp('18.7%'),
      flexDirection: "column",
      // height: Platform.OS === "android" ? 70 : 75,
      // width: Platform.OS === "android" ? 70 : 75,
    },
    scrollImgText: {
      gap: hp('2%'),
      alignItems: "center",
      position: "relative",
    },
    // Events
    eventsContainer: {
      // paddingRight: Platform.OS === "android" ? "3%" : "2%",
      // paddingLeft: Platform.OS === "android" ? "3%" : "2%",
      paddingRight: Platform.OS === "android" ? wp('2%') : wp('2%'),
      paddingLeft: Platform.OS === "android" ? wp('2%') : wp('2%'),
  
      backgroundColor: "#1B0A2A",
      flexDirection: "column",
  
      // backgroundColor: 'blue',
      // paddingBottom: '72%',
      // marginBottom: '48%',
      gap: hp('1%'),
    },
    events: {
      // flex: 1,
      flexDirection: "column",
    },
    eventsText: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    eventsTitle: {
      fontSize: hp('2.9%'),
      // fontSize: 25,
      fontWeight: "bold",
      color: "white",
    },
    eventsViewMore: {
      color: "#B8B2BB",
      marginTop: hp("1%"),
      // fontWeight: "bold",
    },
    // events text inside the img
    eventsTextInside: {
      fontSize: 39,
      fontWeight: "800",
      color: "white",
    },
  
    eventsTextContainerInside: {
      position: "absolute",
      // backgroundColor: 'red',
  
      // top: 60,
      // left: 10,
      top: hp('7%'), 
      left: wp('3%'), 
      flexDirection: "row",
    },
    scrollViewImgContainerEvents: {
      flexDirection: "row",
      // gap: 20,
      gap: wp('5%')
      
      // backgroundColor: 'yellow',
      // marginBottom: '63%',
    },
  
    eventsTextInsideImgTxt: {
      flexDirection: "column",
      justifyContent: "space-between",
    },
  
     imageEventsProfile: {
    borderRadius: 1000, 
    height: hp('3%'), 
    width: wp('7%'), 
  },
  
    eventsTextInsides: {
      flexDirection: "row",
      justifyContent: "flex-start",
      // backgroundColor: 'yellow',
    },
    eventsNameText: {
      fontSize: hp('2%'),
      
      fontWeight: "bold",
      color: "white",
    },
    buttonPositionEvents: {
      // top: 10,
      // right: 13,
      top: hp('1%'), 
      right: wp('4%'), 
      position: "absolute",
    },
  
    iconEvents: {
      // bottom: 30,
      // right: 25,
      bottom: hp('3%'),
      right: wp('6%'),
      position: "absolute",
      flexDirection: "row",
      // gap: 5,
    },
  
    buttonEvents: {
      backgroundColor: "#A827FE",
      paddingVertical: 2,
      borderRadius: 15,
      // backgroundColor: 'red',
      paddingVertical: 6,
      paddingHorizontal: 15,
      opacity: 0.9,
    },
    buttonTextEvent: {
      fontSize: 12,
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
    },
    imageScrollViewEvents: {
      // borderWidth: 2,
      // borderColor: '#A827FE',
      borderRadius: 30,
      // height: 160,
      // width: 300,
      flexDirection: "column",
      // height: Platform.OS === "android" ? 140 : 160,
      // width: Platform.OS === "android" ? 260 : 300,
      height: Platform.OS === 'android' ? hp('19%') : hp('19%'), 
    width: Platform.OS === 'android' ? wp('78%') : wp('70%'), 
    },
 
    // Reccomend Section
  
    recommendsContainer: {
      backgroundColor: "#1B0A2A",
      flexDirection: "column",
      // paddingRight: Platform.OS === "android" ? "3%" : "2%",
      // paddingLeft: Platform.OS === "android" ? "3%" : "2%",
      paddingRight: Platform.OS === 'android' ? wp('3%') : wp('2%'),
      paddingLeft: Platform.OS === 'android' ? wp('3%') : wp('2%'),
      // backgroundColor: 'blue',
      // paddingBottom: '72%',
      // marginBottom: '48%',
      // gap: ,
    },
  
    recommends: {
      // flex: 1,
      flexDirection: "column",
      gap: 10,
    },
    recommendsText: {
      // flex: 1,
      flexDirection: "row",
      //
    },
    recommendsTitle: {
      fontSize: hp('2.9%'),
      fontWeight: "bold",
      color: "white",
    },
  
    recommendsImg: {
      borderRadius: 30,
  
      // height : Platform.OS === "android" ? 250 : 220,
      // width: Platform.OS === "android" ? 365 : 395,
      width: wp("95%"), 
      height: hp('30%'),
    },

    //recycle
    recommendsTextInsideImgTxt: {
      flexDirection: "column",
      justifyContent: "space-between",
      gap: hp('0.2%'),
    },

    recommendsTextInside: {
      fontSize: hp('8%'),
      fontWeight: "800",
      color: "white",
    },
    recommendsTextContainerInside: {
      position: "absolute",
      // backgroundColor: 'red',
  
      top: hp('15%'),
      left: hp('2.5%'),
      flexDirection: "row",
      
    
    },

  
    imageRecommendsProfile: {
      borderRadius: 1000,
      height: hp('5%'),
      width: wp('11%'),
    },

    recommendsTextInsides: {
      flexDirection: "row",
      justifyContent: "flex-start",
      // backgroundColor: 'yellow',
    },
    recommendsNameText: {
      fontSize: hp('2.9%'),
      fontWeight: "bold",
      color: "white",
    },
    buttonPositionRecommends: {
      top: hp('8%'), 
      right: wp('5%'), 
      position: "absolute",
    },
  
    iconRecommends: {
      bottom: 30,
      right: 25,
      position: "absolute",
      flexDirection: "row",
      gap: 5,
    },
  
    buttonRecommends: {
      backgroundColor: "#A827FE",
      borderRadius: 15,
      paddingVertical: hp('1%'),
      paddingHorizontal: wp('7%'),  
      opacity: 0.8,
    },
    buttonTextRecommends: {
      fontSize: 15,
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
    },
  });

export default styles;