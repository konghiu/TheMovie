import React, { useEffect, useState } from 'react'
import AdvertPattern from '../../patterns/AdvertPattern'
import ContentPattern from '../../patterns/ContentPattern'
import HeaderPattern from '../../patterns/HeaderPattern'
import { eventAPI } from '../../fakeAPI/eventAPI'
import Loading from '../../patterns/Loading'


const StarEventpage = () => {

     const [ loading, setLoading ] = useState(true);

     useEffect(() => {
          setLoading(false);
     }, [])

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
                    <section className='width-screen bg-main flex'>
                         <div className='width-slide flex flex-col'>
                              <HeaderPattern data={eventAPI[0]} name="eventsstar"/>
                              <ContentPattern data={eventAPI.filter((item, index) => index !== 0)} name="eventsstar"/>
                         </div>
                         <AdvertPattern />
                    </section>
               }
          </>
     )
}

export default StarEventpage