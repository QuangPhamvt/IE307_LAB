import "react-native-get-random-values"
import {v4 as uuid} from "uuid"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { imageSelectedState, inputTitleState, listImageLibraryState, listPlaceState, locationState } from "./atom"
import { getImageInDevice, saveImage, schedulePushNotification } from "../utils/Helpers"
import * as Location from "expo-location"
import { Alert } from "react-native"
import * as SQLite from "expo-sqlite"
import React from "react"
import * as MediaLibrary from "expo-media-library"
const db = SQLite.openDatabase("ie307")

export const useGetListPlaces = () => {
  const [listPlace ,setListPlaces] = useRecoilState(listPlaceState)
  React.useEffect(()=>{
    db.transaction((tx) => {
      tx.executeSql(`select * from Places`, [], (_, {rows})=>{
        setListPlaces(rows._array)
      })
    })
  },[])
  const onGetListPlaces = async () => {
    try {
      console.log(listPlace);
    } catch (error) {
      
    }
  }
  return {onGetListPlaces}
}
export const useGetImageToUp = () => {
	const setImage = useSetRecoilState(imageSelectedState)
	const onGetImageToUp = async (useLib: boolean) => {
		try {
			const url = await getImageInDevice(useLib)
			url?.assets?.[0] && url.assets[0].uri && setImage(url.assets[0].uri)
		} catch (error) {
			console.log(error)
		}
	}
	return { onGetImageToUp }
}
export const useAddPlaces = () => {
  const inputTitle = useRecoilValue(inputTitleState)
  const imageSelect = useRecoilValue(imageSelectedState)
  const location = useRecoilValue(locationState)
  const setListPlaces = useSetRecoilState(listPlaceState)
  const alert = (message: string) => Alert.alert(message, undefined, [{
    text: "Oke"
  }])
  const onAddPlaces = async () => {
    if(!inputTitle || !imageSelect || !location) {
      alert("title or image or location is empty")
      return 
    }
    try {
      await schedulePushNotification("Places added successfully", "The place has been added to your favorites list!")
      const id: string = await uuid()
      db.transaction((tx) => {
        tx.executeSql(`insert into Places (id, title, image, latitude, longitude) values(?, ? ,? ,?, ? )`, [
          id,
          inputTitle,
          imageSelect,
          location.coords.latitude,
          location.coords.longitude,
        ])
      })
      setListPlaces(preState => {
        if(preState.length > 0)
          return [...preState, {id: id || "", image: imageSelect, title: inputTitle, latitude: location.coords.latitude, longitude: location.coords.longitude }]
        else
          return [{id: id ||"" , image: imageSelect, title: inputTitle, latitude: location.coords.latitude, longitude: location.coords.longitude}]
      })
    } catch (error) {
      console.log(error);
    }
    
  }
  return { onAddPlaces }
}
export const useGetListImage = () => {
  const setImageLib = useSetRecoilState(listImageLibraryState)
  const albumName = "Photos"
  const onGetListImage = async () => {
    setImageLib({state: "loading", data: []})
    const isMediaLibraryEnable = await MediaLibrary.getPermissionsAsync()
    if (!isMediaLibraryEnable.granted) {
      await MediaLibrary.requestPermissionsAsync()
    }
    const getPhotos = await MediaLibrary.getAlbumAsync(albumName)
    const getAllPhotos = await MediaLibrary.getAssetsAsync({
      first: 20,
      album: getPhotos,
      sortBy: ["creationTime"],
      mediaType: "photo",
    })
    setImageLib({
      state: "hasValue",
      data: await Promise.all(
        getAllPhotos.assets.map(async (item) => ({
          id: item.id,
          uri: await saveImage(item.uri),
        })),
      ),
    })
  }
  return { onGetListImage }
}
export const useGetLocation = () => {
	const setLocation = useSetRecoilState(locationState)
	const alert = (message: string) =>
		Alert.alert(message, undefined, [{ text: "Oke" }])
	const onGetLocation = async () => {
		try {
			let { status } = await Location.requestForegroundPermissionsAsync()
			if (status !== "granted") {
				alert("Permission to access location was denied")
				return
			}
			let location: Location.LocationObject =
				await Location.getCurrentPositionAsync({})
			setLocation(location)
		} catch (error) {}
	}
	return { onGetLocation }
}
