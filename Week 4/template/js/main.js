// document.querySelector("#plus").addEventListener('click', addition)
// document.querySelector("#minus").addEventListener('click', subtraction)
// document.querySelector("#multiply").addEventListener('click', multiplication)
// document.querySelector("#divide").addEventListener('click', division)
//
//
// function addition(){
//   const dog = document.querySelector("#number1").valueAsNumber
//   const cat = document.querySelector("#number2").valueAsNumber
//
//   document.querySelector("#result").innerText = dog + cat
// }





for(let i = 1; i < 101; i++){
  if(i % 15 === 0){
    console.log("Fizzbuzz")
  }else if (i % 3 === 0){
    console.log("Fizz")
  }else if (i % 5 === 0) {
    console.log("Buzz")
  }else {
      console.log(i)
  }
}
