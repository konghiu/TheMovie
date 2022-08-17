import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { returnTop } from '../../exportFunction/exportFunction'
import { set_info_basic_setter } from '../../redux/action'

const DescribeSticketFilm = () => {
     
     const infoTicket = useSelector(state=> state.storeInfoTicket);
     const infoUser = useSelector(state => state.storeAccount.infoAccount)
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          returnTop()
          if(infoTicket.nameFilm === '') {
               navigate('/TheMovie/khong-kha-dung');
          } 
     }, [infoTicket, navigate])

     const handleBuySticket = () => {
          dispatch(set_info_basic_setter({
               ticketID: infoUser.transactionHistory.length + 1,
               settername: infoUser.username || "",
               setteremail: infoUser.email || '',
               setterphone: infoUser.phone || '',
               codeTicket: Math.floor(Math.random() * 900000) + 100000,
               rap: 'Lotte Trần Phú',
               room: 'Screen04',
               address: 'TẦNG 4, VINPEARL BEACHRONT CONDOTEL, SỐ 78-80 TRẦN PHÚ, P.LỘC THỌ, TP.NHA TRANG',
          }))
          navigate('mua-ve');
     }
     return (
          <section className='width-screen bgcl-main'>
               {
                    infoTicket.nameFilm &&
                    <div className='m-5 mt-0 p-5 cl-main sm:m-2 sm:p-2'>
                         <div className='flex mb:flex-col mb:items-center'>
                              <div className='w-1/5 sm:w-1/4 mb:w-1/2'>     
                                   <img src={infoTicket.image} alt='' className='w-full' />
                              </div>
                              <div className='flex-1 ml-7 text-white sm:text-sm sm:ml-2 mb:ml-0 mbb:text-sm'>
                                   <p 
                                        className='pb-4 mb-5 font-semibold sm:pb-1 sm:mb-1 mb:pb-1 mb:mb-1'
                                        style={{'borderBottom': '1px solid white'}}
                                   >{infoTicket.nameFilm}</p>
                                   <p className='font-semibold'>Đạo diễn: <span className='font-thin ml-2'>{infoTicket.info.director}</span></p>
                                   <p className='font-semibold'>Diễn viên: <span className='font-thin ml-2'>{infoTicket.info.actors}</span></p>
                                   <p className='font-semibold'>Thể loại: <span className='font-thin ml-2'>{infoTicket.info.category}</span></p>
                                   <p className='font-semibold'>Khởi chiếu: <span className='font-thin ml-2'>{infoTicket.info.released}</span></p>
                                   <p className='font-semibold'>Thời lượng: <span className='font-thin ml-2'>{infoTicket.info.fulltime}</span></p>
                                   <p className='font-semibold'>Ngôn ngữ: <span className='font-thin ml-2'>{infoTicket.info.language}</span></p>
                                   <p className='font-semibold'>RATED: <span className='font-bold ml-2'>{infoTicket.info.rated}</span></p>
                                   <div className='text-white sm:flex mb:flex items-center mt-5'>
                                        <div
                                             className='w-fit p-1 mb-2 bg-blue-500 rounded-md cursor-pointer sm:mr-3 mb:mr-3'
                                        >
                                             <div className='w-fit flex border-white-1 px-2 rounded-md text-sm'>
                                                  <i className="fa-solid fa-thumbs-up flex items-center"></i>
                                                  <p className='ml-2'>Like</p>
                                             </div>
                                        </div>
                                        <div
                                             className='w-fit mt-2 p-1 bg-red-500 rounded-md cursor-pointer'
                                             onClick={() => handleBuySticket()}
                                        >
                                             <div className='w-fit flex border-white-1 px-3 rounded-md'>
                                                  <i className="fa-solid fa-cash-register flex items-center"></i>
                                                  <p className='ml-2'>Mua vé</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='flex flex-col items-center text-white mt-5'>
                              <div className='flex justify-between bg-red-500 px-5 py-2 rounded-lg mb-5'>
                                   <p className='cursor-pointer hover:underline'>Xem thêm</p>
                                   <p className='px-3'>|</p>
                                   <p className='cursor-pointer hover:underline'>Trailer</p>
                              </div>
                              <p className='text-justify'>{infoTicket.info.brief}</p>   
                         </div>
                    </div>
               }
          </section>
     )
}

export default memo(DescribeSticketFilm)