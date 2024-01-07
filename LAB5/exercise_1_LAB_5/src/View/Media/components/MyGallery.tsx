import { View, Text, Image } from "react-native"
import React from "react"
import { useRecoilValue } from "recoil"
import { listImageLibraryState } from "../../../store/atom"
import { useGetListImage } from "../../../store/hook"
import { ScrollView } from "react-native-gesture-handler"

const MyGallery = () => {
  const listImage = useRecoilValue(listImageLibraryState)
  const {onGetListImage} = useGetListImage()
  React.useEffect(()=>{
    onGetListImage()
  },[])
	return (
		<ScrollView className="h-full">
      <View className="h-full w-full justify-around flex bg-zinc-700 flex-wrap flex-row">
        {listImage.data && listImage.data.length > 0 && (
          listImage.data.map(item => {
            return(
              <View key={item.id} className="w-[47%] aspect-square pb-1">
                <Image key={item.id} source={{uri: item.uri}}  className="w-full h-full"/>
              </View>
            )
          })
        )}
      </View>
		</ScrollView>
	)
}

export default MyGallery
