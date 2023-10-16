
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import About from './About';
import Team from './team';
import Contact from './contact';
import Footer from './footer';
import Gallery from './gallery';
import Causes from './causes';

import ScrollTop from './scroll';
import { useState, useEffect } from 'react';

const App=()=> {
// const [position, setPosition]=useState(0)
// const [gotop, setGotop]=useState(gotophidden)
const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000);



    
  }, [])

  return (
    <div className="App ">

{loading ? <div className='load bg-gradient-to-r from-black-50 to-black-50
    flex  flex-col justify-center items-center h-[100vh] '
       >

        <img src='/nim.png' className="load-img animate-pulse w-[200px]" alt='loader' ></img>

        </div> :
<>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/causes' element={<Causes />} />
        <Route path='/team' element={<Team />} />
        <Route path='/Gallery' element={<Gallery />} />
      </Routes>
      <ScrollTop/>
      <Footer /></>}
      
    </div>

  );
}

export default App;
