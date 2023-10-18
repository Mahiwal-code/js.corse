//function

function user(){
    console.log("M");
    console.log("a");
    console.log("h");
    console.log("i")

}

user()


function addTwonumber(number1,number2){
   return number1 + number2
   
}
console.log(addTwonumber(5,4))


//Function with object and arry


// using rest oprater  ...

function calculateCartPrice(...num1){
    return num1
}


console.log(calculateCartPrice(100, 200, 300, 400))



//how to pass the object in function

const user1 = {
    userName : "Mahiwal",
    age : 20
}

function handleObject(anyObject){
    console.log(`user name ${anyObject.userName} and age ${anyObject.age}`);
    return

}

handleObject(user1)
handleObject({
    userName : "Ambani",
    age : 23
})

const myArry = [100, 200, 300, 400]

function handleArry(getArry){
    console.log(getArry[1]
        
    )
}
handleArry(myArry)

//this key word

const user3 = {
    userName : "Mahi",
    age : 20,
    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
    }
}
user3.userName = "ambani"

user3.welcomeMessage()