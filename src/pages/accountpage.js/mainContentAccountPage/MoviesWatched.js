import React from 'react'
import { useSelector } from 'react-redux'

const MoviesWatched = () => {

     const infoUser = useSelector(state => state.storeAccount.infoAccount)

     return (
          <div>
               {
                    infoUser.transactionHistory.length > 0 
                    ?
                    <div className="none-copy border-black-1 p-1 grid gap-1">
                         <div className="border-black-1 p-1 grid grid-cols-4 font-semibold">
                              <p>Tên phim (ngày ra mắt)</p>
                              <p className="text-center">Rạp</p>
                              <p className="text-center">Số lượng vé</p>
                              <p>Thời gian</p>
                         </div>
                         {
                              infoUser.transactionHistory.map(item => (
                                   <div key={item.ticketID} className=" border-black-1 p-1 grid grid-cols-4">
                                        <div className="">
                                             <p className="font-semibold">{item.nameFilm}</p>
                                             <p className="text-sm">({item.info.released})</p>
                                        </div>
                                        <p className="font-semibold text-center">{item.rap}</p>
                                        <p className="font-semibold text-center">{item.seats.length}</p>
                                        <div className="flex flex-col">
                                             <div className="flex items-center w-fit">
                                                  <i className="fa-solid fa-clock mr-1"></i>
                                                  <p>{item.time}</p>
                                             </div>
                                             <div className="flex items-center w-fit">
                                                  <i className="fa-solid fa-calendar-days mr-1"></i>
                                                  <p>{item.date.split(' ').join('')}</p>
                                             </div>
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
                    :
                    <p  className='mb-40'>Bạn chưa có giao dịch (đơn hàng) nào.</p>
               }
          </div>
     )
}

export default MoviesWatched