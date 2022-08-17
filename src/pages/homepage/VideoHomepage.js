import { useSelector } from 'react-redux'


const VideoHomepage = () => {

     const srcTrailer = useSelector(state => state.storeGetData.srcTrailer)

     return (
          <div className='flex-1'>
               <div className='relative p-3 overflow-hidden h-full sm:h-96 mb:h-72'>
                    <iframe
                         className='w-full h-full' 
                         src={srcTrailer}
                         title="YouTube video player" 
                         frameBorder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                         allowFullScreen
                    ></iframe>
               </div>
          </div>
     )
}

export default VideoHomepage