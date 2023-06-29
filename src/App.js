
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
function App() {

  
  return (
    <div className="App ">
      <Navbar/>
      <Routes>
<Route path='/' element={ <Home/> } />
<Route path='/about' element={ <About/> } />
<Route path='/contact' element={ <Contact/> } />
<Route path='/causes' element={ <Causes/> } />
<Route path='/team' element={ <Team/> } />
<Route path='/Gallery' element={ <Gallery/> } />
      </Routes>
    <Footer/>
    </div>

  );
}

export default App;
