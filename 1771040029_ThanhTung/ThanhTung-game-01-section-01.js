(
    function ()
    {
        /* Do chua lam xong phan IMPORT-EXPORT du lieu */
        localStorage.setItem("game-03", `[["I","always","go","to","school","by","motorbike"],["What", "time", "is", "it"],["There", "are", "many", "students", "over", "there"],["We", "do", "not", "talk", "anymore"],["Can","you","sing"]]`)

        let DB = JSON.parse(localStorage.getItem("game-03")) 
        let G3_CTN = document.querySelector(`div[class="game-03"][data-alias="container"]`)
        
        let iO = 1;
        for (let sentence of DB)
        {
            let G3_item = document.createElement("div");
                G3_item.setAttribute("class", "game-03")
                G3_item.setAttribute("data-alias", "item")
                G3_item.setAttribute("data-order", iO)
        
            let AR = [], i = 1
            for (let word of sentence)
            {
                AR.push({text: word, index: i, order: Math.random()});
                ++i;
            }
        
            AR.sort( function (a, b) 
            {
                if (a.order > b.order)
                {
                    return 1;
                }
                else if (a.order == b.order)
                {
                    return 0;
                }
                else
                {
                    return -1;
                }
            })
        
            let iW = 1;
            for (let OB of AR)
            {
                OB.order = iW;
                
                ++iW
            }
        
            AR.sort(function(a, b)
            {
                if (a.index > b.index)
                {
                    return 1;
                }
                else if (a.index == b.index)
                {
                    return 0;
                }
                else
                {
                    return -1;
                }
            })
        
            let answer = []
            for (let OB of AR)
            {
                answer.push(OB.order)
            }
        
            AR.sort( function (a, b) 
            {
                if (a.order > b.order)
                {
                    return 1;
                }
                else if (a.order == b.order)
                {
                    return 0;
                }
                else
                {
                    return -1;
                }
            })
            for (let OB of AR)
            {
                let G3_word = document.createElement("div")
                    G3_word.setAttribute("class", "game-03")
                    G3_word.setAttribute("data-alias", "word")
                    G3_word.setAttribute("data-order", OB.order)
                    G3_word.setAttribute("draggable", true)
                    G3_word.setAttribute("ondragstart", "Game_03_EVENT_DRAG(event)")
                    G3_word.setAttribute("ondragover", "Game_03_allowDrop(event)")
                    G3_word.setAttribute("ondrop", "Game_03_EVENT_DROP(event)")
                    G3_word.innerText = OB.text

                    G3_word.style.setProperty("margin", "5px");
        
                G3_item.append(G3_word)
            }
            
            G3_item.setAttribute("data-answer", JSON.stringify(answer))
            G3_CTN.append(G3_item)
        
            ++iO;
        }
    }
)()