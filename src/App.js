import { Route, Routes } from 'react-router'
import Homepage from './pages/homepage/Homepage'
import Newspage from './pages/newspage/Newspage'
import Header from './other-component/Header'
import StarEventpage from './pages/star-event/StarEventpage'
import Footer from './other-component/Footer'
import AnalysisFilmpage from './pages/analysisFilmpage/AnalysisFilmpage'
import Contentpage from './patterns/Contentpage'
import Notpage from './pages/notpage/Notpage'
import BookSticketpage from './pages/booksticketpage/BookSticketpage'
import { windowScroll } from './exportFunction/exportFunction'
import Accountpage from './pages/accountpage.js/Accountpage'
import LoginRegisterpage from './pages/login-register/LoginRegisterpage'
import ContentAccount from './pages/accountpage.js/ContentAccount'
import SearchHeader from './other-component/SearchHeader'
import DescribeTicketFilm from './pages/booksticketpage/DescribeTicketFilm'
import ChoseInfoTicket from './pages/booksticketpage/ChoseInfoTicket'
import GeneralInfomation from './pages/accountpage.js/mainContentAccountPage/GeneralInfomation'
import AccountDetail from './pages/accountpage.js/mainContentAccountPage/AccountDetail'
import TransactionHistory from './pages/accountpage.js/mainContentAccountPage/TransactionHistory'
import './App.css'
import './font-awesome/css/all.css'
import './font-awesome/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './customCSS.css'
import ReceiptFilm from './pages/accountpage.js/mainContentAccountPage/ReceiptFilm'
import MoviesWatched from './pages/accountpage.js/mainContentAccountPage/MoviesWatched'
import ChoseSeat from './pages/booksticketpage/ChoseSeat'
import ChoseFood from './pages/booksticketpage/ChoseFood'
import Payment from './pages/booksticketpage/Payment'

// setupServerAPI()

const App = () => {

     window.onscroll = () => windowScroll()

     return (
          <div 
               className='banner relative w-full flex flex-col items-center'
          >
               <SearchHeader />
               <Header />
               <Routes >
                    <Route path='TheMovie/' element={<Homepage />}/>
                    <Route path='TheMovie/trang-chu' element={<Homepage />}/>
                    <Route path='TheMovie/tin-dien-anh' element={<Newspage />}/>
                    <Route path='TheMovie/sao-su-kien' element={<StarEventpage />}/>
                    <Route path='TheMovie/phan-tich-dien-anh' element={<AnalysisFilmpage />}/>
                    <Route path='TheMovie/dat-ve' element={<BookSticketpage />} >
                         <Route path='' element={<DescribeTicketFilm />} />
                         <Route path='mua-ve' element={<ChoseInfoTicket />} >
                              <Route path='' element={<ChoseSeat />} />
                              <Route path='chon-cho-ngoi' element={<ChoseSeat />} />
                              <Route path='chon-mon-an' element={<ChoseFood />} />
                              <Route path='thanh-toan' element={<Payment />} />
                         </Route>
                    </Route>
                    <Route path='TheMovie/tai-khoan' element={<Accountpage />}>
                         <Route path='' element={<ContentAccount />}>
                              <Route path='' element={<GeneralInfomation />}/>     
                              <Route path='thong-tin-chung' element={<GeneralInfomation />}/>     
                              <Route path='chi-tiet-tai-khoan' element={<AccountDetail />} />  
                              <Route path='lich-su-giao-dich' element={<TransactionHistory />}>
                                   <Route path='' element={<MoviesWatched/>}/>     
                                   <Route path='phim-da-xem' element={<MoviesWatched/>}/>     
                                   <Route path='hoa-don' element={<ReceiptFilm />}/>    
                              </Route>        
                         </Route>
                         <Route path=':path' element={<LoginRegisterpage />}/>
                    </Route>
                    <Route path='*' element={<Notpage />}/>
                    <Route path='TheMovie/khong-kha-dung' element={<Notpage />}/>
                    <Route path='TheMovie/:content' element={<Contentpage />}/>
               </Routes>
               <Footer />
          </div>
     )
}

export default App