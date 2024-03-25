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