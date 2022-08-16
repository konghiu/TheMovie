import FirstDebut from './FirstDebut'
import FilmPlaying from './FilmPlaying'
import MovieReviewsFirst from './MovieReviewsFirst'
import SecondDebut from './SecondDebut'
import './homepage.css'
import MovieReviewsSecond from './MovieReviewsSecond'

const Homepage = () => {

     return (
          <div className='width-screen bg-main'>
               <FirstDebut  />
               <FilmPlaying />
               <MovieReviewsFirst />
               <SecondDebut />
               <MovieReviewsSecond />
          </div>
     )
}

export default Homepage