 /*way to  declere the arry*/
 //first way
const arry = [1, 2, 3, 4, 5]
console.log(arry)


//second way
const myarry = new Array(1, 2, 3, 4)
console.log(myarry)


//methods of arry

//.length is the method to find the length of the arry
console.log(myarry.length)

//.push is the method to add the element in the arry

myarry.push(5)

console.log(myarry)
//.pop is the method to remove the last element of the arry

myarry.pop()
console.log(myarry)

//.unshift is the method to add the element at first position in the arry
/*we should not use this method  
because it shift all index position of the element present in the arry*/

myarry.unshift(8)
console.log(myarry)

//.shift is the method to remove the element fform the first position the arry

myarry.shift()
console.log(myarry)

//.includes method is used to chake the element is present or not

console.log(myarry.includes(0))
//indexof is the method which is used to find the position the element

console.log(myarry.indexOf(4))

//.join is the method used to convert the arry into string and bind it 

console.log(myarry.join())

//slice, splice

//slice is the method which is used to get the particuler element from the arry

console.log(myarry.slice(1, 3))

//splice is the methode used to manipulate the orignal arry
const arry1 = [1, 2, 3, 4, 5]
console.log(arry1)

console.log(arry1.splice(0, 3))
console.log(arry1)

