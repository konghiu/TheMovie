import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import none_avatar from '../../../image/none_avatar.png'
import Loading from '../../../patterns/Loading'
import Notification from '../../../patterns/Notification';
import { login, remove_account_saved } from '../../../redux/action';

const AccountsManagement = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const listAccontsSaved = useSelector(state => state.storeAccount.listAccountsSaved);
     const infoUser = useSelector(state => state.storeAccount.infoAccount);
     const [ loading, setLoading ] = useState(true);
     const [ notification, setNotification ] = useState({});

     useEffect(() => {
          setLoading(false);
     }, [])

     const handleLogout = () => {
          setNotification({
               type: 'logout',
               message: 'Lưu tài khoản'
          })
     }

     const handleRemoveAccountSaved = user => {
          setLoading(true);
          dispatch(remove_account_saved(user))
          setTimeout(() => {
               setLoading(false);
          }, 2000)
     }
     
     const handleLoginByAccountSaved = (user) => {
          setLoading(true);
          const accountSaved = listAccontsSaved.find(account => account.userID === infoUser.userID)
          console.log(accountSaved)
          if(!accountSaved) {
               setNotification({
                    type: 'saveaccount',
                    message: 'Bạn có muốn lưu tài khoản này không'
               })
          } else {
               dispatch(login(user))
               setTimeout(() => {
                    setLoading(false);
                    navigate('/TheMovie/tai-khoan/thong-tin-chung')
               }, 2000)
          }
     }

     return (
          <>
               {    
                    loading && <Loading />
               }
               {
                    notification.message && notification.message !== '' && <Notification type={notification.type} message={notification.message} handleCloseNotify={() => setNotification({})} payload={infoUser} />
               }    
               <div className='w-full'>
                    <p className='text-2xl text-white bg-black py-2 w-full text-center mb:text-xl'>QUẢN LÝ TÀI KHOẢN</p>
                    <div className='my-10 grid gap-2 p-1 border-black-1'>
                         {
                              [infoUser].concat(listAccontsSaved.filter(item => item.userID !== infoUser.userID)).map(user => (
                                   <div 
                                        key={Number(user.id)}
                                        className='flex items-center p-1 border-black-1'
                                   >
                                        <div className='w-16 h-16 mb:w-10 mb:h-10 mr-5 overflow-hidden rounded-full border-2 border-black'>
                                             <img src={user.avataruser || none_avatar} alt='' className='w-full h-full p-1' />
                                        </div>
                                        <p className='flex-1 font-semibold text-lg mb:text-sm'>{user.username}</p>
                                        <div className=''>
                                             {
                                                  user.userID === infoUser.userID
                                                  ?
                                                  <p className='font-semibold text-gray-500 mb:text-sm'>Đang đăng nhập</p>
                                                  :
                                                  <>
                                                       <button 
                                                            className='rounded-sm text-white bg-blue-500 px-3 mb:text-sm'
                                                            onClick={() => handleLoginByAccountSaved(user)}     
                                                       >Đăng nhập</button>
                                                       <button 
                                                            className='rounded-sm text-white bg-red-500 px-3 mb:text-sm ml-2'
                                                            onClick={() => handleRemoveAccountSaved(user)}
                                                       >Gỡ</button>
                                                  </>
                                             }
                                        </div>
                                        <div className='mx-3'>
                                             <i className="fa-solid fa-eye"></i>
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
                    <div className=''>
                         <button 
                              className='float-right rounded-sm text-white bg-red-500 px-3 hover:bg-red-200 hover:text-red-500 mb:text-sm'
                              onClick={() => handleLogout()}     
                         >Đăng xuất</button>
                    </div>
               </div>
          </>
     )
}

export default AccountsManagement