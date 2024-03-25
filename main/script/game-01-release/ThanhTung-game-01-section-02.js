(
    function ()
    {
        let G3_CTN = document.querySelector(`div[class="game-03"][data-alias="container"]`);
        let G3_ITEM = document.querySelectorAll(`div[class="game-03"][data-alias="item"]`);
        let G3_WORD = document.querySelectorAll(`div[class="game-03"][data-alias="word"]`);

            G3_CTN.style.setProperty("background-color", "lightslategray")
            G3_CTN.style.setProperty("background-image", "linear-gradient(lightskyblue, blue)")
            G3_CTN.style.setProperty("padding", "10px")
            G3_CTN.style.setProperty("border-color", "blue")
            G3_CTN.style.setProperty("width", "fit-content")
            G3_CTN.style.setProperty("display", "block")
            G3_CTN.style.setProperty("margin-left", "auto")
            G3_CTN.style.setProperty("margin-right", "auto")
            

            for (let e of G3_ITEM)
            {
                e.style.setProperty("display", "flex");
                e.style.setProperty("flex-direction", "row");
                e.style.setProperty("justify-content", "center");

                e.style.setProperty("padding", "5px")
                e.style.setProperty("margin", "50px")
                e.style.setProperty("background-color", "lightskyblue");
                e.style.setProperty("border-style", "dashed")
                e.style.setProperty("border-color", "white")
            }

            for (let e of G3_WORD)
            {
                console.log(e)

                e.style.setProperty("background-color", "black")
                e.style.setProperty("color", "white")
                e.style.setProperty("padding", "30px")
                e.style.setProperty("border-radius", "25px")
                e.style.setProperty("border-color", "whitesmoke")
            }
    }
)()