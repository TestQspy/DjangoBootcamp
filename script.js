var emplyee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        console.log(this.name.length)
    },
    lastName: function(){
        console.log(this.name.split(" ")[1])
    }
}

for (key in emplyee) {
    alert(key+" is "+emplyee[key])
};

