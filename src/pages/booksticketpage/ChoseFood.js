import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux';
import { booking_decrease_food, booking_food } from '../../redux/action';
import { menuFood } from './pattern-data/menuFood'

const ChoseFood = () => {

     const dispatch = useDispatch();
     const [ render, setRender ] = useState(false)

     const handleBookingFood = item => {
          dispatch(booking_food(item))
          setRender(!render)
     }
     
     const handleDecreaseFood = item => {
          if(item.quantity > 0) {
               dispatch(booking_decrease_food(item))
               setRender(!render)
          }
     }

     return (
          <div className='w-full flex flex-col items-center my-10'>
               <p className='bg-gray-300 w-full font-bold border-2 py-1 text-center'>Bắp nước</p>
               <div className='grid grid-cols-2 gap-10 my-10'>
                    {
                         menuFood.map(item => (
                              <div
                                   key={item.id}
                                   className='flex'
                              >
                                   <div className='w-1/3'>
                                        <img src={item.image} alt='' className='w-full' />
                                   </div>
                                   <div className='flex-1 '>
                                        <p className='font-bold'>{item.name_comno}</p>
                                        <p>{item.detail}</p>
                                        <div>
                                             {item.notification.map((text, index) => <p key={index}>{text}</p>)}
                                        </div>
                                        <p>Giá: <span className='font-bold'>{Number(item.price).toLocaleString()}đ</span></p>
                                        <div className='flex text-white'>
                                             <button
                                                  className='bg-red-500 w-5 py-1'
                                                  onClick={() => handleDecreaseFood(item)}
                                             >-</button>
                                             <p className='border-2 text-black px-2 mx-2'>{item.quantity}</p>
                                             <button 
                                                  className='bg-red-500 w-5 py-1'
                                                  onClick={() => handleBookingFood(item)}
                                             >+</button>
                                        </div>
                                   </div>
                              </div>
                         ))
                    }
               </div>
          </div>
     )
}

export default memo(ChoseFood)