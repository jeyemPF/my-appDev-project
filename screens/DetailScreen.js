import React, { Component } from 'react'
import { View, Text } from 'react-native';

export class DetailScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>DetailScreen</Text>
      </View>
    )
  }
}

export default DetailScreen;
