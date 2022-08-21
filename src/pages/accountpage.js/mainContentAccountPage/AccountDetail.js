import React, { useEffect, useState } from 'react'
import Loading from '../../../patterns/Loading';
import CustomInputNormal from '../../../customComponent/CustomInputNormal';
import CustomSelectNormal from '../../../customComponent/CustomSelectNormal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { checkString } from '../../../exportFunction/exportFunction';
import { listLovely, listSelectCity, listSex } from '../../../exportFunction/exportList'
import { login } from '../../../redux/action';

const AccountDetail = props => {

     const infoUser = useSelector(state => state.storeAccount.infoAccount);
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const [ userName, setUsername ] = useState(infoUser.username);
     const [ userPhone, setUserphone ] = useState(infoUser.phone);
     const [ userprovince, setUserProvince ] = useState(infoUser.province);
     const [ userSex, setUserSex ] = useState(infoUser.sex);
     const [ changePassword, setChangePassword ] = useState(false);
     const [ prevPassword, setPrevPassword ] = useState('');
     const [ newPassword, setNewPassword ] = useState('');
     const [ reNewPassword, setReNewPassword ] = useState('');

     const [ loading, setLoading ] = useState(true);
     const [ notification, setNotification ] = useState({
          type: '',
          message: ''
     });

     useEffect(() => {
          setLoading(false);
     }, [])


     const handleResetPassword = (...listPass) => {
          let type = '';
          let message = '';
          for (let i = 0; i < listPass.length; i++) {
               const password = listPass[i];
               if(password.value === '') {
                    if(password.type === 'prev_password') {
                         type = password.type;
                         message = 'Yêu cầu nhập mật khẩu cũ';
                         break;
                    } else if (password.type === 'new_password') {
                         type = password.type;
                         message = 'Yêu cầu nhập mật khẩu mới';
                         break;
                    } else if (password.type === 'reNew_password') {
                         type = password.type;
                         message = 'Yêu cầu xác nhập lại mật khẩu mới';
                         break;
                    }
               } else {
                    if(password.type === 'prev_password' && password.value !== infoUser.password) {
                         type = password.type;
                         message = 'Sai mật khẩu';
                         break;
                    } else if (password.type === 'new_password') {
                         if(checkString(password.value) || password.value.length < 8 ) {
                              type = password.type;
                              message = 'Mật khẩu phải có ít nhất 8 kí tự và có kí tự thường, kí tự in hoa, số và không chứa kí tự đặc biệt';
                              break;
                         }
                         else if(password.value === prevPassword) {
                              type = password.type;
                              message = 'Không được trùng với mật khẩu cũ'
                              break;
                         } 
                    } else if (password.type === 'reNew_password' && password.value !== newPassword) {
                         type = password.type;
                         message = 'Xác nhận lại mật khẩu không chính xác';
                         break;
                    }
               }
          }

          return {
               type: type,
               message: message
          }
     }

     const handleUpdateAccount = () => {
          const changeUserName = userName !== infoUser.username;
          const changeUserPhone = userPhone !== infoUser.phone;
          const changeUserProvince = userprovince !== infoUser.province;
          const changeUserSex = userSex !== infoUser.sex;

          if(userName.trim() === '') setUsername(infoUser.username)
          if(userPhone.trim() === '') setUserphone(infoUser.phone)

          let resetPassword = false;
          if(changePassword) {
               const checkPasswordChange = handleResetPassword(
                    {type: 'prev_password', value: prevPassword},
                    {type: 'new_password', value: newPassword},
                    {type: 'reNew_password', value: reNewPassword}
               )
               setNotification({
                    type: checkPasswordChange.type,
                    message: checkPasswordChange.message
               })
               if(checkPasswordChange.message === '') resetPassword = true;
          }

          if(changeUserName || changeUserPhone || changeUserSex || changeUserProvince || resetPassword) { 
               setLoading(true);
               fetch('/api/update-account', {
                    method: 'POST',
                    body: JSON.stringify({
                         ...infoUser,
                         username: userName.trim() === '' ? infoUser.username : userName,
                         password: newPassword,
                         phone: userPhone.trim() === '' ? infoUser.phone : userPhone,
                         province: userprovince,
                         sex: userSex
                    })
               }).then(() => {
                    fetch('/api/accounts', {
                         method: 'GET'
                    }).then(res => res.json())
                    .then(res => {
                         dispatch(login(res.accounts[infoUser.id - 1]))
                         setLoading(false);
                         setNotification({
                              type: 'success',
                              message: 'Tài khoản của bạn đã được cập nhật thành công'
                         })
                         setTimeout(() => {
                              navigate('/TheMovie/tai-khoan/thong-tin-chung')
                         }, 2000);
                    })
               })   
          } else {
               if(!changePassword) 
                    setNotification({
                         type: 'constant',
                         message: 'Tài khoản của bạn không có bất kỳ sự thay đổi nào'
                    })
          }
     }


     return (
          <>
               {
                    loading && <Loading />
               }
               <div className='w-full'>
                    <p className='text-2xl text-white bg-black py-2 w-full text-center'>THAY ĐỔI THÔNG TIN</p>
                    <div className='grid grid-cols-2 gap-x-5 gap-y-0'>
                         <CustomInputNormal 
                              input_name="Tên"
                              input_type="name"
                              value={userName}
                              handleChangeInputValue={(value) => setUsername(value)}
                         />
                         <CustomInputNormal 
                              input_name="Số điện thoại"
                              input_type="phone"
                              value={userPhone}
                              handleChangeInputValue={(value) => setUserphone(value)}
                         />
                         <CustomSelectNormal 
                              label_select="Tỉnh/Thành phố"
                              defaultValue={userprovince}
                              listSelect={listSelectCity}
                              handleChangeInputValue={value => setUserProvince(value)}
                         />
                         <CustomInputNormal 
                              input_name="Địa chỉ"
                              input_type="address"
                              value='No address 700'
                              // handleChangeInputValue={(value) => {}}
                         />
                    </div>
                         <div className='my-2'>
                              <label className='font-semibold'>Giởi tính</label>
                              <div className='flex'>
                                   {
                                        listSex.map((item, index) => (
                                             <div key={index} className='mr-3'>
                                                  <input 
                                                       type='radio' 
                                                       checked={item === userSex}     
                                                       onChange={() => setUserSex(item)}
                                                  />
                                                  <label>{item}</label>
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                         <div className='my-2'>
                              <p className='font-semibold mb:text-sm'>Tháng sinh</p>
                              <p><span>{infoUser.monthOfBirth}</span><span className='mx-2'>{infoUser.dateOfBirth}</span><span>{infoUser.yearOfBirth}</span></p>
                         </div>
                         <div className='my-2'>
                              <p className='font-semibold'>Địa chỉ email</p>
                              <p>{infoUser.email}</p>
                         </div>
                    {/* </div> */}
                    <div className='my-5'>
                         <div>
                              <input 
                                   type='checkbox' 
                                   className='mr-2'
                                   checked={changePassword}
                                   onChange={() => setChangePassword(!changePassword)}
                              />
                              <label>Tôi muốn thay đổi mật khẩu</label>
                         </div>
                         {
                              changePassword &&
                              <div className=''>
                                   <div className='w-1/2 flex flex-col'>
                                        {notification.type === 'success' && <p className='text-red-500 mt-1 self-'>Mật khẩu của bạn đã được cập nhật thành công</p>}
                                        <CustomInputNormal
                                             input_name="Nhập lại mật khẩu"
                                             input_type='prev_password'
                                             value={prevPassword}
                                             handleChangeInputValue={value => setPrevPassword(value)}
                                             error_type={notification.type}
                                             error_message={notification.message}
                                        />
                                        <CustomInputNormal
                                             input_name="Nhập mật khẩu mới"
                                             input_type='new_password'
                                             value={newPassword}
                                             handleChangeInputValue={value => setNewPassword(value)}
                                             error_type={notification.type}
                                             error_message={notification.message}
                                        />
                                        <CustomInputNormal
                                             input_name="Xác nhận lại mật khẩu"
                                             input_type='reNew_password'
                                             value={reNewPassword}
                                             handleChangeInputValue={value => setReNewPassword(value)}
                                             error_type={notification.type}
                                             error_message={notification.message}
                                        />
                                   </div>
                              </div>
                         }
                    </div>
     {/* phần thông tin tùy chọn */}
                    <p className='border-b-black-1 mt-5 text-lg font-semibold'>Thông tin tùy chọn</p>
                    <div className='flex justify-center my-5'>
                         <div className='flex flex-col items-center'>
                              <p className='font-semibold'>{infoUser.favoriteTheater}</p>
                              <select className='border-black-1 font-semibold mt-2 outline-none px-2'>
                                   {
                                        listLovely.map((item, index) => (
                                             <option key={index}>{item}</option>
                                        ))
                                   }
                              </select>
                         </div>
                    </div>
     {/* phần lưu thông tin */}
                    <div className='flex flex-col items-center'>
                         <button className='bg-red-600 w-fit text-white p-1 font-semibold rounded-md'>
                              <p 
                                   className='border-white-1 px-2'
                                   onClick={() => handleUpdateAccount()}
                              >LƯU LẠI</p>
                         </button>
                         {notification.type === 'success' && <p className='text-red-500'>{notification.message}</p>}
                         {notification.type === 'constant' && <p className='text-red-500'>{notification.message}</p>}
                    </div>
               </div>
          </>
     )
}

export default AccountDetail