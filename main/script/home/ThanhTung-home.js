let BUTTON_LIST = document.querySelectorAll(`button[class="button"]`)
	BUTTON_LIST.forEach
	(
		function (E)
		{
			E.onclick = function ()
			{
				let PARENT = E.parentElement
					
					open(PARENT.dataset.link, "_self")
			}
		}
	)