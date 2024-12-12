let score = "33"//if "33" esa likhe h toh string pr 33 esa h toh number ayega

console.log(typeof score);
console.log(typeof(score));//written as a method another way 

let valueInNumber = Number(score)//isme convert krdiye h
console.log(typeof valueInNumber);
console.log(valueInNumber);// "nan- not a number" ara h mtlb number ni h .. mtlb ydi 333 ki jgha 33ab hota toh "nan" ata

//if "undefined "likhe h "33" ki place me tojh bhi "nan" ata
//if "boolean" lete toh jese "true" toh "1" ayega aur "false" me "0"
// "string" me nan ata h

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//convert hua h"1" "boolean" me

//""= false
// "hitesh"= true

let someNumber =33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));//shoing ki '33" number ni "string" h

