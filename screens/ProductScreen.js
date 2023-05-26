import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProductScreen({ navigation }) {
  return (
    <View>
      <Text>ProductScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('OrderStack', { screen: 'Order' })}>
        <Text>Go to order</Text>
      </TouchableOpacity>
    </View>
  )
}