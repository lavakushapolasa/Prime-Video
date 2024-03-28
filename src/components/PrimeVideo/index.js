// Write your code here
import MovieSlider from '../MoviesSlider'

import './index.css'

const movieCategory = {
  action: 'ACTION',
  comedy: 'COMEDY',
}

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === movieCategory.action,
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === movieCategory.comedy,
  )

  return (
    <div className="prime-app">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="movies-container">
        <h1>Action Movies</h1>
        <MovieSlider moviesDetails={actionMoviesList} />
        <h1>Comedy Movies</h1>
        <MovieSlider moviesDetails={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
