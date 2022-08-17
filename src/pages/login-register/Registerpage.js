import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router';
import CustomInputWhiteBlue from '../../customComponent/CustomInputWhiteBlue';
import CustomSelectWhiteBlue from '../../customComponent/CustomSelectWhiteBlue';
import { checkedFullInfoUsers } from '../../exportFunction/exportFunction';
import { listDay, listLovely, listMoth, listSelectCity, listSex, listYear } from '../../exportFunction/exportList';
import { setupServerAPI } from '../../fakeAPI';
import Loading from '../../patterns/Loading';

setupServerAPI();

const Registerpage = () => {

     const navigate = useNavigate();
     const [ username, setUsername ] = useState('');
     const [ userphone, setUserphone ] = useState('');
     const [ useremail, setUseremail ] = useState('');
     const [ password, setPassword ] = useState('');
     const [ selectArea, setSelectArea ] = useState(listSelectCity[0]);
     const [ rapLovely, setRapLovely ] = useState(listLovely[0]);
     const [ birthday, setBirthday ] = useState(listDay[new Date().getDate() - 1]);
     const [ birthmonth, setBirthmonth ] = useState(listMoth[new Date().getMonth() - 1]);
     const [ birthyear, setBirthyear ] = useState(new Date().getFullYear());
     const [ checkedSex, setCheckedSex ] = useState('');

     const [ loading, setLoading ] = useState(false);

     // phần state khi có lỗi
     const [ notification, setNotification ] = useState({
          type: '',
          message: ''
     });

     const handleCheckedInfo = () => {
          const listInfo = [username, userphone, useremail, password, checkedSex];
          const infoMessage = checkedFullInfoUsers(listInfo);
          if(!infoMessage.message) {
               setLoading(true);
               fetch('/api/accounts', {
                    method: 'GET'
               })
               .then(res => res.json())
               .then(res => {
                    const accounts = res.accounts
                    if(accounts.map(item => item.phone).includes(listInfo[1])) {
                         setNotification({
                              type: 'phone',
                              message: "Số điện thoại này đã được sử dụng để đăng ký"
                         })
                         setLoading(false);
                    } else if(accounts.map(item => item.email).includes(listInfo[2])) {
                         setNotification({
                              type: 'email',
                              message: "Email này đã được sử dụng để đăng ký"
                         })
                         setLoading(false);
                    } else {
                         fetch('/api/register-account', {
                              method: "POST",
                              body: JSON.stringify({
                                   username: username,
                                   avataruser: "",
                                   phone: userphone,
                                   email: useremail,
                                   password: password,
                                   selectArea: selectArea,
                                   rapLovely: rapLovely,
                                   dateOfBirth: birthday,
                                   monthOfbirth: birthmonth,
                                   yearOfBirth: birthyear,
                                   checkedSex: checkedSex,
                                   transactionHistory: []
                              })
                         }).then(() => {
                              fetch('/api/accounts', {
                                   method: 'GET'                                   
                              }).then(res => res.json()).then(res => console.log(res.accounts))
                              setLoading(false);
                              setTimeout(() => {
                                   navigate('/TheMovie/tai-khoan/dang-nhap')
                              }, 1000);
                         })
                    }
               })
          } else {
               setNotification(infoMessage);
          }
          setTimeout(() => {
               setNotification({})
          }, 3000);
     }

     return (
          <>
               {
                    loading && <Loading />
               }
               <div className='grid grid-cols-1 gap-3 my-5 px-5  md:w-3/4 sm:w-5/6 mb:w-full'>
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
                         input_name="Mật khẩu"
                         input_type="password"
                         value={password}
                         handleChangeInputValue={(value) => {
                              setPassword(value)
                         }}
                         error_type={notification.type}
                         error_message={notification.message}
                    />
                    <CustomSelectWhiteBlue 
                         label_select='Khu vực'
                         defaultValue='Thành Phố Hồ Chí Minh'
                         handleChangeInputValue={value => setSelectArea(value)}
                         listSelect={listSelectCity}
                    />
                    <CustomSelectWhiteBlue 
                         label_select='Rạp yêu thích'
                         defaultValue='CGV Cam Ranh'
                         handleChangeInputValue={value => setRapLovely(value)}
                         listSelect={listLovely}
                    />
                    {/* chọn ngày tháng năm sinh và giới tính */}
                    <div className='flex items-start'>
                         <div className='w-3/4 grid grid-cols-3 gap-5 mr-5'>
                         <CustomSelectWhiteBlue 
                              label_select='Ngày sinh'
                              defaultValue={birthday}
                              handleChangeInputValue={value => setBirthday(value)}
                              listSelect={listDay}
                         />
                         <CustomSelectWhiteBlue 
                              label_select='Tháng sinh'
                              defaultValue={birthmonth}
                              handleChangeInputValue={value => setBirthmonth(value)}
                              listSelect={listMoth}
                         />
                         <CustomSelectWhiteBlue 
                              label_select='Năm sinh'
                              defaultValue={birthyear}
                              handleChangeInputValue={value => setBirthyear(value)}
                              listSelect={listYear}
                         />
                              </div>
                         <div className='w-1/4 grid grid-cols-1 text-white'>
                              {
                                   listSex.map((item, index) => (
                                        <div key={index} className='flex'>
                                             <input 
                                                  type="radio"
                                                  className=''
                                                  checked={checkedSex === item}
                                                  onChange={() => setCheckedSex(item)}
                                             />
                                             <p className='ml-2 text-lg mb:text-base'>{item}</p>
                                        </div>
                                   ))
                              }
                              {notification.type === 'sex' && <p className='text-red-500'>{notification.message}</p>}
                         </div>
                    </div>
                    <button 
                         className='text-white mt-10 px-8 py-2 bg-red-500 font-semibold outline-none'
                         onClick={() => handleCheckedInfo()}
                    >Đăng nhập</button>
               </div>
          </>
     )
}

export default memo(Registerpage)