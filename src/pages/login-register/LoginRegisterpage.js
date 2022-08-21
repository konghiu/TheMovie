import { useLocation, useNavigate, useParams } from 'react-router'
import Loginpage from './Loginpage'
import Registerpage from './Registerpage'
import Slider, {  } from 'react-slick'
import accountImg1 from './login-register-img/1.jpg'
import accountImg2 from './login-register-img/2.jpg'
import accountImg3 from './login-register-img/3.jpg'
import './login-register.css' 
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/action'
import ForgetPassword from './ForgetPassword'


const listAccountImg = [accountImg1, accountImg2, accountImg3]

const LoginRegisterpage = () => {

     const infoAccount = useSelector(state => state.storeAccount.infoAccount);
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const location = useLocation();
     const { path } = useParams();

    useEffect(() => {
          if(path === 'dang-xuat') {
               navigate('/TheMovie/tai-khoan/dang-nhap');
               dispatch(logout({}))
          } else if (path !== 'dang-ky' && path !== 'dang-nhap' && path !== 'quen-mat-khau') {
               navigate('/TheMovie/khong-kha-dung')
          }
    }, [path, navigate, dispatch])

     const settings = {
          infinite: true,
          speed: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplaySpeed: 5000,
          autoplay: true,
          dots: true
     }

     return (
          <>
               {
                    JSON.stringify(infoAccount) === '{}'
                    ?
                    <div className='flex m-5'>
                         <div className='flex-1 flex flex-col tb-mb:items-center bgcl-main'>
                              <div className='w-full text-white bg-red-500 tb-mb:flex justify-center'>
                                   <button 
                                        className='px-5 mx-5 py-1 font-bold text-lg outline-none text-gray-300 mb:text-base'
                                        onClick={() => navigate('/TheMovie/tai-khoan/dang-nhap')}     
                                        style={location.pathname.includes('/dang-nhap') ? {'borderBottom': '3px solid white', 'color': 'white'} : {}}
                                   >Đăng nhập</button>
                                        <button 
                                        className='px-5 mx-5 py-1 font-bold text-lg outline-none text-gray-300 mb:text-base'
                                        onClick={() => navigate('/TheMovie/tai-khoan/dang-ky')}
                                        style={location.pathname.includes('/dang-ky') ? {'borderBottom': '3px solid white', 'color': 'white'} : {}}
                                   >Đăng ký</button>
                              </div>
                              <div className='w-full md:w-3/5 sm:w-5/6 mb:w-full mb:mx-4'>
                                   {path === 'dang-nhap' && <Loginpage />}
                                   {path === 'dang-ky' && <Registerpage />}
                                   {path === 'quen-mat-khau' && <ForgetPassword />}
                              </div>
                         </div>
                         <div className='w-1/2 flex justify-center text-white px-5 tb-mb:hidden'>
                              <Slider {...settings} className='account-slide' >
                                   {
                                        listAccountImg.map((item, index) => (
                                             <div 
                                                  className='account-slide-item'
                                                  key={index}
                                             >    
                                                  <img src={item} alt='' className='w-full h-full' />
                                             </div>
                                        ))
                                   }
                              </Slider>
                         </div>
                    </div>
                    : 
                    <div className='flex flex-col items-center justify-center my-44 text-white'>
                         <p className='text-blue-500 text-lg mb-2'>Bạn đã đăng nhập tài khoản rồi!!!</p>
                         <button
                              className='bg-yellow-600 py-1 px-5 rounded-sm mt-2'
                              onClick={() => navigate('/TheMovie/tai-khoan')}
                         >TRANG CÁ NHÂN</button>
                    </div>
               }
          </>
     )
}

export default LoginRegisterpage