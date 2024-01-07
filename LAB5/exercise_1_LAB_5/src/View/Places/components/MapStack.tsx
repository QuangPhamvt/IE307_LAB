import React from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useRecoilState, useRecoilValue } from 'recoil'
import {  locationState, selectLocationState } from '../../../store/atom'

const MapStack = () => {
  const [location, setLocation] = useRecoilState(selectLocationState)
  const originLocation = useRecoilValue(locationState)
  React.useEffect(()=> {
    setLocation(originLocation)
  },[])
  if(!location) return null
  return (
    <View className='w-full h-full '>
      <MapView className='w-full h-full'
						initialRegion={{
							latitude: location.coords.latitude ,
							longitude: location?.coords?.longitude ,
							latitudeDelta: 0.005,
							longitudeDelta: 0.005,
						}}
      >
        <Marker
          draggable
          onDragEnd={(e) =>
            setLocation((preState) => {
              if (!preState) return null
              return {
                ...preState,
                coords: {
                  ...preState.coords,
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                },
              }
            })
          }
          coordinate={location?.coords}
        />
      </MapView>
    </View>
  )
}

export default MapStack
