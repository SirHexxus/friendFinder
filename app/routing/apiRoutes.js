//  This file shall contain the Express routing information for all API GET/POST requests
const express = require("express")
const path = require("path")

const Friend = require("../data/friends.js")

const app = express()

//  Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const friends = [
	{
		name    : "Default",
		photo   : "https://via.placeholder.com/100",
		scores  : [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
	},
	{
		name    : "James Stacy",
		photo   : "https://via.placeholder.com/100",
		scores  : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	}
]

//  GET Request Route (For data)
const showFriends = app => {
	app.get("/api/showFriend", (req, res) => {
		return res.json(friends)
	})
}

//  POST Request Route
const addFriend = app => {
	app.post("/api/newFriend", (req, res) => {
        console.log(Friend.Friend);
		let friendData = req.body
		let newFriend = new Friend(
			friendData.name,
			friendData.pic,
			friendData.scoreArr
		)
		friends.push(newFriend)
	})
}

//  Exporting the Routes data. It will be required in server.js
module.exports = {
    show    : showFriends,
	add     : addFriend,
	friends : friends
}
