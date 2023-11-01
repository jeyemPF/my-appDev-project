import * as React from 'react';

import Welcome from './screens/Welcome';
import HomePage from './screens/HomePage';
import Organizer from './screens/Organizer';
import Bookings from './screens/Bookings';
import Profile from './screens/Profile';

import DetailsScreen, { DetailScreen } from './screens/DetailScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import VerificationScreen from './screens/VerificationScreen';








const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




function HomeScreen() {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={{

      headerShown: false,
      
      tabBarActiveTintColor: '#A827FE',
      tabBarInactiveTintColor: '#8c8787',
      

      
      tabBarStyle: { 

       
        borderTopColor:'#1B0A2A',
          backgroundColor:'#1B0A2A',
    },
    
    tabBarLabelStyle: {
          fontSize: 10  ,
        },  
    }}
  >
    <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5
              name='home'
              size={20}
              color={color}
            />
          ),
        }}
      />   

    <Tab.Screen
        name="Organizer"
        component={Organizer}
        options={{
          title: 'Organizer',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5
              name='users'
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          title: 'Bookings',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5
              name='book'
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5
              name='user'
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}




function Auth(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false,
          gestureEnabled: false, 
         }}
        
      >
        <Stack.Screen name="Welcome" component={Welcome}  />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomePage" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;
