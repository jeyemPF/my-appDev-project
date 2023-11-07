import React, { Component } from 'react'
import { View, Text } from 'react-native';
import COLORS from '../src/COLORS';

export class ChatScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.DARK_VIOLET }}>
        <Text style={{color: 'white', fontSize: 40}}>ChatScreen</Text>
      </View>
    )
  }
}

export default ChatScreen;
