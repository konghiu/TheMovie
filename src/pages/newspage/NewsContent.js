import React from 'react'
import { useSelector } from 'react-redux'
import ChildrenNewsContent from './ChildrenNewsContent'
import SlideNewsContent from './SlideNewsContent'
import { newsFilmAPI } from '../../fakeAPI/newsFilmAPI'

const NewsContent = () => {

     // const newsFilmAPI = useSelector(state => state.storeAPI.newsFilmAPI)

     return (
          <div className='w-full h-full px-4 flex flex-col'>
               <SlideNewsContent data={[newsFilmAPI[0], newsFilmAPI[1], newsFilmAPI[3]]} bigdata={newsFilmAPI}/>
               <div className='grid grid-cols-2 gap-5 mt-5'>
                    {
                         newsFilmAPI.map((item, index) => (
                              <ChildrenNewsContent key={index} data={item} bigdata={newsFilmAPI} />
                         ))
                    }
               </div>
          </div>
     )
}


export default NewsContent