import React from 'react'

const CustomInputNormal = props => {



     return (
          <div className='flex flex-col my-2'>
               <label className='font-semibold'>{props.input_name} <span className='text-red-500'>*</span></label>
               <input 
                    className='outline-none border-black-1 px-3'
                    placeholder={props.input_name} 
                    value={props.value}
                    onChange={e => props.handleChangeInputValue(e.target.value)}
               />
               {props.error_type === props.input_type && <p className='text-red-500'>* {props.error_message}</p>}
          </div>
     )
}

export default CustomInputNormal