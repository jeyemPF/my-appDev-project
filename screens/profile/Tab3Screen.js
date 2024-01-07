import { View, Text } from 'react-native'
import React from 'react'
import COLORS from '../../src/COLORS'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Tab1Screen = () => {
  return (
    <View style={{ backgroundColor: COLORS.DARK_VIOLET, flex: 1 }}>
        <View style={{justifyContent: 'center', alignItems: 'center', top: hp('25%')}}>
            <Text style={{  color: 'white', }}>Pogi mo</Text>
        </View>
    </View>
  )
}

export default Tab1Screen