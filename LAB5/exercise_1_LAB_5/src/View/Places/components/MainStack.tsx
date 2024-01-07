import { View, Text, SafeAreaView, Image } from "react-native"
import React, { FC, useState } from "react"
import { useGetListPlaces } from "../../../store/hook"
import { useRecoilValue } from "recoil"
import { listPlaceState } from "../../../store/atom"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { PlacesStackParamList } from "../../../type"
import { TouchableOpacity } from "react-native-gesture-handler"

const ItemPlaces: FC<{id: string, image: string, title: string, latitude: number, longitude: number}> = (props) => {
  const {id, image, title, latitude, longitude} = props
  const [address, setAddress] = useState<any>(null)
  const navigation = useNavigation<StackNavigationProp<PlacesStackParamList, "MainPlaces">>()
  React.useEffect(()=> {
    (async () => { 
      const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyD-kdOb0kA-y57SoL_GxX9F2jalKUqD5_M`, {
        method: "GET"
      })
      console.log(await data.json());
    })()
  },[])
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("OriginPlaces", {id, image, title, latitude, longitude})} className="w-screen px-2">
        <View className="flex flex-row items-center space-x-4 h-24 bg-zinc-300 w-full">
          <View className="w-20 aspect-square bg-zinc-200">
            <Image source={{uri: image}} className="w-full h-full"/>
          </View>
          <View className="flex space-y-2 h-full pt-4">
            <Text className="font-bold text-black">{title}</Text>
            <Text>{latitude}</Text>
            <Text>{longitude}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}
const MainStack = () => {
  const {onGetListPlaces} = useGetListPlaces()
  const listPlaces = useRecoilValue(listPlaceState)

	return (
		<SafeAreaView>
			<View className="flex items-center w-full h-full px-2 space-y-2 pt-2">
        {listPlaces.length && (
          listPlaces.map((item)=>{
            return(
              <ItemPlaces key={item.id} id={item.id} image={item.image} title={item.title} longitude={item.longitude} latitude={item.latitude}/>
            )
          })
        )}
			</View>
		</SafeAreaView>
	)
}

export default MainStack
