import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { route_content } from '../redux/action'

const HeaderPattern = props => {

     const dispatch = useDispatch()
     const navigate = useNavigate()

     const handleShowContent = (target) => {
          if(props.name === 'eventsstar') {
               dispatch(route_content(props.data))
               navigate('/TheMovie/cong-hieu-dep-trai')
          } else {
               dispatch({
                    type: 'ROUTE',
                    payload: props.data
               })
               navigate('/TheMovie/cong-hieu-dep-trai')
          }    
     }

     return (
          <>
               {
                    props.data ?
                         <div 
                              className='flex flex-col w-full text-white p-4 pb-0'
                         >
                              <p 
                                   className='cursor-pointer hover:text-blue-400'
                                   onClick={() => handleShowContent()}     
                              >{props.data.title || props.data.describe}</p>
                              <div 
                                   className='flex py-4'
                                   style={{'borderBottom': '0.25px solid white'}}
                              >
                                   <div className='flex-1'>
                                        <img src={props.data.image} alt='' />
                                   </div>
                                   <div className='flex-1 flex flex-col'>
                                        <p className='ml-5 brief-5 text-blue-200 font-thin'>
                                             {
                                                  props.data.content[0].title || props.data.content[0].detail[0]
                                             }
                                        </p>
                                   </div>
                              </div>
                         </div>
                    : null
               }
          </>
     )
}

export default HeaderPattern