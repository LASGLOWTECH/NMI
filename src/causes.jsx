


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
            <p className='text-lg font-bold  place-self-center text-yellow-500 pt-10 ' >Our Causes for actions</p>

            <h1 className='text-4xl text-center max-w-lg font-bold text-white pt-2'>CHANGE IS POSSIBLE AND IT COMES FROM THE POWER WITHIN</h1>
            <p className='  font-medium text-center text-gray-300 py-5 px-3' >
            You can't help the whole world but
            yon can help a girl child. Start listening and taking actions for period poverty elimination</p>

            <div className='flex justify-start my-3'>
              <a href="/contact" className='rounded-md text-black shadow-sm hover:bg-green-400  hover:text-white  px-4 mt-5 py-2 bg-yellow-500 font-bold  '>Donate Now</a>
            </div>

          </div>
        
        </div>

      </section>

      <section className="service-sec bg-green-50">

<div className="container mx-auto  px-6 ">

 <div className="flex items-center justify-center pt-10 flex-col">

 <h4 className=' text-2xl text-center f-bold text-gray-600 font-medium md:text-left pt-'>Programs</h4>
          <div className="line mt-1 w-20  md:w-20 border border-yellow-500"></div>
 <div className=" bg-gray-200  mt-4 rounded-lg  ">
          <img className="mx-auto  w-full  md:m-auto" src='/nmi78.JPG' alt='girl'></img>

        </div>

         

 </div>


  <div className=" grid grid-cols-1 gap-5  py-10   md:grid-cols-2">
    {CauseItems.map(Infos => {

      return (<div className="flex rounded-md bg-white hover:bg-white shadow-lg hover:scale-105  p-5  "  data-aos="zoom-in-up" key={Infos.id} >
        <div className="image-circl  ">
          <img src={Infos.Icon} className="rounded w-[100px]" alt="girl" />
        </div>
        <div className="flex flex-col  pl-2">
          <h4 className=' text-lg p-3 font-bold'>{Infos.headtext}</h4>
          <p className='border-bl text-base  max-w-md font-medium text-gray-600 px-2  ' >
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