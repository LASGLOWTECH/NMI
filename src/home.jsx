import Info from "./exports";
import Doings from "./doings";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Carousel } from "@material-tailwind/react"
import Testimonials from "./testimonials";
// import { RxDotFilled } from "react-icons/rx";



const Home = () => {


  const Partners=[
    { part:"/Parners.png"},
    {part:"/Parners1.png"},
   { part:"/Parners2.png"},
    {part:"/Parners3.png"},
    
  ]

  return (
    <div className="Home ">


      <section className='hero-section space-y-12 pb-6 justify-between hover:scale-40 '>
        <div className="grid md:grid-cols-2 grid-cols-1 container mx-auto   ">
          <div className=' flex flex-col mx-6  mt-10 '>
            <p className='text-lg font-bold text-yellow-400 pt-10 ' >Nicholasmotivates Initiative</p>

            <h1 className=' text-4xl md:text-6xl md:text-left font-bold text-white  pt-2'> An Advocacy For the Girl Child Campaign Project;<span className="text-yellow-400 text-2xl"> GIVE OUT A PAD, SAVE A GIRL CHILD</span></h1>
            <p className='text-base md:text-left    leading-loose font-medium text-white py-5 l' >
              Our core mandate is to eradicate period poverty, menstrual shame, stigma and taboos for the vulnerable, victimized,
              disadvantage and marginalized girl child, women, female inmates and female genders
              with disabilities to create a world where every girl, women, female inmates and female genders with disabilities are empowered to manage her Menstruation safely and hyginacally with integrity,
              pride and confidence hence mitigating poor menstrual hygiene management.
            </p>
            <div className='flex justify-start'>
              <a href="/contact" className='rounded-3xl text-black  hover:bg-black hover:text-white  px-4 my-6 py-2 bg-yellow-400 font-bold  '>Donate Now</a>
            </div>

          </div>

<div className="  md:-mr-6 hero2"> 

<img className="w-full  md:pr-3 md:-mb-6 h-auto" src='/girlpad.png' alt='girl'  ></img>

</div>

        </div>

      </section>



      <div className='container mx-auto px-6   pt-3 my-16 flex flex-col justify-between md:flex-row md:space-x-6' >

        <div className=" flex flex-col space-y-2  justify-start">
          <h4 className=' text-2xl text-center f-bold text-gray-600 font-medium  md:text-left'>Our Believe</h4>
          <div className="line p  place-self-center w-20 md:place-self-start md:w-20 border border-yellow-500"></div>

          <h5 className='  text-2xl md:text-3xl pt-3 text-center  md:max-w-2xl text-gray-600 font-medium md:text-left '>"It is our believe that we can reach more
           vulnerable, disadvantage, victimized and marginalized girl child spread across rural communities, schools, IDP camps and prisons with you"</h5>
          <p className='text-base text-center md:max-w-2xl font-medium text-gray-600 py-5 md:text-left leading-loose  ' >
            Every single school girl child, women, female inmates and female genders with disabilities deserves the comfort of a sanitary pad regardless of
            their aristocratic backgrounds or circumstances not withstanding. No school girl child should miss out of school within the space of her
            menstrual period because she can't afford a sanitary pad.</p>
        </div>

        <div className="  rounded-[50px]  ">
          <img className="w-full h-auto px-3  " src="/nmi.jpg" alt="girl2"></img>

        </div>
      </div>


      {/* info section */}
      <section className="service-sec ">
      <div className=" flex flex-col space-y-2  items-center">
            <h4 className=' text-2xl text-center font-medium pt-5'>Our Drive</h4>
            <div className="line p  place-self-center mb-6 w-20 md:w-20 border border-yellow-300"></div>

            
          </div>


<div className="py-20 mt-3 h-auto rounded-bl-[100%] bg-yellow-300">

<div className="container mx-auto px-6 ">
          <div className=" flex  py-7 flex-col  service-points justify-center  md:flex-row">
            {Info.map(Infos => {

              return (<div className="flex items-center  justify-center md:items-start rounded-md bg-white mx-1 flex-col md:flex-row  hover:bg-white hover:scale-105 transition 5s ease-in  mt-3 py-12  px-4  pb-5 " key={Infos.id} >
                <div className="image-circl   ">
                  <img src={Infos.Icon} className="rounded w-[200px] md:w-[100px]" alt="girl" />
                </div>
                <div className="flex flex-col  pl-2">
                  <h4 className=' text-lg text-center md:text-start font-bold'>{Infos.headtext}</h4>
                  <p className='border-bl text-center  md:text-start  text-base leading-loose break-word max-w-md font-medium text-gray-600 py-3 ' >
                    {Infos.bodytext}</p>
                </div>



              </div>)


            })}
          </div>



        </div>


</div>


      </section>





      {/* vid hero */}

      <section className="Vivav   py-4">
        <div className='container mx-auto px-4 pt-10  pb-3 flex flex-col items-center' >
          <div className=" max-wd-md hover:border-blue-300  container mx-auto px-2 ">
            <h5 className=' text-4xl max-w-auto py-3 text-center md:px-20  text-gray-600 font-bold'>We are passionate about the reproductive health care
              and menstrual hygiene management of the girl child.</h5>
              <p className="text-uppercase text-[18px] leading-loose text-center py-4 font-medium "> "Pads should be given for free, menstruation is an inevitable factor that can't be altered
             " </p>
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

                <div className="flex flex-col bg-yellow-300  hover:bg-blue-50  hover:scale-110 rounded-lg  p-3">
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
            <div className="line p  place-self-center w-20 md:w-20 border border-yellow-300"></div>

            <h5 className=' text-4xl max-w-auto py-6 text-center md:px-20  text-gray-600 font-bold '>What People are Saying
              About our impacts </h5>

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
          <div className=" mt-5 flex flex-col   ">
            <h4 className=' text-2xl text-center font-medium pt-5'>Our Tours</h4>
            <div className="line p  place-self-center w-20  md:w-20 border border-yellow-300"></div>

            <h5 className=' text-4xl px-0 max-w-auto pt-5  text-center md:px-20  text-gray-600 font-medium '>Higlights from our campaign projects, community outreaches  and moments in rendering humaniterian aid and creating social harmony and impacts </h5>

          </div>
        </div>


        <div className='container pt-5 grid gap-3  mx-auto grid-cols-1  items-center justify-evenly  md:grid-cols-3 ' >


          <div className="gallery-items w-100  h-6/12 ">
            <img src="/gal2.JPG" alt="gridtems" className="rounded-[20px]"></img>
          </div>
          <div className="gallery-items  w-100    h-6/12">
            <img src="/gal4.jpg" alt="gridtems" className="rounded-[20px]" ></img>
          </div>
          <div className="gallery-items h-6/12 w-100   ">
            <img src="/gal (22).JPG" alt="gridtems" className=" rounded-[20px]"></img>
          </div>


        </div>

        <div className="container mx-auto px-6">
          <div className='flex justify-center py-3'>
            <a href="/gallery" className='rounded-md text-black  hover:bg-black hover:text-white px-4  py-2 bg-yellow-300 font-bold  '>View More</a>
          </div>
        </div>



      </section>

      <section className="bg-grey-100">
        <div className="container px-6  mx-auto ">
          <div className=" pt-9 flex flex-col items-center justify-center  ">
            <h4 className=' text-2xl text-center font-medium pt-5'>Our Partners</h4>
            <div className="line p  place-self-center w-20 md:w-20 border border-yellow-500"></div>

            <h3 className=' max-w-md text-2xl py-6 text-center text-gray-600 font-bold '>Our Active Partners who believe in the GIVE OUT A PAD, SAVE A GIRL campaign project </h3>

          </div>
{/* carousel items */}
<div className="grid  items-center gap-3  grid-cols-1 md:grid-cols-4  justify-center">

{Partners.map(par=> {
              return (

<div className="gallery-items py-5 "  key={par.index}>
  
  <img src={par.part} alt="gridtems" className="w-full "></img>
  
 
</div>
              
               )
            })}


</div>
        </div>

      </section>



    </div>
  );
}

export default Home;
