import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { GetContentToDisplay } from '../../exportFunction/exportFunction'
import { route_content } from '../../redux/action'
import { newsFilmAPI } from '../../fakeAPI/newsFilmAPI'


const FirstDebut = () => {
     
     // const newsFilmAPI = useSelector(state => state.storeAPI.newsFilmAPI)

     const dispatch = useDispatch()
     const navigate = useNavigate()

     const handleGetContent = () => {
          const data = GetContentToDisplay(newsFilmAPI[0] , newsFilmAPI, 'newsfilm')
          dispatch({
               type: 'ROUTE',
               payload: data
          })
          if(data) {
               navigate('/TheMovie/cong-hieu-dep-trai')
          } else {
               navigate('/TheMovie/khong-kha-dung')
          }
     }

     return (
          <div className='w-full text-white'>
               <div className='flex sm:flex-col mb:flex-col cl-main m-5 mt-0'>
                    <div className='flex-1 md:flex-1'>
                              {
                                   newsFilmAPI[0] ? 
                                   <div 
                                        className='relative m-3 overflow-hidden'
                                        onClick={() => handleGetContent()}
                                   >
                                        <img src={newsFilmAPI[0].image} alt='' className='w-full h-full'/>
                                        <p 
                                             className='absolute bottom-0 left-0 w-full text-lg pl-5 py-1 bg-black bg-opacity-50 text-white hover:text-blue-400 cursor-pointer mb:text-base'
                                        >{newsFilmAPI[0].describe}</p> 
                                   </div>
                                   : null
                              }
                    </div>
                    <div className='mb-dark-blue w-2/5 sm:w-full mb:w-full'>
                         <div className='mt-3 flex flex-col'>   
                              <div className='grid grid-rows-3 gap-5 p-2 pt-0 sm:gap-0 mb:gap-0'>
                                   <ContentAnother data={newsFilmAPI[1]} bigdata={newsFilmAPI} name='newsfilm' />
                                   <ContentAnother data={newsFilmAPI[2]} bigdata={newsFilmAPI} name='newsfilm' />
                                   <ContentAnother data={newsFilmAPI[3]} bigdata={newsFilmAPI} name='newsfilm' />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

const ContentAnother = props => {

     const dispatch = useDispatch()
     const navigate = useNavigate()

     const handleGetContent = () => {
          const data = GetContentToDisplay(props.data, props.bigdata, props.name)
          dispatch(route_content(data))
          if(data) {
               navigate('/TheMovie/cong-hieu-dep-trai')
          } else {
               navigate('/TheMovie/khong-kha-dung')
          }
     }

     return (
         <div className='flex justify-between items-center'>
               {
                    props.data ?
                    <div className='flex'>
                         <div className='w-40 h-28 md:w-20 md:h-20 sm:w-20 sm:h-20 mb:w-20 mb:h-20'>
                              <img src={props.data.image} alt='' className='w-full h-full' />
                         </div>
                         <div className='flex-1 flex flex-col h-full ml-3'>
                              <p
                                   className='mb-2 font-semibold text-detail hover:text-blue-400 cursor-pointer text-ellipsis overflow-hidden'
                                   onClick={() => handleGetContent()}
                              >{props.data.describe}</p>
                              <p className='text-gray-500 text-mb text-ellipsis overflow-hidden text-detail'>{props.data.content[0].title || props.data.content[0].detail[0]}</p>
                         </div>
                    </div>
                    : null
               }
         </div>
     )
}

export default FirstDebut