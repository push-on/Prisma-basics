import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
	// Create user
	// const user = await prisma.user.create({
	// 	data: {
	// 		name: "john",
	// 		email: "john@email.com",
	// 	},
	// })
	// console.log(user)

	// Get All users
	// const users = await prisma.user.findMany()
	// console.log(users)

	// create article and assosiate with user
	// const article = await prisma.article.create({
	// 	data: {
	// 		title: "johns first article",
	// 		body: "this is johns first article",
	// 		author: {
	// 			connect: {
	// 				id: 1,
	// 			}
	// 		}
	// 	}
	// })
	// console.log(article)

	

	// create user and article and assosiate them
	// const user = await prisma.user.create({
	// 	data: {
	// 		name: "sarah",
	// 		email: "sarah@mail.com",
	// 		articles: {
	// 			create: {
	// 				title: "sarah first article",
	// 				body: "this is sarah first article",
	// 			}
	// 		}
	// 	}
	// })

	// console.log(user)

	// create another article
	// const article = await prisma.article.create({
	// 	data: {
	// 		title: "sarahs 2nd article",
	// 		body: "this is sarahs 2nd article",
	// 		author: {
	// 			connect: {
	// 				id: 2,
	// 			}
	// 		}
	// 	}
	// })

	
	// get all articles
	// const articles = await prisma.article.findMany()
	// console.log(articles)
	
	// get all users and articles
	const users = await prisma.user.findMany({
		include: {
			articles: true
		}
	})

	// loop over sarahs articles
	users.forEach((user) => {
		console.log(`User: ${user.name}, Email: ${user.email}`);
		console.log("Articles:");
		user.articles.forEach((article) => {
			console.log(`Title: ${article.title}, Body: ${article.body}`);
		})
				
	})
}

main()
	.then(
		async () => await prisma.$disconnect()
	)
	.catch(
		async (e) => {
			console.error(e)
			await prisma.$disconnect()
			process.exit(1)
		}
	)