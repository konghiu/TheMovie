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
               <div className='flex cl-main m-5 mt-0'>
                    <div className='flex-1'>
                              {
                                   newsFilmAPI[0] ? 
                                   <div 
                                        className='relative m-3 overflow-hidden'
                                        onClick={() => handleGetContent()}
                                   >
                                        <img src={newsFilmAPI[0].image} alt='' className='w-full h-full'/>
                                        <p 
                                        className='absolute bottom-0 left-0 w-full text-lg pl-5 py-1 bg-black bg-opacity-50 text-white hover:text-blue-400 cursor-pointer'
                                        >{newsFilmAPI[0].describe}</p> 
                                   </div>
                                   : null
                              }
                    </div>
                    <div className='w-2/5'>
                         <div className='mt-3 flex flex-col'>   
                              <div className='grid grid-rows-3 gap-5 p-5 pt-0 pl-2'>
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
                    <>
                         <img src={props.data.image} alt='' className='w-40 h-full' />
                         <div className='flex flex-col h-full ml-3'>
                              <p
                                   className='mb-2 font-semibold title-detail hover:text-blue-400 cursor-pointer text-ellipsis overflow-hidden'
                                   onClick={() => handleGetContent()}
                              >{props.data.describe}</p>
                              <p className='text-gray-500 text-sm text-ellipsis overflow-hidden title-detail'>{props.data.content[0].title || props.data.content[0].detail[0]}</p>
                         </div>
                    </>
                    : null
               }
         </div>
     )
}

export default FirstDebut