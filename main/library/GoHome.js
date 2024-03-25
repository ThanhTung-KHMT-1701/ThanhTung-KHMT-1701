let HOME = document.createElement("img")
	HOME.src = "/main/image/icon-home.png"
	HOME.alt = "Home"

	Object.assign(HOME.style,
		{
			position: "sticky",
			top: "5px",
			left: "5px",
			maxWidth: "2.5%"
		})

	HOME.onclick = function ()
	{
		open("ThanhTung-home.html", "_self")
	}
	
	document.body.appendChild(HOME)

let CONTACT = document.createElement("img")
	CONTACT.src = "/main/image/icon-contact.png"
	CONTACT.alt = "Contact"

	Object.assign(CONTACT.style,
		{
			position: "sticky",
			top: "5px",
			right: "5px",
			maxWidth: "2.5%"
		})

	CONTACT.onclick = function ()
	{
		open("ThanhTung-contact.html", "_self")
	}

document.body.appendChild(CONTACT)