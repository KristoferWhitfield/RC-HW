let counter = 0

document.querySelector("#oneBox").addEventListener("click", boxRotate)
// document.querySelector("#oneBox").addEventListener("click", upCount)

document.querySelector("#twoBox").addEventListener("click", boxRotateTwo)
document.querySelector("#threeBox").addEventListener("click", boxRotateThree)

document.querySelector("#oneBox").addEventListener("mousewheel", shapeChange)
// document.querySelector("#twoBox").addEventListener("dbclick", shapeChange)
// document.querySelector("#threeBox").addEventListener("dbclick", shapeChange)

// function boxRotate() {
//   let countClicks = document.querySelector("#oneBox").onclick = "boxRotate()"
//   let functCounter = countClicks + counter
//   console.log(functCounter)
//   if(functCounter === 3){
//     document.querySelector("#oneBox").style.transform += 'rotate(20deg)'
//   }else {
//     document.querySelector("#oneBox").style.transform += 'rotate(45deg)'
//   }
// }


function boxRotate(){
  document.querySelector("#oneBox").style.transform += 'rotate(45deg)'
  counter += 1
  changeColor()
}

function changeColor(){
  if(counter === 3){
    counter = 0
    document.querySelector('#twoBox').classList.toggle('backgroundHidden')
    document.querySelector('#threeBox').classList.toggle('backgroundHidden')
  }

}

function boxRotateTwo(){
  document.querySelector("#twoBox").style.transform += 'rotate(45deg)'
  counter += 1
  changeColorTwo()
}

function changeColorTwo(){
  if(counter === 3){
    counter = 0
    document.querySelector('#oneBox').classList.toggle('backgroundHidden')
    document.querySelector('#threeBox').classList.toggle('backgroundHidden')
  }
}

function boxRotateThree(){
  document.querySelector("#threeBox").style.transform += 'rotate(45deg)'
  counter += 1
  changeColorThree()
}

function changeColorThree(){
  if(counter === 3){
    counter = 0
    document.querySelector('#oneBox').classList.toggle('backgroundHidden')
    document.querySelector('#twoBox').classList.toggle('backgroundHidden')
  }
}


function shapeChange(e){
    e.target.style.borderRadius = '50%'
    e.target.style.marginLeft = '400px'
}

// function upCount() {
// let countClicks = 0;
//   if(document.querySelector("#oneBox").onclick = "boxRotate()") {
//   console.log(countClicks + 1);
//   }
// }
