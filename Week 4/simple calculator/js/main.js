document.querySelector('#plus').addEventListener('click', addition)
document.querySelector('#minus').addEventListener('click', subtraction)
document.querySelector('#multiply').addEventListener('click', multiplication)
document.querySelector('#divide').addEventListener('click', division)


function addition(){
  const first = document.querySelector('#number1').valueAsNumber
  const second = document.querySelector('#number2').valueAsNumber
  document.querySelector('#result').innerText = first+second
}

function subtraction(){
  const first = document.querySelector('#number1').valueAsNumber
  const second = document.querySelector('#number2').valueAsNumber
  document.querySelector('#result').innerText = first-second
}

function multiplication(){
  const first = document.querySelector('#number1').valueAsNumber
  const second = document.querySelector('#number2').valueAsNumber
  document.querySelector('#result').innerText = first*second
}

function division(){
  const first = document.querySelector('#number1').valueAsNumber
  const second = document.querySelector('#number2').valueAsNumber
  document.querySelector('#result').innerText = first/second
}
