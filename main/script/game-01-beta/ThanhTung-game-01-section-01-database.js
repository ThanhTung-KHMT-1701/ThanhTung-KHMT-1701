let DATABASE

(
	async function ()
	{
		await Database.CHECK("ThanhTung-game-01-beta").then(() => {console.log(`ThanhTung-game-01-section-01-database.js | Database.CHECK | DONE`)})
		
		DATABASE = JSON.parse(localStorage.getItem("ThanhTung-game-01-beta"))
	}
)()