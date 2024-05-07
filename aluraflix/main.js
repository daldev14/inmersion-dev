const listOfMovies = [
  {
    name: 'Ahsoka',
    img: 'https://m.media-amazon.com/images/M/MV5BMWM1NjU1MDgtYjhjYS00Mjg5LWE1MWEtNzUwNWMxNTU2ZWY3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
  },
  {
    name: 'Bruja Escarlata y Visión',
    img: 'https://m.media-amazon.com/images/M/MV5BZjNkNDgzNjMtYzk0NS00MWNmLWI4NzYtM2E1YmQ4MDg3NDkyXkEyXkFqcGdeQXVyMTI5ODk3NDU1._V1_QL75_UY562_CR35,0,380,562_.jpg',
  },
  {
    name: 'El caballero oscuro',
    img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
  },
  {
    name: 'Invincible',
    img: 'https://m.media-amazon.com/images/M/MV5BN2Q1NWExNzEtM2M1Ny00ZDJhLWIwN2MtZGI5ZGI4MzBlYTQyXkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_QL75_UY562_CR35,0,380,562_.jpg',
  },
  {
    name: 'Loki',
    img: 'https://m.media-amazon.com/images/M/MV5BNWY1MmRmNWUtMDdhYi00MjZiLWI5ZmQtMzQzYTliM2ViNzZlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX1200_.jpg',
  },
  {
    name: 'Rick y Morty',
    img: 'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_QL75_UX380_CR0,4,380,562_.jpg',
  },
  {
    name: 'The Mandalorian',
    img: 'https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU2YS00NzBlLTgwZWUtYWQzNWFhNDkyYjg3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
  },
  {
    name: 'Vengadores: Endgame',
    img: 'https://m.media-amazon.com/images/M/MV5BY2NlNTdkMmUtZGJlNi00YzljLWFiNTktZjEyMzYwYzkwMGVmXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_QL75_UY562_CR7,0,380,562_.jpg',
  },
]

const movieContainer = document.querySelector('#movieContainer')

listOfMovies.map((movie) => {
  let item = `
    <article class="movie">
        <img
          src="${movie.img}"
          alt="${movie.name}"
          class="movie__img"
        />
      <h2 class="movie__title">${movie.name}</h2>
    </article>`

  movieContainer.insertAdjacentHTML('beforeend', item)
})
