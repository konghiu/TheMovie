import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Slider from 'react-slick'
import { route_content } from '../../redux/action';

const SlideNewsContent = props => {

     const dispatch = useDispatch()
     const navigate = useNavigate()

     const config = {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplaySpeed: 5000,
          autoplay: true,
     };

     const handleGetContent = (data) => {
          props.bigdata.forEach((item) => {
               if ( item.describe === data.describe ) {
                    console.log(true)
                    dispatch(route_content(data))
                    navigate('/TheMovie/cong-hieu-dep-trai')
               }
          })
     };

     return (
          <div className='cl-main p-4 w-full tb-mb:w-3/5 md:p-2 sm:p-1 mb:w-full mb:p-1'>
                    <Slider {...config}  className=''>
                    {
                         props.data[0] ? 
                         props.data.map((item, index) => (
                              <div className='slick-slide-item lg:w-3/5 tb-mb:flex-col cursor-pointer' key={index}>
                                   <div className='flex w-3/5 h-full tb-mb:w-full tb-mb:h-80 overflow-hidden relative'>
                                        <img src={item.image} alt='' className='absolute w-full h-full px-1 sm:p-0 mb:p-0' />
                                   </div>
                                   <div className='mb-dark-blue flex-1 px-4 text-white flex flex-col tb-mb:px-2 tb-mb:py-3 mb:py-2'>
                                        <p 
                                             className='text-lg font-semibold hover:text-blue-400 tb-mb:text-base'
                                             onClick={() => handleGetContent(item)}     
                                        >{item.describe}</p>
                                        <p className='text-sm opacity-30 mt-2'><i className="fa-solid fa-calendar-days text-sm mr-2"></i>{item.date || '03-01-2004'}</p>
                                        <p className='text-sm brief-5 opacity-60 mt-5 tb-mb:mt-0'>{item.content[0].title || item.content[0].detail[0]}</p>
                                   </div>
                              </div>
                         ))
                    : null
                    }
               </Slider>
          </div>
     )
}

export default SlideNewsContent