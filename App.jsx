
import Home from './Home'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import './App.css'
import Services from './Services'

function App() {
  return (
  <body className='bg-purple-300 p-5 m-2'>
  <div className='justify-items-center flex-row'>
  <h1 className='bg-blue-300 text-black justify-items-center rounded-md w-screen p-10'>Welcome to Admin of ReactJs Fullstack Developer</h1><br/>
<NavBar/>
<Router><Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/ContactUs' element={<ContactUs/>}></Route>
  <Route path='/AboutUs' element={<AboutUs/>}></Route>
  <Route path='/Services' element={<Services/>}></Route>
  
  </Routes></Router>
<Home/>
<Footer/>
  </div>
  </body>
  )
}

export default App
