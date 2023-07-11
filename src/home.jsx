import Info from "./exports";
import Doings from "./doings";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Carousel } from "@material-tailwind/react"
import Testimonials from "./testimonials";
// import { RxDotFilled } from "react-icons/rx";



const Home = () => {

  return (
    <div className="Home ">


      <section className='hero-section space-y-12 pb-6 justify-between hover:scale-40 '>
        <div className='flex flex-col container mx-auto  px-6 md:flex-row'>
          <div className=' flex flex-col  mt-10 '>
            <p className='text-lg font-bold text-yellow-400 pt-10 ' >Nicholasmotivates Initiative</p>

            <h1 className='text-4xl font-bold text-white  pt-2'> An Advocacy For the Girl Child Campaign Project;<span className="text-yellow-400 text-2xl"> GIVE OUT A PAD, SAVE A GIRL CHILD</span></h1>
            <p className='text-base text-left   font-medium text-gray-300 py-5 l' >
              Our core mandate is to eradicate period poverty, menstrual shame, stigma and taboos for the vulnerable, victimized,
              disadvantage and marginalized girl child, women, female inmates and female genders
              with disabilities to create a world where every girl, women, female inmates and female genders with disabilities are empowered to manage her Menstruation safely and hyginacally with integrity,
              pride and confidence hence mitigating poor menstrual hygiene management.
            </p>
            <div className='flex justify-start'>
              <a href="/contact" className='rounded-md text-black  hover:bg-black hover:text-white  px-4 my-6 py-2 bg-yellow-400 font-bold  '>Donate Now</a>
            </div>

          </div>
          <img className="mx-auto" src='/girlpad.png' alt='girl'></img>

        </div>

      </section>

      <div className='container mx-auto px-6   pt-3 my-10 flex flex-col justify-between md:flex-row md:space-x-6' >

        <div className=" flex flex-col space-y-2  justify-start">
          <h4 className=' text-2xl text-center f-bold text-gray-600 font-medium  md:text-left'>Our Believe</h4>
          <div className="line p  place-self-center w-20 md:place-self-start md:w-20 border border-yellow-500"></div>

          <h5 className='  text-2xl pt-3 text-center  md:max-w-2xl text-gray-600 font-bold md:text-left'>It is our believe that we can reach more
           vulnerable, disadvantage, victimized and marginalized girl child spread across rural communities, schools, IDP camps and prisons with you</h5>
          <p className='text-base text-center md:max-w-2xl font-medium text-gray-600 py-5 md:text-left' >
            Every single school girl child, women, female inmates and female genders with disabilities deserves the comfort of a sanitary pad regardless of
            their aristocratic backgrounds or circumstances not withstanding. No school girl child should miss out of school within the space of her
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
                  <p className='border-bl text-lef text-base break-word max-w-md font-medium text-gray-600 py-3 ' >
                    {Infos.bodytext}</p>
                </div>



              </div>)


            })}
          </div>



        </div>


      </section>





      {/* vid hero */}

      <section className="Vivav   py-4">
        <div className='container mx-auto px-4 py-3 flex flex-col items-center' >
          <div className=" max-wd-md hover:border-blue-300  container mx-auto px-6 ">
            <h5 className=' text-2xl py-3 text-center  text-gray-600 font-bold'>We are passionate about the reproductive health care
              and menstrual hygiene management of the girl child.
              <span className="text-uppercase "> Pads should be given for free, menstruation is an inevitable factor that can't be altered
              </span></h5>
          </div>


        </div>

        {/* video secttion */}
        <div className=" mx-auto px-6   container">
          <div className="bg-blue-50  rounded-xl">

            <iframe title="Distributing pads  Section" className="w-full rounded-xl p-2 aspect-video" src="/Unale2.mp4" autostart="false"></iframe>

          </div>

        </div>


        <div className="container    mx-auto px-10 ">
          <div className=" grid gap-3 px-7   md:gap-3 md:space-x-12 grid-cols-2 py-3 service-points my-3   md:grid-cols-4">
            {Doings.map(doing => {

              return (<div className="flex rounded-md flex-row mt-3 justify-evenly " key={doing.id} >

                <div className="flex flex-col bg-yellow-400  hover:bg-blue-50  hover:scale-110 rounded-lg  p-3">
                  <h1 className=' text-4xl md:text-4xl text-center text-black font-bold  '>{doing.topN}+</h1>
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
              About our impacts </h3>

          </div>





        </div>



        <div className=" container  px-6 mx-auto">



        <Carousel transition={{ duration: 1}} className="rounded-xl">

            {Testimonials.map(vida => {
              return (


                <div className="bg-blue-50  rounded-xl" key={vida.id}>
                  <iframe title="Distributing pads  Section" className="w-full rounded-xl p-2  aspect-video " src={vida.Video} sandbox></iframe>
                </div>
               )
            })}


</Carousel>

          


        </div>



      </section>




     





      <section className="Gallery space-y-6"
      >
        <div className='container pt-5 grid  mx-auto px-6 justify-center items-center'>
          <div className=" flex flex-col   ">
            <h4 className=' text-2xl text-center font-medium pt-5'>Our Tours</h4>
            <div className="line p  place-self-center w-20  md:w-20 border border-yellow-500"></div>

            <h3 className=' max-w-2xl text-2xl py-3 text-center  text-gray-600 font-bold '>Higlights from our campaign projects, community outreaches  and moments in rendering humaniterian aid and creating social harmony and impacts </h3>

          </div>
        </div>


        <div className='container pt-5 grid gap-4   items-center justify-evenly  md:grid-cols-3 ' >


          <div className="gallery-items h-6/12 bg-green-500">
            <img src="/gal2.JPG" alt="gridtems" className=""></img>
          </div>
          <div className="gallery-items  w-100 bg-yellow-500 h-6/12">
            <img src="/gal4.jpg" alt="gridtems" className="" ></img>
          </div>
          <div className="gallery-items h-6/12 bg-yellow-500">
            <img src="/gal (22).JPG" alt="gridtems" className=" w-50"></img>
          </div>


        </div>

        <div className="container mx-auto px-6">
          <div className='flex justify-center py-3'>
            <a href="/gallery" className='rounded-md text-black  hover:bg-black hover:text-white px-4  py-2 bg-yellow-400 font-bold  '>View More</a>
          </div>
        </div>



      </section>

      <section className="bg-blue-50">
        <div className="container px-6  mx-auto ">
          <div className=" pt-9 flex flex-col items-center justify-center  ">
            <h4 className=' text-2xl text-center font-medium pt-5'>Our Partners</h4>
            <div className="line p  place-self-center w-20 md:w-20 border border-yellow-500"></div>

            <h3 className=' max-w-md text-2xl py-3 text-center text-gray-600 font-bold '>Our Active Partners who believe in the GIVE OUT A PAD, SAVE A GIRL campaign project </h3>

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
