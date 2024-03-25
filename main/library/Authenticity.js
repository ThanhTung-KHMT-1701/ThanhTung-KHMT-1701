class Authenticity
{
	static bodyDisplay
	static #KEY = "f623c533c35349c9e92326aa363596fb9019ae1ce45cfdc8d7c1ff364d484074"
	
	static async SHA_256 (text) {
		const array_8bit_input = new TextEncoder().encode(text)
		// /*DEBUG*/
		// {
		// 	console.log(`array_8bit_input`)
		// 	console.log(array_8bit_input)
		// }
		
		const arrayBuffer_hash = await crypto.subtle.digest("SHA-256", array_8bit_input)
		// /*DEBUG*/
		// {
		// 	console.log(`arrayBuffer_hash`)
		// 	console.log(arrayBuffer_hash)
		// }
		
		const array_8bit_hash = Array.from(new Uint8Array(arrayBuffer_hash))
		
		return array_8bit_hash
			.map(function (value) {
				// /*DEBUG*/
				// {
				// 	console.log(`value | 8-bit | decimal | ${value}`)
				// 	console.log(`value | 8-bit | hex     | ${value.toString(16).padStart(2, "0")}`)
				// }
				
				value = value.toString(16).padStart(2, "0")
				
				return value
			})
			.join("")
	}
	
	static async CHECK (text) {
		let Status = await Authenticity.SHA_256(text)
			/*DEBUG*/
			{
				console.log(`Authenticity.SHA_256(text)`)
				console.log(`Authenticity.SHA_256(${text})`)
				console.log(`Status: ${Status}`)
			}
			
		return (Status === Authenticity.#KEY)
	}
	static async REQUEST_CERTIFICATE ()
	{
		let Status
		let CERTIFICATE = localStorage.getItem("ThanhTung-CERTIFICATE")
		if (CERTIFICATE === null || CERTIFICATE !== "YES")
		{
			Status = false
		}
		
		while(Status === false)
		{
			let password = prompt("Enter the password to play")
			
			Status = await Authenticity.CHECK(password)
			
			if (Status)
			{
				localStorage.setItem("ThanhTung-CERTIFICATE", "YES")
			}
		}
		
		/*DEBUG*/
		{
			console.log(`Authenticity.REQUEST_CERTIFICATE`)
			console.log(`Authenticity.REQUEST_CERTIFICATE | DONE`)
		}
	}
}

(
	async function ()
	{
		await Authenticity.REQUEST_CERTIFICATE()
	}
)()