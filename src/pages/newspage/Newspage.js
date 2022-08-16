import React from 'react'
import AdvertPattern from '../../patterns/AdvertPattern'
import NewsContent from './NewsContent'
import './newspage.css'


const Newspage = () => {


     return (
          <section className='width-screen bg-main'>
               <div className='flex'>
                    <div className='width-slide'>
                         <NewsContent />
                    </div>
                    <AdvertPattern />
               </div>
          </section>          
     )
}

export default Newspage