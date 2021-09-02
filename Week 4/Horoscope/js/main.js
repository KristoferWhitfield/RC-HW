document.querySelector('#convert').addEventListener('click', change)

function change() {

  const far = document.querySelector('#fah').value.toLowerCase()


  if (far === "may"){

  document.querySelector('#temp').innerText = "dog"

} else if (far === "january") {
  document.querySelector('#temp').innerText = "cat"
}


}
