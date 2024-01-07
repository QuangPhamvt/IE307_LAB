import { View } from "react-native"
import React, { useRef } from "react"
import { Camera } from "expo-camera"
import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler"
import { CameraType } from "expo-image-picker"

const RecordVideo = () => {
  const cameraRef = React.useRef<any>(null)
  const [type, setType ] = React.useState(CameraType.back)
  const [permission, requestPermission] = Camera.useCameraPermissions()
  React.useEffect(()=> {
      (async () => {
        await Camera.requestCameraPermissionsAsync()
      await Camera.requestMicrophonePermissionsAsync()
      })()
  },[])
  const recordVideo = async () => {
    cameraRef.current && await cameraRef.current.recordAsync()
  }
	return (
		<View className="w-full h-full bg-zinc-300">
      <Camera ref={cameraRef} className="w-full h-full relative">
          <TouchableOpacity
            className="absolute w-full top-[500px] left-7">
            <AntDesign name="camerao" size={34} color={"red"}/>
          </TouchableOpacity>
      </Camera>
		</View>
	)
}

export default RecordVideo
