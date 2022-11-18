import { View, Text } from 'react-native'
import React from 'react'
import ListProduct from './ListProduct'
import CategoryScreen from './CategoryScreen'

export default function Product() {
  return (
    <View>
      <Text>Product</Text>
      {/* <ListProduct/> */}
      <CategoryScreen/>
    </View>
  )
}