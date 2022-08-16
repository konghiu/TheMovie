import quangcao1 from '../image/quangcao1.jpg'
import quangcao2 from '../image/quangcao2.jpg'
import quangcao3 from '../image/quangcao3.jpg'
import quangcao4 from '../image/quangcao4.jpg'
import './patternStyle.css'


const AdvertPattern = () => {

     return (
          <div className='advert'>
               <div className='content-advert flex flex-col h-fit'>
                    <div><img src={quangcao1} alt=''/></div>
                    <div><img src={quangcao2} alt=''/></div>
                    <div><img src={quangcao4} alt=''/></div>
                    <div><img src={quangcao3} alt=''/></div>
               </div>
          </div>
     )
}

export default AdvertPattern