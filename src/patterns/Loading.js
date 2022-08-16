import React, { useEffect } from 'react'

const Loading = () => {

     useEffect(() => {
          window.document.body.style = 'overflow: hidden'
          return () => {
               window.document.body.style = 'overflow: initial'
          }
     }, [])
     

     return (
          <div 
               className='loading'
          >
               <span className='bg-loading'></span>
               <span className='icon-loading'>
                    <span className='item-loading-1'></span>
                    <span className='item-loading-2'></span>
                    <span className='item-loading-3'></span>
               </span>
          </div>
     )
}

export default Loading