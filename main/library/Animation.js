class ThanhTung_Animation
{
	static MEMORY =
		{
			Number_01: []
		}
	
	static Number_01 (X)
	{
		let Origin_BackgroundColor = getComputedStyle(X).backgroundColor
		
		let KEYFRAME_HOVER = new KeyframeEffect (
			X,
			[
				{
					offset: 0.5,
					transform: " scale(0.9)"
				},
				{
					offset: 1.0,
					transform: " scale(1.1)"
				}
			],
			{
				duration: 1500,
				iterations: Infinity,
				direction: "alternate-reverse"
			}
		)
		
		let ANIMATION_HOVER = new Animation (KEYFRAME_HOVER, document.timeline)
		
		X.onclick = async function ()
		{
			ANIMATION_HOVER.cancel()
			
			ThanhTung_Animation.MEMORY.Number_01.push(X)
			
			const CAPACITY = ThanhTung_Animation.MEMORY.Number_01.length
			
			X.style["backgroundColor"] = "deepskyblue"
			Origin_BackgroundColor = "deepskyblue"
			
			if (CAPACITY === 2)
			{
				let NODE_LIST = ThanhTung_Animation.MEMORY.Number_01
				let A = NODE_LIST[0]
				let B = NODE_LIST[1]
				
				/*DEBUG*/
				{
					console.log(`A`)
					console.log(A)
					console.log(`B`)
					console.log(B)
				}
				
				let First
				let Second
				
				if (A.dataset.position_random < B.dataset.position_random)
				{
					First = A
					Second = B
				}
				else
				{
					First = B
					Second = A
				}
				
				await ThanhTung_Animation.Number_02(First, Second, 3000)
				
				ThanhTung_Animation.MEMORY.Number_01 = []
			}
		}
		
		X.onmouseover = function ()
		{
			X.style["backgroundColor"] = "orange"
			
			ANIMATION_HOVER.play()
		}
		
		X.onmouseout = function ()
		{
			X.style["backgroundColor"] = Origin_BackgroundColor
			
			ANIMATION_HOVER.cancel()
		}
	}
	
	static async Number_02 (A_INPUT, B_INPUT, time)
	{
		console.log(A_INPUT.innerText)
		console.log(B_INPUT.innerHTML)
		
		const OriginWidth_A= A_INPUT.getBoundingClientRect().width
		const OriginWidth_B=  B_INPUT.getBoundingClientRect().width
		const MAX_WIDTH = Math.max(OriginWidth_A, OriginWidth_B)
		
		A_INPUT.style["width"] = `${MAX_WIDTH}px`
		B_INPUT.style["width"] = `${MAX_WIDTH}px`
		
		const K_1 = 2
		
		const A = EssentialFunction.GET_OXY(A_INPUT)
		const B = EssentialFunction.GET_OXY(B_INPUT)
		
		const DELTA = A.dy * (1 + K_1 + 1)
		
		let A_offsetPath = `M ${A.dx} ${A.dy} V ${DELTA} H ${B.x - A.x + A.dx} V ${A.dy}`
		let B_offsetPath = `M ${B.dx} ${B.dy} V ${-DELTA} H ${(-1) * (B.x - A.x - A.dx)} V ${A.dy}`
		
		A_INPUT.style["offsetPath"] = `path('${A_offsetPath}')`
		B_INPUT.style["offsetPath"] = `path('${B_offsetPath}')`
		
		let KEYFRAME =
			[
				{
					offset: 0.0,
					offsetDistance: "0.0%"
				},
				{
					offset: 1.0,
					offsetDistance: "100%"
				}
			]
		
		let OPTION =
			{
				duration: time,
				easing: "ease-in-out"
			}
		
		let A_KEYFRAME = new KeyframeEffect(A_INPUT, KEYFRAME, OPTION)
		let B_KEYFRAME = new KeyframeEffect(B_INPUT, KEYFRAME, OPTION)
		
		let A_ANIMATION = new Animation(A_KEYFRAME, document.timeline)
		let B_ANIMATION = new Animation(B_KEYFRAME, document.timeline)
		
			A_INPUT.style["transform"] = "rotate(90deg)"
			B_INPUT.style["transform"] = "rotate(-90deg)"
		
			setTimeout
			(
				function ()
				{
					A_ANIMATION.cancel()
					B_ANIMATION.cancel()
					
					A_INPUT.style["transform"] = "rotate(-90deg)"
					B_INPUT.style["transform"] = "rotate(90deg)"
					
					let preA = document.createElement("div")
					let preB = document.createElement("div")

					A_INPUT.insertAdjacentElement("beforebegin", preA)
					B_INPUT.insertAdjacentElement("beforebegin", preB)

					preA.insertAdjacentElement("afterend", B_INPUT)
					preB.insertAdjacentElement("afterend", A_INPUT)

					preA.remove()
					preB.remove()
					
					A_INPUT.style["backgroundColor"] = "black"
					B_INPUT.style["backgroundColor"] = "black"
				},
				time
			)
		
			A_ANIMATION.play()
			B_ANIMATION.play()
	}
}