import React from 'react';
import { View, Text } from 'react-native';

export default function Profile({ navigation }){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1B0A2A' }}>
      <Text style={{color: 'white'}}>Profile</Text>
    </View>
  );
}
