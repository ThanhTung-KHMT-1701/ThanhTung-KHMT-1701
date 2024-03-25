class EssentialFunction
{
	static GET_SPACE_FOR_CHILDREN (X)
	{
		const STYLE = getComputedStyle(X)
		
		let RESULT =
			{
				width: 0,
				height: 0
			}
		
		if (X.style.getPropertyValue("box-sizing") === "content-box")
		{
			RESULT.width = X.getBoundingClientRect().width
			RESULT.height = X.getBoundingClientRect().height
		}
		else
		{
			const BoPa = parseFloat(STYLE.borderWidth) + parseFloat(STYLE.padding)
			
			RESULT.width = X.getBoundingClientRect().width - 2 * BoPa
			RESULT.height = X.getBoundingClientRect().height - 2 * BoPa
		}
		
		if (RESULT.width === 0 || RESULT.height === 0)
		{
			++ErrorStatistics.GET_SPACE_FOR_CHILDREN
			
			alert(`GET_SPACE_FOR_CHILDREN.INF_01`)
			
			console.error(`GET_SPACE_FOR_CHILDREN.INF_01`)
			console.error(`X`)
			console.error(X)
		}
		
		return RESULT
	}
	static STRING_TO_WORDLIST (text)
	{
		return text.toLowerCase().match(new RegExp(/([a-z]+)/g))
	}
	static WORDLIST_TO_STRING (wordlist)
	{
		return wordlist.toString().replaceAll(/,/g, " ")
	}
	
	static GET_OXY (E)
	{
		let BoundingClientRect = E.getBoundingClientRect()
		return {
				x: (BoundingClientRect.left + BoundingClientRect.right) / 2,
				y: (BoundingClientRect.top + BoundingClientRect.bottom) / 2,
				dx: BoundingClientRect.width / 2,
				dy: BoundingClientRect.height / 2
			}
	}
}