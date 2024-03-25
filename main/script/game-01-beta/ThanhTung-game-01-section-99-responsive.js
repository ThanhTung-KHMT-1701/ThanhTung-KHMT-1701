let HOME = document.createElement("img")
	HOME.src = "/main/image/icon-home.png"
	HOME.alt = "Home"
	
	Object.assign(HOME.style,
		{
			position: "absolute",
			top: "5px",
			left: "5px",
			maxWidth: "2.5%"
		})
	
	HOME.onclick = function ()
	{
		open("ThanhTung-home.html", "_self")
	}
	
	document.body.appendChild(HOME)

let BUTTON_CHECK = document.querySelector(`div[data-alias="ThanhTung-game-01-button"]`)

window.onload = function ()
{
	let CONTAINER = document.querySelector(`div[data-alias="ThanhTung-game-01-container"]`)
	
		CONTAINER.style["position"] = "absolute"
		CONTAINER.style["top"] = `${BUTTON_CHECK.getBoundingClientRect().height + 10}px`
}

window.onresize = function ()
{
	let CONTAINER = document.querySelector(`div[data-alias="ThanhTung-game-01-container"]`)
	
		CONTAINER.style["position"] = "absolute"
		CONTAINER.style["top"] = `${BUTTON_CHECK.getBoundingClientRect().height + 10}px`
}