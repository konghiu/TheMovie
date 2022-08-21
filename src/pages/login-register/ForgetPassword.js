import React, { useState } from 'react'
import CustomInputWhiteBlue from '../../customComponent/CustomInputWhiteBlue';
import Loading from '../../patterns/Loading';
import Notification from '../../patterns/Notification';

const ForgetPassword = () => {

     const [ username, setUsername ] = useState('');
     const [ userphone, setUserphone ] = useState('');
     const [ useremail, setUseremail ] = useState('');
     const [ loading, setLoading ] = useState(false);
     const [ notification, setNotification ] = useState({});

     const handleRegainPassword = (...list) => {
          setLoading(true);
          const indexEmpty = list.findIndex(item => item.value === '')
          if(indexEmpty === -1) {
               fetch('/api/accounts', {
                    method: 'GET'
               }).then(res => res.json())
               .then(res => {
                    const accounts = res.accounts
                    const account = accounts.find(account => account.email === list[list.findIndex(item => item.input === 'email')].value)
                    if(account) {
                         const confirmPhone = account.phone === list[list.findIndex(item => item.input === 'phone')].value
                         const confirmName = account.username === list[list.findIndex(item => item.input === 'name')].value
                         if(confirmPhone && confirmName) {
                              setNotification({
                                   type: 'regain-password-success',
                                   message: `Mật khẩu của bạn là ${account.password}`
                              })
                              setUseremail('')
                              setUserphone('')
                              setUsername('')
                         } else {
                              setNotification({
                                   type: 'regain-password-failed',
                                   message: `Các thông tin của bạn không trùng khớp`
                              })
                         }
                    } else {
                         setNotification({
                              type: 'regain-password-failed',
                              message: `Email ${list[list.findIndex(item => item.input === 'email')].value} chưa được đăng ký`
                         })
                    }
                    setLoading(false);
               })
          } else {
               setNotification({
                    type: list[indexEmpty].input,
                    message: 'Yêu cầu nhập thông tin'
               })
               setLoading(false);
               setTimeout(() => {
                    setNotification({})
               }, 3000)
          }
     }

     return (
          <>
               {    
                    loading && <Loading />
               }
               {
                    notification.message && (notification.message === 'regain-password-success' || 'regain-password-failed') && <Notification type={notification.type} message={notification.message} handleCloseNotify={() => setNotification({})}   />
               }
               <div className='grid grid-cols-1 gap-3 my-5 px-5 w-full'>
                    <CustomInputWhiteBlue 
                         input_name="Email"
                         input_type="email"
                         value={useremail}
                         handleChangeInputValue={(value) => {
                              setUseremail(value)
                         }}
                         error_type={notification.type}
                         error_message={notification.message}
                    />
                    <CustomInputWhiteBlue 
                         input_name="Số điện thoại"
                         input_type="phone"
                         value={userphone}
                         handleChangeInputValue={(value) => {
                              setUserphone(value)
                         }}
                         error_type={notification.type}
                         error_message={notification.message}
                    />
                    <CustomInputWhiteBlue 
                         input_name="Tên"
                         input_type="name"
                         value={username}
                         handleChangeInputValue={(value) => {
                              setUsername(value)
                         }}
                         error_type={notification.type}
                         error_message={notification.message}
                    />
                   <button 
                         className='text-white mt-10 px-8 py-2 bg-red-500 font-semibold outline-none'
                         onClick={() => handleRegainPassword(
                              {input: 'email', value: useremail}, 
                              {input: 'phone', value: userphone}, 
                              {input: 'name', value: username}
                         )}
                    >Lấy lại mật khẩu</button>
               </div>
          </>
     )
}

export default ForgetPassword