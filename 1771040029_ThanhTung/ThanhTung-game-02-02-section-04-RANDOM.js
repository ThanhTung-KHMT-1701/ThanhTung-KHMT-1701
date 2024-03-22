let BTN = document.querySelector(`div[data-alias="BUTTON"]`)
	BTN.onclick = function ()
	{
		let L_01 = document.querySelector(`div[data-alias="L_01-container"]`)
		let L_02 = document.querySelector(`div[data-alias="L_02-container"]`)
		let L_03 = document.querySelector(`div[data-alias="L_03-container"]`)
		REMOVE_ALL_CHILDREN(L_01)
		REMOVE_ALL_CHILDREN(L_02)
		REMOVE_ALL_CHILDREN(L_03)
		
		let OPTION = document.querySelector(`div[data-alias="STT-item-option-container"]`)
		REMOVE_ALL_CHILDREN(OPTION)
		
		ID = Math.round(Math.random() * (DATA.length - 1))
		
		STRING_A = new TT_G2(DATA[ID]).wordlist
		
		for (let i = 1 - 1; i <= (STRING_A.length - 1); ++i)
		{
			let TE = document.createElement(`div`)
				TE.setAttribute(`data-alias`, `L_01-item`)
				TE.setAttribute(`data-id`, i.toString())
				TE.innerText = STRING_A[i]
			
			L_01.appendChild(TE)
		}
	}