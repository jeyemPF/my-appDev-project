import React from 'react';
import { View, Text } from 'react-native';

export default function Bookings({}){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1B0A2A' }}>
      <Text style={{color: 'white',}}>No bookings have been made yet.</Text>
    </View>
  );
}