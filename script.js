// var header = document.querySelector("h1")

// function randomColor() {
//     var letters = "0123456789ABCDEF"
//     var color = "#"
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random()*16)]
//     }
//     return color
// }

// function changeHeaderColor(){
//     colorInput = randomColor()
//     header.style.color = colorInput
// }

// // setInterval('changeHeaderColor()',500)
// header.addEventListener("click",changeHeaderColor)
var controls = document.querySelectorAll(".tabledt")
var resetBtn = document.querySelector("#resetButton")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")

one.addEventListener("click",function(){
    if (one.innerHTML=="X") {
        one.innerHTML="O"
    }else if (one.innerHTML=="O"){
        one.innerHTML=""
    }else{
        one.innerHTML="X"
    }
})
two.addEventListener("click",function(){
    if (two.innerHTML=="X") {
        two.innerHTML="O"
    }else if (two.innerHTML=="O"){
        two.innerHTML=""
    }else{
        two.innerHTML="X"
    }
})
three.addEventListener("click",function(){
    if (three.innerHTML=="X") {
        three.innerHTML="O"
    }else if (three.innerHTML=="O"){
        three.innerHTML=""
    }else{
        three.innerHTML="X"
    }
})
four.addEventListener("click",function(){
    if (four.innerHTML=="X") {
        four.innerHTML="O"
    }else if (four.innerHTML=="O"){
        four.innerHTML=""
    }else{
        four.innerHTML="X"
    }
})
five.addEventListener("click",function(){
    if (five.innerHTML=="X") {
        five.innerHTML="O"
    }else if (five.innerHTML=="O"){
        five.innerHTML=""
    }else{
        five.innerHTML="X"
    }
})
six.addEventListener("click",function(){
    if (six.innerHTML=="X") {
        six.innerHTML="O"
    }else if (six.innerHTML=="O"){
        six.innerHTML=""
    }else{
        six.innerHTML="X"
    }
})
seven.addEventListener("click",function(){
    if (seven.innerHTML=="X") {
        seven.innerHTML="O"
    }else if (seven.innerHTML=="O"){
        seven.innerHTML=""
    }else{
        seven.innerHTML="X"
    }
})
eight.addEventListener("click",function(){
    if (eight.innerHTML=="X") {
        eight.innerHTML="O"
    }else if (eight.innerHTML=="O"){
        eight.innerHTML=""
    }else{
        eight.innerHTML="X"
    }
})
nine.addEventListener("click",function(){
    if (nine.innerHTML=="X") {
        nine.innerHTML="O"
    }else if (nine.innerHTML=="O"){
        nine.innerHTML=""
    }else{
        nine.innerHTML="X"
    }
})
resetBtn.addEventListener("click",function(){
    one.innerHTML=""
    two.innerHTML=""
    three.innerHTML=""
    four.innerHTML=""
    five.innerHTML=""
    six.innerHTML=""
    seven.innerHTML=""
    eight.innerHTML=""
    nine.innerHTML=""
})