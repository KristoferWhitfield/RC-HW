//Create a function that takes in an array of numbers.
// Multiply each number together and alert the product.

function arrayOfNumbers(num){
  let product = 1
  num.forEach(x => product *= x)
  alert(product)
}

arrayOfNumbers([2,3,4])
