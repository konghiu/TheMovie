import quangcao3 from '../../image/quangcao3.jpg'
import quangcao4 from '../../image/quangcao4.jpg'
import ContentChild from './ContentChild'
import { eventAPI } from '../../fakeAPI/eventAPI' 
import { analysisFilmAPI } from '../../fakeAPI/analysisFilmAPI'


const MovieReviewsSecond = () => {

     // const eventAPI = useSelector(state => state.storeAPI.eventAPI)
     // const analysisFilmAPI = useSelector(state => state.storeAPI.analysisFilmAPI)

     return (
          <div className='width-screen'>
               <div className='flex px-5'>
                    <div className='flex-1'>
                         <div className='grid grid-cols-2 gap-5 mb:grid-cols-1'>
                              <ContentChild data={eventAPI} title="Sao & Sự kiện" access='sao-su-kien' name='eventsstar'/>
                              <ContentChild data={analysisFilmAPI} title="Phân tích điện ảnh" access='phan-tich-dien-anh' name='analysisfilm'/>
                         </div>
                    </div>
                    <div className='w-1/3 flex flex-col tb-mb:hidden'>
                         <div className='pl-10 pr-5  flex-1'><img src={quangcao3}  alt='' className='h-full w-full' /></div>
                         <div className='pl-10 pr-5  flex-1'><img src={quangcao4}  alt='' className='h-full w-full' /></div>
                    </div>
               </div>
          </div>
     )
}



export default MovieReviewsSecond