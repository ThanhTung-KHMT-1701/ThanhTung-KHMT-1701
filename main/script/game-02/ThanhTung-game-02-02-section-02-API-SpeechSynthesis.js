if (localStorage.getItem("SpeechSynthesisVoice") === null) {
	speechSynthesis.addEventListener(`voiceschanged`, function ()
	{
		let DB_SpeechSynthesisVoice = []
		
		console.log(speechSynthesis.getVoices())
		
		speechSynthesis
			.getVoices()
			.forEach(function (value)
			{
				DB_SpeechSynthesisVoice.push(
					{
						name: value.name,
						voiceURI: value.voiceURI,
						lang: value.lang,
						localService: value.localService,
						default: value.default,
					})
			})
		
		localStorage.setItem("SpeechSynthesisVoice", JSON.stringify([...DB_SpeechSynthesisVoice]))
	})
}