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
}