import { View, Text, FlatList } from "react-native"
import { themState } from "../App"
type qaProps = {
	theme: themState
	feedbackList: string[]
}
const Item = ({ item, text_color }: { item: string; text_color: string }) => {
	return (
		<View>
			<Text className={`${text_color}`}>Q: {item}</Text>
		</View>
	)
}
const QA = (props: qaProps) => {
	const { theme, feedbackList } = props
	return (
		<View className="mt-[8px]">
			<Text className={`text-xl font-bold ${theme.TEXT_COLOR}`}>
				Frequently Asked Questions
			</Text>
			<FlatList
				data={feedbackList}
				renderItem={(item) => (
					<Item item={item.item} text_color={theme.TEXT_COLOR} />
				)}
			/>
		</View>
	)
}
export default QA
