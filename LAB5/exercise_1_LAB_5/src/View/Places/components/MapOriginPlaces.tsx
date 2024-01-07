import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { RouteProp, useRoute } from '@react-navigation/native'
import { PlacesStackParamList } from '../../../type'

const MapOriginPlaces = () => {
  const {params: {latitude, longitude}} = useRoute<RouteProp<PlacesStackParamList, "MapOrignPlaces">>()
  return (
    <View className='w-full h-full'>
      <MapView className='w-full h-full'
						initialRegion={{
							latitude ,
							longitude ,
							latitudeDelta: 0.005,
							longitudeDelta: 0.005,
						}}
      >
        <Marker
          coordinate={{latitude, longitude}}
        />
      </MapView>
    </View>
  )
}

export default MapOriginPlaces  
