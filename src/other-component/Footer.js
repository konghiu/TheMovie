import React from 'react'
import facebook from '../image/facebook.png'
import instagram from '../image/instagram.png'
import youtube from '../image/youtube.png'
import footerbanner from '../image/footer-banner.jpg'
import { Link } from 'react-router-dom'
import { returnTop } from '../exportFunction/exportFunction'


const navbarFooter = [
     {
          "name": "Phim Chiếu Rạp",
          "link": "/phim-chieu-rap" 
     }, 
     {
          "name": "Tin Điện Ảnh",
          "link": "/tin-dien-anh" 
     }, 
     {
          "name": "Sao & Sự Kiện",
          "link": "/sao-su-kien" 
     }, 
     {
          "name": "Phân tích điện ảnh",
          "link": "/phan-tich-dien-anh" 
     }, 
     {
          "name": "Trailers",
          "link": "/trailers" 
     }
]

const Footer = () => {
     return (
          <div className='width-screen bgcl-main p-5 pb-10 grid grid-cols-2 gap-10 text-white'>
               <div className='grid grid-cols-2 gap-20'>
                    <div className='flex flex-col items-start '>
                         <p className='text-xl mb-2'>CNM Cam Ranh</p>
                         <div className='grid grid-cols-1 gap-2'>
                              {
                                   navbarFooter.map((item, index) => (
                                        <Link 
                                             to={item.link} 
                                             className='hover:underline' 
                                             key={index}
                                             onClick={() => returnTop()}
                                        >{item.name}</Link>
                                   ))
                              }
                         </div>
                    </div>
                    <div className=''>
                         <p className='text-xl mb-2'>Theo dõi chúng tôi trên</p>
                         <div className='grid gap-2'> 
                              <FollowUs image={facebook} title='Facebook'/>
                              <FollowUs image={instagram} title='Instagram' />
                              <FollowUs image={youtube} title='Youtube' />
                         </div>
                    </div>
               </div>
               <div className=''>
                    <div>
                         <img src={footerbanner} alt='' />
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