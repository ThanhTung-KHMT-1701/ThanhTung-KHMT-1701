class Database
{
	static async INIT ()
	{
		const HOST = "https://raw.githubusercontent.com/ThanhTung-KHMT-1701/ThanhTung-KHMT-1701/main/database.json"
		const METHOD = "GET"
		let DATA = await fetch(HOST, {method: METHOD}).then(function (value) {return value.json()})
		/*DEBUG*/
		{
			console.log(`Database.INIT`)
			console.log(`DATA`)
			console.log(DATA)
			console.log(`Array.isArray(DATA): ${Array.isArray(DATA)}`)
		}
		
		return DATA
	}
	
	static UPDATE (key, value, option)
	{
		if (option === "MERGE")
		{
			localStorage.setItem(key, JSON.stringify(value))
		}
		else if (option === "APPEND")
		{
			if (localStorage.getItem(key) === null)
			{
				console.error(`Database.UPDATE(key, value, option)`)
				console.error(`key: ${key}`)
				console.error(`value: ${value}`)
				console.error(`option: ${option}`)
				console.error(`localStorage.getItem(key) === null`)
			}
			else
			{
				let DATA = JSON.parse(localStorage.getItem(key))
				
				for (let question of value)
				{
					DATA.push(question)
				}
				
				localStorage.setItem(key, JSON.stringify(DATA))
			}
		}
	}
	
	static async CHECK (key)
	{
		if (localStorage.getItem(key) === null)
		{
			let value = await Database.INIT()
			
			Database.UPDATE(key, value, "MERGE")
		}
	}
}