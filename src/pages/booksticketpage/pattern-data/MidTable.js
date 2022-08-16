import React from 'react'

const MidTable = props => {
     return (
          <div className='flex justify-between p-2 border-b-black-1 border-gray-400'>
               <span className='flex-1'>
                    {props.text}
               </span>
               <span className='w-2/5 text-right'>
                    {props.price + "đ"}
               </span>
          </div>
     )
}

export default MidTable