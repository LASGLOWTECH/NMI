import Info from "./exports";
import Doings from "./doings";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";

import { useState } from "react";


const Home = () => {
  // const [CurrentIndex, setCurrentIndex]=useState(0)

  // const Prevslide=()=>{
  //   const firstSlide=CurrentIndex===0
  //   const newIndex= firstSlide ? Image.lengt-1:CurrentIndex-1
  //   setCurrentIndex(newIndex)
  // }

  // indicators
  // const gotoslide=()=>{
  //   setslideindex(slideindex)
  // }

  // const Nextslide=()=>{
  //   const lastSlide=CurrentIndex===Image.lengt-1;

  //   const newIndex= lastSlide ? 0:CurrentIndex+1
  //   setCurrentIndex(newIndex)
  // }


  return (
    <div className="Home ">


      <section className='hero-section bg-yellow-500 space-y-6  pb-6justify-between hover:scale-40 '>
        <div className='flex flex-col container mx-auto  px-6 md:flex-row'>
          <div className=' flex flex-col  mt-10 '>
            <p className='text-lg font-bold text-yellow-500 pt-10 ' >Nicholasmotivates Initiative</p>

            <h1 className='text-4xl font-bold text-white max-w-md pt-2'>An Advocacy For the Girl Child Campaign Project;<span className="text-yellow-500"> GIVE OUT A PAD, SAVE A GIRL CHILD</span></h1>
            <p className='text-base text-justify   font-medium text-gray-300 py-5 ' >
              Our core mandate is to eradicate period poverty, menstrual shame, stigma and taboos for the vulnerable, victimized,
              disadvantage and marginalized girl child, women, female inmates and women
              with disabilities to create a world where every girl, women, female inmates and female genders with disabilities are empowered to manage her Menstruation safely and hyginacally with integrity,
             pride and confidence hence mitigating poor menstrual hygiene management.
            </p>
            <div className='flex justify-start'>
              <a href="/" className='rounded-md text-white  hover:bg-black hover:text-white  px-4 mt-5 py-2 bg-yellow-600 font-bold  '>Donate Now</a>
            </div>

          </div>
          <img className="mx-auto" src='/girlpad.png' alt='girl'></img>

        </div>

      </section>

      <div className='container mx-auto px-6   pt-3 my-10 flex flex-col justify-between md:flex-row md:space-x-6' >

        <div className=" flex flex-col space-y-2  justify-start">
          <h4 className=' text-2xl text-center f-bold text-gray-600 font-medium md:text-left'>Our Belive</h4>
          <div className="line p  place-self-center w-20 md:place-self-start md:w-20 border border-yellow-500"></div>

          <h3 className=' max-w-md text-2xl pt-3 text-center  text-gray-600 font-bold md:text-left'>It is our Believe, that we can reach more
           disadvantage, victimized and marginalized girl child spread across rural communities, schools, IDP camps and prisons with you</h3>
          <p className='text-base text-center   max-w-md font-medium text-gray-700 py-5 md:text-justify' >
            Every Singleschool girl child, women, female inmates and female genders with disabilities deserves the comfort of a sanitary pad regardless of
            their aristocratic backgrounds or circumstances not withstanding. No school girl child shuold miss out of school within the space of her
            menstrual period because she can't afford a sanitary pad</p>
        </div>

        <div className=" bg-gray-200  rounded-lg  ">
          <img className="w-full h-auto px-3  " src="/nmi.jpg" alt="girl2"></img>

        </div>
      </div>


      {/* info section */}
      <section className="service-sec bg-green-50">

        <div className="container mx-auto px-6 ">
          <div className=" flex  py-7 flex-col  service-points justify-center  md:flex-row">
            {Info.map(Infos => {

              return (<div className="flex rounded-md flex-row hover:bg-white hover:scale-110 mt-3 p-3  mx-2 pb-5 " key={Infos.id} >
                <div className="image-circl  ">
                  <img src={Infos.Icon} className="rounded w-[100px]" alt="girl" />
                </div>
                <div className="flex flex-col hover:bg-white pl-2">
                  <h4 className=' text-lg font-bold'>{Infos.headtext}</h4>
                  <p className='border-bl text-base break-word max-w-md font-medium text-gray-600 py-3 ' >
                    {Infos.bodytext}</p>
                </div>



              </div>)


            })}
          </div>



        </div>


      </section>





      {/* vid hero */}

      <section className="Vivav   py-4">
        <div className='container mx-auto px-2 py-3 flex flex-col items-center' >
          <div className="hover:border-blue-300  container mx-auto px-2 ">
            <h2 className=' text-center  text-2xl py-5   text-gray-600  font-bold'>We are passionate about the reproductive health care
            and menstrual hygiene management of the girl child.
         <span className="text-uppercase"> Pads Should be given for free, Menstruation is an inevitable factor that can't be altered
         </span></h2>
          </div>


        </div>

        {/* video secttion */}
        <div className=" mx-auto px-6   container">
          <div className="bg-blue-50  rounded-xl">

            <iframe title="Distributing pads  Section" className="w-full rounded-xl p-2 aspect-video" src="/Austin's.mp4"></iframe>

          </div>

        </div>


        <div className="container    mx-auto px-6 ">
          <div className=" grid  px-7   gap-5 md:space-x-12 grid-cols-2 py-3 service-points my-3   md:grid-cols-4">
            {Doings.map(doing => {

              return (<div className="flex rounded-md flex-row mt-3  " key={doing.id} >

                <div className="flex flex-col bg-yellow-400  hover:bg-blue-50  hover:scale-110 rounded-lg  p-4">
                  <h1 className=' text-5xl text-center text-black font-bold  '>{doing.topN}+</h1>
                  <p className=' text-base text-center hover:text-black font-medium text-gray-600 py-2 ' >
                    {doing.btext}</p>
                </div>
              </div>)


            })}
          </div>



        </div>
      </section>

      <section className="testimonials py-8 bg-green-50">
        <div className='container mx-auto px-6 ' >

          <div className=" flex flex-col space-y-2  items-center">
            <h4 className=' text-2xl text-center font-medium pt-5'>Testimonials</h4>
            <div className="line p  place-self-center w-20 md:w-20 border border-yellow-500"></div>

            <h3 className=' max-w-md text-2xl py-3 text-center  text-gray-600 font-bold '>What People are Saying
              About our Services </h3>

          </div>

<div className="flex justify-center items-center flex-row">
<h5 className="bg-white ">  <GrFormPrevious /></h5>

<div className="bg-blue-50  rounded-xl">

  <iframe title="Distributing pads  Section" className="w-full rounded-xl p-2 aspect-video" src="/Austin's.mp4"></iframe>

          </div>
          

          <h5 className="bg-white ">  <GrFormNext /></h5>
          </div>

        </div>




      </section>
      {/* 

      <div className="texrrx bg-black">
          <div className='container flex flex-row justify-between  items-center mx-auto px-6 pt-5 ' >
            
            <div className=" flex justify-center py-4  md:justify-center md:flex-row">

              <div className="imge flex items-center h-50 w-[50px] h-[50px] justify-center border md:h-[100px] md:w-[100px] bg-white border-white rounded-[100%] ">
                <img src="/appoint.png" alt="girl" className="  "></img>
              </div>

              <div className="identity px-7  flex flex-col md:px-5 justify-center  ">
                <h5 className=' text-center text-white font-bold md:text-2xl  md:text-left '>Dr. Alexander Majoku</h5>
                <p className='  text-sm text-center  text-yellow-500 font-bold md:text-base md:text-left'>Md. Alimo Associate
                </p>
                <p className='  text-base pt-3 te xt-center max-w-md text-white font-normal md:text-base md:text-left'>We have affected lives through our Charity services, Testified many who considers our services worth it We have affected lives through our Charity services
                </p>
              </div>
            </div>


          
           

          </div>

          <RxDotFilled className="text-white" />
        </div>
 */}












      <section className="Gallery space-y-6"
      >
        <div className='container pt-5 grid  mx-auto px-6 justify-center items-center'>
          <div className=" flex flex-col   ">
            <h4 className=' text-2xl text-center font-medium pt-5'>Our Tours</h4>
            <div className="line p  place-self-center w-20  md:w-20 border border-yellow-500"></div>

            <h3 className=' max-w-md text-2xl py-3 text-center  text-gray-600 font-bold '>Higlights from our tours and Moments in rendering Heartful </h3>

          </div>
        </div>


        <div className='container pt-5 grid gap-4 mx-auto px-6 items-center justify-between  md:grid-cols-3 ' >


          <div className="gallery-items h-6/12bg-green-500">
            <img src="/nmi30.jpg" alt="gridtems" className=""></img>
          </div>
          <div className="gallery-items  w-100 bg-yellow-500 h-6/12">
            <img src="/nmi7.jpg" alt="gridtems" className="" ></img>
          </div>
          <div className="gallery-items h-6/12 bg-yellow-500">
            <img src="nmi72.jpg" alt="gridtems" className=" w-50"></img>
          </div>


        </div>

        <div className="container mx-auto px-6">
          <div className='flex justify-center py-3'>
            <a href="/gallery" className='rounded-md text-white  hover:bg-black hover:text-white px-4  py-2 bg-yellow-500 font-bold  '>View More</a>
          </div>
        </div>



      </section>

      <section className="bg-blue-50">
        <div className="container px-6  mx-auto ">
          <div className=" pt-9 flex flex-col items-center justify-center  ">
            <h4 className=' text-2xl text-center font-medium pt-5'>Our Partners</h4>
            <div className="line p  place-self-center w-20 md:w-20 border border-yellow-500"></div>

            <h3 className=' max-w-md text-2xl py-3 text-center text-gray-600 font-bold '>We have Support from Organization, Who subsribed to our Vission </h3>

          </div>

          <div className=' py-5 grid  grid-cols-2 gap-3 items-center justify-between md:grid-cols-4 ' >

            <div className="gallery-items ">
              <img src="/Parners.png" alt="gridtems" className="w-1/2"></img>
            </div>
            <div className="gallery-items    ">
              <img src="/Parners1.png" alt="gridtems" className="w-1/2" ></img>
            </div>
            <div className="gallery-items ">
              <img src="/Parners2.png" alt="gridtems" className=" w-1/2"></img>
            </div>

            <div className="gallery-items  ">
              <img src="/Parners3.png" alt="gridtems" className=" w-1/2"></img>
            </div>

          </div>


        </div>

      </section>



    </div>
  );
}

export default Home;
