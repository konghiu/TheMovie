import { memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import { delete_all_info_ticket } from "../../redux/action"
import './bookingSticket.css'


const BookSticketpage = () => {
     
     const infoAccount = useSelector(state => state.storeAccount.infoAccount);
     const navigate = useNavigate();
     const dispatch = useDispatch();


     useEffect(() => {
          if(!JSON.stringify(infoAccount) === '{}') navigate('/tai-khoan')
          return () => {
               dispatch(delete_all_info_ticket(true))
          }
     }, [])

     return (
          <section className='width-screen bgcl-main'>
               <Outlet />
          </section>
     )
}

export default memo(BookSticketpage)