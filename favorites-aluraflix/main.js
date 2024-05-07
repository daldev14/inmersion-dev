const $form = document.querySelector("#form")
const $movieContainer = document.querySelector("#movieContainer")
const $errorMessage = document.querySelector("#errorMessage")
const listOfMovies = []

function handleSubmit(event) {
  event.preventDefault()
  const formData = new FormData($form)

  const moviePoster = formData.get("moviePoster")
  const movieTrailer = formData.get("movieTrailer")
  const movieName = formData.get("movieName")

  const urlsIsValid = validUrl({ poster: moviePoster, trailer: movieTrailer, name: movieName })

  if (!urlsIsValid) {
    if (!$errorMessage.classList.contains("hidden")) return
    toggleErrorMessage()
    return
  }

  if (!$errorMessage.classList.contains("hidden")) toggleErrorMessage()
  addMovie({ poster: moviePoster, trailer: movieTrailer, name: movieName })
  console.log(listOfMovies)

}

function validUrl({ poster, trailer, name }) {
  return (poster.endsWith("jpg") || poster.endsWith("jpeg")) && (trailer.includes("https://www.youtube.com/watch?v=")) && (name !== "")
}

function addMovie({ poster, trailer, name }) {
  const movie = {
    poster, trailer, name
  }

  listOfMovies.push(movie)
  $form.reset()
  showMovie()
}

function toggleErrorMessage() {
  $errorMessage.classList.toggle("hidden")
}

function showMovie() {
  const movie = listOfMovies[listOfMovies.length - 1]
  const nodeMovie = `
    <a href="${movie.trailer}" target="_blank" class="movie__link">  
      <div class="movie">
        <img
          src="${movie.poster}"
          alt=""
          class="movie__img"
        />
        <h2 class="movie__title">${movie.name}</h2>
      </div>
    </a>
  `
  $movieContainer.insertAdjacentHTML("beforeend", nodeMovie)
}

$form.addEventListener("submit", handleSubmit)
