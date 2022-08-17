import React from 'react'
import ChildrenNewsContent from './ChildrenNewsContent'
import SlideNewsContent from './SlideNewsContent'
import { newsFilmAPI } from '../../fakeAPI/newsFilmAPI'

const NewsContent = () => {



     return (
          <div className='w-full h-full px-4 flex flex-col'>
               <div className='w-full tb-mb:flex justify-center'>
                    <SlideNewsContent data={[newsFilmAPI[0], newsFilmAPI[1], newsFilmAPI[3]]} bigdata={newsFilmAPI}/>
               </div>
               <div className='grid grid-cols-2 gap-5 mt-5 mb:grid-cols-1'>
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