//there are tow type of object
// 1 object literals
// 2 singleton

//object literals
//sentex to create the object

const user = {
    myname : "mahiwal",
    age : 20,
    location : "jharkhand",
    email : "mahiwal@mahi.com"
}

console.log(user["myname"])
console.log(user.email)

//way to add symbole in object
const mySym = Symbol("key2")

const myuser = {
    myname : "mahiwal",
    age : 20,
    [mySym] : "key2",
    location : "jharkhand",
    email : "mahiwal@mahi.com"
}

console.log(typeof myuser[mySym])

//console.log(myuser)

myuser.public = function(){
    console.log(`hello ${this.myname}`)
}

console.log(myuser.public())