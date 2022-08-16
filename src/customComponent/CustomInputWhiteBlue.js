import React from 'react'

const CustomInputWhiteBlue = props => {


     return (
          <div className='grid grid-cols-1 gap-3'>
               <label className='text-white font-bold'>{props.input_name}</label>
               <input 
                    className='w-full outline-none text-lg px-3 py-1 bg-blue-100'
                    placeholder={props.input_name}
                    value={props.value}
                    onChange={e => props.handleChangeInputValue(e.target.value)}
               />
               {props.error_type === props.input_type && <p className='text-red-500'>* {props.error_message}</p>}
          </div>
     )
}

export default CustomInputWhiteBlue