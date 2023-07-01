
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaInstagram, } from "react-icons/fa"
import { Link } from "react-router-dom";



const Footer = () => {


 return ( 



  <div className=" bg-black py-10 Footer-items">
  <div className="container  px-2 mx-auto">
    <div className="grid  gap-5 grid-cols-2 justify-between    md:grid-cols-4">

      <div className="footer-items flex flex-col ">

        <h5 className=' max-w-md text-xl pb-2 text-center text-yellow-500 font-bold md:text-2xl'>Contact us </h5>
        <p className="text-base   text-gray-300 py-3"> Plot 122, Off SureStart School, by F01,
          Kubwa, Extension III, F.C.T, Abuja.</p>

        <p className="text-base  text-gray-300"> +234-8100-100-489</p>
        <p className="text-base pt-2 text-gray-300"> nicholasmotivatesinitiative@gmail.com </p>

        <div className='Email    flex  justify-start'>

          <span className=" rounded-[100%]   my-5 me-2 text-black bg-yellow-600  text-2xl"><a href="https://twitter.com/Nicholasmotivates1"><BsTwitter className="p-1" /></a></span>
          <span className="rounded-[100%] my-5  mx-2  text-black bg-yellow-600  text-2xl"><a href="https://www.facebook.com/Nicholasmotivates?mibextid=LQQJ4D"><FaFacebookF className="p-1" /></a></span>
          <span className=" rounded-[100%] my-5 mx-2 text-black  bg-yellow-600 text-2xl"><a href="https://instagram.com/nicholasmotivates/"><FaInstagram className="p-1" /></a></span>
          <span className=" rounded-[100%] my-5 mx-2 text-black  bg-yellow-600 text-2xl"><a href="https://linkedin.com/mwlite/in/nicholason-ugwuanyi-214428153"><BsLinkedin className="p-1" /></a></span>

        </div>
      </div>



      {/* second grid */}
      <div className="footer-items 
      w-100 flex  items-center flex-col ">

        <h4 className='   text-xl pb-2  text-left  text-yellow-500 font-bold md: '>Quick Links </h4>
        <p className="text-base  hover:text-yellow-500 text-gray-200 py-2"><Link to="/About">About</Link> </p>
        <p className="text-base hover:text-yellow-500  text-gray-200 py-2"><Link to="/causes">Causes</Link> </p>
        <p className="text-base  hover:text-yellow-500 text-gray-200 py-2"><Link to="/team">Team</Link> </p>
        <p className="text-base  hover:text-yellow-500 text-gray-200 py-2"><Link to="/contact">Contact</Link> </p>

      </div>

   

      <div className="footer-items flex 
  md: items-center  flex-col ">

        <h4 className='   text-xl pb-2  text-left  text-yellow-500 font-bold md:text-2xl '>Information</h4>
        <p className="text-base  text-left text-gray-200 py-2"><Link to="/contact">Talk to us</Link> </p>
        <p className="text-base text-left  text-gray-200 py-2">Privacy & Policy </p>
        <p className="text-base  text-left text-gray-200 py-2">Terms & conditions </p>


      </div>

      <div className="footer-items 
        flex flex-col ">

        <p className='   text-base   text-left  text-white font-bold  '>Send us a message and you will be
          attended to</p>
        <p className="text-base text-justify  text-gray-200 py-3">We would love to hear from you. Contact
          us through email
        </p>
        <div className="email-send flex ">
          
            
            <button className="bg-yellow-500 text-black text-base font-bold  rounded-lg mt-2 p-2" type="submit"><Link to="/contact">Send Message</Link></button>
         

        </div>

      </div>


    </div>


    <p className="text-sm text-center font-light pt-10 text-gray-300 py-3">All Rights Reserved Nicholasmotivates Initiative  2023. Powered by Lasglowtech </p>
  </div>


</div>



  );
}
 
export default Footer;