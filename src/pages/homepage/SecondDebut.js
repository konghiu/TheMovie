import { useDispatch } from "react-redux"
import { get_data_src } from "../../redux/action";
import VideoHomepage from "./VideoHomepage";
import { trailersAPI } from "../../fakeAPI/trailersAPI";


const SecondDebut = () => {
     
     // const trailersAPI = useSelector(state => state.storeAPI.trailersAPI);  



     return (
          <div className='w-full pt-3 pb-1 text-white'>
               <div className='flex cl-main m-5'>
                    <VideoHomepage />
                    <div className='w-2/5'>
                         <div className='mt-3 flex flex-col'>   
                              <div className='grid grid-cols-1 gap-5 p-5 pt-0 pl-2'>
                                   <ContentAnother data={trailersAPI[3]}/>
                                   <ContentAnother data={trailersAPI[2]}/>
                                   <ContentAnother data={trailersAPI[1]}/>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}


const ContentAnother = props => {

     const dispatch = useDispatch()

     return (
          <div className='flex justify-between items-center'>
               {
                    props.data ?
                    <>
                         <div 
                              className='w-24 h-24'
                              onClick={() => dispatch(get_data_src(props.data.trailer))}
                              >
                              <img src={props.data.image} alt='' className='w-40 h-full' />
                         </div>
                         <div className='flex-1 h-full ml-3'>
                              <p   
                                   className='mb-2 font-semibold title-detail hover:text-blue-400 cursor-pointer text-ellipsis overflow-hidden'
                                   onClick={() => dispatch(get_data_src(props.data.trailer))}
                              >{props.data.name}</p>
                         </div>
                    </>
                    : null
               }
          </div>
     )
}

export default SecondDebut