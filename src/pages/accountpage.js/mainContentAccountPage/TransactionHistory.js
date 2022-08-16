import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router"

const TransactionHistory = () => {

     const infoUser = useSelector(state => state.storeAccount.infoAccount)
     console.log(infoUser)
     const navigate = useNavigate();
     const location = useLocation();

     return (
          <div className='w-full'>
               <p className='text-2xl text-white bg-black py-2 w-full text-center'>LỊCH SỬ GIAO DỊCH</p>
               <div className='my-5 flex'>
                    <button 
                         className='bgcl-button-current py-1 px-5 rounded-md mr-2'
                         style={location.pathname.includes('phim-da-xem') ? {'backgroundColor': 'white', 'color': '#e71a0f', 'border': '1px solid #e71a0f'} : {}}
                         onClick={() => navigate('phim-da-xem')}    
                         >Phim đã xem</button>
                    <button 
                    className='bgcl-button-current py-1 px-5 rounded-md mr-2'
                    style={location.pathname.includes('hoa-don') ? {'backgroundColor': 'white', 'color': '#e71a0f', 'border': '1px solid #e71a0f'} : {}}
                         onClick={() => navigate('hoa-don')}     
                    >Hóa đơn</button>
               </div>
               <Outlet />
          </div>
    )
}

export default TransactionHistory