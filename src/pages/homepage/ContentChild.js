import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { GetContentToDisplay, returnTop } from '../../exportFunction/exportFunction'
import { route_content } from '../../redux/action'

const ContentChild = props => {

     const navigate = useNavigate()

      return (
          <div>
               {
                    props.data.length > 0 ?
                         <div className='flex flex-col'>
                              <div className='md:flex-1'>
                                   <div className='flex sm:flex-col sm:items-start justify-between items-center text-white py-2'>
                                        <p 
                                             className='flex-1 text-2xl italic hover:text-blue-400 cursor-pointer sm:text-xl'
                                             onClick={() => {
                                                  navigate('/TheMovie/' + props.access);
                                                  returnTop();
                                             }}
                                        >{props.title}</p>
                                        <p 
                                             className='hover:underline cursor-pointer text-sm'
                                             onClick={() => {
                                                  navigate('/TheMovie/' + props.access);
                                                  returnTop();
                                             }}
                                        >Xem thêm <i className="fa-solid fa-angles-right text-sm"></i></p>
                                   </div>
                                   <div className='py-5 flex flex-col border-t-2 border-b-2'>
                                        <div className='w-full'>
                                             <img src={props.data[0].image || props.data[0].poster} alt='' className='w-full h-48'/>
                                        </div>
                                        <p className='h-12 my-3 text-white cursor-pointer hover:text-blue-400 hover:underline sm:text-sm mb:text-sm'>{props.data[0].describe || props.data[0].title || props.data[0].name}</p>
                                   </div>
                              </div>
                              <div className='mt-5 flex-1'>
                                   <Children data={props.data[3]} bigdata={props.data} name={props.name} />
                                   <Children data={props.data[1]} bigdata={props.data} name={props.name} />
                                   <Children data={props.data[2]} bigdata={props.data} name={props.name} />
                              </div>
                         </div>
                    : null
               }
          </div>
     )
}

const Children = props => {

     const dispatch = useDispatch()
     const navigate = useNavigate()
     
     const handleGetContent = () => {
          const data = GetContentToDisplay(props.data, props.bigdata, props.name)
          dispatch(route_content(data))
          if(data) {
               navigate('/TheMovie/cong-hieu-dep-trai')
          } else {
               navigate('/TheMovie/khong-kha-dung')
          }
     }
     
     return (
          <div className='flex justify-between h-28 mb-10 tb-mb:mb-5 tb-mb:h-20'>
               {
                    props.data ?
                    <>
                         <div className='w-28 h-28 tb-mb:w-20 tb-mb:h-20'>
                              <img src={props.data.image || props.data.poster} alt='' className='w-full h-full' />
                         </div>
                         <div className='flex-1 flex flex-col justify-between h-full ml-3'>
                              <p 
                                   className='text-detail mb-2 text-white cursor-pointer hover:text-blue-400'
                                   onClick={() => handleGetContent()}
                              >{props.data.describe || props.data.title || props.data.name}</p>
                              <p className='text-white'><i className="fa-solid fa-calendar-days text-red-500"></i>  {props.data.info ? props.data.info.released : ""}</p>
                         </div>
                    </>
                    : null
               }
          </div>
     )
}

export default ContentChild