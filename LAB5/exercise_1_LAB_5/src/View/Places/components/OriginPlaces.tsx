import { View, Text, Image } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { PlacesStackParamList } from '../../../type'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'

const OriginPlaces = () => {
  const {params: {id, image, title, latitude, longitude}} = useRoute<RouteProp<PlacesStackParamList, "OriginPlaces">>()
  const navigation = useNavigation<StackNavigationProp<PlacesStackParamList, "OriginPlaces">>()
  return (
    <View className='w-full h-full flex space-y-2'>
      <View className='w-full aspect-square'>
        <Image source={{uri: image}} className='w-full h-full'/>
      </View>
      <View className='w-full flex items-center'>
        <Text>{title}</Text>
      </View>
      <View className="flex flex-row justify-around w-full">
        <TouchableOpacity onPress={() => {navigation.navigate("MapOrignPlaces", {longitude, latitude})}} className="flex flex-row items-center p-2 space-x-2 border border-blue-500 border-solid">
          <Entypo name="map" size={16} color={"#3b82f6"} />
          <Text className="font-bold text-blue-500">Pick on Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OriginPlaces
