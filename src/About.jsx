
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

      <section className='about section py-10 mt-10 bg-yellow-100 space-y-12 justify-between hover:scale-3 '>
        <div className='grid grid-cols-1 gap-5 items-center justify-center   md:grid-cols-2 container mx-auto  px-6 '>
          <div className=' flex flex-col  mt-10 '>


            <h1 className='text-4xl font-bold text-gray-600 max-w-md pt-5'>About Us</h1>
            <p className='text-base text-left px-2    font-medium text-gray-600  leading-loose py-5' >Nicholasmotivate Initiative is a registered non profit organization in Nigeria with a
              core campaign project “GIVE OUT A PAD, SAVE A GIRL CHILD” targeted at the
              reproductive health care of the vulnerable, victimized, marginalized and disadvantaged girls, women,
              female inmates and female genders with disabilities with a passionate drive towards
              ending period poverty, menstrual shame and menstrual taboos spread across rural
              communities, prisons, schools, IDP camps and shelters. We are also passionate about Gender-based violence which is a friction of period poverty that has resultd
              to forced abortion, unwanted pregnancy, forced cohabitation and teenage preganncy.           </p>


          </div>
          <div className=""> <img className="mx-auto hover:scale-110  rounded-[30px] w-full  md:py-5 " src='/nmi76.JPG' alt='girl'></img>
          </div>

        </div>

      </section>


      <div className='grid grid-cols-1 gap-5 items-center justify-center   md:grid-cols-2 container mx-auto  px-6 ' >


      <div className="  py-20 rounded-lg  ">
          <img className="mx-auto hover:scale-105 w-full rounded-[30px]  md:m-auto" src='/nmi58.JPG' alt='girl'></img>

        </div>

        <div className=" flex flex-col items  justify-start">
          <h4 className=' text-2xl text-center  text-gray-600 font-medium md:text-left'>Our Drive</h4>
          <div className="line  place-self-center  mb-6 w-20 md:place-self-start md:w-20 border border-yellow-300"></div>
          <h3 className=' text-3xl md:text-5xl pt-3 text-center text-lowercase  text-gray-600 font-medium md:text-left'>Give Out A Pad, Save A Girl Child</h3>
          <p className='text-base text-left  leading-loose  font-medium text-gray-700 py-5 md:text-justify' >
            Every Single school girl child deserves the comfort of a sanitary pad regardless of
            their aristocratic backgrounds not withstanding. No school girl child should miss out of school within the space of her
            menstrual period because she can't afford a sanitary pad.<br />
            It is our earnest drive and mptivation to create a society where menstruation is rather humanized and not demonized for every disadvantage, victimized, marginalized and vulnerable girl child, women, female inmates and female genders with disabilities. It is also our ultimate drive that every young woman either displaced or not gets to observe her menstrual circle with so much pride, integrity
            and power.

          </p>
        </div>

      </div>

      <section className="Principles bg-gray-100">
        <div className="container    mx-auto px-6 ">
          <h3 className='  text-4xl pt-8 text-center text-lowercase  text-gray-600 font-medium md:text-center'>What we Stand for</h3>

          <div className=" ">
            {Values.map(val => {

              return (<div className=" grid gap-5 items-center justify-center grid-cols-1 py-8 service-points   md:grid-cols-2" key={val.id} data-aos="zoom-in-up">
                <img className="w-full rounded-[30px]" src={val.Icon} alt='girl'></img>
<div className="right">
<h5 className=' text-3xl text-justify py-4 text-gray-700 font-bold  '>{val.headtext}</h5>
                <p className=' text-base text-left leading-loose  pt-3 hover:text-black font-medium text-gray-600 py-2 ' >


                  {val.bodytext}</p>
                

</div>
                
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