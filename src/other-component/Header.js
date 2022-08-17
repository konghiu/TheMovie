import { Link, useLocation, useNavigate } from 'react-router-dom'
import { returnTop } from '../exportFunction/exportFunction'
import CGV_logo from '../image/CGV_logo.png'
import CGV_ytb from '../image/cgv-youtube.jpg'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { useEffect } from 'react'


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

     const navigate = useNavigate();
     const location = useLocation();

     const [ openTableNav, setOpenTableNav ] = useState(false);

     const toggleRef = useRef();
     const tableNavRef = useRef();
     const coverPagesRef = useRef();

     const handleOpenTableNav = () => {
          setOpenTableNav(!openTableNav)
     }    

     useEffect(() => {
          if(openTableNav) {
               let pageX = window.document.body.clientWidth
               window.document.body.style = 'overflow: hidden';
               coverPagesRef.current.style = 'transform: translateX(0); opacity: 50%'
               tableNavRef.current.classList.add('open-table-nav')
               toggleRef.current.classList.toggle('toggle-rotate')
               toggleRef.current.style = `transform: translateX(${pageX - 70}px)`
          } else {
               window.document.body.style = 'overflow: initial';
               coverPagesRef.current.style = 'transform: translateX(100%); opacity: 0'
               tableNavRef.current.classList.remove('open-table-nav')
               toggleRef.current.classList.remove('toggle-rotate')
               toggleRef.current.style = 'transform: translateX(0px)'
          }
     }, [openTableNav])

     return (
          <div className='width-screen z-50'>
               <div className='bg-header w-full flex items-center'>
                    <div className='nav-toggle'>
                         <div
                              onClick={(e) => handleOpenTableNav(e)}
                              ref={toggleRef}
                         >
                              <span className=''></span>
                         </div>
                    </div>
                    <div className='w-full flex items-center justify-between text-white'>
                         <div 
                              className='flex items-center'
                              onClick={() => navigate('/TheMovie/trang-chu')}
                         >
                              <img src={CGV_logo} alt='' className='block' />
                         </div>
                         <div className='flex items-center'>
                              <img src={CGV_ytb} alt='' className='block' />
                         </div>
                    </div>
               </div>      
               <div className='navba'>
                    <div 
                         ref={tableNavRef}     
                         className='table-nav flex bgcl-main text-white py-4'
                    >
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
                                                  if(openTableNav) setOpenTableNav(false)
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
                    <span 
                         ref={coverPagesRef}
                         className='cover-pages' 
                         onClick={() => setOpenTableNav(false)}
                    ></span>
               </div>
          </div>
     )
}

export default Header