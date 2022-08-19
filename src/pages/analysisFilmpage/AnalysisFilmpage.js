import React from 'react'
import AdvertPattern from '../../patterns/AdvertPattern'
import ContentPattern from '../../patterns/ContentPattern'
import HeaderPattern from '../../patterns/HeaderPattern'
import { analysisFilmAPI } from '../../fakeAPI/analysisFilmAPI'

const AnalysisFilmpage = () => {

     // const analysisFilmAPI = useSelector(state => state.storeAPI.analysisFilmAPI)

     return (
          <>
               {
                    analysisFilmAPI ?
                    <section className='width-screen bg-main flex'>
                         <div className='width-slide flex flex-col'>
                              <HeaderPattern data={analysisFilmAPI[0]} name="analysisfilm"/>
                              <ContentPattern data={analysisFilmAPI.filter((item, index) => index !== 0)} name="analysisfilm"/>
                         </div>
                         <AdvertPattern />
                    </section>
                    : null
               }
          </>
     )
}

export default AnalysisFilmpage