import React from 'react'

const CustomSelectNormal = props => {



     return (
          <div className='flex flex-col my-2'>
               <label className='font-semibold'>{props.label_select}<span className='text-red-500'>*</span></label>
               <select 
                    className='outline-none border-black-1 px-3'
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

export default CustomSelectNormal