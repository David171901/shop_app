const productsData = [
	{
		"id": 1,
		"title": "Incredible Frozen Table",
		"price": 373,
		"description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
		"category": {
			"id": 1,
			"name": "Clothes",
			"image": "https://api.lorem.space/image/fashion?w=640&h=480&r=1811"
		},
		"images": [
			"https://api.lorem.space/image/fashion?w=640&h=480&r=5291",
			"https://api.lorem.space/image/fashion?w=640&h=480&r=7765",
			"https://api.lorem.space/image/fashion?w=640&h=480&r=7589"
		]
	},
	{
		"id": 2,
		"title": "Intelligent Cotton Shoes",
		"price": 165,
		"description": "The Football Is Good For Training And Recreational Purposes",
		"category": {
			"id": 5,
			"name": "Others",
			"image": "https://api.lorem.space/image?w=640&h=480&r=3449"
		},
		"images": [
			"https://api.lorem.space/image?w=640&h=480&r=5067",
			"https://api.lorem.space/image?w=640&h=480&r=9168",
			"https://api.lorem.space/image?w=640&h=480&r=3535"
		]
	},
	{
		"id": 3,
		"title": "Refined Frozen Pants",
		"price": 832,
		"description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
		"category": {
			"id": 4,
			"name": "Shoes",
			"image": "https://api.lorem.space/image/shoes?w=640&h=480&r=3963"
		},
		"images": [
			"https://api.lorem.space/image/shoes?w=640&h=480&r=4248",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=309",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=573"
		]
	},
	{
		"id": 4,
		"title": "Incredible Fresh Gloves",
		"price": 635,
		"description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
		"category": {
			"id": 5,
			"name": "Others",
			"image": "https://api.lorem.space/image?w=640&h=480&r=3449"
		},
		"images": [
			"https://api.lorem.space/image?w=640&h=480&r=7284",
			"https://api.lorem.space/image?w=640&h=480&r=7972",
			"https://api.lorem.space/image?w=640&h=480&r=9610"
		]
	},
	{
		"id": 5,
		"title": "Gorgeous Concrete Chicken",
		"price": 949,
		"description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
		"category": {
			"id": 5,
			"name": "Others",
			"image": "https://api.lorem.space/image?w=640&h=480&r=3449"
		},
		"images": [
			"https://api.lorem.space/image?w=640&h=480&r=8922",
			"https://api.lorem.space/image?w=640&h=480&r=8425",
			"https://api.lorem.space/image?w=640&h=480&r=2454"
		]
	},
	{
		"id": 6,
		"title": "Refined Fresh Keyboard",
		"price": 575,
		"description": "The Football Is Good For Training And Recreational Purposes",
		"category": {
			"id": 4,
			"name": "Shoes",
			"image": "https://api.lorem.space/image/shoes?w=640&h=480&r=3963"
		},
		"images": [
			"https://api.lorem.space/image/shoes?w=640&h=480&r=7661",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=4078",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=5840"
		]
	},
	{
		"id": 7,
		"title": "Rustic Fresh Hat",
		"price": 109,
		"description": "The Football Is Good For Training And Recreational Purposes",
		"category": {
			"id": 3,
			"name": "Furniture",
			"image": "https://api.lorem.space/image/furniture?w=640&h=480&r=8150"
		},
		"images": [
			"https://api.lorem.space/image/furniture?w=640&h=480&r=4801",
			"https://api.lorem.space/image/furniture?w=640&h=480&r=3765",
			"https://api.lorem.space/image/furniture?w=640&h=480&r=6875"
		]
	},
	{
		"id": 8,
		"title": "Handmade Plastic Shirt",
		"price": 15,
		"description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
		"category": {
			"id": 2,
			"name": "Electronics",
			"image": "https://api.lorem.space/image/watch?w=640&h=480&r=9306"
		},
		"images": [
			"https://api.lorem.space/image/watch?w=640&h=480&r=2526",
			"https://api.lorem.space/image/watch?w=640&h=480&r=2868",
			"https://api.lorem.space/image/watch?w=640&h=480&r=1457"
		]
	},
	{
		"id": 9,
		"title": "Unbranded Concrete Chair",
		"price": 257,
		"description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
		"category": {
			"id": 2,
			"name": "Electronics",
			"image": "https://api.lorem.space/image/watch?w=640&h=480&r=9306"
		},
		"images": [
			"https://api.lorem.space/image/watch?w=640&h=480&r=4891",
			"https://api.lorem.space/image/watch?w=640&h=480&r=2889",
			"https://api.lorem.space/image/watch?w=640&h=480&r=8088"
		]
	},
	{
		"id": 10,
		"title": "Rustic Granite Towels",
		"price": 67,
		"description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
		"category": {
			"id": 4,
			"name": "Shoes",
			"image": "https://api.lorem.space/image/shoes?w=640&h=480&r=3963"
		},
		"images": [
			"https://api.lorem.space/image/shoes?w=640&h=480&r=9523",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=3333",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=5633"
		]
	},
	{
		"id": 11,
		"title": "Intelligent Granite Chicken",
		"price": 518,
		"description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
		"category": {
			"id": 5,
			"name": "Others",
			"image": "https://api.lorem.space/image?w=640&h=480&r=3449"
		},
		"images": [
			"https://api.lorem.space/image?w=640&h=480&r=3853",
			"https://api.lorem.space/image?w=640&h=480&r=5455",
			"https://api.lorem.space/image?w=640&h=480&r=8194"
		]
	},
	{
		"id": 12,
		"title": "Handmade Plastic Tuna",
		"price": 879,
		"description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
		"category": {
			"id": 4,
			"name": "Shoes",
			"image": "https://api.lorem.space/image/shoes?w=640&h=480&r=3963"
		},
		"images": [
			"https://api.lorem.space/image/shoes?w=640&h=480&r=5889",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=374",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=1226"
		]
	},
	{
		"id": 13,
		"title": "Refined Fresh Gloves",
		"price": 310,
		"description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
		"category": {
			"id": 1,
			"name": "Clothes",
			"image": "https://api.lorem.space/image/fashion?w=640&h=480&r=1811"
		},
		"images": [
			"https://api.lorem.space/image/fashion?w=640&h=480&r=1624",
			"https://api.lorem.space/image/fashion?w=640&h=480&r=9068",
			"https://api.lorem.space/image/fashion?w=640&h=480&r=6395"
		]
	},
	{
		"id": 14,
		"title": "Gorgeous Plastic Pizza",
		"price": 826,
		"description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
		"category": {
			"id": 3,
			"name": "Furniture",
			"image": "https://api.lorem.space/image/furniture?w=640&h=480&r=8150"
		},
		"images": [
			"https://api.lorem.space/image/furniture?w=640&h=480&r=8772",
			"https://api.lorem.space/image/furniture?w=640&h=480&r=5617",
			"https://api.lorem.space/image/furniture?w=640&h=480&r=3805"
		]
	},
	{
		"id": 15,
		"title": "Licensed Frozen Chicken",
		"price": 273,
		"description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
		"category": {
			"id": 4,
			"name": "Shoes",
			"image": "https://api.lorem.space/image/shoes?w=640&h=480&r=3963"
		},
		"images": [
			"https://api.lorem.space/image/shoes?w=640&h=480&r=1086",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=8580",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=6294"
		]
	},
	{
		"id": 16,
		"title": "Tasty Concrete Fish",
		"price": 893,
		"description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
		"category": {
			"id": 4,
			"name": "Shoes",
			"image": "https://api.lorem.space/image/shoes?w=640&h=480&r=3963"
		},
		"images": [
			"https://api.lorem.space/image/shoes?w=640&h=480&r=8353",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=1293",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=6837"
		]
	},
	{
		"id": 17,
		"title": "Rustic Plastic Sausages",
		"price": 837,
		"description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
		"category": {
			"id": 4,
			"name": "Shoes",
			"image": "https://api.lorem.space/image/shoes?w=640&h=480&r=3963"
		},
		"images": [
			"https://api.lorem.space/image/shoes?w=640&h=480&r=1329",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=331",
			"https://api.lorem.space/image/shoes?w=640&h=480&r=9654"
		]
	},
	{
		"id": 18,
		"title": "Handmade Frozen Computer",
		"price": 102,
		"description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
		"category": {
			"id": 3,
			"name": "Furniture",
			"image": "https://api.lorem.space/image/furniture?w=640&h=480&r=8150"
		},
		"images": [
			"https://api.lorem.space/image/furniture?w=640&h=480&r=554",
			"https://api.lorem.space/image/furniture?w=640&h=480&r=8290",
			"https://api.lorem.space/image/furniture?w=640&h=480&r=4405"
		]
	},
	{
		"id": 19,
		"title": "Practical Metal Gloves",
		"price": 255,
		"description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
		"category": {
			"id": 3,
			"name": "Furniture",
			"image": "https://api.lorem.space/image/furniture?w=640&h=480&r=8150"
		},
		"images": [
			"https://api.lorem.space/image/furniture?w=640&h=480&r=1653",
			"https://api.lorem.space/image/furniture?w=640&h=480&r=2160",
			"https://api.lorem.space/image/furniture?w=640&h=480&r=1149"
		]
	},
	{
		"id": 20,
		"title": "Generic Frozen Gloves",
		"price": 399,
		"description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
		"category": {
			"id": 5,
			"name": "Others",
			"image": "https://api.lorem.space/image?w=640&h=480&r=3449"
		},
		"images": [
			"https://api.lorem.space/image?w=640&h=480&r=1245",
			"https://api.lorem.space/image?w=640&h=480&r=5175",
			"https://api.lorem.space/image?w=640&h=480&r=6817"
		]
	}]

export {productsData}