/*
* **********************************************************************************************************************
*                               STEP-01: SPLIT a SENTENCE into WORDS and PUSH it into a ARRAY
* **********************************************************************************************************************
* */
/***
    @sentence is a STRING and CONTAIN the sentence input
    @wordlist is an ARRAY and CONTAIN the WORDS of the SENTENCE
 */
class TT_G2
{
	sentence
	wordlist = []
	constructor (sentence_input)
	{
		/*
		* **************************************************************************************************************
		*                                               PROCESS
		* --------------------------------------------------------------------------------------------------------------
		* step-01: STRING: Are you Happy in this113 MOder99n world?
		* step-02: STRING: are you happy in this113 moder99n world?
		* step-03: ARRAY : [are, you, happy, in, this, moder, n, world]
		* **************************************************************************************************************
		*/
		this.wordlist = sentence_input.toLowerCase().match(new RegExp(/([a-z]+)/g))
		/*
		* **************************************************************************************************************
		*                                               PROCESS
		* --------------------------------------------------------------------------------------------------------------
		* step-01: ARRAY : [are, you, happy, in, this, moder, n, world]
		* step-02: STRING: are,you,happy,in,this,moder,n,world
		* step-03: STRING: are you happy in this moder n world
		* **************************************************************************************************************
		*/
		this.sentence = this.wordlist.toString().replaceAll(/,/g, " ")
	}
}
/*
* **********************************************************************************************************************
*                                          STEP-02: LONGEST-COMMON-STRING
* **********************************************************************************************************************
* */
class NODE
{
	/*
	* ******************************************************************************************************************
	*                                             DATABASE-FOR-CLASS-NODE
	* *-----------------------------------------------------------------------------------------------------------------
	* */
	static SET_NODE = new Map()
	/*
	* ------------------------------------------------------------------------------------------------------------------
	*                                             DATABASE-FOR-CLASS-NODE
	* ******************************************************************************************************************
	* */
	ID_01
	ID_02
	
	child = {ID_01: null, ID_02: null}
	parent= {ID_01: null, ID_02: null}
	
	NUMBER_PATH = 0
	
	/*
	* ******************************************************************************************************************
	*                                             DATABASE-FOR-A-NODE
	* *-----------------------------------------------------------------------------------------------------------------
	* */
	SET_CHILDREN= new Set()
	/*
	* ------------------------------------------------------------------------------------------------------------------
	*                                             DATABASE-FOR-A-NODE
	* ******************************************************************************************************************
	* */
	
	ADD_CHILD (ID_OBJECT)
	{
		let KEY = JSON.stringify({ID_01: ID_OBJECT.ID_01, ID_02: ID_OBJECT.ID_02})
		
		this.SET_CHILDREN.add(KEY)
		
		// /*DEBUG*/
		// {
		// 	console.log(`this.ADD_CHILD()`)
		// 	console.log(`KEY: ${KEY}`)
		// 	console.log(`this`)
		// 	DEBUG(this)
		// }
	}
	
	constructor (ID_01_INPUT, ID_02_INPUT)
	{
		this.ID_01 = ID_01_INPUT
		this.ID_02 = ID_02_INPUT
		
		let KEY = JSON.stringify({ID_01: ID_01_INPUT, ID_02: ID_02_INPUT})
			// /*DEBUG*/ console.log(KEY)
			NODE.SET_NODE.set(KEY, this)
	}
	
	
	static GET_NODE (ID_OBJECT)
	{
		let KEY = JSON.stringify({ID_01: ID_OBJECT.ID_01, ID_02: ID_OBJECT.ID_02})
		let NODE_OB = NODE.SET_NODE.get(KEY)
		// /*DEBUG*/
		// {
		// 	console.log(`NODE.GET_NODE(${KEY})`)
		// 	console.log(`NODE_RESULT`)
		// 	DEBUG(NODE_OB)
		// }
		
		return NODE_OB
	}
}

function ANALYSIS (String_01, String_02, FLAG, POSITION_PATH)
{
	const CloneString_01 = String_01
	const CloneString_02 = String_02
	
	let LCS = new Array(CloneString_01.length)
	{
		for (let i = 1 - 1; i <= (CloneString_01.length - 1); ++i) LCS[i] = new Array(CloneString_02.length)
		for (let i = 1 - 1; i <= (CloneString_01.length - 1); ++i)
		{
			for (let j = 1 - 1; j <= (CloneString_02.length - 1); ++j)
			{
				LCS[i][j] = null
			}
		}
		// /*DEBUG*/ console.log(LCS)
	}

	function FIND_LCS (A, B, R1, R2)
	{
		if (R1 === -1 || R2 === -1)
		{
			return 0
		}
		
		if (LCS[R1][R2] !== null)
		{
			return LCS[R1][R2]
		}
		
		/*
		* **************************************************************************************************************
		*                                                  FORMULA
		* **************************************************************************************************************
		* */
		if (A[R1] === B[R2])
		{
			LCS[R1][R2] = 1 + FIND_LCS(A, B, R1 - 1, R2 - 1)
		}
		else
		{
			let CASE_01 = FIND_LCS(A, B, R1 - 1, R2)
			let CASE_02 = FIND_LCS(A, B, R1, R2 - 1)
			
				LCS[R1][R2] = Math.max(CASE_01, CASE_02)
		}
		
		return LCS[R1][R2]
	}
	
	let STATUS = new Array(CloneString_01.length)
	{
		for (let i = 1 - 1; i <= (CloneString_01.length - 1); ++i) STATUS[i] = new Array(CloneString_02.length)
		for (let i = 1 - 1; i <= (CloneString_01.length - 1); ++i)
		{
			for (let j = 1 - 1; j <= (CloneString_02.length - 1); ++j)
			{
				STATUS[i][j] = false
			}
		}
		// /*DEBUG*/ console.log(STATUS)
	}
	
	/*
	* ******************************************************************************************************************
	*                                               FUNCTION-TO-DEBUG
	* ------------------------------------------------------------------------------------------------------------------
	* */
	function DEBUG (InstanceNODE)
	{
		console.log(`ID_01       : ${InstanceNODE.ID_01}`.padEnd(25))
		console.log(`ID_02       : ${InstanceNODE.ID_02}`.padEnd(25))
		console.log(`SET_CHILDREN: ${JSON.stringify([...InstanceNODE.SET_CHILDREN])}`)
	}
	/*
	* ------------------------------------------------------------------------------------------------------------------
	*                                               FUNCTION-TO-DEBUG
	* ******************************************************************************************************************
	* */
		
	new NODE(null, null)
	new NODE(CloneString_01.length - 1, CloneString_02.length - 1)
	
	function TRACE_LCS (A, B, R1, R2)
	{
		STATUS[R1][R2] = true
		// /*DEBUG*/
		// {
		// 	console.log(`TRACE_LCS`)
		// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
		// }
		
		// /*DEBUG*/
		// {
		// 	console.log(`\n`)
		// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
		// 	console.log(`CurN`)
		// }
		let CurN = NODE.GET_NODE({ID_01: R1, ID_02: R2})
		
		// /*DEBUG*/
		// {
		// 	console.log(`\n`)
		// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
		// 	console.log(`ParN`)
		// }
		
		let ParN = NODE.GET_NODE(CurN.parent)
		
		// /*DEBUG*/
		// {
		// 	console.log(`\n\n`)
		// }
		
		if (A[R1] === B[R2])
		{
			CurN.child  = {ID_01: R1, ID_02: R2}
			// /*DEBUG*/
			// {
			// 	console.log(`CASE: A[R1] === B[R2] | A[${R1}] === B[${R2}]`)
			// 	console.log(`CurN.child`)
			// 	console.log(CurN.child)
			// 	console.log(`...`)
			// 	console.log(`ACTION: BEFORE`)
			// 	console.log(`ACTION: ParN.ADD_CHILD(CurN.child) | CurN.child = ID_01: ${CurN.child.ID_01}, ID_02: ${CurN.child.ID_02}`)
			// 	console.log(`\n`)
			// }
			
			ParN.ADD_CHILD(CurN.child)
			// /*DEBUG*/
			// {
			// 	console.log(`ACTION: AFTER`)
			// 	console.log(`ACTION: ParN.ADD_CHILD(CurN.child) | CurN.child = ID_01: ${CurN.child.ID_01}, ID_02: ${CurN.child.ID_02}`)
			// 	console.log(`ParN`)
			// 	DEBUG(ParN)
			// 	console.log(`\n`)
			// }
			
			if (LCS[R1][R2] === 1)
			{
				// /*DEBUG*/
				// {
				// 	console.log(`CASE: LCS[R1][R2] === 1 | LCS[${R1}][${R2}] === 1`)
				// 	console.log(`ACTION: BEFORE`)
				// 	console.log(`ACTION: ParN.ADD_CHILD({ID_01: R1, ID_02: R2}) | ParN.ADD_CHILD({ID_01: ${R1}, ID_02: ${R2})`)
				// 	console.log(`\n`)
				// }
				
				ParN.ADD_CHILD({ID_01: R1, ID_02: R2})
				
				// /*DEBUG*/
				// {
				// 	console.log(`\n`)
				// 	console.log(`ACTION: AFTER`)
				// 	console.log(`ACTION: ParN.ADD_CHILD({ID_01: R1, ID_02: R2}) | ParN.ADD_CHILD({ID_01: ${R1}, ID_02: ${R2})`)
				// 	console.log(ParN)
				// 	console.log(`\n\n`)
				// }
			}
			else if (LCS[R1][R2] >= 2)
			{
				// /*DEBUG*/
				// {
				// 	console.log(`CASE: LCS[R1][R2] >= 2 | LCS[${R1}][${R2}] >= 2`)
				// }
				
				let ChiN = new NODE(R1 - 1, R2 - 1)
					ChiN.parent = {ID_01: R1, ID_02: R2}
				
				// /*DEBUG*/
				// {
				// 	console.log(`ACTION: BEFORE`)
				// 	console.log(`ACTION: TRACE_LCS(A, B, R1 - 1, R2 - 1) | TRACE_LCS(A, B, ${R1 - 1}, ${R2 - 1})`)
				// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
				// 	console.log(`\n`)
				// }
					TRACE_LCS(A, B, R1 - 1, R2 - 1)
				
				// /*DEBUG*/
				// {
				// 	console.log(`\n`)
				// 	console.log(`ACTION: AFTER`)
				// 	console.log(`ACTION: TRACE_LCS(A, B, R1 - 1, R2 - 1) | TRACE_LCS(A, B, ${R1 - 1}, ${R2 - 1})`)
				// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
				// 	console.log(`....`)
				// 	console.log(`ACTION: BEFORE`)
				// 	console.log(`ACTION: CurN.ADD_CHILD(ChiN.child) | CurN.ADD_CHILD(ID_01: ${ChiN.child.ID_01}, ID_02: ${ChiN.child.ID_02})`)
				// 	console.log(`CurN`)
				// 	DEBUG(CurN)
				// 	console.log(`\n`)
				// }
				
					CurN.ADD_CHILD(ChiN.child)
				
				// /*DEBUG*/
				// {
				// 	console.log(`\n`)
				// 	console.log(`ACTION: AFTER`)
				// 	console.log(`ACTION: CurN.ADD_CHILD(ChiN.child) | CurN.ADD_CHILD(ID_01: ${ChiN.child.ID_01}, ID_02: ${ChiN.child.ID_02})`)
				// 	console.log(`CurN`)
				// 	DEBUG(CurN)
				// 	console.log(`ChiN`)
				// 	DEBUG(ChiN)
				// 	console.log(`\n\n`)
				// }
			}
		}
		else
		{
			if (R2 - 1 >= 0)
			{
				if (LCS[R1][R2] === LCS[R1][R2 - 1])
				{
					if (STATUS[R1][R2 - 1] === false)
					{
						// /*DEBUG*/
						// {
						// 	console.log(`CASE: R2 - 1 >= 0                     | R2 - 1 = ${R2 - 1}`)
						// 	console.log(`CASE: LCS[R1][R2] === LCS[R1][R2 - 1] | LCS[${R1}][${R2}] === LCS[${R1}][${R2 - 1}]`)
						// 	console.log(`CASE: STATUS[R1][R2 - 1] === false    | STATUS[${R1}][${R2 - 1}] === false`)
						// }
						
						let ChiN = new NODE(R1, R2 - 1)
							ChiN.parent = CurN.parent
						
						// /*DEBUG*/
						// {
						// 	console.log(`ACTION: BEFORE`)
						// 	console.log(`ACTION: TRACE_LCS(A, B, R1, R2 - 1) | TRACE_LCS(A, B, ${R1}, ${R2 - 1})`)
						// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
						// 	console.log(`\n`)
						// }
						
						TRACE_LCS(A, B, R1, R2 - 1)
						
						CurN.child = ChiN.child
						
						// /*DEBUG*/
						// {
						// 	console.log(`\n`)
						// 	console.log(`ACTION: AFTER`)
						// 	console.log(`ACTION: TRACE_LCS(A, B, R1, R2 - 1) | TRACE_LCS(A, B, ${R1}, ${R2 - 1})`)
						// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
						//
						// 	console.log(`CurN`)
						// 	DEBUG(CurN)
						//
						// 	console.log(`\n\n`)
						// }
					}
					else
					{
						// /*DEBUG*/
						// {
						// 	console.log(`CASE: STATUS[R1][R2 - 1] === true | STATUS[${R1}][${R2 - 1}] === true`)
						// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
						// }
						
						let ChiN = NODE.GET_NODE({ID_01: R1, ID_02: R2 - 1})
						
							if (A[R1] === B[R2 - 1])
							{
								// /*DEBUG*/
								// {
								// 	console.log(`CASE: A[R1] === B[R2 - 1] | A[${R1}] === B[${R2 - 1}]`)
								// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
								// }
								
								CurN.child = {ID_01: R1, ID_02: R2 - 1}
							}
							else
							{
								// /*DEBUG*/
								// {
								// 	console.log(`CASE: A[R1] !== B[R2 - 1] | A[${R1}] !== B[${R2 - 1}]`)
								// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
								// }
								
								CurN.child = ChiN.child
							}
						
						let GraN = NODE.GET_NODE(CurN.parent)
						
						// /*DEBUG*/
						// {
						// 	console.log(`CurN`)
						// 	DEBUG(CurN)
						// 	console.log(`ACTION: BEFORE`)
						// 	console.log(`ACTION: GraN.ADD_CHILD(CurN.child) | GraN.ADD_CHILD(${CurN.child})`)
						// 	console.log(`...`)
						// 	console.log(`GraN`)
						// 	DEBUG(GraN)
						// 	console.log(`\n`)
						// }
						
							GraN.ADD_CHILD(CurN.child)
						
						// /*DEBUG*/
						// {
						// 	console.log(`\n`)
						// 	console.log(`ACTION: AFTER`)
						// 	console.log(`ACTION: GraN.ADD_CHILD(CurN.child) | GraN.ADD_CHILD(${CurN.child})`)
						// 	console.log(`...`)
						// 	console.log(`GraN`)
						// 	DEBUG(GraN)
						//
						// 	console.log(`\n\n`)
						// }
					}
				}
			}
			
			if (R1 - 1 >= 0)
			{
				if (LCS[R1][R2] === LCS[R1 - 1][R2])
				{
					if (STATUS[R1 - 1][R2] === false)
					{
						// /*DEBUG*/
						// {
						// 	console.log(`CASE: R1 - 1 >= 0                     | R1 - 1 = ${R1 - 1}`)
						// 	console.log(`CASE: LCS[R1 - 1][R2] === LCS[R1][R2] | LCS[${R1}][${R2}] === LCS[${R1 - 1}][${R2}]`)
						// 	console.log(`CASE: STATUS[R1 - 1][R2] === false    | STATUS[${R1 - 1}][${R2}] === false`)
						// }
						
						let ChiN = new NODE(R1 - 1, R2)
							ChiN.parent = CurN.parent
						
						// /*DEBUG*/
						// {
						// 	console.log(`ACTION: BEFORE`)
						// 	console.log(`ACTION: TRACE_LCS(A, B, R1 - 1, R2) | TRACE_LCS(A, B, ${R1 - 1}, ${R2})`)
						// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
						// 	console.log(`\n`)
						// }
						
						TRACE_LCS(A, B, R1 - 1, R2)
						
						CurN.child = ChiN.child
						
						// /*DEBUG*/
						// {
						// 	console.log(`\n`)
						// 	console.log(`ACTION: AFTER`)
						// 	console.log(`ACTION: TRACE_LCS(A, B, R1 - 1, R2) | TRACE_LCS(A, B, ${R1 - 1}, ${R2})`)
						// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
						//
						// 	console.log(`CurN`)
						// 	DEBUG(CurN)
						//
						// 	console.log(`\n\n`)
						// }
					}
					else
					{
						// /*DEBUG*/
						// {
						// 	console.log(`CASE: STATUS[R1 - 1][R2] === true    | STATUS[${R1 - 1}][${R2}] === true`)
						// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
						// }
						
						let ChiN = NODE.GET_NODE({ID_01: R1 - 1, ID_02: R2})
						
						if (A[R1 - 1] === B[R2])
						{
							// /*DEBUG*/
							// {
							// 	console.log(`CASE: A[R1 - 1] === B[R2] | A[${R1 - 1}] === B[${R2}]`)
							// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
							// }
							
							CurN.child = {ID_01: R1, ID_02: R2 - 1}
						}
						else
						{
							// /*DEBUG*/
							// {
							// 	console.log(`CASE: A[R1 - 1] !== B[R2] | A[${R1 - 1}] !== B[${R2}]`)
							// 	console.log(`R1: ${R1}`.padEnd(10), `R2: ${R2}`.padEnd(10))
							// }
							
							CurN.child = ChiN.child
						}
						
						let GraN = NODE.GET_NODE(CurN.parent)
						
						// /*DEBUG*/
						// {
						// 	console.log(`CurN`)
						// 	DEBUG(CurN)
						// 	console.log(`ACTION: BEFORE`)
						// 	console.log(`ACTION: GraN.ADD_CHILD(CurN.child) | GraN.ADD_CHILD(${CurN.child})`)
						// 	console.log(`...`)
						// 	console.log(`GraN`)
						// 	DEBUG(GraN)
						// 	console.log(`\n`)
						// }
						
						GraN.ADD_CHILD(CurN.child)
						
						// /*DEBUG*/
						// {
						// 	console.log(`\n`)
						// 	console.log(`ACTION: AFTER`)
						// 	console.log(`ACTION: GraN.ADD_CHILD(CurN.child) | GraN.ADD_CHILD(${CurN.child})`)
						// 	console.log(`...`)
						// 	console.log(`GraN`)
						// 	DEBUG(GraN)
						//
						// 	console.log(`\n\n`)
						// }
					}
				}
			}
		}
	}
	
	FIND_LCS(CloneString_01, CloneString_02, CloneString_01.length - 1, CloneString_02.length - 1)
	TRACE_LCS(CloneString_01, CloneString_02, CloneString_01.length - 1, CloneString_02.length - 1)
	
	// /*DEBUG*/
	// {
	// 	for (let [key, value] of NODE.SET_NODE)
	// 	{
	// 		console.log(`KEY-NODE    `.padEnd(15), `${key}`.padEnd(30))
	// 		console.log(`SET-CHILDREN`.padEnd(15), JSON.stringify([...value.SET_CHILDREN]).padEnd(30))
	// 		console.log(`\n`)
	// 	}
	// }
	
	/*
	* ******************************************************************************************************************
	*                                             TRACE-ALL-PATH-OF-LCS
	* ------------------------------------------------------------------------------------------------------------------
	* */
	let PATH = new Set()
	let PATH_FLAG
		if (FLAG !== undefined)
		{
			PATH_FLAG = new Set()
		}
	/*
	* ------------------------------------------------------------------------------------------------------------------
	*                                             TRACE-ALL-PATH-OF-LCS
	* ******************************************************************************************************************
	* */
	
	for (let i = 1 - 1; i <= (CloneString_01.length - 1); ++i)
	{
		for (let j = 1 - 1; j <= (CloneString_02.length - 1); ++j)
		{
			STATUS[i][j] = false
		}
	}
	
	let SUPPORT = []
	let SUPPORT_FLAG
		if (FLAG !== undefined)
		{
			SUPPORT_FLAG = []
		}
	
	function DFS (NODE_ID)
	{
		let NODE_OBJECT = NODE.GET_NODE(NODE_ID)
		// /*DEBUG*/
		// {
		// 	console.log(`DFS (NODE_ID) | DFS ({ID_01: ${NODE_ID.ID_01}, ID_02: ${NODE_ID.ID_02}})`)
		// 	console.log(`...`)
		// 	console.log(`NODE_OBJECT`)
		// 	console.log(`...`)
		// 	DEBUG(NODE_OBJECT)
		// 	console.log(`\n`)
		//
		// 	console.log(NODE_OBJECT.SET_CHILDREN)
		// 	for (let e of NODE_OBJECT.SET_CHILDREN)
		// 	{
		// 		console.log(e)
		// 	}
		// }
		
		if (NODE_ID.ID_01 !== null || NODE_ID.ID_02 !== null)
		{
			SUPPORT.unshift(CloneString_01[NODE_ID.ID_01])
			
			if (FLAG !== undefined)
			{
				SUPPORT_FLAG.unshift(NODE_ID)
			}
		}
		
		if (NODE_OBJECT.SET_CHILDREN.size === 0)
		{
			NODE_OBJECT.NUMBER_PATH = 1
			
			PATH.add(SUPPORT.toString().replaceAll(/,/g, ""))
			
			if (FLAG !== undefined)
			{
				PATH_FLAG.add(JSON.stringify(SUPPORT_FLAG))
			}
		}
		else
		{
			for (let TEXT_NODE_ID of NODE_OBJECT.SET_CHILDREN)
			{
				let NODE_ID = JSON.parse(TEXT_NODE_ID)
				
				DFS(NODE_ID)
				
				let NODE_CHILD = NODE.GET_NODE(NODE_ID)
				
				if (NODE_OBJECT.ID_01 === null || NODE_OBJECT.ID_02 === null || STATUS[NODE_OBJECT.ID_01][NODE_OBJECT.ID_02] === false)
				{
					NODE_OBJECT.NUMBER_PATH += NODE_CHILD.NUMBER_PATH
				}
			}
			
			// /*DEBUG*/
			// {
			// 	console.log(`ACTION: AFTER`)
			// 	console.log(`ACTION: for (let TEXT_NODE_ID of NODE_OBJECT.SET_CHILDREN)`)
			// 	DEBUG(NODE_OBJECT)
			// 	console.log(`NUMBER_PATH`)
			// 	console.log(NODE_OBJECT.NUMBER_PATH)
			// }
		}
		
		if (NODE_ID.ID_01 !== null || NODE_ID.ID_02 !== null)
		{
			STATUS[NODE_ID.ID_01][NODE_ID.ID_02] = true
			
			SUPPORT.shift()
			
			if (FLAG !== undefined)
			{
				SUPPORT_FLAG.shift()
			}
		}
	}
	
	DFS ({ID_01: null, ID_02: null})
	
	/*DEBUG*/
	{
		console.log(`CloneString_01: ${CloneString_01}`)
		console.log(`CloneString_02: ${CloneString_02}`)
		console.log(`PATH`)
		console.table(PATH)
		
		if (FLAG !== undefined)
		{
			console.log(`PATH_FLAG`)
			console.log(PATH_FLAG)
			console.log(`\n`)
		}
	}
	
	// /*DEBUG*/
	// {
	// 	for (let [key, value] of NODE.SET_NODE)
	// 	{
	// 		let NODE_ID_OBJECT = JSON.parse(key)
	//
	// 		if (NODE_ID_OBJECT.ID_01 === null || NODE_ID_OBJECT.ID_02 === null || STATUS[NODE_ID_OBJECT.ID_01][NODE_ID_OBJECT.ID_02] === true)
	// 		{
	// 			console.log(`KEY-NODE    `.padEnd(15), `${key}`.padEnd(30))
	// 			console.log(`SET-CHILDREN`.padEnd(15), JSON.stringify([...value.SET_CHILDREN]).padEnd(30))
	// 			console.log(`NUMBER-PATH`.padEnd(15), value.NUMBER_PATH)
	// 			console.log(`\n`)
	// 		}
	// 	}
	// }
	
	if (FLAG === "HTML")
	{
		let POSITION
		
			POSITION = document.querySelector(POSITION_PATH)
			POSITION.style.setProperty("display", "flex")
			POSITION.style.setProperty("flex-direction", "column")
			POSITION.style.setProperty("background-color", "ghostwhite")
			POSITION.style.setProperty("align-items", "center")
		
		let L_01 = document.createElement(`div`)
		let L_02 = document.createElement(`div`)
		let L_03 = document.createElement(`div`)
		
			L_01.style.setProperty(`width`, `90%`)
			L_01.setAttribute(`data-alias`, `L_01-container`)
			L_01.style.setProperty(`display`, `flex`)
			L_01.style.setProperty(`flex-direction`, `row`)
			L_01.style.setProperty(`justify-content`, `center`)
			L_01.style.setProperty(`border`, `0.1em dashed gray`)
			L_01.style.setProperty(`border-radius`, `10em`)
			L_01.style.setProperty(`padding`, `1em`)
			L_01.style.setProperty(`background-color`, `lightskyblue`)
		
			L_02.style.setProperty(`width`, `90%`)
			L_02.setAttribute(`data-alias`, `L_02-container`)
			L_02.style.setProperty(`display`, `flex`)
			L_02.style.setProperty(`flex-direction`, `row`)
			L_02.style.setProperty(`justify-content`, `center`)
			L_02.style.setProperty(`border`, `0.1em dashed gray`)
			L_02.style.setProperty(`border-radius`, `10em`)
			L_02.style.setProperty(`padding`, `1em`)
			L_02.style.setProperty(`background-color`, `lightcyan`)
		
			L_03.style.setProperty(`width`, `fit-content`)
			L_03.setAttribute(`data-alias`, `L_03-container`)
			L_03.style.setProperty(`display`, `flex`)
			L_03.style.setProperty(`flex-direction`, `column`)
			L_03.style.setProperty(`border`, `0.1em dashed gray`)
			L_03.style.setProperty(`border-radius`, `10em`)
			L_03.style.setProperty(`padding`, `1.5em`)
			L_03.style.setProperty(`background-color`, `white`)
			L_03.style.setProperty(`color`, `black`)
		
			L_03.innerText = `Percentage: ${(LCS[CloneString_01.length - 1][CloneString_02.length - 1] / CloneString_01.length).toFixed(2)}\n\nNumberPath: ${PATH_FLAG.size}`
		
		for (let i = 1 - 1; i <= (CloneString_01.length - 1); ++i)
		{
			let TE = document.createElement(`div`)
				TE.setAttribute(`data-alias`, `L_01-item`)
				TE.setAttribute(`data-id`, i.toString())
				TE.style.setProperty(`display`, `block`)
				TE.style.setProperty(`padding`, `1em`)
				TE.style.setProperty(`border`, `0.5em double whitesmoke`)
				TE.style.setProperty(`margin`, `0.1em`)
				TE.style.setProperty(`border-radius`, `1em`)
				TE.style.setProperty(`background-color`, `black`)
				TE.style.setProperty(`color`, `white`)
				TE.style.setProperty(`text-align`, `center`)
				TE.innerText = CloneString_01[i]
			
			L_01.appendChild(TE)
		}
		
		for (let i = 1 - 1; i <= (CloneString_02.length - 1); ++i)
		{
			let TE = document.createElement(`div`)
				TE.setAttribute(`data-alias`, `L_02-item`)
				TE.setAttribute(`data-id`, i.toString())
				TE.style.setProperty(`display`, `block`)
				TE.style.setProperty(`padding`, `1em`)
				TE.style.setProperty(`border`, `0.5em double white`)
				TE.style.setProperty(`margin`, `0.1em`)
				TE.style.setProperty(`border-radius`, `1em`)
				TE.style.setProperty(`background-color`, `skyblue`)
				TE.style.setProperty(`color`, `white`)
				TE.style.setProperty(`text-align`, `center`)
				TE.innerText = CloneString_02[i]
			
			L_02.appendChild(TE)
		}
		
		POSITION.appendChild(L_01)
		POSITION.appendChild(document.createElement(`br`))
		POSITION.appendChild(L_02)
		POSITION.appendChild(document.createElement(`br`))
		POSITION.appendChild(L_03)
		
		/*
		* **************************************************************************************************************
		* ELEMENT: L_02-item | CREATE-DATABASE
		* --------------------------------------------------------------------------------------------------------------
		* */
		
		let CASE_STATUS = new Array(CloneString_02.length)
			for (let i = 1 - 1; i <= (CloneString_02.length - 1); ++i)
			{
				CASE_STATUS[i] = []
			}
		
		if (PATH_FLAG.size === 0)
		{
			for (let i = 1 - 1; i <= (CloneString_02.length - 1); ++i)
			{
				CASE_STATUS[i].push(true)
			}
		}
		else
		{
			for (let i = 1 - 1; i <= (CloneString_02.length - 1); ++i)
			{
				CASE_STATUS[i] = new Array(PATH_FLAG.size)
				
				for (let j = 1 - 1; j <= (CASE_STATUS[i].length - 1); ++j)
				{
					CASE_STATUS[i][j] = false
				}
			}
			
			let CN_CaseNumber = 0
			for (let E of PATH_FLAG)
			{
				let DATA = JSON.parse(E)
				
				for (let i = 1 - 1; i <= (DATA.length - 1); ++i)
				{
					CASE_STATUS[DATA[i].ID_02][CN_CaseNumber] = true
				}
				
				++CN_CaseNumber
			}
			
			// /*DEBUG*/
			// {
			// 	console.log(`CASE_STATUS[]`)
			// 	console.table(CASE_STATUS)
			// }
		}
		/*
		* --------------------------------------------------------------------------------------------------------------
		* ELEMENT: L_02-item | CREATE-DATABASE
		* **************************************************************************************************************
		* */
		
		/*
		* **************************************************************************************************************
		* ELEMENT: L_02-item | INSERT-DATABASE
		* --------------------------------------------------------------------------------------------------------------
		* */
		
		const L_01_Template =
			{
				item_backgroundColor: "black"
			}
			
		const L_02_Template =
			{
				item_backgroundColor_Wrong: "black",
				item_backgroundColor_Correct: "limegreen",
			}
		
		for (let i = 1 - 1; i <= (CloneString_02.length - 1); ++i)
		{
			let E = document.querySelector(`div[data-alias="L_02-item"][data-id="${i}"]`)
			
			let KeyFrame_Data = []
			for (let j = 1 - 1; j <= (CASE_STATUS[i].length - 1); ++j)
			{
				if (CASE_STATUS[i][j] === false)
				{
					KeyFrame_Data.push({backgroundColor: L_02_Template.item_backgroundColor_Wrong, transform: "scale(0)"})
				}
				else
				{
					KeyFrame_Data.push({backgroundColor: L_02_Template.item_backgroundColor_Correct, transform: "scale(1)"})
				}
			}
			
			E.animate
			(
				KeyFrame_Data,
				{
					duration: 1500 * PATH_FLAG.size,
					iterations: Infinity,
					easing: "ease-in-out",
					direction: "alternate-reverse"
				}
			)
		}
		/*
		* --------------------------------------------------------------------------------------------------------------
		* ELEMENT: L_02-item | INSERT-DATABASE
		* **************************************************************************************************************
		* */
	}
}

ANALYSIS (["Are","you","happy","in","this","modern","world", "ThanhTung", "?"], ["Are", "happy", "you", "this", "modern", "world", "to", "you", "ThanhTung"], "HTML", `div[data-alias="ThanhTung-Game-02"]`)