import quangcao1 from '../../image/quangcao1.jpg'
import quangcao2 from '../../image/quangcao2.jpg'
import ContentChild from './ContentChild'
import { trailersAPI } from '../../fakeAPI/trailersAPI'
import { newsFilmAPI } from '../../fakeAPI/newsFilmAPI'


const MovieReviewsFirst = () => {

     // const trailersAPI = useSelector(state => state.storeAPI.trailersAPI)
     // const newsFilmAPI = useSelector(state => state.storeAPI.newsFilmAPI)

     return (
          <div className='width-screen'>
               <div className='flex px-5'>
                    <div className='flex-1'>
                         <div className='grid grid-cols-2 gap-5 mb:grid-cols-1'>
                              <ContentChild data={trailersAPI} title="Phim chiếu rạp" access='phim-chieu-rap' name='phimrap' />
                              <ContentChild data={newsFilmAPI} title="Tin điện ảnh" access='tin-dien-anh' name='newsfilm' />
                         </div>
                    </div>
                    <div className='w-1/3 flex flex-col tb-mb:hidden'>
                         <div className='pl-10 pr-5 flex-1'><img src={quangcao1}  alt='' className='h-full w-full' /></div>
                         <div className='pl-10 pr-5 flex-1'><img src={quangcao2}  alt='' className='h-full w-full' /></div>
                    </div>
               </div>
          </div>
     )
}



export default MovieReviewsFirst