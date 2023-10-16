


import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';



import CauseItems from "./causesitems"
const Causes = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });

}, []);
  return (
    <div className="About ">

      

<section className='hero-section bg-yellow-500 py-8  hover:scale-40 '>
        <div className='flex flex-col container mx-auto   md:flex-row'>
          <div className=' flex flex-col mx-auto  items-center justify-center  mt-10 '>
            <p className='text-lg font-bold pb-4  place-self-center text-yellow-400 pt-10 ' >Our Causes for actions</p>

            <h1 className='text-3xl md:text-5xl text-center md:px-20 font-bold text-white pt-2'>CHANGE IS POSSIBLE AND IT COMES FROM THE POWER WITHIN</h1>
            <p className=' px-3  font-medium text-center text-gray-300 py-5 md:max-w-md leading-loose' >
            You can't help the whole world but
            you can help a girl child. Start listening and taking actions for period poverty elimination</p>

            <div className='flex justify-start my-3'>
              <a href="/contact" className='rounded-md text-black shadow-sm hover:bg-green-400  hover:text-white  px-4 mt-5 py-2 bg-yellow-500 font-bold  '>Donate Now</a>
            </div>

          </div>
        
        </div>

      </section>

      <section className="service-sec Contact-Hero ">

<div className="container mx-auto  px-6 ">

 <div className="flex items-center justify-center pt-10 flex-col">

 <h4 className=' text-2xl text-center f-bold text-white font-medium md:text-left pt-'>Programs</h4>
          <div className="line mt-1 w-20  md:w-20 border border-yellow-500"></div>
 <div className="   mt-4 ">
          <img className="mx-auto   rounded-[30px] w-full  md:m-auto" src='/nmi78.JPG' alt='girl'></img>

        </div>

         

 </div>


  <div className="">
    {CauseItems.map(Infos => {

      return (<div className=" grid grid-cols-1 gap-5 md:mt-20  mt-4   py-10 md:items-center   md:grid-cols-3 "  data-aos="zoom-in-up" key={Infos.id} >
        <div className="image-circl   col-span-1 ">
          <img src={Infos.Icon} className="rounded-2xl w-full" alt="girl" />
        </div>
       
        <div className="flex flex-col  pl-2 mt-4  col-span-2 ">
        <div className="line mt-1 rounded-l md:mx-6  w-20 mb-4 md:w-20 border border-yellow-300"></div>
          <h4 className='  text-3xl md:text-5xl text-white p-2 md:mx-6 font-medium'>{Infos.headtext}</h4>
          <p className='border-bl text-base pt-6  md:mx-6 leading-8  font-medium text-white px-2  ' >
            {Infos.bodytext}</p>
        </div>
      </div>)


    })}
  </div>



</div>


</section>









    </div>
  )

}

export default Causes;