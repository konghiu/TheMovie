import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { route_content } from '../redux/action'
import { eventAPI } from '../fakeAPI/eventAPI'
import { analysisFilmAPI } from '../fakeAPI/analysisFilmAPI'

const ContentPattern = props => {

     return (
          <div>
               {
                    props.data ?
                    <div  className='grid grid-cols-1 p-4 pt-0'>
                         {
                              props.data.map((item, index) => (
                                   <ChildrenContent data={item} key={index} name={props.name}/>
                              ))
                         }
                    </div>
                    : null
               }
          </div>
     )
}

const ChildrenContent = props => {

     const navigate = useNavigate()
     const dispatch = useDispatch()

     const handleCheckInData = (array) => {
          if(Array.isArray(array)) {
               array.forEach(item => {
                    if(item.describe === props.data.describe) {
                         dispatch(route_content(item));
                         navigate('/TheMovie/cong-hieu-dep-trai');   
                    }     
               })
          }
     }

     const handleShowContent = () => {
          if(props.name === 'eventsstar') {
               handleCheckInData(eventAPI); 
          } else {
               handleCheckInData(analysisFilmAPI);        
          }       
     }
     
     return (
          <>
               {
                    props.data ? 
                    <div 
                         className='py-5 flex text-white'
                         style={{'borderBottom': '0.25px solid white'}}
                    >
                         <div className='w-1/4'>
                              <img src={props.data.poster || props.data.image} alt='' />
                         </div>
                         <div className='flex-1 ml-8'>
                              <p onClick={() => handleShowContent()} className='font-semibold cursor-pointer hover:text-blue-400'>{props.data.describe}</p>
                              <p className='text-blue-200 text-sm brief-5 font-thin'>
                                   {
                                        props.data.content[0].title || props.data.content[0].detail[0]
                                   }
                              </p>
                         </div>
                    </div>
                    : null
               }
          </>
     )
}

export default ContentPattern