
import Gall from "./gall";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Videoclips from "./videoclips";


const Gallery = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });

    }, []);
 return (
  <div className="About bg-yellow-100">


   <section className="Principles bg-green-50">

    <div className="container   mx-auto px-6 ">
<h3 className="mt-5  pt-5 text-2xl font-bold text-black text-center">Moments We have Shared</h3>
    <p className="py-6 text-gray-600 font-bold  text-base text-center">Give out a pad, Save the Girl Child  </p>


     <div className=" grid gap-5 grid-cols-1 py-10 service-points   md:grid-cols-3">
      {Gall.map(val => {

       return (
        <div className="  md:break-inside-auto shadow-xl  hover:scale-105 hover:text-gray-300 " key={val.id}data-aos="slide-in" >
        <img className=" md:break-inside-auto  " src={val.Img} alt='girl'></img>

        
       </div>
       )


      })}
     </div>






     <div className="container   mx-auto px-6 ">
<h3 className="mt-5  pt-5 text-2xl font-bold text-black text-center">Videos Gallery</h3>
    <p className="py-6 text-gray-600 font-bold  text-base text-center">Short Clips on some of our Campaigns </p>


     <div className=" grid gap-5 grid-cols-1 py-10 service-points   md:grid-cols-2">
      {Videoclips.map(val => {

       return (<div className="  md:break-inside-auto shadow-xl  hover:scale-105 hover:text-gray-300 " key={val.id}data-aos="slide-in" >
         <iframe title="Distributing pads  Section" className="w-full rounded-xl p-2 aspect-video" src={val.Video} autostart="false"></iframe>
        
       </div>
       )


      })}
     </div>



    </div>


    </div>
   </section>



   
  </div>
 )

}

export default Gallery;














