var fname = prompt("Type your first name: ")
var surename = prompt("Type your last name: ")
var age = prompt("Type your age: ")
var tall = prompt("Type your height: ")
var petName = prompt("Type your pet name: ")
console.log(petName[petName.length-1].toLowerCase())
if(fname[0].toLowerCase() == surename[0].toLowerCase() && (age>20 && age<30) && tall>=170 && petName[petName.length-1].toLowerCase() == "y"){
    console.log('Hello spy comrade!')
}else{
    console.log('Nothing to find here!')
}