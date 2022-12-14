import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { itemsNavbar } from '../../exportFunction/exportList'
import Loading from '../../patterns/Loading'
// import AccountDetail from './mainContentAccountPage/AccountDetail'
// import GeneralInfomation from './mainContentAccountPage/GeneralInfomation'
// import TransactionHistory from './mainContentAccountPage/TransactionHistory'


const ContentAccount = () => {

     const infoUser = useSelector(state => state.storeAccount.infoAccount);
     const navigate = useNavigate();
     const location = useLocation();

     const [ loading, setLoading ] = useState(true);
     
     useEffect(() => {
          setLoading(true)
          if(JSON.stringify(infoUser) === '{}') {
               setTimeout(() => {
                    navigate('dang-nhap')
               }, 1000);
          } else {
               setLoading(false);
          }
     }, [infoUser, navigate])


     return (
          <>
               {
               loading ?
               <div 
                    className='width-screen bg-main'
                    style={{'height': '100vh'}}
               >    
                    <Loading />
               </div>
               :    
               <div className='width-screen'>
                    <div 
                         className='w-full flex py-5 sm:flex-col mb:flex-col mb:text-sm'
                         style={{'backgroundColor': '#fdfcf0'}}
                    >
                         <div className='w-1/4 px-2 sm:w-full mb:w-full sm:flex mb:flex justify-between flex-row-reverse'>
                              <p className='text-red-500 ml-2 text-2xl text-right md:text-left my-2 font-bold flex-1 mb:text-xl'>TÀI KHOẢN CGV</p>
                              <div className='options-userpage flex-1'>
                                   {
                                        itemsNavbar.map(item => (
                                             <div
                                                  key={item.id}
                                                  className={clsx( "relative mb-1 cursor-pointer ml-1", {
                                                       'bgcl-button-current' : location.pathname.includes(item.url) || ( location.pathname=== '/TheMovie/tai-khoan' && item.id === 1),
                                                       'bgcl-button-dif' : !location.pathname.includes(item.url) && !(location.pathname=== '/TheMovie/tai-khoan' && item.id === 1)
                                                  })}
                                                  onClick={() => navigate(item.url)}
                                             >
                                                  <span
                                                       className={clsx({
                                                            'ribon-left-current ribon': location.pathname.includes(item.url)  || (location.pathname=== '/TheMovie/tai-khoan' && item.id === 1),
                                                            'ribon-left ribon': !location.pathname.includes(item.url) && !(location.pathname=== '/TheMovie/tai-khoan' && item.id === 1)
                                                       })}
                                                  ></span>
                                                  <p 
                                                       className='py-1 pl-6 '
                                                  > {item.text}</p>
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                         <div className='flex-1 m-5 mb:mx-0 mb:px-1'>
                              <Outlet />
                         </div>
                    </div>
               </div>
               }
          </>
     )
}

export default ContentAccount