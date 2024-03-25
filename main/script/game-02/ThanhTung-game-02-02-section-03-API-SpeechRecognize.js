/*
* **********************************************************************************************************************
*                                                       INITIALIZE DATA
* **********************************************************************************************************************
* */
if (localStorage.getItem("ThanhTung-game-02") === null)
{
	let DATA =
		[
			"Are you happy in this modern world?",
			"What time is it?",
			"Good morning, teacher",
			"So far, so good",
			"There are many flowers in the garden.",
			"Look at the board",
			"Just give me a reason",
			"We don't talk any more",
			"We are the world",
			"When you try to best, but you don't success",
			"Mary, did you know",
			"Once upon a time.",
			"What are you doing?",
			"I often go to school by car",
			"Don't forget to do your homework."
		]
	
	localStorage.setItem("ThanhTung-game-02", JSON.stringify(DATA))
}

let STRING_A = ["Are","you","happy","in","this","modern","world", "ThanhTung", "?"]
let STRING_B = ["Are", "happy", "you", "this", "tree", "modern", "world", "to", "you", "ThanhTung"]

ANALYSIS (STRING_A, STRING_B, "HTML", `div[data-alias="ThanhTung-game-02-container"]`)

let DATA = JSON.parse(localStorage.getItem("ThanhTung-game-02"))
let ID = Math.round(Math.random() * DATA.length)

// /*DEBUG*/
// {
// 	console.log(`STRING_A: `, STRING_A)
// }

/*LOCAL-SCOPE*/
{
	function CREATE_VolumeChart (ROOT_PATH, SVG_INPUT ,TIME) {
		/*
		* ******************************************************************************************************************
		*                                                   SVG_INPUT
		* ------------------------------------------------------------------------------------------------------------------
				{
					template:
						{
							SB_SpaceBetween: 5,
							BR_BorderRadius: 10
						},
					w: 0.01,
					width: 500,
					height: 50,
					x: 500,
					y: 500,
					backgroundColor: "ghostWhite",
					NCE_NumberChildElement: 50,
					ChildElement:
						{
							SB_SpaceBetween: 1e-2,
							BR_BorderRadius: 1e-2 * 50,
							backgroundColor: "deepskyblue"
						}
				}
		* ******************************************************************************************************************
		* */
		let SVG_Container
		
		if (TIME === null)
		{
			SVG_Container = document.createElementNS("http://www.w3.org/2000/svg", "svg")
			SVG_Container.setAttribute("width", SVG_INPUT.width)
			SVG_Container.setAttribute("height", SVG_INPUT.height)
			SVG_Container.setAttribute("x", SVG_INPUT.x)
			SVG_Container.setAttribute("y", SVG_INPUT.y)
			SVG_Container.style.setProperty("background-color", SVG_INPUT.backgroundColor)
			
			document.querySelector(ROOT_PATH).appendChild(SVG_Container)
		}
		else
		{
			SVG_Container = document.querySelector(ROOT_PATH)
		}
		// /*DEBUG*/
		// {
		// 	console.log(`SVG_Container`)
		// 	console.log(SVG_Container)
		// }
		
		const x0 = SVG_INPUT.x
		const y0 = SVG_INPUT.y
		
		const W = SVG_INPUT.width
		const H = SVG_INPUT.height
		
		const padding = Math.min(SVG_INPUT.template.SB_SpaceBetween, W * SVG_INPUT.ChildElement.SB_SpaceBetween)
		// /*DEBUG*/
		// {
		// 	console.log(`padding`)
		// 	console.log(padding)
		// }
		
		const MAIN =
			{
				x0: padding,
				y0: padding,
				width: W - 2 * padding,
				height: H - 2 * padding
			}
		
		MAIN.SBC_SpaceBetweenChild = Math.min(SVG_INPUT.template.SB_SpaceBetween, MAIN.width * SVG_INPUT.ChildElement.SB_SpaceBetween)
		// /*DEBUG*/
		// {
		// 	console.log(`MAIN`)
		// 	console.log(MAIN)
		// }
		
		const n = SVG_INPUT.NCE_NumberChildElement
		
		let ChildElement =
			{
				width: (MAIN.width - (n - 1) * MAIN.SBC_SpaceBetweenChild) / n,
				height: 1,
				x0: MAIN.x0,
				y0: MAIN.y0 + MAIN.height / 2
			}
		// /*DEBUG*/
		// {
		// 	console.log(`ChildElement`)
		// 	console.log(ChildElement)
		// }
		
		for (let i = 1; i <= n; ++i)
		{
			let SVG_Rectangle
			
			if (TIME === null)
			{
				SVG_Rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
				
				let RW_RectangleWidth = ChildElement.width
				let RH_RectangleHeight = ChildElement.height * Math.abs(Math.sin(i / n * Math.PI)) * MAIN.height
				// /*DEBUG*/
				// {
				// 	console.log(`RW_RectangleWidth: ${RW_RectangleWidth}`)
				// 	console.log(`RH_RectangleHeight: ${RH_RectangleHeight}`)
				// }
				
				SVG_Rectangle.setAttribute("data-index", i.toString())
				SVG_Rectangle.setAttribute("width", RW_RectangleWidth.toString())
				SVG_Rectangle.setAttribute("height", RH_RectangleHeight.toString())
				SVG_Rectangle.setAttribute("x", (ChildElement.x0 + (i - 1) * (ChildElement.width + MAIN.SBC_SpaceBetweenChild) +  ChildElement.width / 2).toString())
				SVG_Rectangle.setAttribute("y", (ChildElement.y0 - RH_RectangleHeight / 2).toString())
				SVG_Rectangle.setAttribute("rx", Math.min(SVG_INPUT.template.BR_BorderRadius, RW_RectangleWidth * SVG_INPUT.ChildElement.BR_BorderRadius).toString())
				SVG_Rectangle.setAttribute("ry", Math.min(SVG_INPUT.template.BR_BorderRadius, RH_RectangleHeight * SVG_INPUT.ChildElement.BR_BorderRadius).toString())
				SVG_Rectangle.setAttribute("fill", SVG_INPUT.ChildElement.backgroundColor)
				
				SVG_Container.appendChild(SVG_Rectangle)
				
				// /*DEBUG*/
				// {
				// 	console.log(`CASE | TIME: ${TIME}`)
				// 	console.log(`SVG_Rectangle`)
				// 	console.log(SVG_Rectangle)
				// }
			}
			else
			{
				SVG_Rectangle = SVG_Container.querySelector(`rect[data-index="${i}"]`)
				
				let CH_CurrentHeight = Number(SVG_Rectangle.getAttribute("height"))
				let CY_CurrentY_Axis = Number(SVG_Rectangle.getAttribute("y")) + CH_CurrentHeight / 2
				
				// /*DEBUG*/
				// {
				// 	console.log(`CASE | TIME: ${TIME}`)
				// 	console.log(`SVG_Rectangle`)
				// 	console.log(SVG_Rectangle)
				// 	console.log(`CH_CurrentHeight: ${CH_CurrentHeight}`)
				// 	console.log(`CY_CurrentY_Axis: ${CY_CurrentY_Axis}`)
				// }
				
				let toHeight = ChildElement.height * Math.abs(Math.sin(SVG_INPUT.w * TIME + i / n * Math.PI)) * MAIN.height
				let toY = CY_CurrentY_Axis - toHeight / 2
				
				SVG_Rectangle.setAttribute("height", toHeight.toString())
				SVG_Rectangle.setAttribute("y", toY.toString())
			}
		}
	}
	async function SPEECH_TO_TEXT (OPTION_INPUT, CHART_PATH) {
		/*
		* ******************************************************************************************************************
		*                                                       INPUT
		* ------------------------------------------------------------------------------------------------------------------
		{
			language: 'en-US',
			IR_InterimResult: false,
			MA_MaxAlternative: 3
		}
		* ******************************************************************************************************************
		* */
		/*
		* ******************************************************************************************************************
		*                                                       OUTPUT
		* ------------------------------------------------------------------------------------------------------------------
		{
			confidence: value.confidence,
			transcript: value.transcript
		}
		* ******************************************************************************************************************
		* */
		
		while (CHART_PATH.lastChild)
		{
			CHART_PATH.lastChild.remove()
		}
		
		return await new Promise(function (resolve, reject)
		{
			let DATA = []
			let SR_SpeechRecognition = new
			(
				window.SpeechRecognition
				||
				window.webkitSpeechRecognition
				||
				window.mozSpeechRecognition
				||
				window.msSpeechRecognition
			)();
			
			SR_SpeechRecognition.lang = OPTION_INPUT.language
			SR_SpeechRecognition.interimResults = OPTION_INPUT.IR_InterimResult
			SR_SpeechRecognition.maxAlternatives = OPTION_INPUT.MA_MaxAlternative
			
			// /*DEBUG*/
			// {
			// 	console.log(`ACTION: BEFORE`)
			// 	console.log(`ACTION: SR_SpeechRecognition.start()`)
			// 	console.log(`SR_SpeechRecognition`)
			// 	console.log(SR_SpeechRecognition)
			// }
			
			SR_SpeechRecognition.start()
			
			let time = 0
			let LOOP_TIME = setInterval
			(
				function ()
				{
					++time
					
					CREATE_VolumeChart(CHART_PATH, SVG_INPUT, time)
				},
				50
			)
			
			
			SR_SpeechRecognition.addEventListener("soundend", function ()
			{
				clearInterval(LOOP_TIME)
			})
			
			SR_SpeechRecognition.onresult = function(EVENT)
			{
				// /*DEBUG*/
				// {
				// 	console.log(`ACTION: SR_SpeechRecognition.addEventListener("result", function(EVENT) {})`)
				// 	console.log(`OBJECT: EVENT`)
				// 	console.log(EVENT)
				// }
				
				for (let value of EVENT.results[0])
				{
					// /*DEBUG*/
					// {
					// 	console.log(`ACTION: for (let value of EVENT.results[0])`)
					// 	console.log(`OBJECT: value`)
					// 	console.log(value)
					// }
					DATA.push(
						{
							confidence: value.confidence,
							transcript: value.transcript
						}
					)
				}
				
				DATA.sort(function (A, B)
				{
					if (A.confidence < B.confidence)
					{
						return 1;
					}
					else if (A.confidence === B.confidence)
					{
						return 0;
					}
					else
					{
						return -1;
					}
				})
				
				return resolve(DATA)
			}
		})
	}
	
	let STT = document.querySelector(`div[data-alias="STT-container"]`)
	
	const SVG_INPUT =
		{
			template:
				{
					SB_SpaceBetween: 5,
					BR_BorderRadius: 10
				},
			w: 0.05,
			width: STT.getBoundingClientRect().width,
			height: 100,
			x: 500,
			y: 500,
			backgroundColor: "white",
			NCE_NumberChildElement: 75,
			ChildElement:
				{
					SB_SpaceBetween: 1e-2,
					BR_BorderRadius: 1e-2 * 50,
					backgroundColor: "deepskyblue"
				}
		}
	
	let ICON = document.createElement("img")
		ICON.setAttribute("data-alias", "STT-item-icon")
		ICON.setAttribute("alt", "STT-item-icon")
		ICON.setAttribute("src", "image/microphone.svg")
	
	let OPTION_CTN = document.createElement("div")
		OPTION_CTN.setAttribute("data-alias", "STT-item-option-container")
	
	let OPTION_CHOOSE
	
	let CHART = document.createElement("div")
		CHART.setAttribute("data-alias", "STT-item-chart")
	
	STT.appendChild(CHART)
	STT.appendChild(ICON)
	STT.appendChild(OPTION_CTN)
	
	let CountPromise = false
	
	ICON.onclick = async function ()
	{
		if (CountPromise)
		{
			return -1;
		}
		else
		{
			let OPTION = document.querySelector(`div[data-alias="STT-item-option-container"]`)
			
			REMOVE_ALL_CHILDREN(CHART)
			REMOVE_ALL_CHILDREN(OPTION)
			
			CREATE_VolumeChart(`div[data-alias="STT-item-chart"]`, SVG_INPUT, null)
			
			CHART.style.setProperty("display", "block")
			
			CountPromise = true;
			
			let DATA = await SPEECH_TO_TEXT
			(
				{
					language: 'en-US',
					IR_InterimResult: false,
					MA_MaxAlternative: 3
				},
				`div[data-alias="STT-item-chart"]`
			)
			
			CountPromise = false
			
			// /*DEBUG*/
			// {
			// 	console.log(`ACTION: AFTER`)
			// 	console.log(`ACTION: await SPEECH_TO_TEXT`)
			// 	console.log(`CountPromise`)
			// }
			
			function CLICK_TO_OPTION_ITEM (EVENT)
			{
				OPTION_CHOOSE = EVENT.target.dataset.option
				
				let X
				
				for (let E of OPTION_CTN.children)
				{
					let O = E.dataset.option
					if (O === OPTION_CHOOSE)
					{
						X = E
					}
				}
				
				while(OPTION_CTN.lastChild)
				{
					OPTION_CTN.lastChild.remove()
				}
				
				X.style.setProperty("background-color", "limegreen")
				OPTION_CTN.appendChild(X)
				
				STRING_B = new TT_G2(X.innerText).wordlist
				// /*DEBUG*/
				// {
				// 	console.log(`STRING_A: `, STRING_A)
				// 	console.log(`STRING_B: `, STRING_B)
				// }
				
				ANALYSIS(STRING_A, STRING_B, "HTML", `div[data-alias="ThanhTung-game-02-container"]`)
			}
			
			for (let i = 1 - 1; i <= (DATA.length - 1);  ++i)
			{
				let OPTION_ITEM = document.createElement("div")
				OPTION_ITEM.setAttribute("data-alias", "STT-item-option-item")
				OPTION_ITEM.setAttribute("data-option", i.toString())
				
				OPTION_ITEM.onclick = CLICK_TO_OPTION_ITEM
				OPTION_ITEM.innerText = DATA[i].transcript
				
				OPTION_CTN.appendChild(OPTION_ITEM)
			}
		}
	}
}

