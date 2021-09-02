//Create a function that grabs the number of snacks from the input and tells you
// to stop that many times


document.querySelector('#help').addEventListener('click', stopSnacking)



function stopSnacking(){
  const eats = document.querySelector('input').value
  for(let i = 0; i < eats; i++){
    document.querySelector('#stops').innerText += 'Stop'
  }
}
