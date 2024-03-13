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

class NODE
{
	index_01
	index_02

	constructor (index_01_INPUT, index_02_INPUT)
	{
		this.index_01 = index_01_INPUT
		this.index_02 = index_02_INPUT
	}
}

function ANALYSIS (String_01, String_02)
{
	const CloneString_01 = String_01
	const CloneString_02 = String_02

	let LCS = new Array(CloneString_01.length)
		for (let i = 1 - 1; i <= (CloneString_01.length - 1); ++i) LCS[i] = new Array(CloneString_02.length)
		for (let i = 1 - 1; i <= (CloneString_01.length - 1); ++i)
		{
			for (let j = 1 - 1; j <= (CloneString_02.length - 1); ++j)
			{
				LCS[i][j] = -1
			}
		}

	function FIND_LCS (A, B, R1, R2)
	{
		if (R1 === -1 || R2 === -1)
		{
			return 0
		}

		if (LCS[R1][R2] !== -1)
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

	let SET_LCS = new Set()
	function PRINT (X)
	{
		let RESULT = ""
		for (let i = 1 - 1; i <= (X.length - 1); ++i) RESULT += X[i]

		console.log(RESULT)

		SET_LCS.add(RESULT)
	}

	let CHARACTER = []
	function TRACE_LCS (A, B, R1, R2)
	{
		if (LCS[R1][R2] === -1) return 0;
		if (LCS[R1][R2] === 0)
		{
			PRINT(CHARACTER)

			CHARACTER.shift()

			return 0;
		}

		let T = LCS[R1][R2]

		if (A[R1] === B[R2])
		{
			CHARACTER.unshift(A[R1])

			if ((R1 - 1) >= 0 && (R2 - 1) >= 0)
			{
				TRACE_LCS(A, B, R1 - 1, R2 - 1)
			}
			else
			{
				PRINT(CHARACTER)
			}

			CHARACTER.shift()
		}
		else
		{
			let CASE_01 = (R1 - 1) >= 0 ? LCS[R1 - 1][R2] : -1e3
			let CASE_02 = (R2 - 1) >= 0 ? LCS[R1][R2 - 1] : -1e3

			if (T === CASE_01)
			{
				TRACE_LCS(A, B, R1 - 1, R2)
			}
			if (T === CASE_02)
			{
				TRACE_LCS(A, B, R1, R2 - 1)
			}
		}
	}

	/*DEBUG*/
	{
		FIND_LCS(CloneString_01, CloneString_02, CloneString_01.length - 1, CloneString_02.length - 1)
		TRACE_LCS(CloneString_01, CloneString_02, CloneString_01.length - 1, CloneString_02.length - 1)

		console.log(SET_LCS)
	}
}

// ANALYSIS ("ABCBDAB", "BDCABA")
ANALYSIS ("AACBBGGTACATGGAAGG", "AABBGGAAATAAGAGG")