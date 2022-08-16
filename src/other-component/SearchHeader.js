import React, { useState } from 'react'

const SearchHeader = () => {

     const [ searchText, setSearchText ] = useState('')


     return (
          <div className='bgcl-main w-full flex justify-center'>
               <div className='width-screen my-1'>
                    <div
                         className='rounded-md px-1 float-right w-fit bg-white'
                    >
                         <input 
                              placeholder='Tìm kiếm phim, bài viết, trailers...'
                              className='w-fit outline-none px-1'
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