function REMOVE_ALL_CHILDREN (X)
{
	while (X.lastChild)
	{
		X.lastChild.remove()
	}
}

/*FUNCTION-FOR-DEBUGGING*/
function CREATE_ELEMENT (text)
{
	let E = document.createElement("div")
	E.innerText = text
	
	E.style.setProperty("background-color", "black")
	E.style.setProperty("color", "white")
	E.style.setProperty("padding", "10px")
	E.style.setProperty("margin", "10px")
	
	return E
}

function CreateLayout (POSITION_PATH)
{
	let ROOT = document.querySelector(POSITION_PATH)
	let CONTAINER = document.createElement("div")
	let L_01 = document.createElement("div")
	let STT = document.createElement("div")
	let L_02 = document.createElement("div")
	let BTN = document.createElement("div")
	let L_03 = document.createElement("div")
	
	CONTAINER.setAttribute("data-alias", "ThanhTung-game-02-container")
	L_01.setAttribute("data-alias", "L_01-container")
	STT.setAttribute("data-alias", "STT-container")
	L_02.setAttribute("data-alias", "L_02-container")
	L_03.setAttribute("data-alias", "L_03-container")
	BTN.setAttribute("data-alias", "BUTTON")
	
	BTN.innerText = "NEXT TO"
	
	/*DEBUG*/
	{
		// STT.appendChild(CREATE_ELEMENT("1"))
		// STT.appendChild(CREATE_ELEMENT("2"))
		
		L_03.appendChild(CREATE_ELEMENT("1"))
		L_03.appendChild(CREATE_ELEMENT("2"))
	}
	
	CONTAINER.appendChild(L_01)
	CONTAINER.appendChild(STT)
	CONTAINER.appendChild(L_02)
	CONTAINER.appendChild(L_03)
	
	CONTAINER.appendChild(BTN)
	
	ROOT.appendChild(CONTAINER)
}

CreateLayout("body")
