let HOME = document.createElement("img")
	HOME.src = "icon-home.png"
	HOME.alt = "Home"

	Object.assign(HOME.style,
		{
			position: "sticky",
			top: "5px",
			left: "5px",
			width: `clamp(2rem, 5vw, 3rem)`
		})

	HOME.onclick = function ()
	{
		open("ThanhTung-home.html", "_self")
	}
	
	document.body.appendChild(HOME)

let CONTACT = document.createElement("img")
	CONTACT.src = "icon-contact.png"
	CONTACT.alt = "Contact"

	Object.assign(CONTACT.style,
		{
			position: "sticky",
			top: "5px",
			right: "5px",
			width: `clamp(2rem, 5vw, 3rem)`
		})

	CONTACT.onclick = function ()
	{
		open("ThanhTung-contact.html", "_self")
	}

document.body.appendChild(CONTACT)