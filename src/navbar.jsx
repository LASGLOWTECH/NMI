
import { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephone, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx"
// import { Link } from "react-router-dom";



const Navbar = () => {

  const [show, setShow]=useState(false)

  const handleShow=()=>{
    setShow(show=>!show) 
 
  }

  const handleClose=()=>{
    setShow(false)
  }
  const toggleI=  show? 'active':'';
 return (
  <>
  
  <div className='w-100 h-auto '>
        {/* Nav area */}
        <div className="  hidden h-10 bg-black md:block  ">
       {/* first nav areA */}
        < div className=" mx-auto  container space-x-12 flex items-center justify-between   px-2">
<div className='Email   text-gray-300   fw-thin flex items-center flex-row justify-center py-2  px-2'> 
<BiEnvelope/>
 <p className='px-3'>nicholasmotivatesinitiative</p>
 
 <BsTelephone/>
<p className='pl-5'> 08100100489</p>
</div>
<div className='Email  text-gray-300  flex items-center justify-between'>

<span className="px-3 "><BsTwitter/></span>
 <span className="px-3 "><FaFacebookF/></span>
 <span className="px-3 "><FaInstagram/></span>


</div>
        </div>

        </div>
        {/* second nav area */}
        <div className="  container h-16  space-x-6 flex items-center justify-between mx-auto  px-4">
          <div className='nav-brand py-2   w-16  h-25  '><img src='/NMB.png' alt='brand-logo' /></div>
          <div className= { `hidden text-white transform space-y-6 navlinks flex nav-links ${toggleI} md:space-x-6 md:text-black  md:block` } >
          <a href ='/' className="font-medium hover:text-black text-base md:hover:text-yellow-600">Home</a>
            <a href='/about' className='font-medium   hover:text-black  text-base md:hover:text-yellow-600 '>About</a>
            <a href='/causes' className='font-medium   hover:text-black  text-base md:hover:text-yellow-600'>Causes</a>
            <a href='/team' className='font-medium   hover:text-black  text-base md:hover:text-yellow-600' >Team</a>
            <a href='/gallery' className='font-medium   hover:text-black  text-base md:hover:text-yellow-600'>Gallery</a>
            <a href='/contact' className='font-medium   hover:text-black  text-base md:hover:text-yellow-600'>Contact</a>
          </div>
          
          < div className='rounded-md hidden hover:bg-black hover:text-white bg-yellow-500 font-bold   py-2 px-4 md:flex'>Donate</div>
{!show && < div className=' flex items-center rounded-full hover:bg-black hover:text-white w-8 h-8  bg-yellow-500 text-black justify-center md:hidden'>< RxHamburgerMenu className="font-bold text-lg  " onClick={handleShow}/></div>}
         
{show && <div className=' hover:text-yellow-500 text-black   py-2 px-4 md:hidden'>< FaTimes  className="font-medium text-xl"  onClick={handleClose}/></div>}
        </div>
      </div>
  
  
  </>
   );
}
 
export default Navbar;