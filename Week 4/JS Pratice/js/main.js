// Variables
// Create a variable, reassign the value, add the value to the dom
let dog = 'cat'
cat = 'water'

document.querySelector('h1').innerText = dog

// Create a variable, multiply it by itself, replace a number in the dom with
// the new number from the multiplication//

let multiply = 6
multiply = multiply * multiply

document.querySelector('h2').innerText = multiply

// Functions
// Create a function that takes in one argument. That argument should be a
// Fahrenheit value to be converted to Celcius. Console log the converted valueh

function converter(Fahrenheit) {
  let celcius = (Fahrenheit - 32) * .5556
  console.log (celcius)
}



// Create a function takes in two arguments. Create a function that takes in one
 // argument and alerts that value. Call the second function with an argument that
 // is the sum from the original two argument function.
//
function twoChains(n1, n2){
  let sum = n1 + n2
  oneChain(sum)
}

function oneChain(n1){
  alert(n1)
}

twoChains(5,6)

// Conditionals
// Create a function that choses a random throw of rock, paper, scissors, lizard,
// spock and alerts the random choice

function rockPaperLizards() {
  let choice = Math.floor(Math.random(5))

  if(choice === 0){
    alert (rock)
  }else if(choice === 1) {
    alert (paper)
  }else if(choice === 2) {
    alert (scissors)
  }else if(choice === 3) {
    alert (lizard)
  }else (choice === 4) {
    alert (spock)
  }
}

// Create a function that takes in two numbers. If the second number is divisible
 // by the first, alert the product of those two numbers. If not, alert the sum of those
 // two numbers.

 function alertPro(n1, n2){
   if(n2 % n1 === 0){
     alert(n2 * n1)
   }else {
     alert(n1+ n2)
   }
 }
