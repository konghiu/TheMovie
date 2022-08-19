import React from 'react'
import { clsx } from 'clsx'

const MidTable = props => {
     return (
          <div className={clsx('flex p-2 border-b-black-1 border-gray-400', {
               'justify-center': !props.text
          })}>
               {
                    props.text &&
                    <span className='flex-1'>
                         {props.text}
                    </span>
               }
               <span className='w-fit ml-3 text-right'>
                    {props.price + "đ"}
               </span>
          </div>
     )
}

export default MidTable