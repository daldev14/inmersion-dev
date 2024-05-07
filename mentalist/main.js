// secciones
const $startGame = document.querySelector("#startGame")
const $game = document.querySelector("#game")
const $endGame = document.querySelector("#endGame")
const $winner = document.querySelector("#winner")
const $loser = document.querySelector("#loser")

// formulario
const $gameForm = document.querySelector("#gameForm")

// inputs
const $inputAttempts = document.querySelector("#inputAttempts")

// botones
const $playButton = document.querySelector("#playButton")
const $playAgainButton = document.querySelector("#playAgainButton")

// textos
const $gameAttempts = document.querySelector("#gameAttempts")
const $gameMessage = document.querySelector("#gameMessage")
const $winnerMessage = document.querySelector("#winnerMessage")
const $loserMessage = document.querySelector("#loserMessage")

// let randomNumber = Math.floor(Math.random() * 101);
let randomNumber = null
let intentos = 0
let winner = false
let limitOfAttempts = false

$gameAttempts.innerHTML = `Intentos: ${intentos}`

function resetAttemps() {
  let message = ""

  if (!limitOfAttempts) {
    intentos = 0
    message = `Intentos: ${intentos}`
  }

  if (limitOfAttempts) {
    intentos = 10
    message = `Tines ${intentos} intentos restantes`
  }

  $gameAttempts.innerHTML = message
}

function resetGame() {
  $gameForm.reset()
  $winner.classList.add("hidden")
  $loser.classList.add("hidden")
  $gameMessage.innerHTML = ""
  resetAttemps()
  winner = false
}

function play() {
  randomNumber = Math.floor(Math.random() * 101)
}

function endGame() {
  $game.classList.add("hidden")
  $endGame.classList.remove("hidden")
  if (winner) {

    $winner.classList.remove("hidden")
  } else {
    $loserMessage.innerHTML = `El número secrero es ${randomNumber}`
    $loser.classList.remove("hidden")
  }
}

function setIntentos() {
  let message = ""

  if (limitOfAttempts === false) {
    intentos++
    message = `Intento: ${intentos}`
  }

  if (limitOfAttempts === true) {
    intentos--
    if (intentos > 1) message = `Tienes ${intentos} intentos restantes`
    else message = `Tienes ${intentos} intento restante`
  }

  $gameAttempts.innerHTML = message
}

$inputAttempts.addEventListener("change", (event) => {
  limitOfAttempts = event.target.checked
  resetAttemps()
})

$playButton.addEventListener("click", () => {
  $startGame.classList.add("hidden")
  $game.classList.remove("hidden")
  play()
})

$playAgainButton.addEventListener("click", () => {
  $endGame.classList.add("hidden")
  $startGame.classList.remove("hidden")
  resetGame()
})

$gameForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const formData = new FormData($gameForm)
  const userInput = formData.get("userInput")
  const userInputToNumber = Number(userInput)

  if (userInput === "") {
    $gameMessage.innerHTML = "Debes de ingresar un número entre el 1 y 100"
    $gameForm.reset()
    return
  }

  if (typeof userInputToNumber !== "number" || isNaN(userInputToNumber)) {
    $gameMessage.innerHTML = "Solo se permiten números"
    $gameForm.reset()
    return
  }

  setIntentos()

  if (limitOfAttempts && intentos === 0) {
    endGame()
    return
  }

  if (userInputToNumber === randomNumber) {
    let message = ""

    if (!limitOfAttempts) {
      if (intentos > 1)
        message = `Enhorabuena! Acertaste en ${intentos} intentos!`
      else message = `Enhorabuena! Acertaste al primer intento!`
    }

    if (limitOfAttempts) {
      const auxIntentos = 10 - intentos
      if (auxIntentos > 1)
        message = `Enhorabuena! Acertaste en ${auxIntentos} intentos!`
      else message = `Enhorabuena! Acertaste en ${auxIntentos} intento!`
    }

    $winnerMessage.innerHTML = message

    winner = true
    endGame()

    return
  }

  if (userInputToNumber < randomNumber) {
    const message = `El número secreto es mayor que ${userInputToNumber}`
    $gameMessage.innerHTML = message
  }

  if (userInputToNumber > randomNumber) {
    const message = `El número secreto es menor que ${userInputToNumber}`
    $gameMessage.innerHTML = message
  }

  $gameForm.reset()
})
