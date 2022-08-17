import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import CustomInputWhiteBlue from '../../customComponent/CustomInputWhiteBlue';
import { returnTop } from '../../exportFunction/exportFunction';
import Loading from '../../patterns/Loading';
import { login } from '../../redux/action';

const Loginpage = () => {


     const navigate = useNavigate();
     const dispatch = useDispatch();
     const [ account, setAccount ] = useState('');
     const [ password, setPassword ] = useState('');
     const [ loading, setLoading ] = useState(false);
     const [ notification, setNotification ] = useState({
          type: '',
          message: '' 
     });


     const handleSendInfo = (infoUser) => {
          const index = infoUser.map(item => item.value).indexOf('');
          if(index === -1) {
               if(notification.message !== '') setNotification({type: '',message: '' })
               setLoading(true);
               fetch('/api/accounts',{
                    method: 'GET'
               })
               .then(res => res.json())
               .then(data => {
                    const listAccountUsers = data.accounts
                    const indexExistAccountPhone = listAccountUsers.map(item => item.phone).indexOf(infoUser[0].value)
                    const indexExistAccountEmail = listAccountUsers.map(item => item.email).indexOf(infoUser[0].value)
                    if(indexExistAccountPhone === -1 && indexExistAccountEmail === -1) {
                         setLoading(false);
                         setNotification({
                              type: 'account',
                              message: 'Tài khoản không tồn tại'
                         })
                    } else {
                         const accountLogining = listAccountUsers[indexExistAccountPhone !== -1 ? indexExistAccountPhone : indexExistAccountEmail]
                         if(accountLogining.password !== infoUser[1].value) {
                              setLoading(false);
                              setNotification({
                                   type: 'password',
                                   message: 'Sai mật khẩu'
                              })
                         } else {
                              setLoading(false);
                              setNotification({
                                   type: 'success',
                                   message: 'Đăng nhập thành công' 
                              });
                              setTimeout(() => {
                                   dispatch(login(accountLogining))
                                   navigate('/TheMovie/tai-khoan')
                              }, 1000)
                         }
                    }
               })
               .catch(err => console.log(err))
          } else {
               // warning infouser empty
               setNotification({
                    type: infoUser[index].name,
                    message: 'Yêu cầu nhập thông tin'
               })
          }
          setTimeout(() => {
               setNotification({});
          }, 3000);
     }    

     useEffect(() => {
          returnTop();
     }, [])

     return (
          <>
               {    
                    loading && <Loading />
               }
               <div className='grid grid-cols-1 gap-3 my-5 px-5 md:w-3/4 sm:w-5/6 mb:w-full'>
                    {notification.type === 'success' && <p className='text-green-500'>{notification.message}</p>}
                    <CustomInputWhiteBlue 
                         input_name="Email hoặc số điện thoại"
                         input_type="account"
                         value={account}
                         handleChangeInputValue={(value) => {
                              setAccount(value)
                         }}
                         error_type={notification.type}
                         error_message={notification.message}
                    />
                    <CustomInputWhiteBlue 
                         input_name="Mật khẩu"
                         input_type="password"
                         value={password}
                         handleChangeInputValue={(value) => {
                              setPassword(value)
                         }}
                         error_type={notification.type}
                         error_message={notification.message}

                    />
                    <button 
                         className='text-white mt-10 px-8 py-2 bg-red-500 font-semibold outline-none'
                         onClick={() => handleSendInfo([{name: "account",value: account}, {name: "password",value: password}])}
                    >Đăng nhập</button>
               </div>
          </>
     )
}

export default memo(Loginpage)