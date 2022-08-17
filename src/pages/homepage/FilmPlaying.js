import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Slider from 'react-slick'
import { set_info_basic_setter } from '../../redux/action';
import { ticketAPI } from '../../fakeAPI/ticketAPI';
import './homepage.css'


const FilmPlaying = () => {

     const dispatch = useDispatch()
     const navigate = useNavigate()

     const settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 2,
          responsive: [
               {
                    breakpoint: 1280,
                    settings: {
                         slidesToShow: 4,
                    }
               },
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 3,
                    }
               },
               {
                    breakpoint: 580,
                    settings: {
                         slidesToShow: 2,
                    }
               }
          ]
        }

     return (
          <div className='width-screen flex flex-col items-center'>
               <div className='relative text-white text-2xl'>
                    <p>PHIM ĐANG CHIẾU</p>
                    <span 
                         className='absolute bg-red-500 w-full'
                         style={{'height': 2, 'bottom': '-2px'}}
                    ></span>
               </div>
               <div className='w-full py-5'>
                    <div className='homepage-slide cl-main py-1 mx-10'>
                         <Slider {...settings}  className=''>
                              {
                                   ticketAPI ?
                                   ticketAPI.map((item, index) => (
                                        <div key={index} className="slick-slide-item">
                                             <div 
                                                  className='relative mx-2 h-full'
                                             >
                                                  <img src={item.image}  alt='' className='w-full h-full'/>
                                                  <button 
                                                       className='button-filmcontent absolute bottom-0 w-full bg-red-500 text-white'
                                                       onClick={() => {
                                                            dispatch(set_info_basic_setter({
                                                                 ...item,
                                                                 rap: 'Lotte Trần Phú',
                                                                 room: 'Screen04',
                                                                 address: 'TẦNG 4, VINPEARL BEACHRONT CONDOTEL, SỐ 78-80 TRẦN PHÚ, P.LỘC THỌ, TP.NHA TRANG',
                                                            }))
                                                            navigate('/TheMovie/dat-ve')
                                                       }}
                                                  >Đặt vé</button>
                                             </div>
                                        </div>
                                   ))
                                   : null
                              }
                         </Slider>
                    </div>
               </div>
          </div>

     )
}


export default FilmPlaying