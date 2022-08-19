import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { returnTop } from '../exportFunction/exportFunction'
import { route_content } from '../redux/action'
// import { useParams } from 'react-router'
import AdvertPattern from './AdvertPattern'

const Contentpage = () => {

     const routerRedux = useSelector(state => state.storeRouter.contentToShow)
     const dispatch = useDispatch()
     const navigate = useNavigate()
     useEffect(() => {
          if(!routerRedux.describe) {
               navigate('/TheMovie/khong-kha-dung')
          }
          returnTop()
          
          return () => {
               dispatch(route_content({}))
          }
     }, [])


     return (
          <>
               {
                    routerRedux.describe &&
                         <section className='width-screen bg-main flex text-white sm:text-sm mb:text-sm'>
                              <div className='width-slide flex flex-col p-7 sm:p-2 mb:p-2'>
                                   <div className='relative w-full'>
                                        <img src={routerRedux.image} alt='' className='w-full' />
                                        <p className='absolute bottom-0 text-white w-full py-2 px-4 text-lg font-semibold bg-opacity-50 bg-black sm:text-base mb:text-sm'>{routerRedux.describe}</p>
                                   </div>    
                                   <div>
                                        {
                                             routerRedux.content.map((item, index) => (
                                                  <div key={index} className='py-3 text-blue-200 sm:py-2 mb:py-1'>
                                                       <p className='font-semibold italic'>{item.title || ''}</p>
                                                       {
                                                            item.detail.map((itemChild, indexChild) => (
                                                                 <p key={indexChild} className='py-3 sm:py-2 mb:py-1'>{itemChild}</p>
                                                            ))
                                                       }
                                                       <div className='w-full'>
                                                            <img src={item.image} alt=''className='w-full' />
                                                       </div>
                                                  </div>
                                             ))
                                        }
                                   </div>
                              </div>
                              <AdvertPattern />
                         </section>
               }
          </>
     )
}

export default Contentpage