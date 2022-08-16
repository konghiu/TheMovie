import React from 'react'

const HeaderTable = (props) => {
     return (
          <p className='text-center py-2 border-b-black-1 border-gray-400 font-bold'>
               {props.text}
          </p>
     )
}

export default HeaderTable