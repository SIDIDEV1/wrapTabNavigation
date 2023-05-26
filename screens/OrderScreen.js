import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function OrderScreen({ navigation }) {
  return (
    <View>
      <Text>OrderScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
        <Text>Go to order</Text>
      </TouchableOpacity>
    </View>
  )
}