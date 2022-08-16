import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const ChildrenNewsContent = props => {

     const dispatch = useDispatch()
     const navigate = useNavigate()

     const handleShowContent = () => {
          props.bigdata.forEach(item => {
               if(item.describe === props.data.describe) {
                    dispatch({
                         type: 'ROUTE',
                         payload: item
                    })
                    navigate('/cong-hieu-dep-trai')
               }
          })
     }

     return (
          <>
               {
                    props.data ?
                    <div className=''>
                         <div
                              onClick={(e) => handleShowContent()}
                         >
                              <img src={props.data.image} alt='' />
                         </div>
                         <div className='flex-1 text-white flex flex-col'>
                              <p 
                                   className='text-lg font-semibold my-3 hover:text-blue-400'
                                   onClick={() => handleShowContent()}
                              >{props.data.describe}</p>
                              <p className='text-sm title-detail overflow-hidden opacity-60'>{props.data.content[0].title || props.data.content[0].detail[0]}</p>
                              <p className='text-sm opacity-30 mt-2'><i className="fa-solid fa-calendar-days text-sm mr-2"></i>{props.data.date || '03-01-2004'}</p>
                         </div>
                    </div>
                    : null
               }
          </>
     )
}

export default ChildrenNewsContent