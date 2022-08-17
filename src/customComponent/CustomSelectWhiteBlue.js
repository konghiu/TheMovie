import React from 'react'

const CustomSelectWhiteBlue = props => {
     return (
          <div className='grid grid-cols-1 gap-3'>
               <label className='text-white font-bold mb:text-sm'>{props.label_select}<span className='text-red-500 text-xl'>*</span></label>
               <select 
                    className='w-full outline-none text-lg p-1 bg-blue-100 mb:text-sm mb:p-0'
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