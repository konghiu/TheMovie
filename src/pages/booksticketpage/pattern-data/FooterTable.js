import React from 'react'

const FooterTable = props => {
     return (
          <p className='text-center py-2 border-b-black-1 border-gray-400 bg-gray-400 font-bold'>
               {props.price + "đ"}
          </p>
     )
}

export default FooterTable