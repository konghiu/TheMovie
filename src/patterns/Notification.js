import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { delete_all_info_ticket } from '../redux/action';
// import { useSelector } from 'react-redux'

const Notification = (props) => {
     
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          window.document.body.style = 'overflow: hidden';
          return () => {
               window.document.body.style = 'overflow: initial';
          }
     }, [])

     const handleSetNotification = () => {
          props.handleCloseNotify({});
          if(props.type === 'booking-ticket-success') {
               navigate('/TheMovie/tai-khoan/lich-su-giao-dich/hoa-don')
               dispatch(delete_all_info_ticket())
          }
     }
     
     return (
          <div className='notify'>
               <span className='bg-notify'></span>
               <div className='frame-notify'>
                    <i 
                         className="fa-solid fa-xmark"
                         onClick={() => handleSetNotification()}
                   
                    ></i>
                    <div className='content-notify'>
                         <p>{props.message}</p>
                    </div>
                    <button
                         onClick={() => handleSetNotification()}
                    >Xác nhận</button>
               </div>
          </div>
     )
}

export default Notification