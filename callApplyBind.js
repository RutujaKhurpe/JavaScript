//call
//object.objectMethod.call( objectInstance, arguments )

const person = {
    fullname: function () {
        return this.firstname + "  " + this.lastname
    }
}

const person1 = {
    firstname: "rtuuja",
    lastname: "khurpe"
}
const person2 = {
    firstname: "kshitija",
    lastname: "khurpe"
}

console.log(person.fullname.call(person2))

//call
const person = {
    fullname: function (city, state) {
        return "hello " + this.firstname + ' ' + this.lastname + city + state
    }
}

const person1 = {
    firstname: "rutuja",
    lastname: "khurpe"
}

console.log(person.fullname.call(person1, "Belagavi", "karnataka"))


//call
const obj1 = {
    firstname : "firstname",
    lastname : "lastname"
}
const obj2 = {
    firstname :"rutuja",
    lastname : "khurpe"
}
function printname(){
    console.log(this.firstname + ' ' + this.lastname)
}
console.log(printname.call(obj1))

//apply
//object.objectMethod.apply(objectInstance, arrayOfArguments)

const obj1 = {
    firstname :"firstname",
    lastname : "lastname"
}

const obj2 = {
    firstname : "Sachin",
    lastname : "tendulkar"
}
function printName(){
    console.log(this.firstname + " " + this.lastname + " ")
}
console.log(printName.apply(obj1))

//apply
const obj1 = {
    firstname :"firstname",
    lastname : "lastname"
}

const obj2 = {
    firstname : "Sachin",
    lastname : "tendulkar",
}
function printName(profession, country){
    console.log(this.firstname + " " + this.lastname + " " + profession + ' ' + country)
}
console.log(printName.apply(obj2, ["cricketer", "india"]))

//bind
let nameObj = {
    name :"tonny"
}
let printName = {
    name : " steve",
    sayHi : function (){
        console.log(this.name)
    }
}
let HIfun = printName.sayHi.bind(nameObj)
console.log(HIfun)

//closure
function add(){
    let counter = 0
    function plus(){
        counter += 1
    }
    plus()
    return counter
}
const incre = add()
console.log(incre)

//self invoking function
const add = (function () {
    let counter = 0;
    return function(){
        counter += 1;
        return counter
    }
})()
const incre = add
console.log(incre)