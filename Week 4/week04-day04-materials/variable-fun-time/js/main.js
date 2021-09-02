//--- Easy
//create a variable and assign it a number
let num = 100
//minus 10 from that number
num -= 10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
let enteredNum = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
enteredNum += 25
//alert that number
alert(enteredNum)
//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two
// previous variables

h1.addEventListener('click', sum)

function sum(){
  console.log(num + enteredNum)
}
