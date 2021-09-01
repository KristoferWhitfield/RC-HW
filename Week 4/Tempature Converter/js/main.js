document.querySelector('#convert').addEventListener('click', change)

function change(degree) {

  const far = document.querySelector('#fah').value


  celsius = (far - 32) * .5556 
  document.querySelector('#temp').innerText = celsius
}
