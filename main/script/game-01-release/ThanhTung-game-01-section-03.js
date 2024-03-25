const DEFAULT = {
    color_word: "orange",
    color_word_dragstart: "orange",
    color_word_correct: "limegreen"
}

/* ............... */
/* Global-Variable */
/* ............... */
let EC_DRAG;

function Game_03_item (EX)
{
    let ANSWER = JSON.parse(EX.dataset.answer);
    
    let i = 1 - 1;
    for (let EOB of EX.children)
    {
        console.log(Number(EOB.dataset.order));

        if (Number(EOB.dataset.order) == ANSWER[i])
        {
            EOB.style.setProperty(`background-color`, `${DEFAULT.color_word_correct}`);
        }

        ++i;
    }
}
/* ............... */
/* Global-Variable */
/* ............... */

(
    function ()
    {
        let G3_CTN = document.querySelector(`div[class="game-03"][data-alias="container"]`);
            for (let EOB of G3_CTN.children)
            {
                if (EOB.getAttribute("data-alias") == "item")
                {
                    Game_03_item(EOB);
                }
            }
    }
)()

function Game_03_allowDrop (OBJECT_EVENT) 
{
    OBJECT_EVENT.preventDefault();
}

function Game_03_EVENT_DRAG (OBJECT_EVENT)
{
    EC_DRAG = OBJECT_EVENT.target;

    EC_DRAG.style.setProperty(`background-color`, `${DEFAULT.color_word_dragstart}`);
}

function Game_03_EVENT_DROP (OBJECT_EVENT)
{
    let EC_Target = OBJECT_EVENT.target;

    if (EC_DRAG.parentElement != EC_Target.parentElement)
    {
        return -1;
    }
    else
    {
        let ANSWER = JSON.parse(OBJECT_EVENT.target.parentElement.dataset.answer);
        let EC_Target_OXY = Game_03_GET_OXY(EC_Target);
    
        let EP = EC_Target.parentElement;
            if ((OBJECT_EVENT.pageX - EC_Target_OXY.x1) / (EC_Target_OXY.x2 - EC_Target_OXY.x1) < 0.5)
            {
                EP.insertBefore(EC_DRAG, EC_Target);
            }
            else
            {
                EP.insertBefore(EC_DRAG, EC_Target.nextSibling);
            }
    
        let i = 1 - 1;
        for (let EOB of EP.children)
        {
            if (Number(EOB.dataset.order) == ANSWER[i])
            {
                EOB.style.setProperty(`background-color`, `${DEFAULT.color_word_correct}`);
            }
            else
            {
                EOB.style.setProperty(`background-color`, `${DEFAULT.color_word}`);
            }
    
            ++i;
        }
    
        i = 1 - 1;
        let Status = true;
        for (let EOB of EP.children)
        {
            let order = Number(EOB.dataset.order);
    
            if (order != ANSWER[i])
            {
                Status = false;
                break;
            }
            else
            {
                ++i;
            }
        }
    
        if (Status)
        {
            console.log("OK");
        }
    }

}

function Game_03_GET_OXY (EI)
{
    return {
        x1: EI.getBoundingClientRect().left,
        y1: EI.getBoundingClientRect().top,
        x2: EI.getBoundingClientRect().right,
        y2: EI.getBoundingClientRect().bottom
    }
}