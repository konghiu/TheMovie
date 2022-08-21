import React, { useEffect, useState } from 'react'
import AdvertPattern from '../../patterns/AdvertPattern'
import Loading from '../../patterns/Loading'
import NewsContent from './NewsContent'
import './newspage.css'


const Newspage = () => {

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
                    <section className='width-screen bg-main'>
                         <div className='flex'>
                              <div className='width-slide'>
                                   <NewsContent />
                              </div>
                              <AdvertPattern />
                         </div>
                    </section>
               }
          </>          
     )
}

export default Newspage