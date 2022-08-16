import React from 'react'
import AdvertPattern from '../../patterns/AdvertPattern'
import ContentPattern from '../../patterns/ContentPattern'
import HeaderPattern from '../../patterns/HeaderPattern'
import { eventAPI } from '../../fakeAPI/eventAPI'


const StarEventpage = () => {

     // const eventAPI = useSelector(state => state.storeAPI.eventAPI)

     return (
          <>
          {
               eventAPI ?
               <section className='width-screen bg-main flex'>
                    <div className='width-slide flex flex-col'>
                         <HeaderPattern data={eventAPI[0]} name="eventsstar"/>
                         <ContentPattern data={eventAPI} name="eventsstar"/>
                    </div>
                    <AdvertPattern />
               </section>
               : null
          }
     </>
  )
}

export default StarEventpage