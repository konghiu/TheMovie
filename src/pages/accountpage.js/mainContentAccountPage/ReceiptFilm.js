import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../patterns/Loading';
import { login } from '../../../redux/action';
import ma_vach from '../../../image/th.jpg'

const ReceiptFilm = () => {
     
     const dispatch = useDispatch();
     const infoUser = useSelector(state => state.storeAccount.infoAccount);
     const [ loading, setLoading ] = useState(false);

     const handleRemoveReceipt = (item) => {
          setLoading(true);
          fetch(`/api/receipts/remove-receipt/${item.ticketID}`, {
               method: "DELETE",
               body: infoUser.userID
          }).then((res) => res.json())
          .then(res => {
               console.log(res)
               fetch('/api/update-account', {
                    method: "POST",
                    body: JSON.stringify({
                         ...infoUser,
                         transactionHistory: res
                    })
               }).then(() => {
                    fetch('/api/accounts', {
                         method: "GET"
                    }).then(res => res.json())
                    .then(res => {
                         dispatch(login(res.accounts[infoUser.id - 1]))
                         setLoading(false);
                    })
               })
          })
     }

     return (
          <>
               {
                    loading && <Loading />
               }
               <div>
                    {
                         infoUser.transactionHistory.length > 0
                         ?
                         <div className='grid grid-cols-3 gap-5 tb-mb:grid-cols-2 mb:grid-cols-1 mb:mx-10'>
                              {    
                                   infoUser.transactionHistory.map((item, index) => (
                                        <div 
                                             key={index} 
                                             className='none-copy receipts size-14 shadow-lg rounded-lg'
                                             onMouseOut={() => {
                                                  document.querySelector(`.content-receipt-${index}`).style = 'transform: translateY(-35px)'
                                             }}
                                             onMouseLeave={() => {
                                                  document.querySelector(`.content-receipt-${index}`).style = 'transform: translateY(0)'
                                             }}
                                        >
                                             <div 
                                                  className={`content-receipt-${index} content-receipt`}
                                             >
                                                  <div className=' bg-pink-100 p-3 rounded-t-lg'>
                                                       <div className='grid grid-cols-2 gap-2'>
                                                            <div className='w-fit'>
                                                                 <div>
                                                                      <p className='text-gray-500'>M?? ?????t v??</p>
                                                                      <p className='font-semibold text-lg'>{item.codeTicket}</p>
                                                                 </div>
                                                                 <div>
                                                                      <p className='text-gray-500'>Th???i gian</p>
                                                                      <p className='font-semibold'>{item.time || ''}</p>
                                                                      <p className='font-medium'>{item.date || ''}</p>
                                                                 </div>
                                                            </div>
                                                            <div className='flex-1 flex items-center justify-center'>
                                                                 <img src={ma_vach} alt='' className='h-10 w-4/5 mb:w-4/6' />
                                                            </div>
                                                       </div>
                                                       <div>
                                                            <p 
                                                                 className='text-center mt-1 text-gray-500'
                                                                 style={{'fontSize': '10px'}}
                                                            >Qu??t m?? t???i qu???y ho???c ?????c s??? ??i???n tho???i ???? ?????t v??</p>
                                                       </div>
                                                  </div>
                                                  {/* 5 */}
                                                  <div className='px-3 bg-white rounded-b-lg flex-1 flex flex-col'>
                                                       <div className='flex justify-between py-2 border-b-black-1 border-gray-300'>
                                                            <div>
                                                                 <p className='size-14 text-gray-500'>Ph??ng chi???u</p>
                                                                 <p className='font-semibold'>{item.room}</p>
                                                            </div>
                                                            <div>
                                                                 <p className='size-14 text-gray-500'>S??? v??</p>
                                                                 <p className='font-semibold'>{item.seats.length}</p>
                                                            </div>
                                                            <div>
                                                                 <p className='size-14 text-gray-500'>S??? gh???</p>
                                                                 <p className='font-semibold'>{item.seats.map((seat, IndexSeat) => (
                                                                      <span key={IndexSeat}>{IndexSeat !== item.seats.length - 1 ? seat + ", " : seat}</span>
                                                                 ))}</p>
                                                            </div>
                                                       </div>
                                                       <div className='py-2 border-b-black-1 border-gray-300'>
                                                            <p className='size-14 text-gray-500'>R???p chi???u</p>
                                                            <p className='font-semibold'>{item.rap}</p>     
                                                            <p className='text-justify size-12 font-medium'
                                                            >{item.address}</p>     
                                                       </div>
                                                       <div className='grid grid-cols-2 py-2 border-b-black-1 border-gray-300'>
                                                            <div>
                                                                 <p className='size-14 text-gray-500'>Ng?????i nh???n</p>
                                                                 <p className='font-medium size-12 uppercase'>{item.settername}</p>
                                                            </div>
                                                            <div>
                                                                 <p className='size-14 text-gray-500'>S??? ??i???n tho???i</p>
                                                                 <p className='font-medium'>{item.setterphone}</p>
                                                            </div>
                                                       </div>
                                                       <div className='py-2 border-b-4 border-gray-300 flex-1'>
                                                            <p>Email</p>
                                                            <p className='font-semibold'>{item.setteremail}</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* button */}
                                             <div className='buttonReceiptHistory'>
                                                  <button className='w-fit bgcl-button-current rounded-md px-2 text-base'>In h??a ????n</button>
                                                  <button className='w-fit bgcl-button-current rounded-md px-2 text-base'
                                                       onClick={() => handleRemoveReceipt(item)}
                                                  >X??a h??a ????n</button>
                                             </div>
                                        </div>    
                                   ))
                              }    
                         </div>
                         : 
                         <p className='mb-40'>B???n ch??a c?? giao d???ch (h??a ????n) n??o.</p>
                    }
               </div>
          </>
     )
}

export default ReceiptFilm