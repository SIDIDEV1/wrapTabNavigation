import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoryScreen({navigation}) {
  return (
    <View>
      <Text>CategoryScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
        <Text>Go to product</Text>
      </TouchableOpacity>
    </View>
  )
}