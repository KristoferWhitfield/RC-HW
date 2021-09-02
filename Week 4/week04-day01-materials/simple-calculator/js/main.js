let total = 0

document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#pumpkin').addEventListener('click', cat)
document.querySelector('#zebra').addEventListener('click', dog)
document.querySelector('#cantThinkOfAnything').addEventListener('click', horse)
document.querySelector('#dog').addEventListener('click', more)
document.querySelector('#cat').addEventListener('click', less)

function more() {
  total = total + 10
  document.querySelector('#placeToPutResult').innerText = total
}

function less() {
  total = total - 10
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function cat() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function dog() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerText = total
}

function horse() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerText = total
}
