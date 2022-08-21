import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { delete_all_info_ticket, login, logout, save_account } from '../redux/action';
import { useSelector } from 'react-redux'

const Notification = (props) => {
     
     const infoUser = useSelector(state => state.storeAccount.infoAccount)
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          window.document.body.style = 'overflow: hidden';
          return () => {
               window.document.body.style = 'overflow: initial';
          }
     }, [])

     const handleSubmitNotify = () => {
          props.handleCloseNotify({});
          switch (props.type) {
               // handle after exercute payment tickets
               case 'booking-ticket-success':
                    navigate('/TheMovie/tai-khoan/lich-su-giao-dich/hoa-don')
                    dispatch(delete_all_info_ticket())
               break;
               // handle after log out and save account
               case 'logout':
                    dispatch(logout(infoUser))
               break;
               // handle after regain password success
               case 'regain-password-success':
                    navigate('/TheMovie/tai-khoan/dang-nhap')
               break;
               // handle after change new account and save prev account
               case 'saveaccount':
                    dispatch(login(infoUser))
                    dispatch(save_account(props.payload))
                    navigate('/TheMovie/tai-khoan/thong-tin-chung')
               break;
               default:
                    props.handleCloseNotify({});
               break;
          }
     }

     const handleCloseNotify = () => {
          props.handleCloseNotify({});
          switch (props.type) {
                // handle after exercute payment tickets
               case 'booking-ticket-success':
                    navigate('/TheMovie/trang-chu')
                    dispatch(delete_all_info_ticket())
               break;
               // handle after log out and save account
               case 'logout':
                    dispatch(logout({}))
               break;
               // handle after change new account
               case 'saveaccount':
                    navigate('/TheMovie/tai-khoan/thong-tin-chung')
               break;
               default:
                    break;
          }
     }
     
     return (
          <div className='notify'>
               <span className='bg-notify'></span>
               <div className='frame-notify mb:w-full'>
                    <i 
                         className="fa-solid fa-xmark"
                         onClick={() => handleCloseNotify()}
                   
                    ></i>
                    <div className='content-notify'>
                         <p>{props.message}</p>
                    </div>
                    <button
                         onClick={() => handleSubmitNotify()}
                    >Xác nhận</button>
               </div>
          </div>
     )
}

export default Notification