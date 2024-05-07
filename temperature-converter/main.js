const $input = document.querySelector("#temperature")
const $celsius = document.querySelector("#celsius")
const $fahrenheit = document.querySelector("#fahrenheit")
const $kelvin = document.querySelector("#kelvin")
const btn = document.querySelector("#btn")

function convert() {
  const celsiusValue = Number($input.value)
  const fahrenheitValue = (celsiusValue * 9 / 5) + 32
  const kelvinValue = celsiusValue + 273.15
  $celsius.innerHTML = celsiusValue
  $fahrenheit.innerHTML = fahrenheitValue
  $kelvin.innerHTML = kelvinValue
}

btn.addEventListener("click", convert)