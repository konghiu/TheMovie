import React from 'react'
import facebook from '../image/facebook.png'
import instagram from '../image/instagram.png'
import youtube from '../image/youtube.png'
import footerbanner from '../image/footer-banner.jpg'
import { Link } from 'react-router-dom'
import { returnTop } from '../exportFunction/exportFunction'


const navbarFooter = [
     {
          "id": 1,
          "name": "Phim Chiếu Rạp",
          "link": "phim-chieu-rap" 
     }, 
     {
          "id": 2,
          "name": "Tin Điện Ảnh",
          "link": "tin-dien-anh" 
     }, 
     {
          "id": 3,
          "name": "Sao & Sự Kiện",
          "link": "sao-su-kien" 
     }, 
     {
          "id": 4,
          "name": "Phân tích điện ảnh",
          "link": "phan-tich-dien-anh" 
     }, 
     {
          "id": 5,
          "name": "Trailers",
          "link": "trailers" 
     }
]

const Footer = () => {
     return (
          <div className='width-screen bgcl-main p-5 pb-10 grid grid-cols-2 gap-10 text-white sm:flex sm:flex-col mb:flex mb:flex-col'>
               <div className='grid grid-cols-2 gap-5 mb:grid-cols-1'>
                    <div className='flex flex-col items-start mb:w-full'>
                         <p className='text-xl mb-2 bd-b-white-mb mb:w-full mb:pb-1'>CNM Cam Ranh</p>
                         <div className='grid grid-cols-1 gap-2 mb:w-full'>
                              {
                                   navbarFooter.map((item) => (
                                        <Link 
                                             to={'/TheMovie/' + item.link} 
                                             className='hover:underline bd-b-white-mb mb:pb-1' 
                                             key={item.id}
                                             onClick={() => returnTop()}
                                        >{item.name}</Link>
                                   ))
                              }
                         </div>
                    </div>
                    <div className=''>
                         <p className='text-xl mb-2 gap-2 mb:w-full bd-b-white-mb mb:pb-1'>Theo dõi chúng tôi trên</p>
                         <div className='grid gap-2 mb:gap-3'> 
                              <FollowUs image={facebook} title='Facebook'/>
                              <FollowUs image={instagram} title='Instagram' />
                              <FollowUs image={youtube} title='Youtube' />
                         </div>
                    </div>
               </div>
               <div className='sm:w-full'>
                    <div>
                         <img src={footerbanner} alt='' className='w-full sm:h-36'/>
                    </div>
               </div>
          </div>
     )
}

const FollowUs = props => {

     return (
          <div 
               className='flex items-center cursor-pointer'
          >
               <div className='w-6 mr-5'>
                    <img src={props.image} alt='' className=''/>
               </div>
               <a href={'https://' + props.title + '.com'}>
                    <p>{props.title}</p>
               </a>
          </div>
     )
}

export default Footer