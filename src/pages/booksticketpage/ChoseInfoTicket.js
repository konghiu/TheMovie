import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router'
import Notification from '../../patterns/Notification'
import { login } from '../../redux/action'
import Loading from '../../patterns/Loading'
import returnAwayHeaderSmooth from '../../customFunction/returnAwayHeaderSmooth'


const ChoseInfoTicket = () => {

     const infoUser = useSelector(state => state.storeAccount.infoAccount)
     const infoTicket = useSelector(state => state.storeInfoTicket);
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const location = useLocation();
     const [ loading, setLoading ] = useState(false);
     const [ notification, setNotification ] = useState({});

     
     // handle move to next page
     const handleNextPage = () => {
          if(location.pathname.includes('chon-cho-ngoi') || location.pathname === '/dat-ve/mua-ve') navigate('chon-mon-an')
          else if(location.pathname.includes('chon-mon-an')) navigate('thanh-toan')
     }

     // handle return away previous page
     const handlePreviousPage = () => {
          if(location.pathname.includes('chon-mon-an')) navigate('chon-cho-ngoi')
          else if(location.pathname.includes('thanh-toan')) navigate('chon-mon-an')
     }

     // handle return away top of the website
     useEffect(() => {
          returnAwayHeaderSmooth();
     }, [location.pathname])

     // handle check does the account exist ?
     useEffect(() => {
          if(infoTicket.nameFilm === '') navigate('/trang-chu');
     }, [infoTicket, navigate])

     // hand;e caculate total tickets price
     const priceSticket = useMemo(() => {
          let price = 0;
          infoTicket.seats.forEach(item => {
               price += Number(item.price);
          })
          return price
     }, [infoTicket.seats])

      // handle calculate total food price
     const priceFood = useMemo(() => {
          let price = 0;
          infoTicket.food.forEach(item => {
               price += Number(item.price) * Number(item.quantity);
          })
          return price
     }, [infoTicket.food])

     // handle payment ticket
     const handlePayment = () => {
          setLoading(true);
          if(JSON.stringify(infoTicket.formality) === '{}') {
               setLoading(false);
               setNotification({
                    type: 'failed',
                    message: 'Vui lòng chọn hình thức thanh toán'
               });
          } else {
               const newSeats = infoTicket.seats.map(item => item.site)
               const date = new Date();
               const hours = date.getHours();
               const minute = date.getMinutes();
               const day = date.getDate();
               const month = date.getMonth() + 1;
               const year = date.getFullYear();
               fetch('/api/receipts/add-receipt', {
                    method: 'POST',
                    body: JSON.stringify({
                         receipt: {
                              ...infoTicket, 
                              seats: newSeats,
                              date: day + '/' + month + '/' + year,
                              time: hours + ':' + minute
                         },
                         id: infoUser.id
                    })
               }).then(res => res.json())
               .then(res => {
                    fetch('/api/update-account', {
                         method: 'POST',
                         body: JSON.stringify({
                              ...infoUser,
                              transactionHistory: res
                         })
                    }).then(() => {
                         fetch('/api/accounts', {
                              method: 'GET'
                         }).then(res => res.json())
                         .then(res => {
                              dispatch(login(res.accounts[infoUser.id - 1]))
                              setLoading(false);
                              setNotification({
                                   type: 'booking-ticket-success',
                                   message: `Bạn đã thanh toán thành công bằng hình thức ${infoTicket.formality.card}`
                              });
                         })
                    })   
               })
          }
     }

     return (
          <>
               {
                    loading && <Loading />
               }
               {
                   notification.message && notification.message !== '' && <Notification type={notification.type} message={notification.message} handleCloseNotify={() => setNotification({})} />
               }
               <div className='w-full p-5'>
                    <div className='border-2 bg-white'>
                         <div className='bg-black w-full'>
                              <p className='text-white py-3 text-2xl font-semibold text-center'>BOOKING ONLINE</p>
                         </div>
                         <div className='p-2 font-bold bg-yellow-100 border-2'>
                              <p className=''>CGV Trường Sơn (CGV CT Plaza) | Cinema 1 | Số ghế (123/123)</p>
                              <p className=''>18/07/2022 21:40 ~ 18/07/2022 23:28</p>
                         </div>
                         <div className=''>
                              <Outlet />
                         </div>
                         <div className='flex justify-between bg-black text-white'>
                              <div 
                                   className='flex flex-col items-center justify-center h-32 w-32 rounded-lg bg-gray-800 border-2 cursor-pointer m-2'
                                   onClick={() => handlePreviousPage()}                              
                              >     
                                   <i className="fa-solid fa-angle-left text-4xl"></i>
                                   <p className='font-semibold'>PREVIOUS</p>
                              </div>
                              <div className='flex-1 flex my-2'>
                                   <div className='flex w-60'>
                                        <div className='w-20 h-32 mx-2'>
                                             <img src={infoTicket.image} alt='' className='w-full h-full' />
                                        </div>
                                        <p className='flex-1'>{infoTicket.nameFilm}</p>
                                   </div>
                                   <div className='flex-1 flex'>
                                        <div className='grid w-12'>
                                             <p>Rap</p>
                                             <p>Suất chiếu</p>
                                             <p>Phòng chiếu</p>
                                        </div>
                                        <div className='grid ml-2'>
                                             <p>CGV Trường Sơn (CGV CT Plaza)</p>
                                             <p>18/07/2022 21:40</p>
                                             <p>cinema 1</p>
                                             <p>{infoTicket.seats.map(item => item.site + ", ")}</p>
                                        </div>
                                   </div>
                                   <div className='flex flex-1'>
                                        <div className=''>
                                             <p>Tên phim</p>
                                             <p>Compo</p>
                                             <p>Tổng</p>
                                        </div>
                                        <div className='ml-5'>
                                             <p className='font-semibold italic'>{priceSticket.toLocaleString() + "đ"}</p>
                                             <p className='font-semibold italic'>{priceFood.toLocaleString() + "đ"}</p>
                                             <p className='font-semibold italic'>{(priceSticket + priceFood).toLocaleString() + "đ"}</p>
                                        </div>
                                   </div>
                              </div>
                              {
                                   !location.pathname.includes('thanh-toan') || location.pathname === '/dat-ve/mua-ve' ?
                                   <div 
                                        className='flex flex-col items-center justify-center h-32 w-32 rounded-lg bg-red-500 border-2 cursor-pointer m-2'
                                        onClick={() => handleNextPage()}     
                                   >     
                                        <i className="fa-solid fa-angle-right text-4xl"></i>
                                        <p className='font-semibold'>NEXT</p>
                                   </div>
                                   :
                                   <div 
                                        className='flex flex-col items-center justify-center h-32 w-32 rounded-lg bg-red-500 border-2 cursor-pointer m-2'
                                        onClick={() => handlePayment()}     
                                   >
                                        <i className="fa-solid fa-cash-register text-4xl"></i>
                                        <p>PAYMENT</p>
                                   </div>
                              }
                         </div>
                    </div>
               </div>
          </>
     )
}

export default ChoseInfoTicket