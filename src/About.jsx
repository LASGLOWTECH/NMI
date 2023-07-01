
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';



import Values from "./values";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

}, []);

  return (
    <div className="About">

      <section className='about section bg-yellow-100 space-y-12 justify-between hover:scale-3 '>
        <div className='flex flex-col container mx-auto  px-6 md:flex-row'>
          <div className=' flex flex-col  mt-10 '>


            <h1 className='text-4xl font-bold text-gray-600 max-w-md pt-5'>About Us</h1>
            <p className='text-base text-justify  max-w-md font-medium text-gray-600  py-5' >Nicholasmotivate Initiative is a registered non profit organization here in Nigeria with a 
core campaign project “GIVE OUT A PAD, SAVE A GIRL CHILD” targeted at the 
reproductive health care of the vulnerable, victimized and disadvantaged girls, women, 
female inmates and female genders with disabilities with a passionate drive towards 
ending period poverty, menstrual shame and menstrual taboos spread across rural 
communities, prisons, schools, IDP camps and shelters.
            </p>


          </div>
          <img className="mx-auto hover:scale-110  w-full md:w-1/2 md:py-5 md:m-10" src='/nmi76.JPG' alt='girl'></img>

        </div>

      </section>


      <div className='container mx-auto px-6   pt-3 my-10 flex flex-col justify-between md:flex-row md:space-x-6' >

        <div className=" flex flex-col items  justify-start">
          <h4 className=' text-2xl text-center f-bold text-gray-600 font-medium md:text-left'>Our Drive</h4>
          <div className="line  place-self-center w-20 md:place-self-start md:w-20 border border-yellow-500"></div>
          <h3 className=' max-w-md text-2xl pt-3 text-center text-lowercase  text-gray-600 font-bold md:text-left'>GIVE OUT A PAD, SAVE A GIRL CHILD</h3>
          <p className='text-base text-center    font-medium text-gray-700 py-5 md:text-justify' >
            Every Single school girl child deserves the comfort of a sanitary pad regardless of
            their aristocratic backgrounds not withstanding. No school girl child should miss out of school within the space of her
            menstrual period because she can't afford a sanitary pad</p>
        </div>

        <div className=" bg-gray-200  mt-3 rounded-lg  ">
          <img className="mx-auto hover:scale-105 w-full    md:m-auto" src='/nmi58.JPG' alt='girl'></img>

        </div>
      </div>

      <section className="Principles">
        <div className="container    mx-auto px-6 ">
          <h3 className=' max-w-md text-2xl pt-3 text-center text-lowercase  text-gray-600 font-bold md:text-left'>What we Stand for</h3>
          

          <div className=" grid gap-5  grid-cols-1 py-8 service-points   md:grid-cols-2">
            {Values.map(val => {

              return (<div className=" bg-green-20 max-w-full h-auto shadow-lg hover:bg-white hover:text-gray-300 hover:scale-105 p-4" key={val.id} data-aos="zoom-in-up">
                <img className="w-full" src={val.Icon} alt='girl'></img>

                <h5 className=' text-2xl text-justify pt-3 text-gray-700 font-bold  '>{val.headtext}</h5>
                <p className=' text-base text-left  pt-3 hover:text-black font-medium text-gray-600 py-2 ' >


                  {val.bodytext}</p>
                  <div className="under bg-yellow-500 "></div>
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