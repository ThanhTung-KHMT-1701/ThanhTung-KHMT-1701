function CreateLayout (X, NumberQuestion)
{
    const MAX_QUESTION = Math.min(NumberQuestion, DATABASE.length)
    // /*DEBUG*/
    // {
    //     console.log(`NumberQuestion: ${NumberQuestion}`)
    //     console.log(`DATABASE.length: ${DATABASE.length}`)
    //     console.log(`MAX_QUESTION = Math.min(NumberQuestion, DATABASE.length)`)
    //     console.log(`MAX_QUESTION = ${MAX_QUESTION}`)
    // }
    
    let CONTAINER = document.createElement("div")
        CONTAINER.setAttribute("data-alias", "ThanhTung-game-01-container")
    
    for (let i = 1 - 1; i <= (MAX_QUESTION - 1); ++i)
    {
        let ITEM = document.createElement("div");
            ITEM.setAttribute("data-alias", "ThanhTung-game-01-item")
        
        let WORDLIST = EssentialFunction.STRING_TO_WORDLIST(DATABASE[i])
        
        for (let j = 1 - 1; j <= (WORDLIST.length - 1); ++j)
        {
            let SINGLE_WORD = WORDLIST[j]
            let WORD = document.createElement("div")
                WORD.setAttribute("data-alias", "ThanhTung-game-01-word")
            
                WORD.setAttribute("data-position_true", j.toString())
                WORD.setAttribute("data-position_random", Math.random().toString())
                
                WORD.innerText = WORDLIST[j]
            
            ITEM.appendChild(WORD)
            
            ThanhTung_Animation.Number_01(WORD)
        }
        
        [...ITEM.children]
            .sort
            (
                function (a, b)
                {
                    return parseFloat(a.dataset.position_random) - parseFloat(b.dataset.position_random)
                }
            )
            .forEach(function (E)
            {
                ITEM.appendChild(E)
            })
        
        CONTAINER.appendChild(ITEM)
    }
    
    let BUTTON_CHECK = document.createElement("div")
        BUTTON_CHECK.setAttribute("data-alias", "ThanhTung-game-01-button")
        
        BUTTON_CHECK.innerText = "CHECK"
    
        BUTTON_CHECK.onclick = function ()
        {
            [...CONTAINER.children].forEach
            (
                function (ITEM)
                {
                    let Status = true
                    
                    let i = 0
                    for (let WORD of ITEM.children)
                    {
                        if (parseInt(WORD.dataset.position_true) !== i)
                        {
                            Status = false;
                            break;
                        }
                        else
                        {
                            ++i
                        }
                    }
                    
                    if (Status)
                    {
                        for (let WORD of ITEM.children)
                        {
                            WORD.style["backgroundColor"] = "darkgreen"
                            WORD.style["color"] = "limegreen"
                            
                            WORD.onmouseover = function () {}
                            WORD.onmouseout = function () {}
                            WORD.onclick = function () {}
                        }
                    }
                }
            )
        }
    
    X.appendChild(CONTAINER)
    X.appendChild(BUTTON_CHECK)
}

CreateLayout(document.body, 3)