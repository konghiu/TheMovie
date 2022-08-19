import React, { memo, useState } from 'react'
import bg_screen from '../../image/bg-screen.png'
import listSite from './listSite.json'
import { clsx } from 'clsx'
import './bookingSticket.css'
import { useDispatch, useSelector } from 'react-redux'
import { booking_seat } from '../../redux/action'
import Notification from '../../patterns/Notification'



const ChoseSeat = props => {

     const dispatch = useDispatch();
     const infoTicket = useSelector(state => state.storeInfoTicket);
     const [ notification, setNotification ] = useState({});
     const handleCheckedSite = (item, listSite, index) => {
          if(item.status !== 'choose') {
               if(infoTicket.seats.map(list => list.quanlity).includes(item.quanlity) || infoTicket.seats.length === 0) {
                    if((infoTicket.seats.length >= 0 && infoTicket.seats.length < 8) || infoTicket.seats.map(list => list.id).includes(item.id)) {
                         if(item.quanlity === "Sweet") {
                              if(item.id % 2 === 0) {
                                   dispatch(booking_seat([listSite[index - 1], item]));
                              } else {
                                   dispatch(booking_seat([item, listSite[index + 1]]));
                              }
                         } else {
                              dispatch(booking_seat([item]));
                         }
                    } 

                    else {
                         setNotification({
                              type: 'failed',
                              message: 'Vui lòng không chọn quá 8 ghế ngồi'
                         })
                    }
               } else {
                    setNotification({
                         type: 'failed',
                         message: 'Vui lòng chọn những ghế cùng loại'
                    })
               }
          }
     }    

     return (
          <>
               {
                    notification.message && notification.message !== '' && <Notification type={notification.type} message={notification.message} handleCloseNotify={() => setNotification({})}  />
               }
               <div className='w-full flex flex-col items-center my-10 mb:my-5'>
                    <p className='bg-gray-300 w-full font-bold border-2 py-1 text-center'>Người / Ghế</p>
                    <div className='my-10 w-full mb:my-5'>
                         <img src={bg_screen} alt='' className='w-full' />
                    </div>
                    <div className='my-10 flex flex-col mb:my-5'>  
                         {
                              listSite.map((listSite, index) => (
                                   <div
                                        key={index}
                                        className='grid grid-cols-12 gap-2 sm:gap-1 sm:text-sm mb:gap-1 mb:text-sm'
                                   >
                                        { 
                                             listSite.map((child, indexChild) => (
                                                  <p 
                                                       key={child.id}
                                                       className={clsx('border-2 text-center my-1 cursor-pointer',{
                                                            'site-normal': child.quanlity === 'normal',
                                                            'site-VIP': child.quanlity === 'VIP',
                                                            'site-sweet': child.quanlity === 'Sweet',
                                                            'site-choose': child.status === 'choose'
                                                       })}
                                                       style={infoTicket.seats.map(listSeat => listSeat.id).includes(child.id) ? {'borderColor': 'red', 'backgroundColor': 'red', 'color': 'white'} : {}}
                                                       onClick={() => handleCheckedSite(child, listSite, indexChild)}
                                                  >{child.site}</p>
                                             ))
                                        }
                                   </div>
                              ))
                         }
                    </div>
                    <div className='grid grid-cols-2 gap-y-2 w-3/5'>
                         <div className='flex items-center'><div className="bg-red-500 w-5 h-5 mr-2"></div>  Checked</div>
                         <div className='flex items-center'><div className="bg-gray-500 w-5 h-5 mr-2"></div>  Đã chọn</div>
                         <div className='flex items-center'><div className=" bg-gray-500 w-5 h-5 mr-2 flex items-center justify-center text-white">X</div>  Không thể chọn</div>
                         <div className='flex items-center'><div className="border-2 border-green-500 w-5 h-5 mr-2"></div>  Thường</div>
                         <div className='flex items-center'><div className="border-2 border-red-500 w-5 h-5 mr-2"></div>  VIP</div>
                         <div className='flex items-center'><div className="bg-pink-500 w-5 h-5 mr-2"></div>  Sweetbox</div>
                    </div>
               </div>
          </>
     )
}


export default memo(ChoseSeat)
