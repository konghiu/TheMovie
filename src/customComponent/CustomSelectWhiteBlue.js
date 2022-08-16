import React from 'react'

const CustomSelectWhiteBlue = props => {
     return (
          <div className='grid grid-cols-1 gap-3'>
               <label className='text-white font-bold'>{props.label_select}<span className='text-red-500 text-xl'>*</span></label>
               <select 
                    className='w-full outline-none text-lg px-1 py-1 bg-blue-100'
                    defaultValue={props.defaultValue}
                    onChange={(e) => props.handleChangeInputValue(e.target.value)}
               >
                    {
                         props.listSelect.map((item, index) => (
                              <option 
                                   key={index}
                              >{item}</option>
                              )
                         )
                    }
               </select>
          </div>
     )
}

export default CustomSelectWhiteBlue