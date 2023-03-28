//get all cell
var controls = document.querySelectorAll(".tabledt")
//get button element
var resetBtn = document.querySelector("#resetButton")
//clear all cells by clicking a reset game button
function clearCells(){
    for (var i = 0; i < controls.length; i++) {
        controls[i].innerHTML = ""
    }
}
// clear cells button click event listener
resetBtn.addEventListener("click",clearCells)

function changeMarker() {
    if (this.innerHTML=="") {
        this.innerHTML="X"
    } else if (this.innerHTML=="X"){
        this.innerHTML="O"
    }else{this.innerHTML=""}
}

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener("click",changeMarker)
    
}
