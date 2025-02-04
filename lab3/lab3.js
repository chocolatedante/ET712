/**
 * Dante Vanderpool
 * Feb 4, Loops
 */
console.log("Dante Vanderpool")
console.log("\n---Example 1: for loops---")
// use a for loop to print from 0 to 4 --> 0 1 2 3 4
for(let n = 0; n<=4; n++){
    console.log(`counting = ${n}`)
}

console.log("\n---Example 2: for loop with conditional statement---")
// collect the initial value from the user
// print all even numbers between the initial value and 20
let initialvalue = parseInt(prompt("Enter anumber"))
for(initialvalue; initialvalue<=20; initialvalue++){
    if(initialvalue%2==0){
        console.log(initialvalue) // only print even numbers
    }
}

console.log("\n---Example 3: for loop as decrement counter---")
// for loop to print from 9 to 0 in a step of 3 --> 9 6 3 0
for(let n =9; n>=0; n-=3){
    console.log(n)
}

console.log("\n---Example 4: for loop in an array(list)---")
// set up a list of animals
let animals = ["fish", "turtle", "dog"]
for(let index=0; index<animals.length; index++){
    console.log(animals[index])
}
// set up a list of numbers
// count how many negative nubers are in the list
let numbers = [5, -3, 10, -9, 2]
let counternegative = 0
for(let index = 0; index<numbers.length; index++){
    if(numbers[index]<0){
        counternegative++
    }
}
console.log(`There are ${counternegative} negative numbers in the list 'numbers'`)

console.log("\n---Example 5: for loop in  a string---")
let username = "Peter Pan, neverland"
let counter_e = 0;
for(let index=0; index<username.length; index++){
    // console.log(username[index])
    // find the total number of letter 'e' in username
    if(username[index]==='e'){
        counter_e++
    }
}
console.log(`There are ${counter_e} letter e in 'username' `)

console.log("\n---Exercise for loop---")
let num= [-3, 10, 0, 8, -9, 5, -2, 8, 6, -1]
// use a for loop to check and add all negative numbers and all positive numbers
let x = 0
for(let index = 0; index<num.length; index++){
    if(num[index]<0){
        x += num[index]
    }
}
console.log(`The sum of all the negative numbers is ${x}`)

//else if