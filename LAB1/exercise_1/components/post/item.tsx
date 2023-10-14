import React from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import { View, Text, Image, TouchableOpacity } from "react-native"

interface status {
	LIKE: boolean
}
interface interactProps {
	like: number
	comment: number
	share: number
}
interface PostItemProps {
	username: string
	title: string
	imgUrl: string
	likes: number
	comments: number
	shares: number
}
const PostItem = (props: PostItemProps) => {
	const { username, title, imgUrl, likes, comments, shares } = props
	const [status, setStatus] = React.useState<status>({
		LIKE: false,
	})
	const [interact, setInteract] = React.useState<interactProps>({
		like: likes,
		comment: comments,
		share: shares,
	})
	const handleInteract = (nameText: string) => {
		if (nameText === "like") {
			setStatus((preState) => ({ ...preState, LIKE: !preState.LIKE }))
			setInteract((preState) => ({
				...preState,
				like: status.LIKE ? preState.like - 1 : preState.like + 1,
			}))
		}
		if (nameText === "comment")
			setInteract((preState) => ({
				...preState,
				comment: preState.comment + 1,
			}))
		if (nameText === "share")
			setInteract((preState) => ({
				...preState,
				share: preState.share + 1,
			}))
	}
	return (
		<View className="flex flex-col gap-[4px]  mt-2 ml-[1px] p-[6px] bg-white rounded-md">
			<View className="flex flex-row items-center justify-start gap-1">
				<View className="h-[40px] w-[40px] rounded-full ">
					<Image
						className="w-full h-full border-black border-solid rounded-full border-[1px]"
						source={{
							uri: "https://cdn.myanimelist.net/images/characters/4/491833.jpg",
						}}
					/>
				</View>
				<Text>{username}</Text>
			</View>
			<Text>{title}</Text>
			<Image
				className="w-fit h-[180px] rounded-lg"
				source={{
					uri: imgUrl,
				}}
			/>
			<View className="flex flex-row justify-between p-[2px] ">
				<Text className="text-xs text-gray-400">{interact.like} Likes</Text>
				<Text className="text-xs text-gray-400">
					{interact.comment} Comments
				</Text>
				<Text className="text-xs text-gray-400">{interact.share} Shares</Text>
			</View>
			<View className="w-full border-t-[1px] border-solid border-gray-400" />
			<View className="flex flex-row justify-between p-[2px] ">
				<TouchableOpacity onPress={() => handleInteract("like")}>
					<Text
						className={`${
							status.LIKE ? "text-[#5bcefa]" : "text-[black]"
						} text-base flex items-center justify-center`}>
						<Icon
							name="thumbs-o-up"
							color={`${status.LIKE ? "#5bcefa" : "black"}`}
						/>{" "}
						Like
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleInteract("comment")}>
					<Text className="text-base ">
						<Icon name="comments-o" /> Comment
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleInteract("share")}>
					<Text className="text-base">
						<Icon name="share-square" /> Share
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
export default PostItem
