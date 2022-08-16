import { Link, useLocation } from 'react-router-dom'
import { returnTop } from '../exportFunction/exportFunction'
import CGV_logo from '../image/CGV_logo.png'
import CGV_ytb from '../image/cgv-youtube.jpg'
import clsx from 'clsx'


const title = [
     {
          "title": "Trang chủ",
          "access": "trang-chu"
     },
     {
          "title": "Tin điện ảnh",
          "access": "tin-dien-anh"
     },
     {
          "title": "Sao & sự kiện",
          "access": "sao-su-kien"
     },
     {
          "title": "Phân tích điện ảnh",
          "access": "phan-tich-dien-anh"
     },
     {
          "title": "Tài khoản",
          "access": "tai-khoan"
     }
]


const Header = () => {

     
     const location = useLocation();

     return (
          <div className='width-screen relative z-50'>
               <div className='w-full flex flex-col items-center'>
                    <div className='header w-full flex items-center justify-between text-white'>
                         <div className='flex items-center'>
                              <img src={CGV_logo} alt='' className='block' />
                         </div>
                         <div className='flex items-center'>
                              <img src={CGV_ytb} alt='' className='block' />
                         </div>
                    </div>
               </div>      
               <div className='navba flex bgcl-main text-white py-4'>
                    {
                         title.map((item, index ) => (
                              <div 
                                   className='relative flex flex-col mx-5 font-semibold'
                                   key={index}
                              >
                                   <Link 
                                        to={'TheMovie/' + item.access}
                                        className={clsx('text-white', {
                                             'text-gray-400': (location.pathname.includes(item.access)) || (location.pathname === '/TheMovie' && item.access === 'trang-chu')
                                        })}
                                        onClick={() => {
                                             returnTop();
                                        }}
                                   >{item.title}</Link>
                                   <span 
                                        className={clsx('w-full bg-red-500', {
                                             'height-1' : (location.pathname.includes(item.access)) || (location.pathname === '/TheMovie' && item.access === 'trang-chu')
                                        })}
                                   ></span>
                              </div>
                         ))
                    }
               </div>
          </div>
     )
}

export default Header