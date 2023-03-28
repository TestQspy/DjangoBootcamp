var header = document.querySelector("h1")

function randomColor() {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}

function changeHeaderColor(){
    colorInput = randomColor()
    header.style.color = colorInput
}

// setInterval('changeHeaderColor()',500)
header.addEventListener("click",changeHeaderColor)
