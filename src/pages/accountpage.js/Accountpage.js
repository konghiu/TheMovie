import { Outlet } from 'react-router'
import './account.css'

const Accountpage = () => {
     return (
          <section className='width-screen bg-main'>
               <Outlet />
          </section>
     )
}

export default Accountpage