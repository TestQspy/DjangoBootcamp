var users = []
var fname = ""
while (true) {
    var choice = prompt("Type one of the specific action: \nadd - to add new user to the array \nremove - to remove specific user from the array \ndisplay - to print out all of the users \nquit - to end the loop")
    if (choice.toLowerCase() === "quit") {
        break
    } else if (choice.toLowerCase() === "add"){
        fname = prompt("Please type a first name to add a user: ")
        users.push(fname)
    } else if (choice.toLowerCase() === "remove"){
        fname = prompt("Please type a first name to remove a user: ")
        var index = users.indexOf(fname);
        if (index > -1) {
          users.splice(index, 1); // remove the element at the specified index
        }
    } else if (choice.toLowerCase()=="display"){
        console.log(users)
    }
}