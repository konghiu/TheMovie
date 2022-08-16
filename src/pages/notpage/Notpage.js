import React from 'react'
import { useNavigate } from 'react-router'
import error404 from '../../image/error404.png'

const Notpage = () => {

     const navigate = useNavigate()

     return (
          <div className='width-screen relative bg-main'>
               <div className='w-full grid grid-cols-2'>
                    <div className=''>
                         <img src={error404} alt='' className='p-20'/>
                    </div>
                    <div className='flex items-start justify-center flex-col text-white'>
                         <p className='text-3xl font-semibold'>404 Error</p>
                         <p className='my-2 text-xl font-medium'>Không tìm thấy trang</p>
                         <p className='font-thin text-lg'>Trang bạn yêu cầu không tồn tại</p>
                         <button 
                              className='bg-yellow-600 mt-5 px-5 py-1 text-sm font-semibold rounded-sm'
                              onClick={() => navigate('/TheMovie/trang-chu')}     
                         >VỀ TRANG CHỦ</button>
                    </div>
               </div>
          </div>
     )
}

export default Notpage