import { View } from "react-native"
import PostItem from "./item"

const itemList = [
	{
		username: "Mami Nanami",
		title: "My waifu <3",
		imgUrl:
			"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/Rent-A-Girlfriend-Mami-Nanami-Official-Art-Season-2.jpg",
		likes: 24,
		comments: 50,
		shares: 250,
	},
	{
		username: "Mami Nanami",
		title: "My waifu is da best <3",
		imgUrl:
			"https://www.epicdope.com/wp-content/uploads/2021/12/Rent-a-Girlfriend-Mami-Nanami.jpg",
		likes: 1000,
		comments: 200,
		shares: 50,
	},
	{
		username: "Mami Nanami",
		title: "My waifu is da best <3",
		imgUrl: "https://tierragamer.com/wp-content/uploads/2021/05/Mami-chan.jpg",
		likes: 1000,
		comments: 200,
		shares: 50,
	},
	{
		username: "Mami Nanami",
		title: "My waifu <3",
		imgUrl:
			"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/Rent-A-Girlfriend-Mami-Nanami-Official-Art-Season-2.jpg",
		likes: 24,
		comments: 50,
		shares: 250,
	},
	{
		username: "Mami Nanami",
		title: "My waifu is da best <3",
		imgUrl:
			"https://www.epicdope.com/wp-content/uploads/2021/12/Rent-a-Girlfriend-Mami-Nanami.jpg",
		likes: 1000,
		comments: 200,
		shares: 50,
	},
	{
		username: "Mami Nanami",
		title: "My waifu is da best <3",
		imgUrl: "https://tierragamer.com/wp-content/uploads/2021/05/Mami-chan.jpg",
		likes: 1000,
		comments: 200,
		shares: 50,
	},
	{
		username: "Mami Nanami",
		title: "My waifu <3",
		imgUrl:
			"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/Rent-A-Girlfriend-Mami-Nanami-Official-Art-Season-2.jpg",
		likes: 24,
		comments: 50,
		shares: 250,
	},
	{
		username: "Mami Nanami",
		title: "My waifu is da best <3",
		imgUrl:
			"https://www.epicdope.com/wp-content/uploads/2021/12/Rent-a-Girlfriend-Mami-Nanami.jpg",
		likes: 1000,
		comments: 200,
		shares: 50,
	},
	{
		username: "Mami Nanami",
		title: "My waifu is da best <3",
		imgUrl: "https://tierragamer.com/wp-content/uploads/2021/05/Mami-chan.jpg",
		likes: 1000,
		comments: 200,
		shares: 50,
	},
]

const Post = () => {
	return (
		<View className="flex flex-col mx-[8px] mb-[8px] ">
			{itemList.map((item, index) => {
				return <PostItem {...item} key={index} />
			})}
		</View>
	)
}
export default Post
