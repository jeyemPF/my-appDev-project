import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';`vvvvvv`

export default function Welcome({ navigation }) {
  return (

    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
          <View style={styles.header2}>
            <Image
            source={require('../assets/myLogo.png')}
            style={styles.image}
            />
            <View>
            <Text style={styles.textHeader}> Event <Text style={styles.textSpan}>Express</Text> </Text>
            </View>
        </View>
            <View style={styles.tagLine}>
            <View style={styles.line1}>
              <Text style={styles.motto}>    Where</Text>  
              <Text style={[styles.violet, { color: '#A827FE' }]}> Every Event</Text>
            </View>
            <View style={styles.line1}>
              <Text style={styles.motto}> Becomes Your</Text>
              <Text style={[styles.violet, { color: '#A827FE' }]}> Canvas</Text>
          </View>
          </View>


          </View>

       
        
      
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
       
      </View> 
    </SafeAreaView>

     
     
  
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1 ,
    backgroundColor: '#1B0A2A',
  },
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1B0A2A',
    
    // backgroundColor: 'blue',
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center',
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: -20,
    marginBottom: '55%',
 
  },
  header2: {
    alignItems: 'center',
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: -20,
    marginBottom: '30%',
 
  },
  



//Header
  image: {
    width: wp("50%"), 
    height: hp('25%'),
  },

  textHeader: {
    color: 'white',
    fontSize: hp("6%"),
  },
  textSpan:{
    color: '#A827FE',
    fontWeight: 'bold',
    
  },


  //TagLine
  tagLine:{
    alignItems: 'flex-start',

  
    // backgroundColor: 'green',
    // paddingBottom: '30%',
   
  },
  motto:{
    color: 'white',
    fontSize: hp('3.8%')
  },
  violet:{
    color: '#A827FE',
    fontSize: hp('3.8%'),
    fontWeight: 'bold',
  },
  line1:{
    flexDirection: 'row',
    
  },


  button: {
    backgroundColor: '#A827FE',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    
  },
  buttonText: {
    fontSize: hp('2%'),
    color: 'white',
    textAlign: 'center',
    // fontWeight: 'bold'
  },
  
});
