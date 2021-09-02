document.querySelector('#convert').addEventListener('click', change)

function change() {

  const far = document.querySelector('#fah').value


  celsius = (far - 32) * .5556
  document.querySelector('#temp').innerText = celsius
}
