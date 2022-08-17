import React, { useState } from 'react'

const SearchHeader = () => {

     const [ searchText, setSearchText ] = useState('')


     return (
          <div className='bgcl-main w-full flex justify-center'>
               <div className='width-screen my-1 sm:px-3 mb:px-3'>
                    <div
                         className='rounded-md px-2 float-right w-fit bg-white sm:w-full sm:flex mb:w-full mb:flex items-center justify-between'
                    >
                         <input 
                              placeholder='Tìm kiếm phim, bài viết, trailers...'
                              className='w-fit outline-none px-1 sm:w-full mb:w-full'
                              value={searchText}
                              onChange={e => setSearchText(e.target.value)}
                         /> 
                         <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
               </div>
          </div>
     )
}

export default SearchHeader