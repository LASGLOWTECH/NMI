


 
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Profiles from "./profile";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

}, []);
 return (
  <div className="About bg-yellow-100">

   <div className='container mx-auto px-6   pt-3 my-10 flex flex-col justify-between md:flex-row md:space-x-6' >

    <div className=" flex flex-col space-y-  justify-start">
     <h4 className=' text-2xl text-center f-bold text-gray-600 font-medium md:text-left'>Board of Trustees</h4>
     <div className="line   place-self-center w-20 md:place-self-start md:w-20 border border-yellow-500"></div>
    
     <p className='text-base text-center   font-medium text-gray-700 py-5 md:text-justify' >
     
      Nicholasmotivates Initiative is headed by highly esteemed
      board of trustees, with professional humanitarian experience in dealing
      with people especially the girl child who are the main target of our
      objectives. We Believe in the potential powers of the victimized, marginalized and disadvantaged girls, women,
      female inmates and female genders with disabilities to participate actively in good menstrual hygiene management</p>
    </div>

    <div className=" bg-gray-200  mt-3 rounded-lg  ">
     <img className="mx-auto hover:scale-105 w-full    md:m-auto" src='/gal (5).JPG' alt='team'></img>

    </div>
   </div>





   <section className="Principles bg-gray-100 ">
    <div className="container   mx-auto px-6 ">
     <h3 className=' text-2xl pt-3 text-center   text-gray-600 font-bold '> <h3 className=' max-w-md text-2xl pt-3 text-center text-lowercase  text-gray-600 font-bold md:text-left'>Meet Our Team</h3></h3>
 
   

     <div className=" grid gap-5  over-flow-hidden grid-cols-1 py-8 service-points   md:grid-cols-3">
      {Profiles.map(val => {

       return (<div className="  bg-gray-200 shadow-xl  hover:bg-white hover:text-gray-300 p-4" key={val.id} data-aos="zoom-in" >
        <img className="w-full" src={val.Icon} alt='girl'></img>

        <h5 className=' text-base text-left pt-2 text-gray-700 font-bold  '>{val.headtext}</h5>
        <p className=' text-base text-left  pt-2 hover:text-black font-medium text-gray-600 py-2 ' >


         {val.bodytext}</p>
        <div className="under bg-yellow-500 w-full h-50"></div>
       </div>
       )


      })}
     </div>



    </div>
   </section>



  </div>
 )

}

export default About;








