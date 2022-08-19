import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { delete_all_info_ticket, formality_payment } from '../../redux/action'
import FooterTable from './pattern-data/FooterTable'
import HeaderTable from './pattern-data/HeaderTable'
import MidTable from './pattern-data/MidTable'
import { typePayment } from './pattern-data/typePayment'

const Payment = () => {

     const infoTicket = useSelector(state => state.storeInfoTicket)
     const dispatch = useDispatch();
     const [ minute, setMinute ] = useState(5);
     const [ second, setSecond ] = useState(0);
     const navigate = useNavigate();
     
     const priceTicket = useMemo(() => {
          let price = 0;
          infoTicket.seats.forEach(item => {
               price += Number(item.price);
          })
          return price
     }, [infoTicket.seats])

     const priceFood = useMemo(() => {
          let price = 0;
          infoTicket.food.forEach(item => {
               price += Number(item.price) * Number(item.quantity);
          })
          return price
     }, [infoTicket.food])

     useEffect(() => {
          if(second === 0 && minute === 0) {
               dispatch(delete_all_info_ticket(true))
               navigate('/TheMovie/trang-chu')
          }
          setTimeout(() => {
               setSecond(prev => {
                    if(prev === 0) return prev = 59
                    else return prev - 1
               })
          }, 1000)
          if(second === 59) setMinute(prev => prev - 1)
     }, [second])

     const list_food = useSelector(state => state.storeInfoTicket.food)



     return (
          <div className='w-full flex flex-col my-10 tb-mb:my-5'>
               <p className='w-full text-white bg-black font-bold py-2 text-2xl text-center'>THANH TOÁN</p>
               <div className='flex mt-10 tb-mb:mt-5 sm:flex-col mb:flex-col'>
                    <div className=' flex-1 flex flex-col'>
                         <div className='w-full'>
                              <p className='w-full bg-gray-400 py-2 pl-5 italic text-lg'>Bước 1: <span className='not-italic font-bold'>GIẢM GIÁ</span></p>
                              <div className=' flex flex-col mt-2'>
                                   <p className='cly-main py-2 pl-5 font-semibold cursor-pointer'>Mã khuyến mãi</p>
                                   <div className='w-3/4 self-center'>
                                        <p className='mt-3 font-bold'>Nhập mã khuyến mãi</p>
                                        <div className='mt-5 mb-10 flex justify-between'>
                                             <input type='text' className='border-black-1 rounded-sm flex-1 outline-none pl-3' />
                                             <button className='w-fit bg-red-500 text-white px-2 ml-2'>Sử dụng</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='w-full'>
                              <p className='w-full bg-gray-400 py-2 pl-5 italic text-lg'>Bước 2: <span className='not-italic font-bold'>HÌNH THỨC THANH TOÁN</span></p>
                              <div className='grid grid-cols-1 cly-main py-5 mt-2'>
                                   {
                                        typePayment.map((item) => (
                                             <div 
                                                  key={item.id}
                                                  className='flex py-2 items-center'
                                             >
                                                  <input 
                                                       type='radio' 
                                                       className='mx-5' 
                                                       checked={item.card === infoTicket.formality.card}
                                                       onChange={() => {
                                                            dispatch(formality_payment({
                                                                 card: item.card,
                                                                 describe: item.describe
                                                            }))
                                                       }}
                                                  />
                                                  <div className='w-10'>
                                                       <img src={item.image} alt='' />
                                                  </div>
                                                  <label className='mx-5 font-semibold'>{item.describe}</label>
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                    </div>
                    <div
                         className='ml-5 md:ml-2 width-receipt-payment sm:mt-2 sm:ml-0 mb:ml-0 mb:mt-5'
                         // style={{'width': '30%'}}
                    >
                         <div className='mb-5 sm:mb-2 mb:mb-1 cly-main border-black-1 border-gray-400'>
                              <HeaderTable text="Tổng cộng" />
                              <MidTable text="STD" price={priceTicket.toLocaleString()} />
                              { 
                                   list_food.length !== 0 && 
                                   list_food.map((item, index) => (
                                        <MidTable key={index} text={item.name_comno + "(ONLINE) * " + item.quantity} price={(Number(item.price) * Number(item.quantity)).toLocaleString()} />
                                   ))
                              }
                              <FooterTable price={(priceFood + priceTicket).toLocaleString()} />
                         </div>
                         <div className='mb-5 sm:mb-2 mb:mb-1 cly-main border-black-1 border-gray-400'>
                              <HeaderTable text="Khuyến mãi" />
                              <FooterTable price="0" />
                         </div>
                         <div className='mb-5 sm:mb-2 mb:mb-1 cly-main border-black-1 border-gray-400'>
                              <HeaderTable text="Tổng số tiền" />
                              {
                                   infoTicket.formality &&
                                   <MidTable text={infoTicket.formality.describe} price={(priceFood + priceTicket).toLocaleString()} />
                              }
                              <FooterTable price={(priceFood + priceTicket).toLocaleString()} />
                         </div>
                         <div className='cly-main border-black-1 border-gray-400'>
                              <HeaderTable text="Countdown Clock" />
                              <div className='flex items-center justify-center'>
                                   <div className='flex items-center w-fit'>
                                        <p className='text-center text-2xl'>{minute}</p>
                                        <p className='mx-1 font-bold text-lg'>:</p>
                                        <p className='text-center text-2xl'>{second}</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Payment