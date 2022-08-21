import FirstDebut from './FirstDebut'
import FilmPlaying from './FilmPlaying'
import MovieReviewsFirst from './MovieReviewsFirst'
import SecondDebut from './SecondDebut'
import './homepage.css'
import MovieReviewsSecond from './MovieReviewsSecond'
import { useEffect, useState } from 'react'
import { returnTop } from '../../exportFunction/exportFunction'
import Loading from '../../patterns/Loading'

const Homepage = () => {

     const [ loading, setLoading ] = useState(true);
     useEffect(() => {
          returnTop();
          setLoading(false);
     }, [])

     return (
          <>
               {
                    loading ? 
                    <div 
                         className='width-screen bg-main'
                         style={{'height': '100vh'}}
                    >    
                         <Loading />
                    </div>
                    :
                    <div className='width-screen bg-main'>
                         <FirstDebut  />
                         <FilmPlaying />
                         <MovieReviewsFirst />
                         <SecondDebut />
                         <MovieReviewsSecond />
                    </div>
               }
          </>
     )
}

export default Homepage