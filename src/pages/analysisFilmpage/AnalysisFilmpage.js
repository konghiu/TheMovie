import React, { useEffect, useState } from 'react'
import AdvertPattern from '../../patterns/AdvertPattern'
import ContentPattern from '../../patterns/ContentPattern'
import HeaderPattern from '../../patterns/HeaderPattern'
import { analysisFilmAPI } from '../../fakeAPI/analysisFilmAPI'
import Loading from '../../patterns/Loading'
import { returnTop } from '../../exportFunction/exportFunction'

const AnalysisFilmpage = () => {

     const [ loading, setLoading ] = useState(true);
     useEffect(() => {
          returnTop();
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
                              <HeaderPattern data={analysisFilmAPI[0]} name="analysisfilm"/>
                              <ContentPattern data={analysisFilmAPI.filter((item, index) => index !== 0)} name="analysisfilm"/>
                         </div>
                         <AdvertPattern />
                    </section>
               }
          </>
     )
}

export default AnalysisFilmpage