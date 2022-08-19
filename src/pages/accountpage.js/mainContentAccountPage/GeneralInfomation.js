import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import returnAwayHeaderSmooth from '../../../customFunction/returnAwayHeaderSmooth'
import none_avatar from '../../../image/none_avatar.png'
import show_barcor from '../../../image/show_barcor.png'
// import T1 from '../../../image/61d75a9667bec6d5af6cddde_T1 Logo Red.svg'
import Loading from '../../../patterns/Loading'
import { login } from '../../../redux/action'

const GeneralInfomation = () => {

     const navigate = useNavigate();
     const dispatch = useDispatch();
     const infoUser = useSelector(state => state.storeAccount.infoAccount);
     const [ loading, setLoading ] = useState(false);

     useEffect(() => {
          returnAwayHeaderSmooth()
     }, [])

     const handleSetAvatarUser = async (fileImage) => {
          const reader = new FileReader();
          reader.onload = () => {
               if(reader.readyState === 2) {
                    setLoading(true);
                    console.log(reader)
                    fetch('/api/update-account', {
                         method: 'POST',
                         body: JSON.stringify({
                              ...infoUser,
                              avataruser: reader.result
                         })
                    }).then(() => {
                         fetch('/api/accounts', {
                              method: 'GET'
                         }).then(res => res.json())
                         .then(res => {
                              dispatch(login(res.accounts[infoUser.id - 1]))
                              setLoading(false);
                         })
                    })
               }
          }
          reader.readAsDataURL(fileImage[0])
     }


     return (
          <>
               {    
                    loading && <Loading />
               }
               <div className='w-full'>
                    <p className='text-2xl text-white bg-black py-2 w-full text-center mb:text-xl'>THÔNG TIN CHUNG</p>
                    <div className='flex justify-between my-5'>
                         <div className='flex flex-col items-center'>
                              <div className='border-2 flex items-center justify-center w-32 h-32 rounded-full border-black overflow-hidden p-1'>
                                   <img src={infoUser.avataruser || none_avatar} alt='' className='rounded-full' />
                              </div>
                              <div className='btn-change-avatar mt-2'>
                                   <button 
                                        className='bg-gray-500 text-white text-center rounded-md px-3'
                                   >Thay đổi</button>
                                   <input 
                                        type='file' 
                                        onChange={(e) => handleSetAvatarUser(e.target.files)}
                                   />
                              </div>
                         </div>
                         <div>
                              <p className='text-center font-semibold'>Thẻ thành viên</p>
                              <div>
                                   <img src={show_barcor} alt='' />
                              </div>
                         </div>
                    </div>
                    <div>
                         <p className='font-semibold '>Xin chào, {infoUser.username},</p>
                         <p className='text-gray-500'>Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản của mình.</p>
                    </div>
                    <div className='flex flex-col my-5'>
                         <p className='font-bold border-b-black-1 text-xl pb-1 mb:text-base'>Thông tin tài khoản</p>
                         <div className='mt-3 text-gray-500'>
                              <div className='flex my-2'>
                                   <p className='font-semibold text-black'>LIÊN HỆ</p>
                                   <button 
                                        className='rounded-md text-white ml-10 bg-gray-400 px-3'
                                        onClick={() => navigate('/TheMovie/tai-khoan/chi-tiet-tai-khoan')}
                                   >Thay đổi</button>
                              </div>
                              <div className='flex'><p>Tên</p><span className='mx-2'>:</span><p>{infoUser.username}</p></div>
                              <div className='flex'><p>Email</p><span className='mx-2'>:</span><p>{infoUser.email}</p></div>
                              <div className='flex'><p>Tên đăng nhập</p><span className='mx-2'>:</span><p>{infoUser.phone}</p></div>
                              <div className='flex'><p>Điện thoại</p><span className='mx-2'>:</span><p>{infoUser.phone}</p></div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default GeneralInfomation